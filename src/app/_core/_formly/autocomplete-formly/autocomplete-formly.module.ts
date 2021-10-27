import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteFormlyComponent } from './autocomplete-formly.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormlyModule } from '@ngx-formly/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [
    AutocompleteFormlyComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    FormlyModule.forChild({ 
      types: [
        { name: 'autocomplete', component: AutocompleteFormlyComponent, wrappers: ['form-field'] },
      ], 
    }),
    TranslateModule,
    MatChipsModule,
    MatIconModule,
    MatCheckboxModule
  ]
})
export class AutocompleteFormlyModule { }
