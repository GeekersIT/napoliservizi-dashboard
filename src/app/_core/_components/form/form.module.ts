import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AutocompleteFormlyModule } from '../../_formly/_components/autocomplete-formly/autocomplete-formly.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { RepeatSectionFormlyModule } from '../../_formly/_components/repeat-section-formly/repeat-section-formly.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { StepperFormlyModule } from '../../_formly/_components/stepper-formly/stepper-formly.module';
import { MatDialogModule } from '@angular/material/dialog';
import { PrefixSuffixAddonsFormlyModule } from '../../_formly/_addons/prefix-suffix/prefix-suffix.module';
import { ClearAddonsFormlyModule } from '../../_formly/_addons/clear/clear.module';
import { FileUploadFornlyModule } from '../../_formly/_components/file-upload-fornly/file-upload-fornly.module';
import { MappaFormlyModule } from '../../_formly/_components/mappa-formly/mappa-formly.module';
import { AutosaveAddonsFormlyModule } from '../../_formly/_addons/autosave/autosave.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMatToggleModule } from '@ngx-formly/material/toggle';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { FormlyMatDateRangePickerModule } from '../../_formly/_components/date-range-picker-formly/date-range-picker-formly.module';
import { MatIconModule } from '@angular/material/icon';
import { ButtonFormlyModule } from '../../_formly/_components/button-formly/button-formly.module';
import { FormlyMatDateTimePickerModule } from '../../_formly/_components/date-time-picker-formly/date-time-picker-formly.module';

@NgModule({
  declarations: [FormComponent],
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
    MatDialogModule,
    FileUploadFornlyModule,
    MappaFormlyModule,
    AutosaveAddonsFormlyModule,
    MatNativeDateModule,
    FormlyMatDatepickerModule,
    MatToolbarModule,
    FormlyMatDateRangePickerModule,
    FormlyMatDateTimePickerModule,
    MatIconModule,
    ButtonFormlyModule,
  ],
  exports: [FormComponent],
})
export class FormModule {}
