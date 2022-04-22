import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ConfirmDialogComponent } from 'src/app/_core/_components/confirm-dialog/confirm-dialog.component';
import {
  Sis_Ris_Constraint,
  Sis_Ris_Update_Column,
  Sis__Stato_Ris_Enum,
} from 'src/app/_core/_services/generated/graphql';
import { RisEdit } from '../../edit.abstract';

@Component({
  selector: 'app-ris-provvisori-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class RisProvvisoriEditComponent extends RisEdit implements OnInit {
  fields: FormlyFieldConfig[] = [
    {
      type: 'stepper',
      templateOptions: {
        orientation: 'horizontal',
      },
      fieldGroup: this.steps,
    },
  ];

  ngOnInit(): void {
    this.baseInit({
      where: {
        _and: [
          { id: { _eq: this.id } },
          {
            _or: [
              { stato: { _eq: Sis__Stato_Ris_Enum.Bozza } },
              { stato: { _eq: Sis__Stato_Ris_Enum.Inviato } },
              { stato: { _eq: Sis__Stato_Ris_Enum.Compilazione } },
            ],
          },
        ],
      },
    });
  }

  async save(event: any) {
    if (event.type == 'def') {
      let model = await this.baseSave(event);
      this._protocollo
        .mutate({
          data: {
            oggetto: 'R.I.S #' + model.id + ' del ' + model.data_segnalazione,
            note: '',
            mittenteInterno: {
              codice: this.model.protocollo.mittente.codice,
            },
            mittenteEsterno: {},
            destinatariInterni:
              this.model.protocollo.destinatari.filter(
                (destinatario: any) => destinatario.e_esterno == false
              ).length > 0
                ? this.model.protocollo.destinatari
                    .filter(
                      (destinatario: any) => destinatario.e_esterno == false
                    )
                    .map((destinatario: any) => {
                      return {
                        codice: destinatario.destinatario_interno.codice,
                      };
                    })
                : [{}],
            destinatariEsterni:
              this.model.protocollo.destinatari.filter(
                (destinatario: any) => destinatario.e_esterno == true
              ).length > 0
                ? this.model.protocollo.destinatari
                    .filter(
                      (destinatario: any) => destinatario.e_esterno == true
                    )
                    .map((destinatario: any) => {
                      return {
                        nome: destinatario.destinatario_esterno.nome,
                        cognome: destinatario.destinatario_esterno.cognome,
                        cf: destinatario.destinatario_esterno.codice_fiscale,
                      };
                    })
                : [{}],
          },
        })
        .subscribe({
          next: (r) => {
            if (r.data?.genera_protocollo.error) {
              this._dialog.open(ConfirmDialogComponent, {
                data: {
                  title: this._translateService.instant('Attenzione'),
                  content: this._translateService.instant(
                    'Errore nel protocollo.\nContattare l\'amministrazione di sistema.\nErrore: <b>"' +
                      r.data?.genera_protocollo.message +
                      '"</b>'
                  ),
                },
              });
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
                    ...{ stato: Sis__Stato_Ris_Enum.Bozza },
                  },
                })
                .subscribe({
                  next: (r) => this.onSaveNext(r),
                  error: (e) => this.onSaveError(e),
                  complete: () => {
                    this.saving = false;
                    if (event.loading) this._loaderService.stop();
                    console.log('salvato come bozza');
                  },
                });
            } else {
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
                    ...{ stato: Sis__Stato_Ris_Enum.Protocollato },
                    ...{
                      protocollo: {
                        ...model.protocollo,
                        ...{
                          data: {
                            ...model.protocollo.data,
                            ...{ numero: r.data?.genera_protocollo.number },
                            ...{
                              data: r.data?.genera_protocollo.datetime.toString(),
                            },
                          },
                        },
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
                    this._router.navigate(['/', 'sis', 'ris', 'protocollati']);
                  },
                });
            }
          },
          error: (e) => console.log(e),
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
          ris: model!,
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
