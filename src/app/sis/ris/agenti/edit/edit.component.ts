import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ConfirmDialogComponent } from 'src/app/_core/_components/confirm-dialog/confirm-dialog.component';
import {
  Ris_Constraint,
  Ris_Update_Column,
  _Stato_Ris_Enum,
} from 'src/app/_core/_services/generated/graphql';
import { RisEdit } from '../../edit.abstract';
import { AccertatoriComponent } from './accertatori/accertatori.component';

@Component({
  selector: 'app-ris-agenti-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class RisAgentiEditComponent extends RisEdit implements OnInit {
  fields: FormlyFieldConfig[] = [
    {
      type: 'stepper',
      templateOptions: {
        orientation: 'horizontal',
      },
      fieldGroup: this.steps.filter(
        (step) => step.key != 'protocollo' && step.key != 'geolocalizzazione'
      ),
    },
  ];

  ngOnInit(): void {
    this.baseInit({
      where: {
        _and: [
          { id: { _eq: this.id } },
          { stato: { _eq: _Stato_Ris_Enum.Compilazione } },
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
        console.log('The dialog was closed');
        console.log(agenti_accertatori);
        if (
          agenti_accertatori != '' &&
          agenti_accertatori != null &&
          agenti_accertatori != undefined
        ) {
          let model = await this.baseSave(event);
          this._updateRisGQL
            .mutate({
              on_conflict: {
                constraint: Ris_Constraint.RisPkey,
                update_columns: [
                  Ris_Update_Column.MunicipalitaId,
                  Ris_Update_Column.MunicipalitaStorica,
                  Ris_Update_Column.QuartiereId,
                  Ris_Update_Column.QuartiereStorico,
                  Ris_Update_Column.ToponimoId,
                  Ris_Update_Column.ToponimoStorico,
                  Ris_Update_Column.PuntoInizialePosizionamentoId,
                  Ris_Update_Column.Stato,
                  Ris_Update_Column.Data,

                  Ris_Update_Column.UnitaOperativaId,
                  Ris_Update_Column.OperazioneTerminateData,
                  Ris_Update_Column.RisConsegnatoAId,
                  Ris_Update_Column.RisConsegnatoAAltro,
                  Ris_Update_Column.RisConsegnatoData,

                  Ris_Update_Column.EnteSegnalatoreNote,
                  Ris_Update_Column.DataSegnalazione,
                  Ris_Update_Column.DataPresunta,
                  Ris_Update_Column.DataIntervento,
                  Ris_Update_Column.NoteIntervento,
                  Ris_Update_Column.EntePrimoInterventoNote,

                  Ris_Update_Column.EnteSecondarioIntervenutiVvffComando,
                  Ris_Update_Column.EnteSecondarioIntervenutiVvffCapoPattuglia,
                  Ris_Update_Column.EnteSecondarioIntervenutiVvffGiaIntervenuti,
                  Ris_Update_Column.EnteSecondarioIntervenutiMotivazione,
                  Ris_Update_Column.EnteSecondarioIntervenutiAltro,

                  Ris_Update_Column.NaturaIncidenteNote,
                  Ris_Update_Column.Dinamica,
                  Ris_Update_Column.Altro,
                  Ris_Update_Column.PosizioneFinaleVeicoloCarreggiataNote,
                  Ris_Update_Column.PosizioneFinaleVeicoloMarginiNote,
                  Ris_Update_Column.PosizioneFinaleVeicoloFuoriSedeNote,
                  Ris_Update_Column.ConseguenzaVeicoloNote,
                  Ris_Update_Column.LocalizzazioneExtraAbitatoNote,
                  Ris_Update_Column.LocalizzazioneTipoStradaNote,
                  Ris_Update_Column.LocalizzazioneParticolaritaStradaNote,
                  Ris_Update_Column.LocalizzazionePavimentazioneNote,
                  Ris_Update_Column.LocalizzazioneFondoStradaleNote,
                  Ris_Update_Column.LocalizzazioneCondizioniAtmosfericheNote,
                  Ris_Update_Column.LocalizzazioneVisibilitaNote,
                  Ris_Update_Column.LocalizzazioneIlluminazioneNote,
                  Ris_Update_Column.LocalizzazioneCondizioniTrafficoNote,
                  Ris_Update_Column.LocalizzazioneAltroNote,
                  Ris_Update_Column.LocalizzazioneNote,
                  Ris_Update_Column.PuntiUrto,
                  Ris_Update_Column.PuntiUrtoMultiplo,
                  Ris_Update_Column.PuntiInvestimento,
                  Ris_Update_Column.PuntiInvestimentoMultiplo,
                  Ris_Update_Column.PuntiRilievi,
                  Ris_Update_Column.PuntiRilieviNoTipologiaId,
                  Ris_Update_Column.PuntiDescrizioneAnalitica,
                  Ris_Update_Column.PuntiUrtoAccorda,
                  Ris_Update_Column.PuntiUrtoNote,
                  Ris_Update_Column.PosizioneStaticaRilieviVeicoliRimossi,
                  Ris_Update_Column.PosizioneStaticaRilievi,
                  Ris_Update_Column.PosizioneStaticaRilieviNoTipologiaId,
                  Ris_Update_Column.PosizioneStaticaDescrizioneAnalitica,

                  Ris_Update_Column.DecessiNumero,
                  Ris_Update_Column.DecessiNotiziatoPm,
                  Ris_Update_Column.DecessiVerbaleRiconoscimentoSalma,
                  Ris_Update_Column.DecessiOggettiRinvenuti,
                  Ris_Update_Column.DecessiInterventoPoliziaMortuaria,
                  Ris_Update_Column.DecessiCertificatoRedattore,
                  Ris_Update_Column.DecessiCertificato,
                  Ris_Update_Column.DecessiCertificatoRedattoreInServizio,
                  Ris_Update_Column.DecessiCertificatoRedattoreRecapito,
                  Ris_Update_Column.DecessiTrasportoSalmeData,
                  Ris_Update_Column.DecessiNote,
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
            constraint: Ris_Constraint.RisPkey,
            update_columns: [
              Ris_Update_Column.MunicipalitaId,
              Ris_Update_Column.MunicipalitaStorica,
              Ris_Update_Column.QuartiereId,
              Ris_Update_Column.QuartiereStorico,
              Ris_Update_Column.ToponimoId,
              Ris_Update_Column.ToponimoStorico,
              Ris_Update_Column.PuntoInizialePosizionamentoId,
              Ris_Update_Column.Stato,
              Ris_Update_Column.Data,

              Ris_Update_Column.UnitaOperativaId,
              Ris_Update_Column.OperazioneTerminateData,
              Ris_Update_Column.RisConsegnatoAId,
              Ris_Update_Column.RisConsegnatoAAltro,
              Ris_Update_Column.RisConsegnatoData,

              Ris_Update_Column.EnteSegnalatoreNote,
              Ris_Update_Column.DataSegnalazione,
              Ris_Update_Column.DataPresunta,
              Ris_Update_Column.DataIntervento,
              Ris_Update_Column.NoteIntervento,
              Ris_Update_Column.EntePrimoInterventoNote,

              Ris_Update_Column.EnteSecondarioIntervenutiVvffComando,
              Ris_Update_Column.EnteSecondarioIntervenutiVvffCapoPattuglia,
              Ris_Update_Column.EnteSecondarioIntervenutiVvffGiaIntervenuti,
              Ris_Update_Column.EnteSecondarioIntervenutiMotivazione,
              Ris_Update_Column.EnteSecondarioIntervenutiAltro,

              Ris_Update_Column.NaturaIncidenteNote,
              Ris_Update_Column.Dinamica,
              Ris_Update_Column.Altro,
              Ris_Update_Column.PosizioneFinaleVeicoloCarreggiataNote,
              Ris_Update_Column.PosizioneFinaleVeicoloMarginiNote,
              Ris_Update_Column.PosizioneFinaleVeicoloFuoriSedeNote,
              Ris_Update_Column.ConseguenzaVeicoloNote,
              Ris_Update_Column.LocalizzazioneExtraAbitatoNote,
              Ris_Update_Column.LocalizzazioneTipoStradaNote,
              Ris_Update_Column.LocalizzazioneParticolaritaStradaNote,
              Ris_Update_Column.LocalizzazionePavimentazioneNote,
              Ris_Update_Column.LocalizzazioneFondoStradaleNote,
              Ris_Update_Column.LocalizzazioneCondizioniAtmosfericheNote,
              Ris_Update_Column.LocalizzazioneVisibilitaNote,
              Ris_Update_Column.LocalizzazioneIlluminazioneNote,
              Ris_Update_Column.LocalizzazioneCondizioniTrafficoNote,
              Ris_Update_Column.LocalizzazioneAltroNote,
              Ris_Update_Column.LocalizzazioneNote,
              Ris_Update_Column.PuntiUrto,
              Ris_Update_Column.PuntiUrtoMultiplo,
              Ris_Update_Column.PuntiInvestimento,
              Ris_Update_Column.PuntiInvestimentoMultiplo,
              Ris_Update_Column.PuntiRilievi,
              Ris_Update_Column.PuntiRilieviNoTipologiaId,
              Ris_Update_Column.PuntiDescrizioneAnalitica,
              Ris_Update_Column.PuntiUrtoAccorda,
              Ris_Update_Column.PuntiUrtoNote,
              Ris_Update_Column.PosizioneStaticaRilieviVeicoliRimossi,
              Ris_Update_Column.PosizioneStaticaRilievi,
              Ris_Update_Column.PosizioneStaticaRilieviNoTipologiaId,
              Ris_Update_Column.PosizioneStaticaDescrizioneAnalitica,

              Ris_Update_Column.DecessiNumero,
              Ris_Update_Column.DecessiNotiziatoPm,
              Ris_Update_Column.DecessiVerbaleRiconoscimentoSalma,
              Ris_Update_Column.DecessiOggettiRinvenuti,
              Ris_Update_Column.DecessiInterventoPoliziaMortuaria,
              Ris_Update_Column.DecessiCertificatoRedattore,
              Ris_Update_Column.DecessiCertificato,
              Ris_Update_Column.DecessiCertificatoRedattoreInServizio,
              Ris_Update_Column.DecessiCertificatoRedattoreRecapito,
              Ris_Update_Column.DecessiTrasportoSalmeData,
              Ris_Update_Column.DecessiNote,
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
