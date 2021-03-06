import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { map } from 'rxjs';
import {
  Pis__Stato_Segnalazione_Enum,
  Pis_Segnalazione_Constraint,
  Pis_Segnalazione_Update_Column,
  SquadrePisSelectGQL,
  CiviciSelectGQL,
  ConnessioniGrafoSelectGQL,
  FormaDissesoSelectGQL,
  MunicipalitaSelectGQL,
  PrioritaSelectGQL,
  QuartiereSelectGQL,
  SegnalazioneGQL,
  SegnalazioneSelectGQL,
  SezioneProtocolloSelectGQL,
  SostegniIpiSelectGQL,
  SpecificaPosizionamentoToponimoSelectGQL,
  TipologiaDissesoSelectGQL,
  TipologiaPosizionamentoToponimoSelectGQL,
  TitoloSelectGQL,
  ToponimoNomeSelectGQL,
  ToponimoSelectGQL,
  UpdateSegnalazioneGQL,
  CondizioniTrafficoSelectGQL,
  GiorniTrascorsiSelectGQL,
  MaterialeSelectGQL,
} from 'src/app/_core/_services/generated/graphql';
import { RequiredService } from 'src/app/_core/_services/required.service';
import { RolesService } from 'src/app/_core/_services/roles.service';
import { SegnalazioneEdit } from '../../edit.abstract';

@Component({
  selector: 'app-segnalazioni-protocollate-assegna',
  templateUrl: './assegna.component.html',
  styleUrls: ['./assegna.component.scss'],
})
export class SegnalazioniProtocollateAssegnaComponent
  extends SegnalazioneEdit
  implements OnInit
{
  fields: FormlyFieldConfig[] = [
    {
      type: 'stepper',
      templateOptions: {
        orientation: 'horizontal',
      },
      fieldGroup: [
        ...[
          {
            key: 'assegna',
            expressionProperties: {
              'templateOptions.label': this._translateService.stream('Assegna'),
            },
            fieldGroup: [
              {
                key: 'data',
                type: 'datepicker',
                defaultValue: new Date(),
                templateOptions: {
                  required: true,
                },
                expressionProperties: {
                  'templateOptions.label':
                    this._translateService.stream('Data'),
                },
              },
              {
                className: 'flex-1',
                type: 'autocomplete',
                key: 'squadra',
                templateOptions: {
                  required: true,
                  filter: (
                    term: any,
                    limit: number,
                    offset: number,
                    parent?: any
                  ) =>
                    this._squadrePisSelectGQL
                      .watch({
                        limit,
                        offset,
                        ...(term && typeof term === 'string'
                          ? { nome: { _ilike: '%' + term + '%' } }
                          : {}),
                      })
                      .valueChanges.pipe(
                        map((result) => result.data?.pis_squadra)
                      ),
                },
                expressionProperties: {
                  'templateOptions.label':
                    this._translateService.stream('Squadra'),
                },
              },
              {
                key: 'note',
                type: 'textarea',
                expressionProperties: {
                  'templateOptions.label':
                    this._translateService.stream('Note'),
                },
              },
            ],
          },
        ],
        ...this.steps.filter((step) => step.key != 'intervento'),
      ],
    },
  ];

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
    private _squadrePisSelectGQL: SquadrePisSelectGQL,
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

  ngOnInit(): void {
    this.disabled.base.next(true);
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
    console.log(this.model);

    this._updateSegnalazioneGQL
      .mutate({
        on_conflict: {
          constraint: Pis_Segnalazione_Constraint.SegnalazionePkey,
          update_columns: [
            Pis_Segnalazione_Update_Column.Stato,
            Pis_Segnalazione_Update_Column.CaposquadraAssegnatario,
          ],
        },
        segnalazione: {
          id: this.id,
          stato: Pis__Stato_Segnalazione_Enum.Assegnata,
          caposquadra_assegnatario:
            this.model.assegna.squadra.membri[0].membro.username,
          eventi: {
            data: [
              {
                created_at: this.model.assegna.data,
                note: this.model.assegna.note,
                stato: Pis__Stato_Segnalazione_Enum.Assegnata,
                squadra_id: this.model.assegna.squadra.id,
              },
            ],
          },
        },
      })
      .subscribe({
        next: () => () => (this.dirty = false),
        error: (e) => this.onSaveError(e),
        complete: () => {
          this.dirty = false;
          this.saving = false;
          if (event.loading) this._loaderService.stop();
          if (event.type == 'def')
            this._router.navigate(['/', 'pis', 'segnalazioni', 'protocollate']);
        },
      });
  }
}
