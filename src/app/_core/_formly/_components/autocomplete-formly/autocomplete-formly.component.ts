import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { FieldType } from '@ngx-formly/material';
import { MatInput } from '@angular/material/input';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { debounceTime, exhaustMap, filter, map, mergeMap, scan, startWith, switchMap, takeWhile, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-autocomplete-formly',
  templateUrl: './autocomplete-formly.component.html',
  styleUrls: ['./autocomplete-formly.component.scss']
})
  export class AutocompleteFormlyComponent extends FieldType implements OnInit, AfterViewInit {
    separatorKeysCodes: number[] = [ENTER, COMMA];
    selectedData: any[] = new Array<any>();

    
    formControl!: FormControl;
    @ViewChild(MatInput) formFieldControl!: MatInput;
    @ViewChild(MatAutocompleteTrigger) autocomplete!: MatAutocompleteTrigger;
  

    private nextPage$ = new Subject();


    paginated$: Observable<any[]> | undefined;


    getList(startsWith: any, page: number): Observable<any[]> {
      const take = 10;
      const skip = page > 0 ? (page - 1) * take : 0;
      const filtered = this.to.filter(typeof startsWith === 'string' ? startsWith.trim() : startsWith).pipe(map((data:any) => {
        console.log(data);
        return data.slice(skip, skip + take)}));
      return filtered;
    }

    reset: boolean = false;

    ngOnInit() {

      super.ngOnInit();
      
      // const filter$ = this.formControl.valueChanges
      //   .pipe(
      //     startWith(''),
      //     switchMap(term => this.to.filter(typeof term === 'string' ? term.trim() : term)),
      //   );

      this.field.templateOptions = {
        ...this.to,
        ...{reset: new Subject()},
        ...{displayWith: this.to.displayWith ? this.to.displayWith : (option:any) => (option!==null && option!==undefined) ? option.nome : ''},
        ...{displayFn: this.to.multiple ? ((): string => this.selectedData.length > 0 ? ' ': '') : (this.to.displayWith ? this.to.displayWith : (option:any) => (option!==null && option!==undefined) ? option.nome : '') }
      }

      this.to.reset.subscribe(() => {
        console.log('asd');
        this.reset = true
      });

        const filter$ = this.formControl.valueChanges.pipe(
          startWith(''),
          filter(q => typeof q === "string"));

        this.paginated$ = this.formControl.valueChanges.pipe(
          startWith(''),
          switchMap(filter => {
            
            //Note: Reset the page with every new seach text
            let currentPage = 1;
            return this.nextPage$.pipe(
              startWith(currentPage),
              // Note: Until the backend responds, ignore NextPage requests.
              mergeMap(_ =>  this.getList(filter, currentPage)),
              tap(() => currentPage++),
                /** Note: This is a custom operator because we also need the last emitted value.
                  Note: Stop if there are no more pages, or no results at all for the current search text.
                */
              takeWhile((predicate:any) => predicate.length > 0, true),
              scan((list: any, newList: any) => this.reset ? newList : list.concat(newList), []),
            );
          }));




        if(this.to.multiple){
          if(this.formControl.value!=null)
            this.formControl.value.map((data:any) => this.selectedData.push(data))
          this.formControl.valueChanges.subscribe(d => {
            if(d === undefined || d === null){
              this.selectedData.map((data:any) => this.toggleSelection(data))
            }
          });
        }
    }
  
    ngAfterViewInit() {
      super.ngAfterViewInit();
      // temporary fix for https://github.com/angular/material2/issues/6728
      (<any> this.autocomplete)._formField = this.formField;
    }


    optionClicked = (event: Event, data: any): void => {
      event.stopPropagation();
      this.toggleSelection(data);
    };
  
    toggleSelection = (data: any): void => {
      const i = this.selectedData.findIndex(value => value.id === data.id)
      if(i == -1){
        this.selectedData.push(data);
      }else{
        this.selectedData.splice(i, 1);
      }
      this.formControl.setValue(this.selectedData);
    };
  
    removeChip = (data: any): void => {
      this.toggleSelection(data);
    };
  
    check = (data:any): boolean => this.selectedData.findIndex(value => value.id === data.id) == -1 ? false : true
  
    displayFn = (): string => this.selectedData.length > 0 ? ' ': '';


    onScroll() {
      this.reset = false;
      this.nextPage$.next({});
    }

  }






