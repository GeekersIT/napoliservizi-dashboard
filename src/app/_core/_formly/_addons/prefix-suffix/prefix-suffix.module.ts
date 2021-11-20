import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FormlyWrapperPrefixSuffixAddon } from './prefix-suffix.wrapper';
import { prefixSuffixExtension } from './prefix-suffix.extension';
import { FormlyModule } from '@ngx-formly/core';



@NgModule({
  declarations: [
    FormlyWrapperPrefixSuffixAddon,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild(
      { 
        extras: { lazyRender: true },
        wrappers: [
          { name: 'prefix-suffix', component: FormlyWrapperPrefixSuffixAddon },
        ],
        extensions: [
          { name: 'prefix-suffix', extension: { onPopulate: prefixSuffixExtension } },
        ],
      }
    ),
    MatIconModule
  ]
})
export class PrefixSuffixAddonsFormlyModule { }
