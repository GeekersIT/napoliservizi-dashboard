import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { AutocompleteFormlyModule } from '../../_formly/autocomplete-formly/autocomplete-formly.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { RepeatSectionFormlyModule } from '../../_formly/repeat-section-formly/repeat-section-formly.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { FormlyMatToggleModule } from '@ngx-formly/material/toggle';



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild(),
    AutocompleteFormlyModule,
    RepeatSectionFormlyModule,
    TranslateModule,
    MatButtonModule,
    NgScrollbarModule,
    FormlyMatToggleModule
  ],
  exports: [ FormComponent ]
})
export class FormModule { }
