import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { UpdateMunicipalitaGQL } from 'src/app/_core/_services/generated/graphql';

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
    },
    expressionProperties: {
      'templateOptions.label': this._translateService.stream('Nome'),
    },
  }];
  
  constructor(
    private _updateMunicipalitaGQL: UpdateMunicipalitaGQL,
    private _translateService: TranslateService,
    public dialogRef: MatDialogRef<MunicipalitaEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.model = {...this.model, nome: data.nome }
  }

  ngOnInit(): void {
  }

  save(){
    this._updateMunicipalitaGQL.mutate({municipalita: { id: this.data.id, nome: this.model.nome}}).subscribe(d => this.dialogRef.close(d));
  }

}
