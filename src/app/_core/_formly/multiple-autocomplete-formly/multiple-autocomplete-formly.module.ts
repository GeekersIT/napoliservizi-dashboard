import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultipleAutocompleteFormlyComponent } from './multiple-autocomplete-formly.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [
    MultipleAutocompleteFormlyComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    FormlyModule.forChild({ 
      types: [
        { name: 'multiple-autocomplete', component: MultipleAutocompleteFormlyComponent, wrappers: ['form-field']  },
      ], 
    }),
    TranslateModule,
    MatChipsModule,
    MatIconModule,
    MatCheckboxModule
  ],
  providers: [
  ]
})
export class MultipleAutocompleteFormlyModule { }
