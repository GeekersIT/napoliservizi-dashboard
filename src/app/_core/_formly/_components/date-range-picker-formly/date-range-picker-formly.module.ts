import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormlyDateRangePickerTypeComponent } from './data-range-picker-formly.type';

@NgModule({
  declarations: [FormlyDateRangePickerTypeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,

    FormlyMatFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'daterangepicker',
          component: FormlyDateRangePickerTypeComponent,
          wrappers: ['form-field'],
          defaultOptions: {
            templateOptions: {
              datepickerOptions: { datepickerTogglePosition: 'prefix' },
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyMatDateRangePickerModule {}
