import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FormlyWrapperAutosaveAddon } from './autosave.wrapper';
import { autosaveExtension } from './autosave.extension';
import { FormlyModule } from '@ngx-formly/core';



@NgModule({
  declarations: [
    FormlyWrapperAutosaveAddon,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild(
      { 
        extras: { lazyRender: true },
        wrappers: [
          { name: 'autosave', component: FormlyWrapperAutosaveAddon },
        ],
        extensions: [
          { name: 'autosave', extension: { onPopulate: autosaveExtension } },
        ],
      }
    ),
    MatIconModule
  ]
})
export class AutosaveAddonsFormlyModule { }
