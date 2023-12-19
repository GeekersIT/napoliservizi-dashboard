import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import {
  Pis__Stato_Segnalazione_Enum,
  Pis_Segnalazione_Constraint,
  Pis_Segnalazione_Update_Column,
} from 'src/app/_core/_services/generated/graphql';
import { SegnalazioneEdit } from '../../../edit.abstract';

@Component({
  selector: 'app-segnalazioni-protocollate-completa-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class SegnalazioniProtocollateCompletaEditComponent extends SegnalazioneEdit {
  fields: FormlyFieldConfig[] = [
    {
      type: 'stepper',
      templateOptions: {
        orientation: 'horizontal',
      },
      fieldGroup: [
        ...this.steps.filter((step) => step.key != 'geolocalizzazione'),
      ],
    },
  ];

  ngAfterViewInit(): void {
    this.disabled.complete.next(false);
    this.baseInit({
      where: {
        _and: [
          { id: { _eq: this.id } },
          { stato: { _neq: Pis__Stato_Segnalazione_Enum.Bozza } },
          { stato: { _neq: Pis__Stato_Segnalazione_Enum.Pre } },
        ],
      },
    });
  }
  async save(event: any) {
    let model = await this.baseSave(event);
    this._updateSegnalazioneGQL
      .mutate({
        on_conflict: {
          constraint: Pis_Segnalazione_Constraint.SegnalazionePkey,
          update_columns: [
            Pis_Segnalazione_Update_Column.MunicipalitaId,
            Pis_Segnalazione_Update_Column.MunicipalitaStorica,
            Pis_Segnalazione_Update_Column.QuartiereId,
            Pis_Segnalazione_Update_Column.QuartiereStorico,
            Pis_Segnalazione_Update_Column.ToponimoId,
            Pis_Segnalazione_Update_Column.ToponimoStorico,
            Pis_Segnalazione_Update_Column.PuntoInizialePosizionamentoId,
            Pis_Segnalazione_Update_Column.PrioritaId,
            Pis_Segnalazione_Update_Column.DissestoId,
            Pis_Segnalazione_Update_Column.ProtocolloId,
            Pis_Segnalazione_Update_Column.TecnicoReferenteId,
            Pis_Segnalazione_Update_Column.RichiestaProtezioneCivile,
            Pis_Segnalazione_Update_Column.Data,
          ],
        },
        segnalazione: model!,
      })
      .subscribe({
        next: (r) => this.onSaveNext(r),
        error: (e) => this.onSaveError(e),
        complete: () => {
          this.saving = false;
          if (event.loading) this._loaderService.stop();
          if (event.type == 'def')
            this._router.navigate(['/', 'pis', 'segnalazioni', 'protocollate']);
        },
      });
  }
}
