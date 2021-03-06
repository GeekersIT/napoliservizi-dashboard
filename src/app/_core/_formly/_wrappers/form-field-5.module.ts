import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormlyWrapperFormField } from './form-field-5.wrapper';

@NgModule({
  declarations: [FormlyWrapperFormField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormlyModule.forChild({
      wrappers: [{
        name: 'form-field-5',
        component: FormlyWrapperFormField,
      }],
    }),
  ],
})
export class FormlyMatFormField5Module { }