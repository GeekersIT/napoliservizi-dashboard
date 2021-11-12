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
import { AddonsFormlyModule } from '../../_formly/addons/addons.module';
import { StepperFormlyModule } from '../../_formly/stepper-formly/stepper-formly.module';
import { MatDialogModule } from '@angular/material/dialog';



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
    FormlyMatToggleModule,
    AddonsFormlyModule,
    StepperFormlyModule,
    MatDialogModule
  ],
  exports: [ FormComponent ]
})
export class FormModule { }
