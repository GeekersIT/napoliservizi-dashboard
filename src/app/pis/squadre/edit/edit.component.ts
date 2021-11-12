import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs/operators';
import { SquadraPisObj } from 'src/app/_core/_models/pis/squadra-pis.interface';
import { Assegnazione_Squadra_Constraint, Assegnazione_Squadra_Update_Column, DeleteSquadraPisGQL, OperatorePisSelectGQL, Squadra_Insert_Input, UpdateSquadraPisGQL } from 'src/app/_core/_services/generated/graphql';

@Component({
  selector: 'app-squadre-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class SquadraEditComponent implements OnInit {
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
    key: 'protezione_civile',
    type: 'toggle',
    defaultValue: false,
    templateOptions: {
      appearance: 'standard',
    },
    expressionProperties: {
      'templateOptions.label': this._translateService.stream('Protezione civile'),
    },
  },{
    key: 'membri',
    type: 'repeat',
    expressionProperties: {
      'templateOptions.addText': this._translateService.stream('Aggiungi operatore'),
    },
    validators: {
      assegnazioniDuplicate: {
        expression: (control:FormArray) => {
          control.controls.forEach((c:any) => {
            if(c.controls.membro){
              if(c.controls.membro.value!==null)
                c.controls.membro.setErrors(null);
            }
          })
          let array = control.value.filter((q:any) => q!==undefined && q!==null && q.membro!==undefined && q.membro!==null).map((q:any) => { return q.membro.id});         
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
              fg.controls.membro.setErrors({
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
      fieldGroup: [
        {
          className: 'flex-1',
          key: 'membro',
          type: 'autocomplete',
          templateOptions: {
            required:true,
            multiple: false,
            displayWith: (e:any) => e ? e.nome+" "+e.cognome+" - "+e.matricola : '',
            filter: (term:any) => term && typeof term === 'string' ? this._operatorePisSelectGQL.subscribe().pipe(map(result => result.data?.membro.filter(m => m.squadre_aggregate.aggregate?.count==0&&(m.nome+" "+m.cognome+" "+m.matricola).toLocaleLowerCase().indexOf(term.toLowerCase()) >= 0))) : this._operatorePisSelectGQL.subscribe().pipe(map(result => result.data?.membro.filter(m => m.squadre_aggregate.aggregate?.count == 0))),
          },
          expressionProperties: {
            'templateOptions.label': this._translateService.stream('Operatore'),
          },
          validation: {
            messages: {
              duplicate: (error:any, field: FormlyFieldConfig) => this._translateService.instant('Non ci possono essere operatori duplicati')
            }
          }
        },{
          className: 'flex-1',
          key: 'caposquadra',
          type: 'toggle',
          defaultValue: false,
          templateOptions: {
            appearance: 'standard',
          },
          expressionProperties: {
            'templateOptions.label': this._translateService.stream('Capo squadra'),
            'templateOptions.disabled': (model: any, _formState: any) => {
              let a = this.model.membri.filter((m:any)=>m.caposquadra==true);
              if(model.membro===undefined){
                return true;
              }else{
                return a.length>0 && model.membro.id != a[0].membro.id
              }
  
            }
          },
        },
      ]
    }
    
    
  }];
  
  constructor(
    private _updateSquadraPisGQL: UpdateSquadraPisGQL,
    private _deleteSquadraPisGQL: DeleteSquadraPisGQL,
    private _operatorePisSelectGQL: OperatorePisSelectGQL,
    private _translateService: TranslateService,
    public dialogRef: MatDialogRef<SquadraEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SquadraPisObj
  ) {
    if(this.data)
      this.model = {
        ...this.model, 
        nome: data.nome,
        protezione_civile: data.protezione_civile, 
        membri: data.membri.map(data => {
          return {
            __typename: 'assegnazione_squadra',
            id: data.id,
            inizio_validita: data.inizio_validita,
            caposquadra: data.caposquadra,
            membro: data.membro, 
          }
        })
      }
  }

  ngOnInit(): void {
  }

  save(){
    const oldMembri = this.data ? this.data.membri : [];
    const newMembri = this.model.membri ? this.model.membri : [];

    let d = oldMembri.filter(x => !newMembri.map((m:any) => { return m.membro.id}).includes(x.membro.id));
    let n = newMembri.filter((x: any) => !oldMembri.map(m => m.membro.id).includes(x.membro.id));
    let u = newMembri.filter((x: any) => oldMembri.map(m => m.membro.id+"-"+!m.caposquadra).includes(x.membro.id+"-"+x.caposquadra));

    let squadra : Squadra_Insert_Input  = {
      nome: this.model.nome,
      protezione_civile: this.model.protezione_civile
    };
    
    squadra = this.data ? {...squadra,...{id:this.data.id}} : squadra;

    const now = new Date().toLocaleString("it-IT", {timeZone: "Europe/Rome"});

    squadra = n.length > 0 || u.length > 0 ?  {...squadra,...{
      membri: { 
        data: [
          ...squadra.membri?.data||[],
          ...n.map((m:any) => { return {
          inizio_validita: now, 
          membro_id: m.membro.id, 
          caposquadra: m.caposquadra }}),
          ...u.map((m:any) => { return {inizio_validita: now, membro_id: m.membro.id, caposquadra: m.caposquadra }})]
      }
    }} : squadra;
    
    squadra = d.length > 0 || u.length > 0 ?  {...squadra,...{
      membri: {
        on_conflict: {
          constraint: Assegnazione_Squadra_Constraint.AssegnazioneSquadraPkey,
          update_columns: [Assegnazione_Squadra_Update_Column.FineValidita]
        },
        data: [
          ...squadra.membri?.data||[],
          ...d.map((m:any) => { return {
          fine_validita: now, 
          id: m.id,
          caposquadra: m.caposquadra,
          membro_id: m.membro.id,
          inizio_validita: m.inizio_validita
        }}),...u.map((m:any) => { return {
          fine_validita: now, 
          id: m.id,
          caposquadra: m.caposquadra,
          membro_id: m.membro.id,
          inizio_validita: m.inizio_validita
        }})]
      }
    }} : squadra;

    this._updateSquadraPisGQL.mutate({squadra}).subscribe(d => this.dialogRef.close(d));
  }

  delete(){
    this._deleteSquadraPisGQL.mutate({id: this.data.id}).subscribe(d => this.dialogRef.close(d));
  }

}
