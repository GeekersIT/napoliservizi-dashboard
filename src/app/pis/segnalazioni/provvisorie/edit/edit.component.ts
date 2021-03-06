import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ConfirmDialogComponent } from 'src/app/_core/_components/confirm-dialog/confirm-dialog.component';
import {
  CiviciSelectGQL,
  CondizioniTrafficoSelectGQL,
  ConnessioniGrafoSelectGQL,
  FormaDissesoSelectGQL,
  GeneraProtocolloGQL,
  GiorniTrascorsiSelectGQL,
  MaterialeSelectGQL,
  MunicipalitaSelectGQL,
  PrioritaSelectGQL,
  QuartiereSelectGQL,
  SegnalazioneGQL,
  SegnalazioneSelectGQL,
  Pis_Segnalazione_Constraint,
  Pis_Segnalazione_Update_Column,
  SezioneProtocolloSelectGQL,
  SostegniIpiSelectGQL,
  SpecificaPosizionamentoToponimoSelectGQL,
  TipologiaDissesoSelectGQL,
  TipologiaPosizionamentoToponimoSelectGQL,
  TitoloSelectGQL,
  ToponimoNomeSelectGQL,
  ToponimoSelectGQL,
  UpdateSegnalazioneGQL,
  Pis__Stato_Segnalazione_Enum,
} from 'src/app/_core/_services/generated/graphql';
import { RequiredService } from 'src/app/_core/_services/required.service';
import { RolesService } from 'src/app/_core/_services/roles.service';
import { SegnalazioneEdit } from '../../edit.abstract';

@Component({
  selector: 'app-segnalazioni-provvisorie-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class SegnalazioniProvvisorieEditComponent
  extends SegnalazioneEdit
  implements OnInit
{
  constructor(
    protected _required: RequiredService,
    protected _http: HttpClient,
    protected _translateService: TranslateService,
    protected _prioritaSelectGQL: PrioritaSelectGQL,
    protected _formaDissestoGQL: FormaDissesoSelectGQL,
    protected _tipologiaDissesoSelectGQL: TipologiaDissesoSelectGQL,
    protected _sezioneProtocolloSelectGQL: SezioneProtocolloSelectGQL,
    protected _titoloSelectGQL: TitoloSelectGQL,
    protected _segnalazioneSelectGQL: SegnalazioneSelectGQL,
    protected _segnalazioneGQL: SegnalazioneGQL,
    protected _municipalitaSelectGQL: MunicipalitaSelectGQL,
    protected _quartiereSelectGQL: QuartiereSelectGQL,
    protected _toponimoSelectGQL: ToponimoSelectGQL,
    protected _toponimoNomeSelectGQL: ToponimoNomeSelectGQL,
    protected _specificaPosizionamentoToponimoSelectGQL: SpecificaPosizionamentoToponimoSelectGQL,
    protected _tipologiaPosizionamentoToponimoSelectGQL: TipologiaPosizionamentoToponimoSelectGQL,
    protected _updateSegnalazioneGQL: UpdateSegnalazioneGQL,
    protected _civiciSelectGQL: CiviciSelectGQL,
    protected _sostegniIpiSelectGQL: SostegniIpiSelectGQL,
    protected _connessioniGrafoSelectGQL: ConnessioniGrafoSelectGQL,
    protected _route: ActivatedRoute,
    protected _router: Router,
    protected _loaderService: NgxUiLoaderService,
    protected _dialog: MatDialog,
    protected _giorniTrascorsiSelect: GiorniTrascorsiSelectGQL,
    protected _condizioniTrafficoSelect: CondizioniTrafficoSelectGQL,
    protected _materialeSelect: MaterialeSelectGQL,
    private _protocollo: GeneraProtocolloGQL,
    protected roles: RolesService
  ) {
    super(
      _required,
      _http,
      _translateService,
      _prioritaSelectGQL,
      _formaDissestoGQL,
      _tipologiaDissesoSelectGQL,
      _sezioneProtocolloSelectGQL,
      _titoloSelectGQL,
      _segnalazioneSelectGQL,
      _segnalazioneGQL,
      _municipalitaSelectGQL,
      _quartiereSelectGQL,
      _toponimoSelectGQL,
      _toponimoNomeSelectGQL,
      _specificaPosizionamentoToponimoSelectGQL,
      _tipologiaPosizionamentoToponimoSelectGQL,
      _updateSegnalazioneGQL,
      _civiciSelectGQL,
      _sostegniIpiSelectGQL,
      _connessioniGrafoSelectGQL,
      _route,
      _router,
      _loaderService,
      _dialog,
      _giorniTrascorsiSelect,
      _condizioniTrafficoSelect,
      _materialeSelect,
      roles
    );
  }

  fields: FormlyFieldConfig[] = [
    {
      type: 'stepper',
      templateOptions: {
        orientation: 'horizontal',
      },
      // fieldGroup: this.steps.filter(
      //   (step) => step.key != 'intervento' && step.key != 'geolocalizzazione'
      // ),
      fieldGroup: this.steps,
    },
  ];

  ngOnInit(): void {
    this.baseInit({
      where: {
        _and: [
          { id: { _eq: this.id } },
          { stato: { _eq: Pis__Stato_Segnalazione_Enum.Bozza } },
        ],
      },
    });
  }

  async save(event: any) {
    if (event.type == 'def') {
      let model = await this.baseSave(event);

      console.log(model);

      this._protocollo
        .mutate({
          data: {
            oggetto: 'Segnalazione P.I.S. #' + model.id + ' del ' + model.data,
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
                      Pis_Segnalazione_Update_Column.Stato,
                      Pis_Segnalazione_Update_Column.Data,
                    ],
                  },
                  segnalazione: {
                    ...model!,
                    ...{ stato: Pis__Stato_Segnalazione_Enum.Bozza },
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
              console.log({
                ...model!,
                ...{ stato: Pis__Stato_Segnalazione_Enum.Aperta },
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
              });

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
                      Pis_Segnalazione_Update_Column.Stato,
                      Pis_Segnalazione_Update_Column.Data,
                    ],
                  },
                  segnalazione: {
                    ...model!,
                    ...{ stato: Pis__Stato_Segnalazione_Enum.Aperta },
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
                    this._router.navigate([
                      '/',
                      'pis',
                      'segnalazioni',
                      'protocollate',
                    ]);
                  },
                });
            }
          },
          error: (e) => console.log(e),
        });
    } else if (this.isDirty()) {
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
              Pis_Segnalazione_Update_Column.Stato,
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
          },
        });
    }
  }
}
