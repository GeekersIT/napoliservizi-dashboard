import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { OperatorePisObj } from 'src/app/_core/_models/pis/squadra-pis.interface';
import { Membro_Insert_Input, UpdateOperatorePisGQL } from 'src/app/_core/_services/generated/graphql';

@Component({
  selector: 'app-operatore-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class OperatoreEditComponent implements OnInit {
  options: FormlyFormOptions = {};
  form: FormGroup = new FormGroup({});
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
  },{
    key: 'cognome',
    type: 'input',
    templateOptions: { 
      required: true,
    },
    expressionProperties: {
      'templateOptions.label': this._translateService.stream('Cognome'),
    },
  },{
    key: 'matricola',
    type: 'input',
    templateOptions: { 
      required: true,
    },
    expressionProperties: {
      'templateOptions.label': this._translateService.stream('Matricola'),
    },
  },];
  
  constructor(
    private _updateOperatorePisGQL: UpdateOperatorePisGQL,
    private _translateService: TranslateService,
    public dialogRef: MatDialogRef<OperatoreEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: OperatorePisObj
  ) {
    if(this.data)
      this.model = {
        nome: data.nome,
        cognome: data.cognome,
        matricola: data.matricola
      }
  }

  ngOnInit(): void {
  }

  save(){
    let membro : Membro_Insert_Input = this.model
    membro = this.data ? {...membro,...{id:this.data.id}} : membro;
    this._updateOperatorePisGQL.mutate({membro: membro}).subscribe(d => this.dialogRef.close(d));
  }
}
