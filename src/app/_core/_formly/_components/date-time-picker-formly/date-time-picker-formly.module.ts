import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormlyDateTimePickerTypeComponent } from './date-time-picker-formly.component';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [FormlyDateTimePickerTypeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    TranslateModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    FormlyMatFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'datetimepicker',
          component: FormlyDateTimePickerTypeComponent,
          wrappers: [],
          defaultOptions: {
            templateOptions: {
              disabled: false,
              showSpinners: true,
              showSeconds: false,
              enableMeridian: false,
              disableMinute: false,
              datepickerTogglePosition: 'suffix',
              hideTime: false,
              touchUi: false,
              datepickerOptions: { datepickerTogglePosition: 'prefix' },
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyMatDateTimePickerModule {}
