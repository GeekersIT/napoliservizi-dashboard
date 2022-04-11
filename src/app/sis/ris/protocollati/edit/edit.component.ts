import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import {
  Sis__Stato_Ris_Enum,
  Sis_Ris_Constraint,
  Sis_Ris_Update_Column,
} from 'src/app/_core/_services/generated/graphql';
import { RisEdit } from '../../edit.abstract';

@Component({
  selector: 'app-segnalazioni-protocollate-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class RisProtocollatiEditComponent extends RisEdit implements OnInit {
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

  ngOnInit(): void {
    this.disabled.complete.next(false);
    this.baseInit({
      where: {
        _and: [
          { id: { _eq: this.id } },
          { stato: { _neq: Sis__Stato_Ris_Enum.Bozza } },
          { stato: { _neq: Sis__Stato_Ris_Enum.Inviato } },
          { stato: { _neq: Sis__Stato_Ris_Enum.Compilazione } },
        ],
      },
    });
  }
  async save(event: any) {
    let model = await this.baseSave(event);
    this._updateRisGQL
      .mutate({
        on_conflict: {
          constraint: Sis_Ris_Constraint.RisPkey,
          update_columns: [
            Sis_Ris_Update_Column.MunicipalitaId,
            Sis_Ris_Update_Column.MunicipalitaStorica,
            Sis_Ris_Update_Column.QuartiereId,
            Sis_Ris_Update_Column.QuartiereStorico,
            Sis_Ris_Update_Column.ToponimoId,
            Sis_Ris_Update_Column.ToponimoStorico,
            Sis_Ris_Update_Column.PuntoInizialePosizionamentoId,
            Sis_Ris_Update_Column.Stato,
            Sis_Ris_Update_Column.Data,

            Sis_Ris_Update_Column.UnitaOperativaId,
            Sis_Ris_Update_Column.OperazioneTerminateData,
            Sis_Ris_Update_Column.RisConsegnatoAId,
            Sis_Ris_Update_Column.RisConsegnatoAAltro,
            Sis_Ris_Update_Column.RisConsegnatoData,

            Sis_Ris_Update_Column.EnteSegnalatoreNote,
            Sis_Ris_Update_Column.DataSegnalazione,
            Sis_Ris_Update_Column.DataPresunta,
            Sis_Ris_Update_Column.DataIntervento,
            Sis_Ris_Update_Column.NoteIntervento,
            Sis_Ris_Update_Column.EntePrimoInterventoNote,

            Sis_Ris_Update_Column.EnteSecondarioIntervenutiVvffComando,
            Sis_Ris_Update_Column.EnteSecondarioIntervenutiVvffCapoPattuglia,
            Sis_Ris_Update_Column.EnteSecondarioIntervenutiVvffGiaIntervenuti,
            Sis_Ris_Update_Column.EnteSecondarioIntervenutiMotivazione,
            Sis_Ris_Update_Column.EnteSecondarioIntervenutiAltro,

            Sis_Ris_Update_Column.NaturaIncidenteNote,
            Sis_Ris_Update_Column.Dinamica,
            Sis_Ris_Update_Column.Altro,
            Sis_Ris_Update_Column.PosizioneFinaleVeicoloCarreggiataNote,
            Sis_Ris_Update_Column.PosizioneFinaleVeicoloMarginiNote,
            Sis_Ris_Update_Column.PosizioneFinaleVeicoloFuoriSedeNote,
            Sis_Ris_Update_Column.ConseguenzaVeicoloNote,
            Sis_Ris_Update_Column.LocalizzazioneExtraAbitatoNote,
            Sis_Ris_Update_Column.LocalizzazioneTipoStradaNote,
            Sis_Ris_Update_Column.LocalizzazioneParticolaritaStradaNote,
            Sis_Ris_Update_Column.LocalizzazionePavimentazioneNote,
            Sis_Ris_Update_Column.LocalizzazioneFondoStradaleNote,
            Sis_Ris_Update_Column.LocalizzazioneCondizioniAtmosfericheNote,
            Sis_Ris_Update_Column.LocalizzazioneVisibilitaNote,
            Sis_Ris_Update_Column.LocalizzazioneIlluminazioneNote,
            Sis_Ris_Update_Column.LocalizzazioneCondizioniTrafficoNote,
            Sis_Ris_Update_Column.LocalizzazioneAltroNote,
            Sis_Ris_Update_Column.LocalizzazioneNote,
            Sis_Ris_Update_Column.PuntiUrto,
            Sis_Ris_Update_Column.PuntiUrtoMultiplo,
            Sis_Ris_Update_Column.PuntiInvestimento,
            Sis_Ris_Update_Column.PuntiInvestimentoMultiplo,
            Sis_Ris_Update_Column.PuntiRilievi,
            Sis_Ris_Update_Column.PuntiRilieviNoTipologiaId,
            Sis_Ris_Update_Column.PuntiDescrizioneAnalitica,
            Sis_Ris_Update_Column.PuntiUrtoAccorda,
            Sis_Ris_Update_Column.PuntiUrtoNote,
            Sis_Ris_Update_Column.PosizioneStaticaRilieviVeicoliRimossi,
            Sis_Ris_Update_Column.PosizioneStaticaRilievi,
            Sis_Ris_Update_Column.PosizioneStaticaRilieviNoTipologiaId,
            Sis_Ris_Update_Column.PosizioneStaticaDescrizioneAnalitica,

            Sis_Ris_Update_Column.DecessiNumero,
            Sis_Ris_Update_Column.DecessiNotiziatoPm,
            Sis_Ris_Update_Column.DecessiVerbaleRiconoscimentoSalma,
            Sis_Ris_Update_Column.DecessiOggettiRinvenuti,
            Sis_Ris_Update_Column.DecessiInterventoPoliziaMortuaria,
            Sis_Ris_Update_Column.DecessiCertificatoRedattore,
            Sis_Ris_Update_Column.DecessiCertificato,
            Sis_Ris_Update_Column.DecessiCertificatoRedattoreInServizio,
            Sis_Ris_Update_Column.DecessiCertificatoRedattoreRecapito,
            Sis_Ris_Update_Column.DecessiTrasportoSalmeData,
            Sis_Ris_Update_Column.DecessiNote,
          ],
        },
        ris: model!,
      })
      .subscribe({
        next: (r) => this.onSaveNext(r),
        error: (e) => this.onSaveError(e),
        complete: () => {
          this.saving = false;
          if (event.loading) this._loaderService.stop();
          // if (event.type == 'def')
          // this._router.navigate(['/', 'sis', 'ris', 'protocollati']);
        },
      });
  }
}
