import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ConfirmDialogComponent } from 'src/app/_core/_components/confirm-dialog/confirm-dialog.component';
import {
  Sis_Ris_Constraint,
  Sis_Ris_Update_Column,
  Sis__Stato_Ris_Enum,
} from 'src/app/_core/_services/generated/graphql';
import { RisEdit } from '../../edit.abstract';
import { AccertatoriComponent } from './accertatori/accertatori.component';

@Component({
  selector: 'app-ris-agenti-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class RisAgentiEditComponent extends RisEdit {
  fields: FormlyFieldConfig[] = [
    {
      type: 'stepper',
      templateOptions: {
        orientation: 'horizontal',
      },
      fieldGroup: this.steps.filter((step) => step.key != 'protocollo'),
    },
  ];

  ngAfterViewInit(): void {
    this.baseInit({
      where: {
        _and: [
          { id: { _eq: this.id } },
          { stato: { _eq: Sis__Stato_Ris_Enum.Compilazione } },
        ],
      },
    });
  }

  async save(event: any) {
    if (event.type == 'invia') {
      const dialogRef = this._dialog.open(AccertatoriComponent, {
        width: '50%',
      });

      dialogRef.afterClosed().subscribe(async (agenti_accertatori) => {
        // console.log('The dialog was closed');
        // console.log(agenti_accertatori);
        if (
          agenti_accertatori != '' &&
          agenti_accertatori != null &&
          agenti_accertatori != undefined
        ) {
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
              ris: {
                ...model!,
                ...{
                  agenti_accertatori: {
                    data: agenti_accertatori,
                  },
                },
              },
            })
            .subscribe({
              next: (r) => this.onSaveNext(r),
              error: (e) => this.onSaveError(e),
              complete: () => {
                this.saving = false;
                if (event.loading) this._loaderService.stop();
                this._router.navigate(['/', 'sis', 'ris', 'agenti']);
              },
            });
        }
      });
    } else if (this.isDirty()) {
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
          ris: {
            ...model!,
          },
        })
        .subscribe({
          next: (r) => this.onSaveNext(r),
          error: (e) => this.onSaveError(e),
          complete: () => {
            this.saving = false;
            if (event.loading) this._loaderService.stop();
          },
        });
    }
  }
}
