import { Component } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/material';

@Component({
  selector: 'app-file-upload-fornly',
  templateUrl: './file-upload-fornly.component.html',
  styleUrls: ['./file-upload-fornly.component.scss']
})
export class FileUploadFornlyComponent extends FieldType {
  toControl(absCtrl: AbstractControl): FormControl {
    const ctrl = absCtrl as FormControl;
    // if(!ctrl) throw;
    return ctrl;
  }
}