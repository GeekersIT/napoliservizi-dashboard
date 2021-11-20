import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FormlyWrapperClearAddon } from './clear.wrapper';
import { clearExtension } from './clear.extension';
import { FormlyModule } from '@ngx-formly/core';



@NgModule({
  declarations: [
    FormlyWrapperClearAddon,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild(
      { 
        extras: { lazyRender: true },
        wrappers: [
          { name: 'clear', component: FormlyWrapperClearAddon },
        ],
        extensions: [
          { name: 'clear', extension: { onPopulate: clearExtension } },
        ],
      }
    ),
    MatIconModule
  ]
})
export class ClearAddonsFormlyModule { }
