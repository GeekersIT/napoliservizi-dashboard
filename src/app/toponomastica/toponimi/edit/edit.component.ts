import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs/operators';
import { DugSelectGQL, TipologiaSelectGQL, UpdateToponimoGQL } from 'src/app/_core/_services/generated/graphql';

@Component({
  selector: 'app-toponimi-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class ToponimiEditComponent implements OnInit {
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
  },{
    fieldGroupClassName: 'display-flex',
    fieldGroup: [{
        className: 'flex-1',
        key: 'dug',
        type: 'autocomplete',
        templateOptions: {
          multiple: false,
          filter: (term:any) => term && typeof term === 'string' ? this._dugSelectGQL.watch().valueChanges.pipe(map(result => result.data.dug.filter(q => q.nome.toLocaleLowerCase().indexOf(term.toLowerCase()) >= 0))) : this._dugSelectGQL.watch().valueChanges.pipe(map(result => result.data.dug)),
        },
        expressionProperties: {
          'templateOptions.label': this._translateService.stream('DUG'),
        },
      },
      {
        className: 'flex-1',
        key: 'tipologia',
        type: 'autocomplete',
        templateOptions: {
          multiple: false,
          filter: (term:any) => term && typeof term === 'string' ? this._tipologiaSelectGQL.watch().valueChanges.pipe(map(result => result.data.tipologia.filter(q => q.nome.toLocaleLowerCase().indexOf(term.toLowerCase()) >= 0))) : this._tipologiaSelectGQL.watch().valueChanges.pipe(map(result => result.data.tipologia)),
        },
        expressionProperties: {
          'templateOptions.label': this._translateService.stream('Tipologia'),
        },
      },
    ],
  },];
  
  constructor(
    private _updateToponimoGQL: UpdateToponimoGQL,
    private _dugSelectGQL: DugSelectGQL,
    private _tipologiaSelectGQL: TipologiaSelectGQL,
    private _translateService: TranslateService,
    public dialogRef: MatDialogRef<ToponimiEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.model = {...this.model, nome: data.nome, dug: data.dug, tipologia: data.tipologia }
  }

  ngOnInit(): void {
  }

  save(){

    let toponimo = {
      id: this.data.id,
      nome: this.model.nome
    };

    toponimo = this.model.dug ? {...toponimo,...{dug_id:this.model.dug.id}} : toponimo;
    toponimo = this.model.tipologia ? {...toponimo,...{tipologia_id:this.model.tipologia.id}} : toponimo;

    console.log(toponimo);

    this._updateToponimoGQL.mutate({toponimo: toponimo}).subscribe(d => this.dialogRef.close(d));
  }

}
