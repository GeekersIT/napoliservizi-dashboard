import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/material';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-file-upload-fornly',
  templateUrl: './file-upload-fornly.component.html',
  styleUrls: ['./file-upload-fornly.component.scss'],
})
export class FileUploadFornlyComponent extends FieldType {
  constructor(private _http: HttpClient) {
    super();
  }

  toControl(absCtrl: AbstractControl): FormControl {
    const ctrl = absCtrl as FormControl;
    // if(!ctrl) throw;
    return ctrl;
  }

  async open(file: any) {
    let res: any = await firstValueFrom(
      this._http.post('/storage/file/get', {
        bucket: file.bucket,
        name: file.name,
      })
    );

    var fileLink = document.createElement('a');
    fileLink.href = res.url;
    fileLink.target = '_blank';
    fileLink.download = file.name;
    fileLink.click();
  }
}
