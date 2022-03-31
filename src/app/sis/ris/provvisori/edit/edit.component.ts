import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ConfirmDialogComponent } from 'src/app/_core/_components/confirm-dialog/confirm-dialog.component';
import {
  Ris_Constraint,
  Ris_Update_Column,
  _Stato_Ris_Enum,
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
      fieldGroup: this.steps.filter(step => step.key != 'geolocalizzazione'),
    },
  ];

  ngOnInit(): void {
    this.baseInit({
      where: {
        _and: [
          { id: { _eq: this.id } },
          {
            _or: [
              { stato: { _eq: _Stato_Ris_Enum.Bozza } },
              { stato: { _eq: _Stato_Ris_Enum.Inviato } },
              { stato: { _eq: _Stato_Ris_Enum.Compilazione } },
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
            oggetto: 'Prova',
            note: '',
            mittenteInterno: {
              codice: this.model.protocollo.mittente.codice,
            },
            mittenteEsterno: {},
            destinatariInterni: this.model.protocollo.destinatari
              .filter((destinatario: any) => destinatario.e_esterno == false)
              .map((destinatario: any) => {
                return { codice: destinatario.destinatario_interno.codice };
              }),
            destinatariEsterni: this.model.protocollo.destinatari
              .filter((destinatario: any) => destinatario.e_esterno == true)
              .map((destinatario: any) => {
                return {
                  nome: destinatario.destinatario_esterno.nome,
                  cognome: destinatario.destinatario_esterno.cognome,
                  cf: destinatario.destinatario_esterno.codice_fiscale,
                };
              }),
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
                    ...{ stato: _Stato_Ris_Enum.Bozza },
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
                    ...{ stato: _Stato_Ris_Enum.Protocollato },
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
