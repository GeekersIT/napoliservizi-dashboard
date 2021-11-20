import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, mergeMap, scan, startWith, switchMap, takeWhile, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FieldType } from '@ngx-formly/material';

@Component({
  selector: 'app-autocomplete-formly',
  templateUrl: './autocomplete-formly.component.html',
  styleUrls: ['./autocomplete-formly.component.scss']
})
export class AutocompleteFormlyComponent extends FieldType implements OnInit, AfterViewInit  {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  selectedData: any[] = new Array<any>();    
  formControl!: FormControl;
  @ViewChild(MatInput) formFieldControl!: MatInput;
  @ViewChild(MatAutocompleteTrigger) autocomplete!: MatAutocompleteTrigger;

  loading = new BehaviorSubject<boolean>(true);

  private nextPage$ = new Subject();
  paginated$: Observable<any[]> | undefined;

  getList(term: any, page: number, parent?: any): Observable<any[]> {
    const take = 10;
    const skip = page > 0 ? (page - 1) * take : 0;
    const filtered = this.to.filter(typeof term === 'string' && term != '' ? term.trim() : term, take, skip, parent);
    // const filtered = this.to.filter(typeof term === 'string' ? term.trim() : term, parent).pipe(map((data:any) => data.slice(skip, skip + take)));
    return filtered;
  }

  ngOnInit() {
    super.ngOnInit();
    this.field.templateOptions = {
      ...this.to,
      ...{displayWith: this.to.displayWith ? this.to.displayWith : (option:any) => (option!==null && option!==undefined) ? option.nome : ''},
      ...{displayFn: this.to.multiple ? ((): string => this.selectedData.length > 0 ? ' ': '') : (this.to.displayWith ? this.to.displayWith : (option:any) => (option!==null && option!==undefined) ? option.nome : '') }
    }
    const filter$ = this.formControl.valueChanges.pipe(
      startWith(''),
      filter(term => typeof term === "string")
    );
    const data$ = (parent?:any) => filter$.pipe(
      // tap(() => this.loading.next(true)),
      startWith(''),
      switchMap(filter => {
        let currentPage = 1;
        return this.nextPage$.pipe(
          startWith(currentPage),
          mergeMap(_ =>  this.getList(filter, currentPage, parent)),
          tap(() => currentPage++),
          takeWhile((predicate:any) => predicate.length > 0, true),
          scan((list: any, newList: any) => list.concat(newList), []),
          tap(() => this.loading.next(false)),
        );
      })
    );


    this.paginated$ = this.to.parent ? this.to.parent.valueChanges.pipe(
      startWith(this.to.parent.value),
      filter(parent => parent != null),
      switchMap(parent => {
        // this.formControl.reset(); 
        return data$(parent)})
    ) : data$();

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
    // super.ngAfterViewInit();
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
    this.nextPage$.next({});
  }

}






