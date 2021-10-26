import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { MultipleAutocompleteFormlyModule } from '../../_formly/multiple-autocomplete-formly/multiple-autocomplete-formly.module';
import { AutocompleteFormlyModule } from '../../_formly/autocomplete-formly/autocomplete-formly.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild(),
    MultipleAutocompleteFormlyModule,
    AutocompleteFormlyModule,
    TranslateModule,
    MatButtonModule
  ],
  exports: [ FormComponent ]
})
export class FormModule { }
