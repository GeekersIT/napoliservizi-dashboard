import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { AutocompleteFormlyModule } from '../../_formly/_components/autocomplete-formly/autocomplete-formly.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { RepeatSectionFormlyModule } from '../../_formly/_components/repeat-section-formly/repeat-section-formly.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { FormlyMatToggleModule } from '@ngx-formly/material/toggle';
import { StepperFormlyModule } from '../../_formly/_components/stepper-formly/stepper-formly.module';
import { MatDialogModule } from '@angular/material/dialog';
import { PrefixSuffixAddonsFormlyModule } from '../../_formly/_addons/prefix-suffix/prefix-suffix.module';
import { ClearAddonsFormlyModule } from '../../_formly/_addons/clear/clear.module';

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
    PrefixSuffixAddonsFormlyModule,
    ClearAddonsFormlyModule,
    StepperFormlyModule,
    MatDialogModule
  ],
  exports: [ FormComponent ]
})
export class FormModule { }
