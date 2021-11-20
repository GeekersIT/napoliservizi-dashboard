import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteFormlyComponent } from './autocomplete-formly.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { TranslateModule } from '@ngx-translate/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AutocompleteFormlyDirective } from './autocomplete-formly.directive';
import { ForceSelectionMatch } from '../../_validators/force-selection.match';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  declarations: [
    AutocompleteFormlyComponent,
    AutocompleteFormlyDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    FormlyModule.forChild({ 
      types: [
        { 
          name: 'autocomplete', 
          component: AutocompleteFormlyComponent, 
          wrappers: ['form-field'],
          defaultOptions: {
            templateOptions: {
              multiple: false
            },
            validators: {
              forceSelection: ForceSelectionMatch
            }
          } 
        },
      ],
    }),
    TranslateModule,
    MatChipsModule,
    MatIconModule,
    MatCheckboxModule,
    MatProgressSpinnerModule
  ]
})
export class AutocompleteFormlyModule { }
