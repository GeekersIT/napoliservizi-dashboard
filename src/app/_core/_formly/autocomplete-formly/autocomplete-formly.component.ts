import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { FieldType } from '@ngx-formly/material';
import { MatInput } from '@angular/material/input';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
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
  
    filter!: Observable<any>;
  
    ngOnInit() {
      super.ngOnInit();
      this.filter = this.formControl.valueChanges
        .pipe(
          startWith(''),
          switchMap(term => this.to.filter(typeof term === 'string' ? term.trim() : term)),
        );
        this.field.templateOptions = {
          ...this.to,
          ...{displayWith: this.to.displayWith ? this.to.displayWith : (option:any) => (option!==null && option!==undefined) ? option.nome : ''},
          ...{displayFn: this.to.multiple ? ((): string => this.selectedData.length > 0 ? ' ': '') : (this.to.displayWith ? this.to.displayWith : (option:any) => (option!==null && option!==undefined) ? option.nome : '') }
        }
        if(this.to.multiple){
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
      const i = this.selectedData.findIndex(value => value === data)
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
  
    check = (data:any): boolean => this.selectedData.findIndex(value => value === data) == -1 ? false : true
  
    displayFn = (): string => this.selectedData.length > 0 ? ' ': '';

  }
