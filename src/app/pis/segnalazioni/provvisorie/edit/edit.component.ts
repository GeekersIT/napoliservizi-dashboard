import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Segnalazione_Constraint, Segnalazione_Update_Column, _Stato_Segnalazione_Enum } from 'src/app/_core/_services/generated/graphql';
import { SegnalazioneEdit } from '../../edit.abstract';

@Component({
  selector: 'app-segnalazioni-provvisorie-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class SegnalazioniProvvisorieEditComponent extends SegnalazioneEdit implements OnInit{
  fields: FormlyFieldConfig[] = [{
    type: 'stepper',
    templateOptions:{
      orientation:'horizontal'
    },
    fieldGroup: this.steps,
  }];
  
  ngOnInit(): void {
    this.baseInit({
      where: {
        _and: [
          { id: { _eq: this.id } },
          { stato: { _eq: _Stato_Segnalazione_Enum.Bozza } }
        ]
      }
    });
  }

  async save(event:any){
    if(this.isDirty() || event.type=="def"){
      let model = await this.baseSave(event);
      this._updateSegnalazioneGQL.mutate({
        on_conflict: {
          constraint: Segnalazione_Constraint.SegnalazionePkey,
          update_columns: [
            Segnalazione_Update_Column.MunicipalitaId,
            Segnalazione_Update_Column.MunicipalitaStorica,
            Segnalazione_Update_Column.QuartiereId,
            Segnalazione_Update_Column.QuartiereStorico,
            Segnalazione_Update_Column.ToponimoId,
            Segnalazione_Update_Column.ToponimoStorico,
            Segnalazione_Update_Column.PuntoInizialePosizionamentoId,
            Segnalazione_Update_Column.PrioritaId,
            Segnalazione_Update_Column.DissestoId,
            Segnalazione_Update_Column.ProtocolloId,
            Segnalazione_Update_Column.TecnicoReferenteId,
            Segnalazione_Update_Column.RichiestaProtezioneCivile,
            Segnalazione_Update_Column.Stato,
            Segnalazione_Update_Column.Data,
          ]
        },
        segnalazione: model!
      }).subscribe({
        next: (r) => this.onSaveNext(r),
        error: (e) => this.onSaveError(e),
        complete: () => { this.saving = false; if(event.loading) this._loaderService.stop(); if(event.type == 'def') this._router.navigate(['/','pis','segnalazioni','protocollate'])}
      }); 
    }
  }
  
}
