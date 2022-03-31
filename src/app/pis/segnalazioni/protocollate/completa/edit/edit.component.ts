import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { _Stato_Segnalazione_Enum, Segnalazione_Constraint, Segnalazione_Update_Column } from 'src/app/_core/_services/generated/graphql';
import { SegnalazioneEdit } from '../../../edit.abstract';

@Component({
  selector: 'app-segnalazioni-protocollate-completa-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class SegnalazioniProtocollateCompletaEditComponent extends SegnalazioneEdit implements OnInit {
  fields: FormlyFieldConfig[] = [{
    type: 'stepper',
    templateOptions:{
      orientation:'horizontal'
    },
    fieldGroup: [...this.steps.filter(step => step.key != 'geolocalizzazione')],
  }];

  ngOnInit(): void {
    this.disabled.complete.next(false);
    this.baseInit({
      where: {
        _and: [
          { id: { _eq: this.id } },
          { stato: { _neq: _Stato_Segnalazione_Enum.Bozza } },
          { stato: { _neq: _Stato_Segnalazione_Enum.Pre } }
        ]
      }
    });
  }
  async save(event:any){
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
          Segnalazione_Update_Column.Data,
        ]
      },
      segnalazione: model!
    }).subscribe({
      next: (r) => this.onSaveNext(r),
      error: (e) => this.onSaveError(e),
      complete: () => { this.saving = false; if(event.loading) this._loaderService.stop(); if(event.type == 'def') this._router.navigate(['/','pis','segnalazioni','protocollate'])}
    })  
  }

}
