import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadFornlyComponent } from './file-upload-fornly.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FormlyModule } from '@ngx-formly/core';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    FileUploadFornlyComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild({ 
      types: [
        { 
          name: 'file', 
          component: FileUploadFornlyComponent, 
          wrappers: [],
        },
      ],
    }),
    TranslateModule,
    FileUploadModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class FileUploadFornlyModule { }
