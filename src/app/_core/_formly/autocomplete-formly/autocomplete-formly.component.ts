import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { FieldType } from '@ngx-formly/material';
import { MatInput } from '@angular/material/input';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-autocomplete-formly',
  templateUrl: './autocomplete-formly.component.html',
  styleUrls: ['./autocomplete-formly.component.scss']
})
  export class AutocompleteFormlyComponent extends FieldType implements OnInit, AfterViewInit {
    formControl!: FormControl;
    @ViewChild(MatInput) formFieldControl!: MatInput;
    @ViewChild(MatAutocompleteTrigger) autocomplete!: MatAutocompleteTrigger;
  
    filter!: Observable<any>;
  
    ngOnInit() {
      super.ngOnInit();
      this.filter = this.formControl.valueChanges
        .pipe(
          startWith(''),
          switchMap(term => this.to.filter(term)),
        );
    }
  
    ngAfterViewInit() {
      super.ngAfterViewInit();
      // temporary fix for https://github.com/angular/material2/issues/6728
      (<any> this.autocomplete)._formField = this.formField;
    }
  }
