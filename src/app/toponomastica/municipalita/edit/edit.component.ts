import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs/operators';
import { QuartiereSelectGQL, UpdateMunicipalitaGQL, DeleteMunicipalitaGQL, Municipalita_Insert_Input, Assegnazione_Quartiere_Constraint, Assegnazione_Quartiere_Update_Column } from 'src/app/_core/_services/generated/graphql';
import { FormArray, FormGroup } from '@angular/forms';
import { MunicipalitaObj } from 'src/app/_core/_models/toponomastica/municipalita.interface';
import { QuartiereSelectObj } from 'src/app/_core/_models/toponomastica/quartiere.interface';

@Component({
  selector: 'app-municipalita-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class MunicipalitaEditComponent implements OnInit {
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
    key: 'quartieri',
    type: 'repeat',
    expressionProperties: {
      'templateOptions.addText': this._translateService.stream('Aggiungi quartiere'),
    },
    validators: {
      quartieriDuplicati: {
        expression: (control:FormArray) => {
          let array = control.value.filter((q:any) => q!==undefined && q!==null).map((q:any) => q.id);
          if(array.filter((a:any) => a === null).length >0){
            return true;
          }

          let ids = [];

          for(var i = 0; i < array.length; i++){
            if(array.filter((a:any) => a == array[i]).length>1)
              ids.push(i);        
          }
          if(ids.length>0){
            ids.forEach(id => {
              control.controls[id].setErrors({
                duplicate: true
              })
            })
            return false;
          }
          return true;
        }
      }
    },
    fieldArray: {
      type: 'autocomplete',
      templateOptions: {
        required:true,
        multiple: false,
        filter: (term:any) => term && typeof term === 'string' ? this._quartiereSelectGQL.subscribe().pipe(map(result => result.data?.quartiere.filter(q => q.nome.toLocaleLowerCase().indexOf(term.toLowerCase()) >= 0))) : this._quartiereSelectGQL.subscribe().pipe(map(result => result.data?.quartiere)),
      },
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Quartiere'),
      },
      validation: {
        messages: {
          duplicate: (error:any, field: FormlyFieldConfig) => this._translateService.instant('Non ci possono essere quartieri duplicati')
        }
      }
    }
  }];
  
  constructor(
    private _updateMunicipalitaGQL: UpdateMunicipalitaGQL,
    private _deleteMunicipalitaGQL: DeleteMunicipalitaGQL,
    private _quartiereSelectGQL: QuartiereSelectGQL,
    private _translateService: TranslateService,
    public dialogRef: MatDialogRef<MunicipalitaEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MunicipalitaObj
  ) {
    if(this.data)
      this.model = {
        ...this.model, 
        nome: data.nome, 
        quartieri: data.quartieri.map(data => { 
          return {
            __typename: 'quartiere', 
            id:data.quartiere.id, 
            nome:data.quartiere.nome
          }
        }) 
      }
  }

  ngOnInit(): void {
  }

  save(){
    const oldQuartieri = this.data ? this.data.quartieri : [];
    const newQuartieri = this.model.quartieri ? this.model.quartieri.map((q:QuartiereSelectObj) => q.id) : [];

    let d = oldQuartieri.filter(x => !newQuartieri.includes(x.quartiere.id));
    let n = newQuartieri.filter((x: any) => !oldQuartieri.map(q => q.quartiere.id).includes(x));

    let municipalita : Municipalita_Insert_Input = {
      nome: this.model.nome
    };
    municipalita = this.data ? {...municipalita,...{id:this.data.id}} : municipalita;

    const now = new Date().toLocaleString("it-IT", {timeZone: "Europe/Rome"});
    municipalita = n.length>0 ? {
      ...municipalita,
      ...{
        quartieri: {
          data: [
            ...municipalita.quartieri?.data||[],
            ...n.map((q:number) => { return {inizio_validita: now, quartiere_id: q}})]
        }
      }
    } : municipalita;
    
    municipalita = d.length>0 ? {
      ...municipalita,
      ...{
        quartieri: {
          on_conflict: {
            constraint: Assegnazione_Quartiere_Constraint.AssegnazioneQuartierePkey,
            update_columns: [Assegnazione_Quartiere_Update_Column.FineValidita]
          },
          data: [
            ...municipalita.quartieri?.data||[],
            ...d.map((q:any) => { return {fine_validita: now, id: q.id, quartiere_id: q.quartiere.id, inizio_validita: q.inizio_validita}})]
        }
      }
    } : municipalita;

    this._updateMunicipalitaGQL.mutate({municipalita}).subscribe(d => this.dialogRef.close(d));


  }

  delete(){
    this._deleteMunicipalitaGQL.mutate({id: this.data.id}).subscribe(d => this.dialogRef.close(d));
  }

}
