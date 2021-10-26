import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-municipalita-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class MunicipalitaEditComponent implements OnInit {
  options: FormlyFormOptions = {};
  model: any = {};
  fields: FormlyFieldConfig[] = [{
    key: 'nome',
    type: 'input',
    templateOptions: { 
      required: true,
      appearance: 'outline'
    },
    expressionProperties: {
      'templateOptions.label': this._translateService.stream('Nome'),
    },
  }];
  
  constructor(
    private _translateService: TranslateService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
    this.model = {...this.model, nome: data.nome }
  }

  ngOnInit(): void {
  }

}
