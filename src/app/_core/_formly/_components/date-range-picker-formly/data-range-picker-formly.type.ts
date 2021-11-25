import { Component, ChangeDetectionStrategy, ViewChild, AfterViewInit, TemplateRef } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { FieldType } from '@ngx-formly/material/form-field';

@Component({
  selector: 'formly-field-mat-datepicker',
  template: `
  <mat-date-range-input [formGroup]="range" [rangePicker]="picker">
    <input matStartDate 
      formControlName="start" 
      (dateChange)="dateRangeChange()">
    <input matEndDate 
      formControlName="end"
      (dateChange)="dateRangeChange()">
  </mat-date-range-input>
  <ng-template #datepickerToggle>
    <mat-datepicker-toggle (click)="detectChanges()" [disabled]="to.disabled" [for]="picker"></mat-datepicker-toggle>
  </ng-template>
  <mat-date-range-picker #picker
      [color]="to.color"
      [dateClass]="to.datepickerOptions.dateClass"
      [disabled]="to.datepickerOptions.disabled"
      [opened]="to.datepickerOptions.opened"
      [panelClass]="to.datepickerOptions.panelClass"
      [startAt]="to.datepickerOptions.startAt"
      [startView]="to.datepickerOptions.startView"
      [touchUi]="to.datepickerOptions.touchUi"
      [calendarHeaderComponent]="to.datepickerOptions.calendarHeaderComponent"
      (monthSelected)="to.datepickerOptions.monthSelected(field, $event, picker)"
      (yearSelected)="to.datepickerOptions.yearSelected(field, $event, picker)"
  ></mat-date-range-picker>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyDateRangePickerTypeComponent extends FieldType implements AfterViewInit {
  @ViewChild('datepickerToggle', { static: true }) datepickerToggle!: TemplateRef<any>;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  })


  defaultOptions = {
    templateOptions: {
      datepickerOptions: {
        startView: 'month',
        datepickerTogglePosition: 'suffix',
        dateInput: () => {},
        dateChange: () => {},
        monthSelected: () => {},
        yearSelected: () => {},
      },
    },
  };

  detectChanges() {
    this.options?.detectChanges?.(this.field);
  }

  dateRangeChange() {
    this.formControl.setValue(this.range.value);
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.to[this.to.datepickerOptions.datepickerTogglePosition] = this.datepickerToggle;
    this.formControl.valueChanges.subscribe(r => {
      if(r===null){
        this.range = new FormGroup({
          start: new FormControl(),
          end: new FormControl(),
        })
      }
    })
  }

  toControl(absCtrl: AbstractControl): FormControl {
    const ctrl = absCtrl as FormControl;
    // if(!ctrl) throw;
    return ctrl;
  }
}