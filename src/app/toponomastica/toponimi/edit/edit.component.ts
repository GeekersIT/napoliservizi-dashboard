import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { distinctUntilChanged, map, mergeMap, startWith } from 'rxjs/operators';
import { ToponimoObj } from 'src/app/_core/_models/toponomastica/toponimo.interface';
import { Assegnazione_Toponimo_Constraint, Assegnazione_Toponimo_Update_Column, DugSelectGQL, MunicipalitaSelectGQL, QuartiereSelectGQL, TipologiaSelectGQL, Toponimo_Insert_Input, UpdateToponimoGQL } from 'src/app/_core/_services/generated/graphql';

@Component({
  selector: 'app-toponimi-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class ToponimiEditComponent implements OnInit {
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
    fieldGroupClassName: 'display-flex',
    fieldGroup: [{
        className: 'flex-1',
        key: 'dug',
        type: 'autocomplete',
        templateOptions: {
          multiple: false,
          filter: (term:any) => term && typeof term === 'string' ? this._dugSelectGQL.subscribe().pipe(map(result => result.data?.dug.filter(q => q.nome.toLocaleLowerCase().indexOf(term.toLowerCase()) >= 0))) : this._dugSelectGQL.subscribe().pipe(map(result => result.data?.dug)),
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
          filter: (term:any) => term && typeof term === 'string' ? this._tipologiaSelectGQL.subscribe().pipe(map(result => result.data?.tipologia.filter(q => q.nome.toLocaleLowerCase().indexOf(term.toLowerCase()) >= 0))) : this._tipologiaSelectGQL.subscribe().pipe(map(result => result.data?.tipologia)),
        },
        expressionProperties: {
          'templateOptions.label': this._translateService.stream('Tipologia'),
        },
      },
    ],
  },{
    key: 'assegnazioni',
    type: 'repeat',
    expressionProperties: {
      'templateOptions.addText': this._translateService.stream('Aggiungi assegnazione'),
    },
    validators: {
      assegnazioniDuplicate: {
        expression: (control:FormArray) => {
          control.controls.forEach((c:any) => {
            if(c.controls.municipalita){
              if(c.controls.municipalita.value!==null)
                c.controls.municipalita.setErrors(null);
            }
            if(c.controls.quartiere){
              if(c.controls.quartiere.value!==null)
                  c.controls.quartiere.setErrors(null);

            }
          })
          let array = control.value.filter((q:any) => q!==undefined && q!==null && q.municipalita!==undefined && q.quartiere!==undefined && q.municipalita!==null && q.quartiere!==null).map((q:any) => { return q.municipalita.id+"-"+q.quartiere.id});         
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
              let fg: FormGroup = control.controls[id] as FormGroup;
              fg.controls.municipalita.setErrors({
                duplicate: true
              })              
              fg.controls.quartiere.setErrors({
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
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        className: 'flex-1',
        type: 'autocomplete',
        key: "municipalita",
        templateOptions: {
          required:true,
          multiple: false,
          filter: (term:any) => term && typeof term === 'string' ? this._municipalitaSelectGQL.subscribe().pipe(map(result => result.data?.municipalita.filter(m => m.nome.toLocaleLowerCase().indexOf(term.toLowerCase()) >= 0))) : this._municipalitaSelectGQL.subscribe().pipe(map(result => result.data?.municipalita)),
        },
        expressionProperties: {
          'templateOptions.label': this._translateService.stream('Municipalità'),
        },
        validation: {
          messages: {
            duplicate: (error:any, field: FormlyFieldConfig) => this._translateService.instant('Non ci possono essere assegnazioni duplicate')
          }
        }
      },{
        className: 'flex-1',
        type: 'autocomplete',
        key: "quartiere",
        templateOptions: {
          required:true,
          multiple: false,
        },
        hooks: {
          onInit: field => {
            const municipalita = field!.form!.get('municipalita');
            field!.templateOptions!.filter = (term:any) => term && typeof term === 'string' ? 
            municipalita!.valueChanges.pipe(
              startWith(municipalita!.value),
              distinctUntilChanged(),
              mergeMap(municipalita => {
                return municipalita!==null ?
                  this._quartiereSelectGQL.subscribe({
                    where: {
                      municipalita: {
                        municipalita_id: {
                          _eq: municipalita.id
                        }
                      }
                    }
                  }).pipe(map(result => result.data?.quartiere.filter(q => q.nome.toLocaleLowerCase().indexOf(term.toLowerCase()) >= 0))) : of([]);
              }),
            )
            : 
            municipalita!.valueChanges.pipe(
              startWith(municipalita!.value),
              distinctUntilChanged(),
              mergeMap(municipalita => {
                return municipalita!==null ?
                  this._quartiereSelectGQL.subscribe({
                    where: {
                      municipalita: {
                        municipalita_id: {
                          _eq: municipalita.id
                        }
                      }
                    }
                  }).pipe(map(result => result.data?.quartiere)) : of([]);
              }),
            );
          }
        },
        expressionProperties: {
          'templateOptions.label': this._translateService.stream('Quartiere'),
        },
        validation: {
          messages: {
            duplicate: (error:any, field: FormlyFieldConfig) => this._translateService.instant('Non ci possono essere assegnazioni duplicate')
          }
        }
      }]
    }
  }];
  
  constructor(
    private _quartiereSelectGQL: QuartiereSelectGQL,
    private _municipalitaSelectGQL: MunicipalitaSelectGQL,
    private _updateToponimoGQL: UpdateToponimoGQL,
    private _dugSelectGQL: DugSelectGQL,
    private _tipologiaSelectGQL: TipologiaSelectGQL,
    private _translateService: TranslateService,
    public dialogRef: MatDialogRef<ToponimiEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ToponimoObj
  ) {
      if(this.data){
        this.model = {...this.model,nome: data.nome};
        this.model = this.data.dug ? {...this.model,...{dug:data.dug}} : this.model;
        this.model = this.data.tipologia ? {...this.model,...{tipologia:data.tipologia}} : this.model;
        this.model = {
          ...this.model, 
          assegnazioni: data.assegnazioni.map(data => { 
            return {
              __typename: 'assegnazione_toponimo', 
              municipalita: {
                id:data.municipalita.id, 
                nome:data.municipalita.nome
              },
              quartiere: {
                id: data.quartiere.id,
                nome:data.quartiere.nome
              }
             }
          })
        };
      }
  }

  ngOnInit(): void {
  }

  save(){
    const oldAssegnazioni = this.data ? this.data.assegnazioni : [];
    const newAssegnazioni = this.model.assegnazioni ? this.model.assegnazioni.map((q:any) => { return q.municipalita.id+"-"+q.quartiere.id}) : [];
    let d = oldAssegnazioni.filter(x => !newAssegnazioni.includes(x.municipalita.id+"-"+x.quartiere.id));
    let n = newAssegnazioni.filter((x: any) => !oldAssegnazioni.map(q => q.municipalita.id+"-"+q.quartiere.id).includes(x));

    let toponimo : Toponimo_Insert_Input = {
      nome: this.model.nome
    };
    toponimo = this.data ? {...toponimo,...{id:this.data.id}}: toponimo;
    toponimo = this.model.dug ? {...toponimo,...{dug_id:this.model.dug.id}} : toponimo;
    toponimo = this.model.tipologia ? {...toponimo,...{tipologia_id:this.model.tipologia.id}} : toponimo;
    const now = new Date().toLocaleString("it-IT", {timeZone: "Europe/Rome"});
    toponimo = n.length>0 ? {
      ...toponimo,
      ...{
        assegnazioni: {
          data: [
            ...toponimo.assegnazioni?.data||[],
            ...n.map((q:any) => { return {inizio_validita: now, municipalita_id: q.split('-')[0], quartiere_id: q.split('-')[1]}})
          ]
        }
      }
    } : toponimo;
    toponimo = d.length>0 ? {
      ...toponimo,
      ...{
        assegnazioni: {
          on_conflict: {
            constraint: Assegnazione_Toponimo_Constraint.AssegnazioneToponimoPkey,
            update_columns: [Assegnazione_Toponimo_Update_Column.FineValidita]
          },
          data: [
            ...toponimo.assegnazioni?.data||[],
            ...d.map((q:any) => { return {fine_validita: now, id: q.id, municipalita_id: q.municipalita.id,quartiere_id: q.quartiere.id, inizio_validita: q.inizio_validita}})
          ]
        }
      }
    }: toponimo;
    this._updateToponimoGQL.mutate({toponimo}).subscribe(d => this.dialogRef.close(d));
  }

}
