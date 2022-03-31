import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  AfterViewInit,
  TemplateRef,
} from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { FieldType } from '@ngx-formly/material/form-field';

@Component({
  selector: 'formly-field-mat-datetimepicker',
  styleUrls: ['./date-time-picker-formly.component.scss'],
  templateUrl: './date-time-picker-formly.component.html',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyDateTimePickerTypeComponent
  extends FieldType
  implements AfterViewInit
{
  @ViewChild('datepickerToggle', { static: true })
  datepickerToggle!: TemplateRef<any>;

  @ViewChild('picker', { static: true }) pickerFixed?: any;

  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.to[this.to.datepickerOptions.datepickerTogglePosition] =
      this.datepickerToggle;
  }

  toControl(absCtrl: AbstractControl): FormControl {
    const ctrl = absCtrl as FormControl;
    // if(!ctrl) throw;
    return ctrl;
  }
}
