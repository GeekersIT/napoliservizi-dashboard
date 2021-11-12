import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { MatIconModule } from '@angular/material/icon';
import { FormlyWrapperAddons } from './addons.wrapper';
import { addonsExtension } from './addons.extension';



@NgModule({
  declarations: [
    FormlyWrapperAddons,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild(
      { 
        extras: { lazyRender: true },
        wrappers: [
          { name: 'addons', component: FormlyWrapperAddons },
        ],
        extensions: [
          { name: 'addons', extension: { onPopulate: addonsExtension } },
        ],
      }
    ),
    MatIconModule
  ]
})
export class AddonsFormlyModule { }
