import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import {
  FormControl,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';

import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormlyFormulaComponent } from './formula-formly.component';
import { AceEditorModule } from 'ng2-ace-editor';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [FormlyFormulaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    FormlyMatFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'formula',
          component: FormlyFormulaComponent,
          wrappers: [],
          defaultOptions: {
            templateOptions: {
              ace: {
                mode: 'text',
                options: {
                  enableLiveAutocompletion: true,
                  maxLines: 1,
                  autoScrollEditorIntoView: true,
                  highlightActiveLine: false,
                  printMargin: false,
                  showGutter: false,
                  fontSize: 16,
                },
              },
            },
          },
        },
      ],
    }),
    AceEditorModule,
    MatIconModule,
    TranslateModule,
  ],
})
export class FormlyFormulaModule {}
