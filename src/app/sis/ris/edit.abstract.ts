import { HttpClient } from '@angular/common/http';
import { Directive } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchResult } from '@apollo/client';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { firstValueFrom, map, mergeMap } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ConfirmDialogComponent } from 'src/app/_core/_components/confirm-dialog/confirm-dialog.component';
import { Dirty } from 'src/app/_core/_components/form/form.component';
import { marker } from 'src/app/_core/_formly/_components/mappa-formly/mappa-formly.component';
import { fileListToBase64 } from 'src/app/_core/_functions';
import {
  AlimentazioneVeicoloSelectGQL,
  CittaSelectGQL,
  CiviciSelectGQL,
  CondizioniTrafficoSelectGQL,
  ConducenteSelectGQL,
  ConnessioniGrafoSelectGQL,
  ConseguenzaVeicoloSelectGQL,
  DecessiTipologiaSelectGQL,
  DestinazioneDecisioneSelectGQL,
  EnteSecondarioSelectGQL,
  EnteSelectGQL,
  Exact,
  ImpiantoSemaforicoSelectGQL,
  InfortunatoInformazioneSelectGQL,
  InfortunatoTrasportatoSelectGQL,
  LocalizzazioneAltroSelectGQL,
  LocalizzazioneCondizioniAtmosfericheSelectGQL,
  LocalizzazioneExtraAbitatoSelectGQL,
  LocalizzazioneFondoStradaleSelectGQL,
  LocalizzazioneIlluminazioneSelectGQL,
  LocalizzazioneParticolaritaStradaSelectGQL,
  LocalizzazionePavimentazioneSelectGQL,
  LocalizzazioneTipoStradaSelectGQL,
  LocalizzazioneVisibilitaSelectGQL,
  LocatarioSelectGQL,
  MunicipalitaSelectGQL,
  NaturaIncidenteSelectGQL,
  PatenteCategoriaSelectGQL,
  PedoneSelectGQL,
  PosizioneFinaleVeicoloCarreggiataSelectGQL,
  PosizioneFinaleVeicoloMarginiSelectGQL,
  ProprietarioGiuridicoSelectGQL,
  ProprietarioSelectGQL,
  PuntiRilieviNoTipologiaSelectGQL,
  QuartiereSelectGQL,
  RetrovisoreEsternoSelectGQL,
  RisConsegnatoASelectGQL,
  RisGQL,
  Sis_Ris_Bool_Exp,
  SessoSelectGQL,
  SiNoAltroSelectGQL,
  SostegniIpiSelectGQL,
  StatoVeicoloSelectGQL,
  TestimoneSelectGQL,
  TipologiaPosizionamentoToponimoSelectGQL,
  TipologiaRisSelectGQL,
  TipologiaVeicoloSelectGQL,
  TipologiaVerbaleSelectGQL,
  TitoloSelectGQL,
  ToponimoNomeSelectGQL,
  ToponimoSelectGQL,
  TracciaSuoloFrenataTipologiaSelectGQL,
  TracciaSuoloTerminazioneAndamentoSelectGQL,
  TracciaSuoloTerminazioneFormaSelectGQL,
  TracciaSuoloTerminazioneIntensitaSelectGQL,
  TracciaSuoloTerminazioneSelectGQL,
  TracciaSuoloTerminazioneTipologiaSelectGQL,
  TracciaSuoloTipologiaSelectGQL,
  TrasportatoPosizioneSelectGQL,
  TrasportatoSelectGQL,
  TrasportatoStatoSelectGQL,
  UpdateRisGQL,
  UpdateRisMutation,
  UsoVeicoloSelectGQL,
  VeicoloSelectGQL,
  VisibilitaLimitataTipologiaSelectGQL,
  Sis__Stato_Ris_Enum,
  Sis_Associazione_Tipologia_Ris_Constraint,
  Sis_Associazione_Tipologia_Ris_Update_Column,
  Sis_Associazione_Ente_Segnalatore_Constraint,
  Sis_Associazione_Ente_Segnalatore_Update_Column,
  Sis_Associazione_Ente_Primo_Intervento_Constraint,
  Sis_Associazione_Ente_Primo_Intervento_Update_Column,
  Sis_Associazione_Ente_Secondario_Intervenuti_Constraint,
  Sis_Associazione_Ente_Secondario_Intervenuti_Update_Column,
  Sis_Associazione_Natura_Incidente_Constraint,
  Sis_Associazione_Natura_Incidente_Update_Column,
  Sis_Associazione_Posizione_Finale_Veicolo_Carreggiata_Constraint,
  Sis_Associazione_Posizione_Finale_Veicolo_Carreggiata_Update_Column,
  Sis_Associazione_Posizione_Finale_Veicolo_Margini_Constraint,
  Sis_Associazione_Posizione_Finale_Veicolo_Margini_Update_Column,
  Sis_Associazione_Posizione_Finale_Veicolo_Fuori_Sede_Constraint,
  Sis_Associazione_Posizione_Finale_Veicolo_Fuori_Sede_Update_Column,
  Sis_Associazione_Conseguenza_Veicolo_Constraint,
  Sis_Associazione_Conseguenza_Veicolo_Update_Column,
  Sis_Associazione_Localizzazione_Tipo_Strada_Constraint,
  Sis_Associazione_Localizzazione_Tipo_Strada_Update_Column,
  Sis_Associazione_Localizzazione_Extra_Abitato_Constraint,
  Sis_Associazione_Localizzazione_Extra_Abitato_Update_Column,
  Sis_Associazione_Localizzazione_Particolarita_Strada_Constraint,
  Sis_Associazione_Localizzazione_Particolarita_Strada_Update_Column,
  Sis_Associazione_Localizzazione_Pavimentazione_Constraint,
  Sis_Associazione_Localizzazione_Pavimentazione_Update_Column,
  Sis_Associazione_Localizzazione_Fondo_Stradale_Constraint,
  Sis_Associazione_Localizzazione_Fondo_Stradale_Update_Column,
  Sis_Associazione_Localizzazione_Condizioni_Atmosferiche_Constraint,
  Sis_Associazione_Localizzazione_Condizioni_Atmosferiche_Update_Column,
  Sis_Associazione_Localizzazione_Visibilita_Constraint,
  Sis_Associazione_Localizzazione_Visibilita_Update_Column,
  Sis_Associazione_Localizzazione_Illuminazione_Constraint,
  Sis_Associazione_Localizzazione_Illuminazione_Update_Column,
  Sis_Associzione_Localizzazione_Condizioni_Traffico_Constraint,
  Sis_Associzione_Localizzazione_Condizioni_Traffico_Update_Column,
  Sis_Associazione_Localizzazione_Altro_Constraint,
  Sis_Associazione_Localizzazione_Altro_Update_Column,
  LocalizzazioneCondizioniTrafficoSelectGQL,
  Sis_Associazione_Decessi_Tipologie_Constraint,
  Sis_Associazione_Decessi_Tipologie_Update_Column,
  Sis_Proprietario_Constraint,
  Sis_Proprietario_Update_Column,
  Sis_Proprietario_Giuridico_Constraint,
  Sis_Proprietario_Giuridico_Update_Column,
  Sis_Locatario_Constraint,
  Sis_Locatario_Update_Column,
  Sis_Conducente_Constraint,
  Sis_Conducente_Update_Column,
  Sis_Associazione_Patente_Constraint,
  Sis_Associazione_Patente_Update_Column,
  Sis_Trasportato_Constraint,
  Sis_Trasportato_Update_Column,
  Sis_Testimone_Constraint,
  Sis_Testimone_Update_Column,
  Sis_Pedone_Constraint,
  Sis_Pedone_Update_Column,
  Sis_Altro_Constraint,
  Sis_Altro_Update_Column,
  Sis_Veicolo_Constraint,
  Sis_Veicolo_Update_Column,
  Sis_Trasportati_Veicolo_Constraint,
  Sis_Trasportati_Veicolo_Update_Column,
  Sis_Infrazione_Constraint,
  Sis_Infrazione_Update_Column,
  Sis_Infortunato_Constraint,
  Sis_Infortunato_Update_Column,
  Sis_Associazione_Informazioni_Infortunato_Constraint,
  Sis_Associazione_Informazioni_Infortunato_Update_Column,
  Sis_Accertamento_Constraint,
  Sis_Accertamento_Update_Column,
  Sis_Assegnazione_Condizioni_Meteo_Visibilita_Limitata_Tipologia_Constraint,
  Sis_Assegnazione_Condizioni_Meteo_Visibilita_Limitata_Tipologia_Update_Column,
  Sis_Verbale_Constraint,
  Sis_Verbale_Update_Column,
  UnitaOperativaSelectGQL,
  GeneraProtocolloGQL,
  Sis_Agente_Accertatore_Constraint,
  Sis_Agente_Accertatore_Update_Column,
  SezioneProtocolloSelectGQL,
  SpecificaPosizionamentoToponimoSelectGQL,
  NazioneSelectGQL,
  Gis_Posizionamento_Toponimo_Constraint,
  Gis_Posizionamento_Toponimo_Update_Column,
  Protocollo_Protocollo_Constraint,
  Protocollo_Protocollo_Update_Column,
  Protocollo_Protocollo_Destinatario_Constraint,
  Protocollo_Protocollo_Destinatario_Update_Column,
  Protocollo_Protocollo_Destinatario_Esterno_Constraint,
  Protocollo_Protocollo_Destinatario_Esterno_Update_Column,
} from 'src/app/_core/_services/generated/graphql';
import { RequiredService } from 'src/app/_core/_services/required.service';
import { RolesService } from 'src/app/_core/_services/roles.service';
import { environment } from 'src/environments/environment';

@Directive()
export abstract class RisEdit extends Dirty {
  disabled: any = {
    base: new BehaviorSubject<boolean>(false),
    complete: new BehaviorSubject<boolean>(true),
  };
  hide: any = {
    complete: new BehaviorSubject<boolean>(true),
  };

  form = new FormGroup({});
  model: any = {
    persone: {
      proprietari: [],
      proprietari_giuridico: [],
      locatari: [],
      conducenti: [],
      trasportati: [],
      testimoni: [],
      pedoni: [],
      altri: [],
    },
    veicoli: [],
  };
  options: FormlyFormOptions = {};
  id: number;

  startData: any = {
    allegati: [],
    protocollo: {
      destinatari: [],
    },
    tipologia_ris: [],
    agenti_accertatori: [],
    enti_segnalatori: [],
    enti_primo_intervento: [],
    enti_secondario_intervenuti: [],
    natura_incidente: [],
    posizioni_finali_veicolo_carreggiata: [],
    posizioni_finali_veicolo_margini: [],
    posizioni_finali_veicolo_fuori_sede: [],
    conseguenze_veicolo: [],
    localizzazioni_extra_abitato: [],
    localizzazioni_tipo_strade: [],
    localizzazioni_particolarita_strada: [],
    localizzazioni_pavimentazione: [],
    localizzazioni_fondo_stradale: [],
    localizzazioni_condizioni_atmosferiche: [],
    localizzazioni_visibilita: [],
    localizzazioni_illuminazione: [],
    localizzazioni_condizioni_traffico: [],
    localizzazioni_altro: [],
    decessi_tipologie: [],
    persone: {
      proprietari: [],
      proprietari_giuridico: [],
      locatari: [],
      conducenti: [],
      trasportati: [],
      testimoni: [],
      pedoni: [],
      altri: [],
    },
    veicoli: [],
    infrazioni: [],
    infortunati: [],
    accertamenti: [],
    verbali: [],
    conducenti_patente: {},
    veicoli_trasportati: {},
    infortunati_informazioni: {},
    accertamenti_visibilita: {},
  };
  saving: boolean = false;

  steps: FormlyFieldConfig[] = [
    {
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('R.I.S.'),
      },
      key: 'ris',
      fieldGroup: [
        {
          key: 'tipologia_ris',
          type: 'autocomplete',
          templateOptions: {
            required: this._required.sis('ris.tipologia_ris'),
            multiple: true,
            filter: (term: any, limit: number, offset: number, parent?: any) =>
              this._tipologiaRisSelect
                .watch({
                  limit: limit,
                  offset: offset,
                  ...(term && typeof term === 'string'
                    ? { nome: { _ilike: '%' + term + '%' } }
                    : {}),
                })
                .valueChanges.pipe(
                  map((result) => result.data?.sis__tipologia_ris)
                ),
          },
          expressionProperties: {
            'templateOptions.label': this._translateService.stream('Tipologia'),
            'templateOptions.disabled': this.disabled.base,
          },
        },
        {
          fieldGroupClassName: 'display-flex',
          fieldGroup: [
            {
              key: 'id',
              className: 'flex-1',
              type: 'input',
              templateOptions: {
                disabled: true,
              },
              expressionProperties: {
                'templateOptions.label':
                  this._translateService.stream('R.I.S. numero'),
              },
            },
            {
              key: 'unita_operativa',
              className: 'flex-1',
              type: 'autocomplete',
              templateOptions: {
                required: this._required.sis('ris.unita_operativa'),
                filter: (
                  term: any,
                  limit: number,
                  offset: number,
                  parent?: any
                ) =>
                  this._unitaOperativaSelectGQL
                    .watch({
                      limit: limit,
                      offset: offset,
                      ...(term && typeof term === 'string'
                        ? { nome: { _ilike: '%' + term + '%' } }
                        : {}),
                    })
                    .valueChanges.pipe(
                      map((result) => result.data?.sis_unita_operativa)
                    ),
              },
              expressionProperties: {
                'templateOptions.label':
                  this._translateService.stream('U.O. Sezione'),
                'templateOptions.disabled': this.disabled.base,
              },
            },
          ],
        },
        {
          key: 'agenti_accertatori',
          type: 'autocomplete',
          templateOptions: {
            required: this._required.sis('ris.agenti_accertatori'),
            multiple: true,
            displayWith: (e: any) =>
              e
                ? e.agente.grado +
                  ' ' +
                  e.agente.nome +
                  ' ' +
                  e.agente.cognome +
                  ' - ' +
                  e.agente.matricola
                : '',
            filter: (term: any, limit: number, offset: number, parent?: any) =>
              this._http
                .get<Array<any>>(
                  environment.keycloak.admin +
                    '/groups/eac82fab-2841-47f2-b60f-893146031715/members'
                )
                .pipe(
                  map((result) =>
                    result
                      .filter(
                        (utente) =>
                          utente.firstName
                            .toLowerCase()
                            .indexOf(term.toLowerCase()) != -1 ||
                          utente.lastName
                            .toLowerCase()
                            .indexOf(term.toLowerCase()) != -1 ||
                          utente.attributes.matricola[0]
                            .toLowerCase()
                            .indexOf(term.toLowerCase()) != -1 ||
                          utente.attributes.grado[0]
                            .toLowerCase()
                            .indexOf(term.toLowerCase()) != -1
                      )
                      .map((r) => {
                        return {
                          username: r.username,
                          agente: {
                            nome: r.firstName,
                            cognome: r.lastName,
                            grado: r.attributes.grado[0],
                            matricola: r.attributes.matricola[0],
                          },
                        };
                      })
                  )
                ),
          },
          expressionProperties: {
            'templateOptions.label':
              this._translateService.stream('Agenti accertatori'),
            'templateOptions.disabled': this.disabled.base,
          },
        },
        {
          key: 'operazione_terminate_data',
          type: 'datepicker',
          templateOptions: {
            required: this._required.sis('ris.operazione_terminate_data'),
          },
          expressionProperties: {
            'templateOptions.label': this._translateService.stream(
              'Operazioni terminate in data'
            ),
            'templateOptions.disabled': this.disabled.base,
          },
        },
        {
          fieldGroupClassName: 'display-flex',
          fieldGroup: [
            {
              key: 'ris_consegnato_a',
              className: 'flex-1',
              type: 'autocomplete',
              templateOptions: {
                required: this._required.sis('ris.ris_consegnato_a'),
                filter: (
                  term: any,
                  limit: number,
                  offset: number,
                  parent?: any
                ) =>
                  this._risConsegnatoASelect
                    .watch({
                      limit: limit,
                      offset: offset,
                      ...(term && typeof term === 'string'
                        ? { nome: { _ilike: '%' + term + '%' } }
                        : {}),
                    })
                    .valueChanges.pipe(
                      map((result) => result.data?.sis__ris_consegnato_a)
                    ),
              },
              expressionProperties: {
                'templateOptions.label': this._translateService.stream(
                  "Consegnato all'ufficio"
                ),
                'templateOptions.disabled': this.disabled.base,
              },
            },
            {
              key: 'ris_consegnato_a_altro',
              className: 'flex-1',
              type: 'input',
              templateOptions: {
                required: this._required.sis('ris.ris_consegnato_a_altro'),
              },
              hideExpression: (model: any, formState: any) =>
                !(
                  model &&
                  model.ris_consegnato_a &&
                  model.ris_consegnato_a.id == 3
                ),
              expressionProperties: {
                'templateOptions.label':
                  this._translateService.stream('Specificare altro'),
                'templateOptions.disabled': this.disabled.base,
              },
            },
            {
              key: 'ris_consegnato_data',
              className: 'flex-1',
              type: 'datepicker',
              templateOptions: {
                required: this._required.sis('ris.ris_consegnato_data'),
              },
              expressionProperties: {
                'templateOptions.label':
                  this._translateService.stream('In data'),
                'templateOptions.disabled': this.disabled.base,
              },
            },
          ],
        },
      ],
    },
    {
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Intervento'),
      },
      key: 'intervento',
      fieldGroup: [
        {
          type: 'stepper',
          templateOptions: {
            orientation: 'vertical',
            buttonSwitch: false,
          },
          fieldGroup: [
            {
              expressionProperties: {
                'templateOptions.label':
                  this._translateService.stream('Primo intervento'),
              },
              fieldGroup: [
                {
                  key: 'enti_segnalatori',
                  type: 'autocomplete',
                  templateOptions: {
                    required: this._required.sis('intervento.enti_segnalatori'),
                    multiple: true,
                    displayWith: (e: any) =>
                      e
                        ? e.nome +
                          (e.abbreviazione != null && e.abbreviazione != ''
                            ? ' - ' + e.abbreviazione
                            : '')
                        : '',
                    filter: (
                      term: any,
                      limit: number,
                      offset: number,
                      parent?: any
                    ) =>
                      this._enteSelect
                        .watch({
                          limit: limit,
                          offset: offset,
                          ...(term && typeof term === 'string'
                            ? { nome: { _ilike: '%' + term + '%' } }
                            : {}),
                        })
                        .valueChanges.pipe(
                          map((result) => result.data?.sis__ente)
                        ),
                  },
                  expressionProperties: {
                    'templateOptions.label':
                      this._translateService.stream('Segnalato da'),
                    'templateOptions.disabled': this.disabled.base,
                  },
                },
                {
                  key: 'ente_segnalatore_note',
                  className: 'flex-1',
                  type: 'input',
                  templateOptions: {
                    required: this._required.sis(
                      'intervento.ente_segnalatore_note'
                    ),
                  },
                  hideExpression: (model: any, formState: any) =>
                    !(
                      model &&
                      model.enti_segnalatori &&
                      new Set(model.enti_segnalatori.map((e: any) => e.id)).has(
                        10
                      )
                    ),
                  expressionProperties: {
                    'templateOptions.label':
                      this._translateService.stream('Specificare altro'),
                    'templateOptions.disabled': this.disabled.base,
                  },
                },

                {
                  key: 'data_segnalazione',
                  type: 'datetimepicker',
                  templateOptions: {
                    required: this._required.sis(
                      'intervento.data_segnalazione'
                    ),
                  },
                  expressionProperties: {
                    'templateOptions.label':
                      this._translateService.stream('Data segnalazione'),
                    'templateOptions.disabled': this.disabled.base,
                  },
                },
                {
                  fieldGroupClassName: 'display-flex',
                  fieldGroup: [
                    {
                      key: 'data_presunta',
                      className: 'flex-1',
                      type: 'datetimepicker',
                      templateOptions: {
                        required: this._required.sis(
                          'intervento.data_presunta'
                        ),
                      },
                      expressionProperties: {
                        'templateOptions.label': this._translateService.stream(
                          "Data presunta dell'incidente"
                        ),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                    {
                      key: 'data_intervento',
                      className: 'flex-1',
                      type: 'datetimepicker',
                      templateOptions: {
                        required: this._required.sis(
                          'intervento.data_intervento'
                        ),
                      },
                      expressionProperties: {
                        'templateOptions.label':
                          this._translateService.stream('Data intervento'),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                  ],
                },
                {
                  className: 'section-label',
                  template:
                    '<h3><b>' +
                    this._translateService.instant(
                      "N.B. riportare, i nominativi e recapiti telefonici dei componenti dell'ambulanza intervenuta"
                    ) +
                    '</b></h3>',
                },
                {
                  key: 'note_intervento',
                  type: 'textarea',
                  templateOptions: {
                    required: this._required.sis('intervento.note_intervento'),
                  },
                  expressionProperties: {
                    'templateOptions.label':
                      this._translateService.stream('Note'),
                    'templateOptions.disabled': this.disabled.base,
                  },
                },

                {
                  className: 'section-label',
                  template:
                    '<h3><b>' +
                    this._translateService.instant(
                      'Sul luogo del sinistro, il primo intervento veniva effettuato da personale rispettivamente appartenente a:'
                    ) +
                    '</b></h3>',
                },

                {
                  key: 'enti_primo_intervento',
                  type: 'repeat',
                  expressionProperties: {
                    'templateOptions.addText':
                      this._translateService.stream('Aggiungi'),
                    'templateOptions.disabled': this.disabled.base,
                  },
                  fieldArray: {
                    fieldGroup: [
                      {
                        key: 'id',
                        className: 'hidden',
                        type: 'input',
                        templateOptions: {
                          readonly: true,
                        },
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'ente',
                            className: 'flex-1',
                            type: 'autocomplete',
                            templateOptions: {
                              required: this._required.sis(
                                'intervento.enti_primo_intervento.ente'
                              ),
                              displayWith: (e: any) =>
                                e
                                  ? e.nome +
                                    (e.abbreviazione != null &&
                                    e.abbreviazione != ''
                                      ? ' - ' + e.abbreviazione
                                      : '')
                                  : '',
                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._enteSelect
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { nome: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map((result) => result.data?.sis__ente)
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Ente'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'tipo',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'intervento.enti_primo_intervento.tipo'
                              ),
                            },

                            expressionProperties: {
                              'templateOptions.label': (
                                model: any,
                                formState: any
                              ) => {
                                return this._translateService.instant(
                                  '{enti_primo_intervento}',
                                  {
                                    label:
                                      model && model.ente
                                        ? model.ente.label_tipo
                                        : '',
                                  }
                                );
                              },
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'targa_auto',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'intervento.enti_primo_intervento.targa_auto'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Targa auto'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                        ],
                      },
                    ],
                  },
                },

                {
                  key: 'ente_primo_intervento_note',
                  type: 'textarea',
                  templateOptions: {
                    required: this._required.sis(
                      'intervento.ente_primo_intervento_note'
                    ),
                  },
                  expressionProperties: {
                    'templateOptions.label': this._translateService.stream(
                      'Successivamente intervenivano'
                    ),
                    'templateOptions.disabled': this.disabled.base,
                  },
                },
              ],
            },
            {
              expressionProperties: {
                'templateOptions.label':
                  this._translateService.stream('Enti intervenuti'),
              },
              fieldGroup: [
                {
                  fieldGroupClassName: 'display-flex',
                  fieldGroup: [
                    {
                      key: 'enti_secondario_intervenuti',
                      type: 'autocomplete',
                      className: 'flex-1',

                      templateOptions: {
                        required: this._required.sis(
                          'intervento.enti_secondario_intervenuti'
                        ),
                        multiple: true,
                        filter: (
                          term: any,
                          limit: number,
                          offset: number,
                          parent?: any
                        ) =>
                          this._enteSecondarioSelect
                            .watch({
                              limit: limit,
                              offset: offset,
                              ...(term && typeof term === 'string'
                                ? { nome: { _ilike: '%' + term + '%' } }
                                : {}),
                            })
                            .valueChanges.pipe(
                              map((result) => result.data?.sis__ente_secondario)
                            ),
                      },
                      expressionProperties: {
                        'templateOptions.label':
                          this._translateService.stream('Segnalato da'),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                    {
                      key: 'ente_secondario_intervenuti_altro',
                      hideExpression: (model: any, formState: any) =>
                        !(
                          model &&
                          model.enti_secondario_intervenuti &&
                          new Set(
                            model.enti_secondario_intervenuti.map(
                              (e: any) => e.id
                            )
                          ).has(9)
                        ),
                      className: 'flex-1',
                      type: 'input',
                      templateOptions: {
                        required: this._required.sis(
                          'intervento.ente_secondario_intervenuti_altro'
                        ),
                      },
                      expressionProperties: {
                        'templateOptions.label':
                          this._translateService.stream('Specificare altro'),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                  ],
                },

                {
                  fieldGroupClassName: 'display-flex',
                  hideExpression: (model: any, formState: any) =>
                    !(
                      model &&
                      model.enti_secondario_intervenuti &&
                      new Set(
                        model.enti_secondario_intervenuti.map((e: any) => e.id)
                      ).has(1)
                    ),
                  fieldGroup: [
                    {
                      key: 'ente_secondario_intervenuti_vvff_comando',
                      className: 'flex-1',
                      type: 'input',
                      templateOptions: {
                        required: this._required.sis(
                          'intervento.ente_secondario_intervenuti_vvff_comando'
                        ),
                      },
                      expressionProperties: {
                        'templateOptions.label': this._translateService.stream(
                          'Comando di provenienza'
                        ),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                    {
                      key: 'ente_secondario_intervenuti_vvff_capo_pattuglia',
                      className: 'flex-1',
                      type: 'input',
                      templateOptions: {
                        required: this._required.sis(
                          'intervento.ente_secondario_intervenuti_vvff_capo_pattuglia'
                        ),
                      },
                      expressionProperties: {
                        'templateOptions.label':
                          this._translateService.stream('Copo pattuglia'),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                    {
                      key: 'ente_secondario_intervenuti_vvff_gia_intervenuti',
                      type: 'toggle',
                      className: 'flex-1',
                      templateOptions: {
                        appearance: 'standard',
                      },
                      expressionProperties: {
                        'templateOptions.label':
                          this._translateService.stream('Già intervenuti?'),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                  ],
                },
                {
                  key: 'ente_secondario_intervenuti_motivazione',
                  type: 'textarea',
                  templateOptions: {
                    required: this._required.sis(
                      'intervento.ente_secondario_intervenuti_motivazione'
                    ),
                  },
                  expressionProperties: {
                    'templateOptions.label': this._translateService.stream(
                      'Motivazione - (per ogni ente) - si accorda a -> i cui componenti provvedevano'
                    ),
                    'templateOptions.disabled': this.disabled.base,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Incidente'),
      },
      key: 'incidente',
      fieldGroup: [
        {
          type: 'stepper',
          templateOptions: {
            orientation: 'vertical',
            buttonSwitch: false,
          },
          fieldGroup: [
            {
              expressionProperties: {
                'templateOptions.label':
                  this._translateService.stream('Informazioni'),
              },
              fieldGroup: [
                {
                  fieldGroupClassName: 'display-flex',
                  fieldGroup: [
                    {
                      key: 'natura_incidente',
                      className: 'flex-2',

                      type: 'autocomplete',
                      templateOptions: {
                        required: this._required.sis(
                          'incidente.natura_incidente'
                        ),
                        multiple: true,
                        filter: (
                          term: any,
                          limit: number,
                          offset: number,
                          parent?: any
                        ) =>
                          this._naturaIncidenteSelect
                            .watch({
                              limit: limit,
                              offset: offset,
                              ...(term && typeof term === 'string'
                                ? { nome: { _ilike: '%' + term + '%' } }
                                : {}),
                            })
                            .valueChanges.pipe(
                              map(
                                (result) => result.data?.sis__natura_incidente
                              )
                            ),
                      },
                      expressionProperties: {
                        'templateOptions.label': this._translateService.stream(
                          "Natura dell'incidente"
                        ),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                    {
                      key: 'natura_incidente_note',
                      className: 'flex-1',
                      type: 'input',
                      templateOptions: {
                        required: this._required.sis(
                          'incidente.natura_incidente_note'
                        ),
                      },
                      hideExpression: (model: any, formState: any) =>
                        !(
                          model &&
                          model.natura_incidente &&
                          new Set(
                            model.natura_incidente.map((e: any) => e.id)
                          ).has(21)
                        ),
                      expressionProperties: {
                        'templateOptions.label':
                          this._translateService.stream('Specificare altro'),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                  ],
                },
                {
                  key: 'dinamica',
                  type: 'textarea',
                  templateOptions: {
                    required: this._required.sis('incidente.dinamica'),
                  },
                  expressionProperties: {
                    'templateOptions.label':
                      this._translateService.stream('Dinamica'),
                    'templateOptions.disabled': this.disabled.base,
                  },
                },
                {
                  key: 'altro',
                  type: 'textarea',
                  templateOptions: {
                    required: this._required.sis('incidente.altro'),
                  },
                  expressionProperties: {
                    'templateOptions.label':
                      this._translateService.stream('Altro'),
                    'templateOptions.disabled': this.disabled.base,
                  },
                },
              ],
            },
            {
              expressionProperties: {
                'templateOptions.label': this._translateService.stream(
                  'Posizione finale dei veicoli'
                ),
              },
              fieldGroup: [
                {
                  fieldGroupClassName: 'display-flex',
                  fieldGroup: [
                    {
                      key: 'posizioni_finali_veicolo_carreggiata',
                      className: 'flex-2',

                      type: 'autocomplete',
                      templateOptions: {
                        required: this._required.sis(
                          'incidente.posizioni_finali_veicolo_carreggiata'
                        ),
                        multiple: true,
                        filter: (
                          term: any,
                          limit: number,
                          offset: number,
                          parent?: any
                        ) =>
                          this._posizioneFinaleVeicoloCarreggiataSelect
                            .watch({
                              limit: limit,
                              offset: offset,
                              ...(term && typeof term === 'string'
                                ? { nome: { _ilike: '%' + term + '%' } }
                                : {}),
                            })
                            .valueChanges.pipe(
                              map(
                                (result) =>
                                  result.data
                                    ?.sis__posizione_finale_veicolo_carreggiata
                              )
                            ),
                      },
                      expressionProperties: {
                        'templateOptions.label': this._translateService.stream(
                          'Nella carreggiata di marcia'
                        ),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                    {
                      key: 'posizione_finale_veicolo_carreggiata_note',
                      className: 'flex-1',
                      type: 'input',
                      templateOptions: {
                        required: this._required.sis(
                          'incidente.posizione_finale_veicolo_carreggiata_note'
                        ),
                      },
                      hideExpression: (model: any, formState: any) =>
                        !(
                          model &&
                          model.posizioni_finali_veicolo_carreggiata &&
                          new Set(
                            model.posizioni_finali_veicolo_carreggiata.map(
                              (e: any) => e.id
                            )
                          ).has(4)
                        ),
                      expressionProperties: {
                        'templateOptions.label':
                          this._translateService.stream('Specificare altro'),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                  ],
                },

                {
                  fieldGroupClassName: 'display-flex',
                  fieldGroup: [
                    {
                      key: 'posizioni_finali_veicolo_margini',
                      className: 'flex-2',

                      type: 'autocomplete',
                      templateOptions: {
                        required: this._required.sis(
                          'incidente.posizioni_finali_veicolo_margini'
                        ),
                        multiple: true,
                        filter: (
                          term: any,
                          limit: number,
                          offset: number,
                          parent?: any
                        ) =>
                          this._posizioneFinaleVeicoloMarginiSelect
                            .watch({
                              limit: limit,
                              offset: offset,
                              ...(term && typeof term === 'string'
                                ? { nome: { _ilike: '%' + term + '%' } }
                                : {}),
                            })
                            .valueChanges.pipe(
                              map(
                                (result) =>
                                  result.data
                                    ?.sis__posizione_finale_veicolo_margini
                              )
                            ),
                      },
                      expressionProperties: {
                        'templateOptions.label': this._translateService.stream(
                          'Finiti ai margini della carreggiata nella sede stradale'
                        ),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                    {
                      key: 'posizione_finale_veicolo_margini_note',
                      className: 'flex-1',
                      type: 'input',
                      templateOptions: {
                        required: this._required.sis(
                          'incidente.posizione_finale_veicolo_margini_note'
                        ),
                      },
                      hideExpression: (model: any, formState: any) =>
                        !(
                          model &&
                          model.posizioni_finali_veicolo_margini &&
                          new Set(
                            model.posizioni_finali_veicolo_margini.map(
                              (e: any) => e.id
                            )
                          ).has(7)
                        ),
                      expressionProperties: {
                        'templateOptions.label':
                          this._translateService.stream('Specificare altro'),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                  ],
                },
                {
                  fieldGroupClassName: 'display-flex',
                  fieldGroup: [
                    {
                      key: 'posizioni_finali_veicolo_fuori_sede',
                      className: 'flex-2',

                      type: 'autocomplete',
                      templateOptions: {
                        required: this._required.sis(
                          'incidente.posizioni_finali_veicolo_fuori_sede'
                        ),
                        multiple: true,
                        filter: (
                          term: any,
                          limit: number,
                          offset: number,
                          parent?: any
                        ) =>
                          this._posizioneFinaleVeicoloFuoriSedeSelect
                            .watch({
                              limit: limit,
                              offset: offset,
                              ...(term && typeof term === 'string'
                                ? { nome: { _ilike: '%' + term + '%' } }
                                : {}),
                            })
                            .valueChanges.pipe(
                              map(
                                (result) =>
                                  result.data
                                    ?.sis__posizione_finale_veicolo_carreggiata
                              )
                            ),
                      },
                      expressionProperties: {
                        'templateOptions.label': this._translateService.stream(
                          'Fuori sede stradale'
                        ),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                    {
                      key: 'posizione_finale_veicolo_fuori_sede_note',
                      className: 'flex-1',
                      type: 'input',
                      templateOptions: {
                        required: this._required.sis(
                          'incidente.posizione_finale_veicolo_fuori_sede_note'
                        ),
                      },
                      hideExpression: (model: any, formState: any) =>
                        !(
                          model &&
                          model.posizioni_finali_veicolo_fuori_sede &&
                          new Set(
                            model.posizioni_finali_veicolo_fuori_sede.map(
                              (e: any) => e.id
                            )
                          ).has(4)
                        ),
                      expressionProperties: {
                        'templateOptions.label':
                          this._translateService.stream('Specificare altro'),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                  ],
                },
                {
                  fieldGroupClassName: 'display-flex',
                  fieldGroup: [
                    {
                      key: 'conseguenze_veicolo',
                      className: 'flex-2',

                      type: 'autocomplete',
                      templateOptions: {
                        required: this._required.sis(
                          'incidente.conseguenze_veicolo'
                        ),
                        multiple: true,
                        filter: (
                          term: any,
                          limit: number,
                          offset: number,
                          parent?: any
                        ) =>
                          this._conseguenzaVeicoloSelect
                            .watch({
                              limit: limit,
                              offset: offset,
                              ...(term && typeof term === 'string'
                                ? { nome: { _ilike: '%' + term + '%' } }
                                : {}),
                            })
                            .valueChanges.pipe(
                              map(
                                (result) =>
                                  result.data?.sis__conseguenza_veicolo
                              )
                            ),
                      },
                      expressionProperties: {
                        'templateOptions.label': this._translateService.stream(
                          'Conseguenza ai veicoli'
                        ),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                    {
                      key: 'conseguenza_veicolo_note',
                      className: 'flex-1',
                      type: 'input',
                      templateOptions: {
                        required: this._required.sis(
                          'incidente.conseguenza_veicolo_note'
                        ),
                      },
                      hideExpression: (model: any, formState: any) =>
                        !(
                          model &&
                          model.conseguenze_veicolo &&
                          new Set(
                            model.conseguenze_veicolo.map((e: any) => e.id)
                          ).has(7)
                        ),
                      expressionProperties: {
                        'templateOptions.label':
                          this._translateService.stream('Specificare altro'),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                  ],
                },
              ],
            },
            {
              expressionProperties: {
                'templateOptions.label': this._translateService.stream(
                  "Localizzazione dell'incidente"
                ),
              },
              fieldGroup: [
                {
                  fieldGroupClassName: 'display-flex',
                  fieldGroup: [
                    {
                      key: 'localizzazioni_extra_abitato',
                      className: 'flex-2',

                      type: 'autocomplete',
                      templateOptions: {
                        required: this._required.sis(
                          'incidente.localizzazioni_extra_abitato'
                        ),
                        multiple: true,
                        filter: (
                          term: any,
                          limit: number,
                          offset: number,
                          parent?: any
                        ) =>
                          this._localizzazioneExtraAbitatoSelect
                            .watch({
                              limit: limit,
                              offset: offset,
                              ...(term && typeof term === 'string'
                                ? { nome: { _ilike: '%' + term + '%' } }
                                : {}),
                            })
                            .valueChanges.pipe(
                              map(
                                (result) =>
                                  result.data?.sis__localizzazione_extra_abitato
                              )
                            ),
                      },
                      expressionProperties: {
                        'templateOptions.label':
                          this._translateService.stream('Tipologia strada'),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                    {
                      key: 'localizzazione_extra_abitato_note',
                      className: 'flex-1',
                      type: 'input',
                      templateOptions: {
                        required: this._required.sis(
                          'incidente.localizzazione_extra_abitato_note'
                        ),
                      },
                      hideExpression: (model: any, formState: any) =>
                        !(
                          model &&
                          model.localizzazioni_extra_abitato &&
                          new Set(
                            model.localizzazioni_extra_abitato.map(
                              (e: any) => e.id
                            )
                          ).has(10)
                        ),
                      expressionProperties: {
                        'templateOptions.label':
                          this._translateService.stream('Specificare altro'),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                  ],
                },
                {
                  fieldGroupClassName: 'display-flex',
                  fieldGroup: [
                    {
                      key: 'localizzazioni_tipo_strade',
                      className: 'flex-2',

                      type: 'autocomplete',
                      templateOptions: {
                        required: this._required.sis(
                          'incidente.localizzazioni_tipo_strade'
                        ),
                        multiple: true,
                        filter: (
                          term: any,
                          limit: number,
                          offset: number,
                          parent?: any
                        ) =>
                          this._localizzazioneTipoStradaSelect
                            .watch({
                              limit: limit,
                              offset: offset,
                              ...(term && typeof term === 'string'
                                ? { nome: { _ilike: '%' + term + '%' } }
                                : {}),
                            })
                            .valueChanges.pipe(
                              map(
                                (result) =>
                                  result.data?.sis__localizzazione_tipo_strada
                              )
                            ),
                      },
                      expressionProperties: {
                        'templateOptions.label':
                          this._translateService.stream('Tipo di strada'),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                    {
                      key: 'localizzazione_tipo_strada_note',
                      className: 'flex-1',
                      type: 'input',
                      templateOptions: {
                        required: this._required.sis(
                          'incidente.localizzazione_tipo_strada_note'
                        ),
                      },
                      hideExpression: (model: any, formState: any) =>
                        !(
                          model &&
                          model.localizzazioni_tipo_strade &&
                          new Set(
                            model.localizzazioni_tipo_strade.map(
                              (e: any) => e.id
                            )
                          ).has(6)
                        ),
                      expressionProperties: {
                        'templateOptions.label':
                          this._translateService.stream('Specificare altro'),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                  ],
                },
                {
                  fieldGroupClassName: 'display-flex',
                  fieldGroup: [
                    {
                      key: 'localizzazioni_particolarita_strada',
                      className: 'flex-2',

                      type: 'autocomplete',
                      templateOptions: {
                        required: this._required.sis(
                          'incidente.localizzazioni_particolarita_strada'
                        ),
                        multiple: true,
                        filter: (
                          term: any,
                          limit: number,
                          offset: number,
                          parent?: any
                        ) =>
                          this._localizzazioneParticolaritaStradaSelect
                            .watch({
                              limit: limit,
                              offset: offset,
                              ...(term && typeof term === 'string'
                                ? { nome: { _ilike: '%' + term + '%' } }
                                : {}),
                            })
                            .valueChanges.pipe(
                              map(
                                (result) =>
                                  result.data
                                    ?.sis__localizzazione_particolarita_strada
                              )
                            ),
                      },
                      expressionProperties: {
                        'templateOptions.label': this._translateService.stream(
                          'Particolarità della strada - Intersezione'
                        ),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                    {
                      key: 'localizzazione_particolarita_strada_note',
                      className: 'flex-1',
                      type: 'input',
                      templateOptions: {
                        required: this._required.sis(
                          'incidente.localizzazione_particolarita_strada_note'
                        ),
                      },
                      hideExpression: (model: any, formState: any) =>
                        !(
                          model &&
                          model.localizzazioni_particolarita_strada &&
                          new Set(
                            model.localizzazioni_particolarita_strada.map(
                              (e: any) => e.id
                            )
                          ).has(9)
                        ),
                      expressionProperties: {
                        'templateOptions.label':
                          this._translateService.stream('Specificare altro'),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                  ],
                },
                {
                  fieldGroupClassName: 'display-flex',
                  fieldGroup: [
                    {
                      key: 'localizzazioni_pavimentazione',
                      className: 'flex-2',

                      type: 'autocomplete',
                      templateOptions: {
                        required: this._required.sis(
                          'incidente.localizzazioni_pavimentazione'
                        ),
                        multiple: true,
                        filter: (
                          term: any,
                          limit: number,
                          offset: number,
                          parent?: any
                        ) =>
                          this._localizzazionePavimentazioneSelect
                            .watch({
                              limit: limit,
                              offset: offset,
                              ...(term && typeof term === 'string'
                                ? { nome: { _ilike: '%' + term + '%' } }
                                : {}),
                            })
                            .valueChanges.pipe(
                              map(
                                (result) =>
                                  result.data
                                    ?.sis__localizzazione_pavimentazione
                              )
                            ),
                      },
                      expressionProperties: {
                        'templateOptions.label':
                          this._translateService.stream('Pavimentazione'),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                    {
                      key: 'localizzazione_pavimentazione_note',
                      className: 'flex-1',
                      type: 'input',
                      templateOptions: {
                        required: this._required.sis(
                          'incidente.localizzazione_pavimentazione_note'
                        ),
                      },
                      hideExpression: (model: any, formState: any) =>
                        !(
                          model &&
                          model.localizzazioni_pavimentazione &&
                          new Set(
                            model.localizzazioni_pavimentazione.map(
                              (e: any) => e.id
                            )
                          ).has(9)
                        ),
                      expressionProperties: {
                        'templateOptions.label':
                          this._translateService.stream('Specificare altro'),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                  ],
                },
                {
                  fieldGroupClassName: 'display-flex',
                  fieldGroup: [
                    {
                      key: 'localizzazioni_fondo_stradale',
                      className: 'flex-2',

                      type: 'autocomplete',
                      templateOptions: {
                        required: this._required.sis(
                          'incidente.localizzazioni_fondo_stradale'
                        ),
                        multiple: true,
                        filter: (
                          term: any,
                          limit: number,
                          offset: number,
                          parent?: any
                        ) =>
                          this._localizzazioneFondoStradaleSelect
                            .watch({
                              limit: limit,
                              offset: offset,
                              ...(term && typeof term === 'string'
                                ? { nome: { _ilike: '%' + term + '%' } }
                                : {}),
                            })
                            .valueChanges.pipe(
                              map(
                                (result) =>
                                  result.data
                                    ?.sis__localizzazione_fondo_stradale
                              )
                            ),
                      },
                      expressionProperties: {
                        'templateOptions.label':
                          this._translateService.stream('Fondo stradale'),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                    {
                      key: 'localizzazione_fondo_stradale_note',
                      className: 'flex-1',
                      type: 'input',
                      templateOptions: {
                        required: this._required.sis(
                          'incidente.localizzazione_fondo_stradale_note'
                        ),
                      },
                      hideExpression: (model: any, formState: any) =>
                        !(
                          model &&
                          model.localizzazioni_fondo_stradale &&
                          new Set(
                            model.localizzazioni_fondo_stradale.map(
                              (e: any) => e.id
                            )
                          ).has(10)
                        ),
                      expressionProperties: {
                        'templateOptions.label':
                          this._translateService.stream('Specificare altro'),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                  ],
                },
                {
                  fieldGroupClassName: 'display-flex',
                  fieldGroup: [
                    {
                      key: 'localizzazioni_condizioni_atmosferiche',
                      className: 'flex-2',

                      type: 'autocomplete',
                      templateOptions: {
                        required: this._required.sis(
                          'incidente.localizzazioni_condizioni_atmosferiche'
                        ),
                        multiple: true,
                        filter: (
                          term: any,
                          limit: number,
                          offset: number,
                          parent?: any
                        ) =>
                          this._localizzazioneCondizioniAtmosfericheSelect
                            .watch({
                              limit: limit,
                              offset: offset,
                              ...(term && typeof term === 'string'
                                ? { nome: { _ilike: '%' + term + '%' } }
                                : {}),
                            })
                            .valueChanges.pipe(
                              map(
                                (result) =>
                                  result.data
                                    ?.sis__localizzazione_condizioni_atmosferiche
                              )
                            ),
                      },
                      expressionProperties: {
                        'templateOptions.label': this._translateService.stream(
                          'Condizioni atmosferiche'
                        ),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                    {
                      key: 'localizzazione_condizioni_atmosferiche_note',
                      className: 'flex-1',
                      type: 'input',
                      templateOptions: {
                        required: this._required.sis(
                          'incidente.localizzazione_condizioni_atmosferiche_note'
                        ),
                      },
                      hideExpression: (model: any, formState: any) =>
                        !(
                          model &&
                          model.localizzazioni_condizioni_atmosferiche &&
                          new Set(
                            model.localizzazioni_condizioni_atmosferiche.map(
                              (e: any) => e.id
                            )
                          ).has(9)
                        ),
                      expressionProperties: {
                        'templateOptions.label':
                          this._translateService.stream('Specificare altro'),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                  ],
                },
                {
                  fieldGroupClassName: 'display-flex',
                  fieldGroup: [
                    {
                      key: 'localizzazioni_visibilita',
                      className: 'flex-2',

                      type: 'autocomplete',
                      templateOptions: {
                        required: this._required.sis(
                          'incidente.localizzazioni_visibilita'
                        ),
                        multiple: true,
                        filter: (
                          term: any,
                          limit: number,
                          offset: number,
                          parent?: any
                        ) =>
                          this._localizzazioneVisibilitaSelect
                            .watch({
                              limit: limit,
                              offset: offset,
                              ...(term && typeof term === 'string'
                                ? { nome: { _ilike: '%' + term + '%' } }
                                : {}),
                            })
                            .valueChanges.pipe(
                              map(
                                (result) =>
                                  result.data?.sis__localizzazione_visibilita
                              )
                            ),
                      },
                      expressionProperties: {
                        'templateOptions.label':
                          this._translateService.stream('Visibilità'),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                    {
                      key: 'localizzazione_visibilita_note',
                      className: 'flex-1',
                      type: 'input',
                      templateOptions: {
                        required: this._required.sis(
                          'incidente.localizzazione_visibilita_note'
                        ),
                      },
                      hideExpression: (model: any, formState: any) =>
                        !(
                          model &&
                          model.localizzazioni_visibilita &&
                          new Set(
                            model.localizzazioni_visibilita.map(
                              (e: any) => e.id
                            )
                          ).has(4)
                        ),
                      expressionProperties: {
                        'templateOptions.label':
                          this._translateService.stream('Specificare altro'),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                  ],
                },
                {
                  fieldGroupClassName: 'display-flex',
                  fieldGroup: [
                    {
                      key: 'localizzazioni_illuminazione',
                      className: 'flex-2',

                      type: 'autocomplete',
                      templateOptions: {
                        required: this._required.sis(
                          'incidente.localizzazioni_illuminazione'
                        ),
                        multiple: true,
                        filter: (
                          term: any,
                          limit: number,
                          offset: number,
                          parent?: any
                        ) =>
                          this._localizzazioneIlluminazioneSelect
                            .watch({
                              limit: limit,
                              offset: offset,
                              ...(term && typeof term === 'string'
                                ? { nome: { _ilike: '%' + term + '%' } }
                                : {}),
                            })
                            .valueChanges.pipe(
                              map(
                                (result) =>
                                  result.data?.sis__localizzazione_illuminazione
                              )
                            ),
                      },
                      expressionProperties: {
                        'templateOptions.label':
                          this._translateService.stream('Illuminazione'),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                    {
                      key: 'localizzazione_illuminazione_note',
                      className: 'flex-1',
                      type: 'input',
                      templateOptions: {
                        required: this._required.sis(
                          'incidente.localizzazione_illuminazione_note'
                        ),
                      },
                      hideExpression: (model: any, formState: any) =>
                        !(
                          model &&
                          model.localizzazioni_illuminazione &&
                          new Set(
                            model.localizzazioni_illuminazione.map(
                              (e: any) => e.id
                            )
                          ).has(5)
                        ),
                      expressionProperties: {
                        'templateOptions.label':
                          this._translateService.stream('Specificare altro'),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                  ],
                },
                {
                  fieldGroupClassName: 'display-flex',
                  fieldGroup: [
                    {
                      key: 'localizzazioni_condizioni_traffico',
                      className: 'flex-2',

                      type: 'autocomplete',
                      templateOptions: {
                        required: this._required.sis(
                          'incidente.localizzazioni_condizioni_traffico'
                        ),
                        multiple: true,
                        filter: (
                          term: any,
                          limit: number,
                          offset: number,
                          parent?: any
                        ) =>
                          this._localizzazioneCondizioniTrafficoSelect
                            .watch({
                              limit: limit,
                              offset: offset,
                              ...(term && typeof term === 'string'
                                ? { nome: { _ilike: '%' + term + '%' } }
                                : {}),
                            })
                            .valueChanges.pipe(
                              map(
                                (result) =>
                                  result.data
                                    ?.sis__localizzazione_condizioni_traffico
                              )
                            ),
                      },
                      expressionProperties: {
                        'templateOptions.label': this._translateService.stream(
                          'Condizioni di traffico'
                        ),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                    {
                      key: 'localizzazione_condizioni_traffico_note',
                      className: 'flex-1',
                      type: 'input',
                      templateOptions: {
                        required: this._required.sis(
                          'incidente.localizzazione_condizioni_traffico_note'
                        ),
                      },
                      hideExpression: (model: any, formState: any) =>
                        !(
                          model &&
                          model.localizzazioni_condizioni_traffico &&
                          new Set(
                            model.localizzazioni_condizioni_traffico.map(
                              (e: any) => e.id
                            )
                          ).has(4)
                        ),
                      expressionProperties: {
                        'templateOptions.label':
                          this._translateService.stream('Specificare altro'),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                  ],
                },
                {
                  fieldGroupClassName: 'display-flex',
                  fieldGroup: [
                    {
                      key: 'localizzazioni_altro',
                      className: 'flex-2',

                      type: 'autocomplete',
                      templateOptions: {
                        required: this._required.sis(
                          'incidente.localizzazioni_altro'
                        ),
                        multiple: true,
                        filter: (
                          term: any,
                          limit: number,
                          offset: number,
                          parent?: any
                        ) =>
                          this._localizzazioneAltroSelect
                            .watch({
                              limit: limit,
                              offset: offset,
                              ...(term && typeof term === 'string'
                                ? { nome: { _ilike: '%' + term + '%' } }
                                : {}),
                            })
                            .valueChanges.pipe(
                              map(
                                (result) =>
                                  result.data?.sis__localizzazione_altro
                              )
                            ),
                      },
                      expressionProperties: {
                        'templateOptions.label':
                          this._translateService.stream('Altro'),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                    {
                      key: 'localizzazione_altro_note',
                      className: 'flex-1',
                      type: 'input',
                      templateOptions: {
                        required: this._required.sis(
                          'incidente.localizzazione_altro_note'
                        ),
                      },
                      hideExpression: (model: any, formState: any) =>
                        !(
                          model &&
                          model.localizzazioni_altro &&
                          new Set(
                            model.localizzazioni_altro.map((e: any) => e.id)
                          ).has(12)
                        ),
                      expressionProperties: {
                        'templateOptions.label':
                          this._translateService.stream('Specificare altro'),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                  ],
                },
                {
                  key: 'localizzazione_note',
                  type: 'textarea',
                  expressionProperties: {
                    'templateOptions.label': this._translateService.stream(
                      'Descrizione analitica della località'
                    ),
                    'templateOptions.disabled': this.disabled.base,
                  },
                },
              ],
            },
            {
              expressionProperties: {
                'templateOptions.label': this._translateService.stream(
                  "Localizzazione punto d'urto-investimento"
                ),
              },
              fieldGroup: [
                {
                  fieldGroupClassName: 'display-flex',
                  fieldGroup: [
                    {
                      key: 'punti_urto',
                      type: 'toggle',
                      className: 'flex-1',
                      templateOptions: {
                        appearance: 'standard',
                      },
                      expressionProperties: {
                        'templateOptions.label':
                          this._translateService.stream("Punti d'urto?"),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                    {
                      key: 'punti_urto_multiplo',
                      type: 'toggle',
                      className: 'flex-1',
                      templateOptions: {
                        appearance: 'standard',
                      },

                      hideExpression: (model: any, formState: any) =>
                        !(
                          model &&
                          model.punti_urto &&
                          model.punti_urto == true
                        ),
                      expressionProperties: {
                        'templateOptions.label':
                          this._translateService.stream("Più punti d'urto?"),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                  ],
                },
                {
                  fieldGroupClassName: 'display-flex',
                  fieldGroup: [
                    {
                      key: 'punti_investimento',
                      type: 'toggle',
                      className: 'flex-1',
                      templateOptions: {
                        appearance: 'standard',
                      },
                      expressionProperties: {
                        'templateOptions.label': this._translateService.stream(
                          "Punti d'investimento?"
                        ),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                    {
                      key: 'punti_investimento_multiplo',
                      type: 'toggle',
                      className: 'flex-1',
                      templateOptions: {
                        appearance: 'standard',
                      },

                      hideExpression: (model: any, formState: any) =>
                        !(
                          model &&
                          model.punti_investimento &&
                          model.punti_investimento == true
                        ),
                      expressionProperties: {
                        'templateOptions.label': this._translateService.stream(
                          "Più punti d'investimento?"
                        ),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                  ],
                },
                {
                  hideExpression: (model: any, formState: any) =>
                    !(
                      model &&
                      model.punti_investimento &&
                      model.punti_investimento == true
                    ) &&
                    !(model && model.punti_urto && model.punti_urto == true),
                  fieldGroup: [
                    {
                      fieldGroupClassName: 'display-flex',
                      fieldGroup: [
                        {
                          key: 'punti_rilievi',
                          type: 'toggle',
                          className: 'flex-1',
                          templateOptions: {
                            appearance: 'standard',
                          },

                          expressionProperties: {
                            'templateOptions.label':
                              this._translateService.stream(
                                'Effettuati rilievi Foto/Planimetrici?'
                              ),
                            'templateOptions.disabled': this.disabled.base,
                          },
                        },
                        {
                          key: 'punti_rilievi_no_tipologia',
                          className: 'flex-1',

                          type: 'autocomplete',

                          hideExpression: (model: any, formState: any) =>
                            !(
                              model &&
                              model.punti_rilievi &&
                              model.punti_rilievi == true
                            ),
                          templateOptions: {
                            required: this._required.sis(
                              'incidente.punti_rilievi_no_tipologia'
                            ),
                            filter: (
                              term: any,
                              limit: number,
                              offset: number,
                              parent?: any
                            ) =>
                              this._puntiRilieviNoTipologiaSelect
                                .watch({
                                  limit: limit,
                                  offset: offset,
                                  ...(term && typeof term === 'string'
                                    ? { nome: { _ilike: '%' + term + '%' } }
                                    : {}),
                                })
                                .valueChanges.pipe(
                                  map(
                                    (result) =>
                                      result.data
                                        ?.sis__punti_rilievi_no_tipologia
                                  )
                                ),
                          },
                          expressionProperties: {
                            'templateOptions.label':
                              this._translateService.stream(
                                'Tipologia di rilievi'
                              ),
                            'templateOptions.disabled': this.disabled.base,
                          },
                        },
                        {
                          key: 'punti_descrizione_analitica',
                          type: 'textarea',
                          className: 'flex-2',
                          templateOptions: {
                            required: this._required.sis(
                              'incidente.punti_descrizione_analitica'
                            ),
                          },
                          hideExpression: (model: any, formState: any) =>
                            !(
                              model &&
                              model.punti_rilievi_no_tipologia &&
                              model.punti_rilievi_no_tipologia.id == 2
                            ),
                          expressionProperties: {
                            'templateOptions.label':
                              this._translateService.stream(
                                'Descrizione analitica'
                              ),
                            'templateOptions.disabled': this.disabled.base,
                          },
                        },
                      ],
                    },
                    {
                      key: 'punti_urto_accorda',
                      type: 'textarea',
                      templateOptions: {
                        required: this._required.sis(
                          'incidente.punti_urto_accorda'
                        ),
                      },
                      expressionProperties: {
                        'templateOptions.label': this._translateService.stream(
                          'i punti / il punto d’urto / investimento veniva / venivano così localizzati / o'
                        ),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                  ],
                },
                {
                  key: 'punti_urto_note',
                  type: 'textarea',
                  templateOptions: {
                    required: this._required.sis('incidente.punti_urto_note'),
                  },
                  expressionProperties: {
                    'templateOptions.label':
                      this._translateService.stream('Note'),
                    'templateOptions.disabled': this.disabled.base,
                  },
                },
              ],
            },
            {
              expressionProperties: {
                'templateOptions.label': this._translateService.stream(
                  'Posizione statica dei veicoli'
                ),
              },
              fieldGroup: [
                {
                  key: 'posizione_statica_rilievi_veicoli_rimossi',
                  type: 'toggle',
                  className: 'flex-1',
                  templateOptions: {
                    appearance: 'standard',
                  },
                  expressionProperties: {
                    'templateOptions.label': this._translateService.stream(
                      'Veicoli tutti rimossi?'
                    ),
                    'templateOptions.disabled': this.disabled.base,
                  },
                },
                {
                  fieldGroupClassName: 'display-flex',
                  fieldGroup: [
                    {
                      key: 'posizione_statica_rilievi',
                      type: 'toggle',
                      className: 'flex-1',
                      templateOptions: {
                        appearance: 'standard',
                      },

                      expressionProperties: {
                        'templateOptions.label': this._translateService.stream(
                          'Effettuati rilievi Foto/Planimetrici?'
                        ),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                    {
                      key: 'posizione_statica_rilievi_no_tipologia',
                      className: 'flex-1',
                      hideExpression: (model: any, formState: any) =>
                        !(
                          model &&
                          model.posizione_statica_rilievi &&
                          model.posizione_statica_rilievi == true
                        ),
                      type: 'autocomplete',
                      templateOptions: {
                        required: this._required.sis(
                          'incidente.posizione_statica_rilievi_no_tipologia'
                        ),
                        filter: (
                          term: any,
                          limit: number,
                          offset: number,
                          parent?: any
                        ) =>
                          this._puntiRilieviNoTipologiaSelect
                            .watch({
                              limit: limit,
                              offset: offset,
                              ...(term && typeof term === 'string'
                                ? { nome: { _ilike: '%' + term + '%' } }
                                : {}),
                            })
                            .valueChanges.pipe(
                              map(
                                (result) =>
                                  result.data?.sis__punti_rilievi_no_tipologia
                              )
                            ),
                      },
                      expressionProperties: {
                        'templateOptions.label': this._translateService.stream(
                          'Tipologia di rilievi'
                        ),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                    {
                      key: 'posizione_statica_descrizione_analitica',
                      type: 'textarea',
                      className: 'flex-2',
                      templateOptions: {
                        required: this._required.sis(
                          'incidente.posizione_statica_descrizione_analitica'
                        ),
                      },
                      hideExpression: (model: any, formState: any) =>
                        !(
                          model &&
                          model.posizione_statica_rilievi_no_tipologia &&
                          model.posizione_statica_rilievi_no_tipologia.id == 2
                        ),
                      expressionProperties: {
                        'templateOptions.label': this._translateService.stream(
                          'Descrizione analitica'
                        ),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Persone'),
      },
      key: 'persone',
      fieldGroup: [
        {
          type: 'stepper',
          templateOptions: {
            orientation: 'vertical',
            buttonSwitch: false,
          },
          fieldGroup: [
            {
              expressionProperties: {
                'templateOptions.label': this._translateService.stream(
                  'Proprietari - persone fisiche'
                ),
              },
              fieldGroup: [
                {
                  key: 'proprietari',
                  type: 'repeat',
                  expressionProperties: {
                    'templateOptions.addText':
                      this._translateService.stream('Aggiungi'),
                    'templateOptions.disabled': this.disabled.base,
                  },
                  fieldArray: {
                    fieldGroup: [
                      {
                        key: 'id',
                        className: 'hidden',
                        type: 'input',
                        templateOptions: {
                          readonly: true,
                        },
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'titolo',
                            className: 'flex-1',
                            type: 'autocomplete',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.proprietari_persone_fisiche.titolo'
                              ),

                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._titoloSelectGQL
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { nome: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map((result) => result.data?._titolo)
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Titolo'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'nome',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.proprietari_persone_fisiche.nome'
                              ),
                            },

                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Nome'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'cognome',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.proprietari_persone_fisiche.cognome'
                              ),
                            },

                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Cognome'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                        ],
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'sesso',
                            className: 'flex-1',
                            type: 'autocomplete',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.proprietari_persone_fisiche.sesso'
                              ),
                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._sessoSelect
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { nome: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map((result) => result.data?._sesso)
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Sesso'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'telefono',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.proprietari_persone_fisiche.telefono'
                              ),
                            },

                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Telefono'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                        ],
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'nascita_data',
                            className: 'flex-1',
                            type: 'datepicker',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.proprietari_persone_fisiche.nascita_data'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Data di nascita'
                                ),
                            },
                          },
                          {
                            key: 'nascita_citta',
                            className: 'flex-1',
                            type: 'autocomplete',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.proprietari_persone_fisiche.nascita_citta'
                              ),

                              displayWith: (e: any) =>
                                e
                                  ? e.citta +
                                    (e.p_abbreviazione &&
                                    e.p_abbreviazione != ''
                                      ? ' (' + e.p_abbreviazione + ')'
                                      : '')
                                  : '',
                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._cittaSelect
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { citta: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map((result) => result.data?._citta)
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Città di nascita'
                                ),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'nascita_citta_altro',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.proprietari_persone_fisiche.nascita_citta_altro'
                              ),
                            },
                            hideExpression: (model: any, formState: any) =>
                              !(
                                model &&
                                model.nascita_citta &&
                                model.nascita_citta.id == 109
                              ),
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Specificare altro'
                                ),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                        ],
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'residente_indirizzo',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.proprietari_persone_fisiche.residente_indirizzo'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Indirizzo di residenza'
                                ),
                            },
                          },
                          {
                            key: 'residente_citta',
                            className: 'flex-1',
                            type: 'autocomplete',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.proprietari_persone_fisiche.residente_citta'
                              ),

                              displayWith: (e: any) =>
                                e
                                  ? e.citta +
                                    (e.p_abbreviazione &&
                                    e.p_abbreviazione != ''
                                      ? ' (' + e.p_abbreviazione + ')'
                                      : '')
                                  : '',
                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._cittaSelect
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { citta: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map((result) => result.data?._citta)
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Città di residenza'
                                ),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'residente_citta_altro',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.proprietari_persone_fisiche.residente_citta_altro'
                              ),
                            },
                            hideExpression: (model: any, formState: any) =>
                              !(
                                model &&
                                model.residente_citta &&
                                model.residente_citta.id == 109
                              ),
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Specificare altro'
                                ),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
            {
              expressionProperties: {
                'templateOptions.label': this._translateService.stream(
                  'Proprietari - persone giuridiche'
                ),
              },
              fieldGroup: [
                {
                  key: 'proprietari_giuridico',
                  type: 'repeat',
                  expressionProperties: {
                    'templateOptions.addText':
                      this._translateService.stream('Aggiungi'),
                    'templateOptions.disabled': this.disabled.base,
                  },
                  fieldArray: {
                    fieldGroup: [
                      {
                        key: 'id',
                        className: 'hidden',
                        type: 'input',
                        templateOptions: {
                          readonly: true,
                        },
                      },
                      {
                        key: 'ragione_sociale',
                        type: 'input',
                        templateOptions: {
                          required: this._required.sis(
                            'persone.proprietari_persone_giuridiche.ragione_sociale'
                          ),
                        },

                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Ragione sociale'),
                          'templateOptions.disabled': this.disabled.base,
                        },
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'partita_iva',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.proprietari_persone_giuridiche.partita_iva'
                              ),
                            },

                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Partita IVA'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'codice_fiscale',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.proprietari_persone_giuridiche.codice_fiscale'
                              ),
                            },

                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Codice fiscale'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'telefono',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.proprietari_persone_giuridiche.telefono'
                              ),
                            },

                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Telefono'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                        ],
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'indirizzo',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.proprietari_persone_giuridiche.indirizzo'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Indirizzo sede legale'
                                ),
                            },
                          },
                          {
                            key: 'citta',
                            className: 'flex-1',
                            type: 'autocomplete',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.proprietari_persone_giuridiche.citta'
                              ),

                              displayWith: (e: any) =>
                                e
                                  ? e.citta +
                                    (e.p_abbreviazione &&
                                    e.p_abbreviazione != ''
                                      ? ' (' + e.p_abbreviazione + ')'
                                      : '')
                                  : '',
                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._cittaSelect
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { citta: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map((result) => result.data?._citta)
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Città'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'citta_altro',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.proprietari_persone_giuridiche.citta_altro'
                              ),
                            },
                            hideExpression: (model: any, formState: any) =>
                              !(model && model.citta && model.citta.id == 109),
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Specificare altro'
                                ),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
            {
              expressionProperties: {
                'templateOptions.label':
                  this._translateService.stream('Locatari'),
              },
              fieldGroup: [
                {
                  key: 'locatari',
                  type: 'repeat',
                  expressionProperties: {
                    'templateOptions.addText':
                      this._translateService.stream('Aggiungi'),
                    'templateOptions.disabled': this.disabled.base,
                  },
                  fieldArray: {
                    fieldGroup: [
                      {
                        key: 'id',
                        className: 'hidden',
                        type: 'input',
                        templateOptions: {
                          readonly: true,
                        },
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'titolo',
                            className: 'flex-1',
                            type: 'autocomplete',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.locatari.titolo'
                              ),

                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._titoloSelectGQL
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { nome: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map((result) => result.data?._titolo)
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Titolo'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'nome',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.locatari.nome'
                              ),
                            },

                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Nome'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'cognome',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.locatari.cognome'
                              ),
                            },

                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Cognome'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                        ],
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'sesso',
                            className: 'flex-1',
                            type: 'autocomplete',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.locatari.sesso'
                              ),

                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._sessoSelect
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { nome: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map((result) => result.data?._sesso)
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Sesso'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'telefono',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.locatari.telefono'
                              ),
                            },

                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Telefono'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                        ],
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'nascita_data',
                            className: 'flex-1',
                            type: 'datepicker',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.locatari.nascita_data'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Data di nascita'
                                ),
                            },
                          },
                          {
                            key: 'nascita_citta',
                            className: 'flex-1',
                            type: 'autocomplete',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.locatari.nascita_citta'
                              ),

                              displayWith: (e: any) =>
                                e
                                  ? e.citta +
                                    (e.p_abbreviazione &&
                                    e.p_abbreviazione != ''
                                      ? ' (' + e.p_abbreviazione + ')'
                                      : '')
                                  : '',
                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._cittaSelect
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { citta: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map((result) => result.data?._citta)
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Città di nascita'
                                ),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'nascita_citta_altro',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.locatari.nascita_citta_altro'
                              ),
                            },
                            hideExpression: (model: any, formState: any) =>
                              !(
                                model &&
                                model.nascita_citta &&
                                model.nascita_citta.id == 109
                              ),
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Specificare altro'
                                ),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                        ],
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'residente_indirizzo',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.locatari.residente_indirizzo'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Indirizzo di residenza'
                                ),
                            },
                          },
                          {
                            key: 'residente_citta',
                            className: 'flex-1',
                            type: 'autocomplete',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.locatari.residente_citta'
                              ),

                              displayWith: (e: any) =>
                                e
                                  ? e.citta +
                                    (e.p_abbreviazione &&
                                    e.p_abbreviazione != ''
                                      ? ' (' + e.p_abbreviazione + ')'
                                      : '')
                                  : '',
                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._cittaSelect
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { citta: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map((result) => result.data?._citta)
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Città di residenza'
                                ),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'residente_citta_altro',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.locatari.residente_citta_altro'
                              ),
                            },
                            hideExpression: (model: any, formState: any) =>
                              !(
                                model &&
                                model.residente_citta &&
                                model.residente_citta.id == 109
                              ),
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Specificare altro'
                                ),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
            {
              expressionProperties: {
                'templateOptions.label':
                  this._translateService.stream('Conducenti'),
              },
              fieldGroup: [
                {
                  key: 'conducenti',
                  type: 'repeat',
                  expressionProperties: {
                    'templateOptions.addText':
                      this._translateService.stream('Aggiungi'),
                    'templateOptions.disabled': this.disabled.base,
                  },
                  fieldArray: {
                    fieldGroup: [
                      {
                        key: 'id',
                        className: 'hidden',
                        type: 'input',
                        templateOptions: {
                          readonly: true,
                        },
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'titolo',
                            className: 'flex-1',
                            type: 'autocomplete',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.conducenti.titolo'
                              ),

                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._titoloSelectGQL
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { nome: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map((result) => result.data?._titolo)
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Titolo'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'nome',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.conducenti.nome'
                              ),
                            },

                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Nome'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'cognome',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.conducenti.cognome'
                              ),
                            },

                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Cognome'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                        ],
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'sesso',
                            className: 'flex-1',
                            type: 'autocomplete',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.conducenti.sesso'
                              ),

                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._sessoSelect
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { nome: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map((result) => result.data?._sesso)
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Sesso'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'telefono',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.conducenti.telefono'
                              ),
                            },

                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Telefono'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                        ],
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'nascita_data',
                            className: 'flex-1',
                            type: 'datepicker',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.conducenti.nascita_data'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Data di nascita'
                                ),
                            },
                          },
                          {
                            key: 'nascita_citta',
                            className: 'flex-1',
                            type: 'autocomplete',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.conducenti.nascita_citta'
                              ),

                              displayWith: (e: any) =>
                                e
                                  ? e.citta +
                                    (e.p_abbreviazione &&
                                    e.p_abbreviazione != ''
                                      ? ' (' + e.p_abbreviazione + ')'
                                      : '')
                                  : '',
                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._cittaSelect
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { citta: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map((result) => result.data?._citta)
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Città di nascita'
                                ),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'nascita_citta_altro',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.conducenti.nascita_citta_altro'
                              ),
                            },
                            hideExpression: (model: any, formState: any) =>
                              !(
                                model &&
                                model.nascita_citta &&
                                model.nascita_citta.id == 109
                              ),
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Specificare altro'
                                ),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                        ],
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'residente_indirizzo',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.conducenti.residente_indirizzo'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Indirizzo di residenza'
                                ),
                            },
                          },
                          {
                            key: 'residente_citta',
                            className: 'flex-1',
                            type: 'autocomplete',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.conducenti.residente_citta'
                              ),

                              displayWith: (e: any) =>
                                e
                                  ? e.citta +
                                    (e.p_abbreviazione &&
                                    e.p_abbreviazione != ''
                                      ? ' (' + e.p_abbreviazione + ')'
                                      : '')
                                  : '',
                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._cittaSelect
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { citta: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map((result) => result.data?._citta)
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Città di residenza'
                                ),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'residente_citta_altro',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.conducenti.residente_citta_altro'
                              ),
                            },
                            hideExpression: (model: any, formState: any) =>
                              !(
                                model &&
                                model.residente_citta &&
                                model.residente_citta.id == 109
                              ),
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Specificare altro'
                                ),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                        ],
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'patente_sinoaltro',
                            className: 'flex-1',
                            type: 'autocomplete',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.conducenti.patente_sinoaltro'
                              ),

                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._siNoAltroSelect
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { citta: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map((result) => result.data?._sinoaltro)
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Titolare patente?'
                                ),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'patente',
                            className: 'flex-1',
                            type: 'autocomplete',
                            hideExpression: (model: any, formState: any) =>
                              !(
                                model &&
                                model.patente_sinoaltro &&
                                model.patente_sinoaltro.id != 2 &&
                                model.patente_sinoaltro.id != 3
                              ),
                            templateOptions: {
                              required: this._required.sis(
                                'persone.conducenti.patente'
                              ),
                              multiple: true,
                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._patenteCategoriaSelect
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { citta: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map(
                                      (result) =>
                                        result.data?.sis__patente_categoria
                                    )
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Categorie patente'
                                ),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'patente_categoria_altro',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.conducenti.patente_categoria_altro'
                              ),
                            },
                            hideExpression: (model: any, formState: any) =>
                              !(
                                model &&
                                model.patente &&
                                new Set(
                                  model.patente.map((e: any) => e.id)
                                ).has(22)
                              ),
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Specificare altro'
                                ),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                        ],
                      },
                      {
                        key: 'patente_altro_note',
                        className: 'flex-1',
                        type: 'textarea',
                        templateOptions: {
                          required: this._required.sis(
                            'persone.conducenti.patente_altro_note'
                          ),
                        },
                        hideExpression: (model: any, formState: any) =>
                          !(
                            model &&
                            model.patente_sinoaltro &&
                            model.patente_sinoaltro.id != 1 &&
                            model.patente_sinoaltro.id != 2
                          ),
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream(
                              'Motivazione della mancanza'
                            ),
                          'templateOptions.disabled': this.disabled.base,
                        },
                      },

                      {
                        fieldGroupClassName: 'display-flex',
                        hideExpression: (model: any, formState: any) =>
                          !(
                            model &&
                            model.patente_sinoaltro &&
                            model.patente_sinoaltro.id != 2 &&
                            model.patente_sinoaltro.id != 3
                          ),
                        fieldGroup: [
                          {
                            key: 'patente_numero',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.conducenti.patente_numero'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Numero patente'),
                            },
                          },
                          {
                            key: 'patente_rilasciata_data',
                            className: 'flex-1',
                            type: 'datepicker',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.conducenti.patente_rilasciata_data'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Data di rilascio'
                                ),
                            },
                          },
                          {
                            key: 'patente_rilasciata_valida_data',
                            className: 'flex-1',
                            type: 'datepicker',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.conducenti.patente_rilasciata_valida_data'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Data di scadenza'
                                ),
                            },
                          },
                        ],
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        hideExpression: (model: any, formState: any) =>
                          !(
                            model &&
                            model.patente_sinoaltro &&
                            model.patente_sinoaltro.id != 2 &&
                            model.patente_sinoaltro.id != 3
                          ),
                        fieldGroup: [
                          {
                            key: 'patente_rilasciata_da',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.conducenti.patente_rilasciata_da'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Patente rilasciata da'
                                ),
                            },
                          },
                          {
                            key: 'patente_rilasciata_da_citta',
                            className: 'flex-1',
                            type: 'autocomplete',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.conducenti.patente_rilasciata_da_citta'
                              ),

                              displayWith: (e: any) =>
                                e
                                  ? e.citta +
                                    (e.p_abbreviazione &&
                                    e.p_abbreviazione != ''
                                      ? ' (' + e.p_abbreviazione + ')'
                                      : '')
                                  : '',
                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._cittaSelect
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { citta: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map((result) => result.data?._citta)
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('in'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                        ],
                      },
                      {
                        key: 'patente_prescrizioni',
                        hideExpression: (model: any, formState: any) =>
                          !(
                            model &&
                            model.patente_sinoaltro &&
                            model.patente_sinoaltro.id != 2 &&
                            model.patente_sinoaltro.id != 3
                          ),
                        type: 'textarea',
                        templateOptions: {
                          required: this._required.sis(
                            'persone.conducenti.patente_prescrizioni'
                          ),
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream(
                              'Prescrizioni patente'
                            ),
                        },
                      },

                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'cap_tipo',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.conducenti.cap_tipo'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Tipo C.A.P./C.Q.C'
                                ),
                            },
                          },
                          {
                            key: 'cap_numero',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.conducenti.cap_numero'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Numero'),
                            },
                          },
                          {
                            key: 'cap_rilasciata_da_ddt',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.conducenti.cap_rilasciata_da_ddt'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Rilasciato da MCTC'
                                ),
                            },
                          },
                          {
                            key: 'cap_rilasciata_da_ddt_data',
                            className: 'flex-1',
                            type: 'datepicker',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.conducenti.cap_rilasciata_da_ddt_data'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('In data'),
                            },
                          },
                        ],
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'richiesta_esami',
                            type: 'toggle',
                            className: 'flex-1',
                            templateOptions: {
                              appearance: 'standard',
                            },

                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Richiesta esami alcolemici/tossicologici'
                                ),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'richiesta_esami_effettuati_presso',
                            hideExpression: (model: any, formState: any) =>
                              !(
                                model &&
                                model.richiesta_esami &&
                                model.richiesta_esami == true
                              ),
                            className: 'flex-3',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.conducenti.richiesta_esami_effettuati_presso'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Effettuati presso P.O.'
                                ),
                            },
                          },
                        ],
                      },

                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'prova_etilometro',
                            type: 'toggle',
                            className: 'flex-1',
                            templateOptions: {
                              appearance: 'standard',
                            },

                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Sottoposto a prova con etilometro'
                                ),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'prova_etilometro_esito',
                            hideExpression: (model: any, formState: any) =>
                              !(
                                model &&
                                model.prova_etilometro &&
                                model.prova_etilometro == true
                              ),
                            className: 'flex-3',
                            type: 'textarea',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.conducenti.prova_etilometro_esito'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Esito'),
                            },
                          },
                        ],
                      },

                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'prova_narcotest',
                            type: 'toggle',
                            className: 'flex-1',
                            templateOptions: {
                              appearance: 'standard',
                            },

                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Sottoposto a prova con narcotest'
                                ),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'prova_narcotest_esito',
                            hideExpression: (model: any, formState: any) =>
                              !(
                                model &&
                                model.prova_narcotest &&
                                model.prova_narcotest == true
                              ),
                            className: 'flex-3',
                            type: 'textarea',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.conducenti.prova_narcotest_esito'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Esito'),
                            },
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
            {
              expressionProperties: {
                'templateOptions.label':
                  this._translateService.stream('Trasportati'),
              },
              fieldGroup: [
                {
                  key: 'trasportati',
                  type: 'repeat',
                  expressionProperties: {
                    'templateOptions.addText':
                      this._translateService.stream('Aggiungi'),
                    'templateOptions.disabled': this.disabled.base,
                  },
                  fieldArray: {
                    fieldGroup: [
                      {
                        key: 'id',
                        className: 'hidden',
                        type: 'input',
                        templateOptions: {
                          readonly: true,
                        },
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'titolo',
                            className: 'flex-1',
                            type: 'autocomplete',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.trasportati.titolo'
                              ),
                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._titoloSelectGQL
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { nome: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map((result) => result.data?._titolo)
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Titolo'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'nome',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.trasportati.nome'
                              ),
                            },

                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Nome'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'cognome',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.trasportati.cognome'
                              ),
                            },

                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Cognome'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                        ],
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'sesso',
                            className: 'flex-1',
                            type: 'autocomplete',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.trasportati.sesso'
                              ),

                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._sessoSelect
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { nome: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map((result) => result.data?._sesso)
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Sesso'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'telefono',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.trasportati.telefono'
                              ),
                            },

                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Telefono'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                        ],
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'nascita_data',
                            className: 'flex-1',
                            type: 'datepicker',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.trasportati.nascita_data'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Data di nascita'
                                ),
                            },
                          },
                          {
                            key: 'nascita_citta',
                            className: 'flex-1',
                            type: 'autocomplete',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.trasportati.nascita_citta'
                              ),

                              displayWith: (e: any) =>
                                e
                                  ? e.citta +
                                    (e.p_abbreviazione &&
                                    e.p_abbreviazione != ''
                                      ? ' (' + e.p_abbreviazione + ')'
                                      : '')
                                  : '',
                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._cittaSelect
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { citta: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map((result) => result.data?._citta)
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Città di nascita'
                                ),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'nascita_citta_altro',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.trasportati.nascita_citta_altro'
                              ),
                            },
                            hideExpression: (model: any, formState: any) =>
                              !(
                                model &&
                                model.nascita_citta &&
                                model.nascita_citta.id == 109
                              ),
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Specificare altro'
                                ),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                        ],
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'residente_indirizzo',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.trasportati.residente_indirizzo'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Indirizzo di residenza'
                                ),
                            },
                          },
                          {
                            key: 'residente_citta',
                            className: 'flex-1',
                            type: 'autocomplete',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.trasportati.residente_citta'
                              ),

                              displayWith: (e: any) =>
                                e
                                  ? e.citta +
                                    (e.p_abbreviazione &&
                                    e.p_abbreviazione != ''
                                      ? ' (' + e.p_abbreviazione + ')'
                                      : '')
                                  : '',
                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._cittaSelect
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { citta: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map((result) => result.data?._citta)
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Città di residenza'
                                ),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'residente_citta_altro',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.trasportati.residente_citta_altro'
                              ),
                            },
                            hideExpression: (model: any, formState: any) =>
                              !(
                                model &&
                                model.residente_citta &&
                                model.residente_citta.id == 109
                              ),
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Specificare altro'
                                ),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                        ],
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'documento_tipo',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.trasportati.documento_tipo'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Tipo di documento'
                                ),
                            },
                          },
                          {
                            key: 'documento_numero',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.trasportati.documento_numero'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Numero'),
                            },
                          },
                        ],
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'documento_rilasciato_da',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.trasportati.documento_rilasciato_da'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Documento rilasciato da'
                                ),
                            },
                          },
                          {
                            key: 'documento_rilasciato_da_citta',
                            className: 'flex-1',
                            type: 'autocomplete',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.trasportati.documento_rilasciato_da_citta'
                              ),

                              displayWith: (e: any) =>
                                e
                                  ? e.citta +
                                    (e.p_abbreviazione &&
                                    e.p_abbreviazione != ''
                                      ? ' (' + e.p_abbreviazione + ')'
                                      : '')
                                  : '',
                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._cittaSelect
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { citta: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map((result) => result.data?._citta)
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('in'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'documento_rilasciato_data',
                            className: 'flex-1',
                            type: 'datepicker',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.trasportati.documento_rilasciato_data'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('in data'),
                            },
                          },
                        ],
                      },

                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'posizione',
                            className: 'flex-1',
                            type: 'autocomplete',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.trasportati.posizione'
                              ),

                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._trasportatoPosizioneSelect
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { nome: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map(
                                      (result) =>
                                        result.data?.sis__trasportato_posizione
                                    )
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Posizione'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'stato',
                            className: 'flex-1',
                            type: 'autocomplete',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.trasportati.stato'
                              ),

                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._trasportatoStatoSelect
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { nome: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map(
                                      (result) =>
                                        result.data?.sis__trasportato_stato
                                    )
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Stato'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                        ],
                      },

                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'accertamento_uso_cintura',
                            type: 'toggle',
                            className: 'flex-1',
                            templateOptions: {
                              appearance: 'standard',
                            },

                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Uso cintura?'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'accertamento_uso_casco',
                            type: 'toggle',
                            className: 'flex-1',
                            templateOptions: {
                              appearance: 'standard',
                            },

                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Uso casco?'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'accertamento_uso_sistema_bambini',
                            type: 'toggle',
                            className: 'flex-1',
                            templateOptions: {
                              appearance: 'standard',
                            },

                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Uso sistema ritenuta bambini?'
                                ),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'accertamento_attivazione_airbag',
                            type: 'toggle',
                            className: 'flex-1',
                            templateOptions: {
                              appearance: 'standard',
                            },

                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Attivazione airbag?'
                                ),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
            {
              expressionProperties: {
                'templateOptions.label':
                  this._translateService.stream('Testimoni'),
              },
              fieldGroup: [
                {
                  key: 'testimoni',
                  type: 'repeat',
                  expressionProperties: {
                    'templateOptions.addText':
                      this._translateService.stream('Aggiungi'),
                    'templateOptions.disabled': this.disabled.base,
                  },
                  fieldArray: {
                    fieldGroup: [
                      {
                        key: 'id',
                        className: 'hidden',
                        type: 'input',
                        templateOptions: {
                          readonly: true,
                        },
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'titolo',
                            className: 'flex-1',
                            type: 'autocomplete',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.testimoni.titolo'
                              ),

                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._titoloSelectGQL
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { nome: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map((result) => result.data?._titolo)
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Titolo'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'nome',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.testimoni.nome'
                              ),
                            },

                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Nome'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'cognome',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.testimoni.cognome'
                              ),
                            },

                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Cognome'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                        ],
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'sesso',
                            className: 'flex-1',
                            type: 'autocomplete',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.testimoni.sesso'
                              ),

                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._sessoSelect
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { nome: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map((result) => result.data?._sesso)
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Sesso'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'telefono',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.testimoni.telefono'
                              ),
                            },

                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Telefono'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                        ],
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'nascita_data',
                            className: 'flex-1',
                            type: 'datepicker',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.testimoni.nascita_data'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Data di nascita'
                                ),
                            },
                          },
                          {
                            key: 'nascita_citta',
                            className: 'flex-1',
                            type: 'autocomplete',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.testimoni.nascita_citta'
                              ),

                              displayWith: (e: any) =>
                                e
                                  ? e.citta +
                                    (e.p_abbreviazione &&
                                    e.p_abbreviazione != ''
                                      ? ' (' + e.p_abbreviazione + ')'
                                      : '')
                                  : '',
                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._cittaSelect
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { citta: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map((result) => result.data?._citta)
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Città di nascita'
                                ),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'nascita_citta_altro',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.testimoni.nascita_citta_altro'
                              ),
                            },
                            hideExpression: (model: any, formState: any) =>
                              !(
                                model &&
                                model.nascita_citta &&
                                model.nascita_citta.id == 109
                              ),
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Specificare altro'
                                ),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                        ],
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'residente_indirizzo',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.testimoni.residente_indirizzo'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Indirizzo di residenza'
                                ),
                            },
                          },
                          {
                            key: 'residente_citta',
                            className: 'flex-1',
                            type: 'autocomplete',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.testimoni.residente_citta'
                              ),

                              displayWith: (e: any) =>
                                e
                                  ? e.citta +
                                    (e.p_abbreviazione &&
                                    e.p_abbreviazione != ''
                                      ? ' (' + e.p_abbreviazione + ')'
                                      : '')
                                  : '',
                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._cittaSelect
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { citta: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map((result) => result.data?._citta)
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Città di residenza'
                                ),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'residente_citta_altro',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.testimoni.residente_citta_altro'
                              ),
                            },
                            hideExpression: (model: any, formState: any) =>
                              !(
                                model &&
                                model.residente_citta &&
                                model.residente_citta.id == 109
                              ),
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Specificare altro'
                                ),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                        ],
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'documento_tipo',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.testimoni.documento_tipo'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Tipo di documento'
                                ),
                            },
                          },
                          {
                            key: 'documento_numero',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.testimoni.documento_numero'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Numero'),
                            },
                          },
                        ],
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'documento_rilasciato_da',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.testimoni.documento_rilasciato_da'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Documento rilasciato da'
                                ),
                            },
                          },
                          {
                            key: 'documento_rilasciato_da_citta',
                            className: 'flex-1',
                            type: 'autocomplete',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.testimoni.documento_rilasciato_da_citta'
                              ),

                              displayWith: (e: any) =>
                                e
                                  ? e.citta +
                                    (e.p_abbreviazione &&
                                    e.p_abbreviazione != ''
                                      ? ' (' + e.p_abbreviazione + ')'
                                      : '')
                                  : '',
                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._cittaSelect
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { citta: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map((result) => result.data?._citta)
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('in'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'documento_rilasciato_data',
                            className: 'flex-1',
                            type: 'datepicker',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.testimoni.documento_rilasciato_data'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('in data'),
                            },
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
            {
              expressionProperties: {
                'templateOptions.label':
                  this._translateService.stream('Pedoni'),
              },
              fieldGroup: [
                {
                  key: 'pedoni',
                  type: 'repeat',
                  expressionProperties: {
                    'templateOptions.addText':
                      this._translateService.stream('Aggiungi'),
                    'templateOptions.disabled': this.disabled.base,
                  },
                  fieldArray: {
                    fieldGroup: [
                      {
                        key: 'id',
                        className: 'hidden',
                        type: 'input',
                        templateOptions: {
                          readonly: true,
                        },
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'titolo',
                            className: 'flex-1',
                            type: 'autocomplete',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.pedoni.titolo'
                              ),

                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._titoloSelectGQL
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { nome: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map((result) => result.data?._titolo)
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Titolo'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'nome',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.pedoni.nome'
                              ),
                            },

                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Nome'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'cognome',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.pedoni.cognome'
                              ),
                            },

                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Cognome'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                        ],
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'sesso',
                            className: 'flex-1',
                            type: 'autocomplete',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.pedoni.sesso'
                              ),

                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._sessoSelect
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { nome: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map((result) => result.data?._sesso)
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Sesso'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'telefono',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.pedoni.telefono'
                              ),
                            },

                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Telefono'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                        ],
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'nascita_data',
                            className: 'flex-1',
                            type: 'datepicker',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.pedoni.nascita_data'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Data di nascita'
                                ),
                            },
                          },
                          {
                            key: 'nascita_citta',
                            className: 'flex-1',
                            type: 'autocomplete',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.pedoni.nascita_citta'
                              ),

                              displayWith: (e: any) =>
                                e
                                  ? e.citta +
                                    (e.p_abbreviazione &&
                                    e.p_abbreviazione != ''
                                      ? ' (' + e.p_abbreviazione + ')'
                                      : '')
                                  : '',
                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._cittaSelect
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { citta: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map((result) => result.data?._citta)
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Città di nascita'
                                ),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'nascita_citta_altro',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.pedoni.nascita_citta_altro'
                              ),
                            },
                            hideExpression: (model: any, formState: any) =>
                              !(
                                model &&
                                model.nascita_citta &&
                                model.nascita_citta.id == 109
                              ),
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Specificare altro'
                                ),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                        ],
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'residente_indirizzo',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.pedoni.residente_indirizzo'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Indirizzo di residenza'
                                ),
                            },
                          },
                          {
                            key: 'residente_citta',
                            className: 'flex-1',
                            type: 'autocomplete',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.pedoni.residente_citta'
                              ),

                              displayWith: (e: any) =>
                                e
                                  ? e.citta +
                                    (e.p_abbreviazione &&
                                    e.p_abbreviazione != ''
                                      ? ' (' + e.p_abbreviazione + ')'
                                      : '')
                                  : '',
                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._cittaSelect
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { citta: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map((result) => result.data?._citta)
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Città di residenza'
                                ),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'residente_citta_altro',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.pedoni.residente_citta_altro'
                              ),
                            },
                            hideExpression: (model: any, formState: any) =>
                              !(
                                model &&
                                model.residente_citta &&
                                model.residente_citta.id == 109
                              ),
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Specificare altro'
                                ),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                        ],
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'documento_tipo',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.pedoni.documento_tipo'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Tipo di documento'
                                ),
                            },
                          },
                          {
                            key: 'documento_numero',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.pedoni.documento_numero'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('Numero'),
                            },
                          },
                        ],
                      },
                      {
                        fieldGroupClassName: 'display-flex',
                        fieldGroup: [
                          {
                            key: 'documento_rilasciato_da',
                            className: 'flex-1',
                            type: 'input',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.pedoni.documento_rilasciato_da'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream(
                                  'Documento rilasciato da'
                                ),
                            },
                          },
                          {
                            key: 'documento_rilasciato_da_citta',
                            className: 'flex-1',
                            type: 'autocomplete',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.pedoni.documento_rilasciato_da_citta'
                              ),

                              displayWith: (e: any) =>
                                e
                                  ? e.citta +
                                    (e.p_abbreviazione &&
                                    e.p_abbreviazione != ''
                                      ? ' (' + e.p_abbreviazione + ')'
                                      : '')
                                  : '',
                              filter: (
                                term: any,
                                limit: number,
                                offset: number,
                                parent?: any
                              ) =>
                                this._cittaSelect
                                  .watch({
                                    limit: limit,
                                    offset: offset,
                                    ...(term && typeof term === 'string'
                                      ? { citta: { _ilike: '%' + term + '%' } }
                                      : {}),
                                  })
                                  .valueChanges.pipe(
                                    map((result) => result.data?._citta)
                                  ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('in'),
                              'templateOptions.disabled': this.disabled.base,
                            },
                          },
                          {
                            key: 'documento_rilasciato_data',
                            className: 'flex-1',
                            type: 'datepicker',
                            templateOptions: {
                              required: this._required.sis(
                                'persone.pedoni.documento_rilasciato_data'
                              ),
                            },
                            expressionProperties: {
                              'templateOptions.label':
                                this._translateService.stream('in data'),
                            },
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
            {
              expressionProperties: {
                'templateOptions.label': this._translateService.stream('Altri'),
              },
              fieldGroup: [
                {
                  key: 'altri',
                  type: 'repeat',
                  expressionProperties: {
                    'templateOptions.addText':
                      this._translateService.stream('Aggiungi'),
                    'templateOptions.disabled': this.disabled.base,
                  },
                  fieldArray: {
                    fieldGroup: [
                      {
                        key: 'id',
                        className: 'hidden',
                        type: 'input',
                        templateOptions: {
                          readonly: true,
                        },
                      },
                      {
                        key: 'note',
                        type: 'textarea',
                        templateOptions: {
                          required: this._required.sis('persone.altri.note'),
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Descrizione'),
                          'templateOptions.disabled': this.disabled.base,
                        },
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Veicoli'),
      },
      fieldGroup: [
        {
          key: 'veicoli',
          type: 'repeat',
          expressionProperties: {
            'templateOptions.addText':
              this._translateService.stream('Aggiungi'),
            'templateOptions.disabled': this.disabled.base,
          },
          fieldArray: {
            fieldGroup: [
              {
                key: 'id',
                className: 'hidden',
                type: 'input',
                templateOptions: {
                  readonly: true,
                },
              },

              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'proprietario',
                    hideExpression: (model: any, formState: any) =>
                      model && model.proprietario_giuridico,
                    className: 'flex-1',
                    type: 'autocomplete',
                    templateOptions: {
                      required: this._required.sis('veicoli.proprietario'),

                      displayWith: (e: any) =>
                        e ? e.nome + ' ' + e.cognome : '',
                      filter: (
                        term: any,
                        limit: number,
                        offset: number,
                        parent?: any
                      ) =>
                        this._proprietarioSelect
                          .watch({
                            limit: limit,
                            offset: offset,
                            ...(term && typeof term === 'string'
                              ? {
                                  where: {
                                    ris_id: {
                                      _eq: this.id,
                                    },
                                    _or: [
                                      {
                                        nome: { _ilike: '%' + term + '%' },
                                      },
                                      {
                                        cognome: { _ilike: '%' + term + '%' },
                                      },
                                    ],
                                  },
                                }
                              : {}),
                          })
                          .valueChanges.pipe(
                            map((result) => result.data?.sis_proprietario)
                          ),
                    },
                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Proprietario - persona fisica'
                      ),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'proprietario_giuridico',
                    hideExpression: (model: any, formState: any) =>
                      model && model.proprietario,
                    className: 'flex-1',
                    type: 'autocomplete',
                    templateOptions: {
                      required: this._required.sis(
                        'veicoli.proprietario_giuridico'
                      ),

                      displayWith: (e: any) =>
                        e ? e.ragione_sociale + ' (' + e.partita_iva + ')' : '',
                      filter: (
                        term: any,
                        limit: number,
                        offset: number,
                        parent?: any
                      ) =>
                        this._proprietarioGiuridicoSelect
                          .watch({
                            limit: limit,
                            offset: offset,
                            ...(term && typeof term === 'string'
                              ? {
                                  where: {
                                    ris_id: {
                                      _eq: this.id,
                                    },
                                    _or: [
                                      {
                                        ragione_sociale: {
                                          _ilike: '%' + term + '%',
                                        },
                                      },
                                      {
                                        partita_iva: {
                                          _ilike: '%' + term + '%',
                                        },
                                      },
                                      {
                                        codice_fiscale: {
                                          _ilike: '%' + term + '%',
                                        },
                                      },
                                    ],
                                  },
                                }
                              : {}),
                          })
                          .valueChanges.pipe(
                            map(
                              (result) =>
                                result.data?.sis_proprietario_giuridico
                            )
                          ),
                    },
                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Proprietario - persona giuridica'
                      ),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },
              {
                key: 'locatario',
                hideExpression: (model: any, formState: any) =>
                  model && model.proprietario,
                type: 'autocomplete',
                templateOptions: {
                  required: this._required.sis('veicoli.locatario'),

                  displayWith: (e: any) => (e ? e.nome + ' ' + e.cognome : ''),
                  filter: (
                    term: any,
                    limit: number,
                    offset: number,
                    parent?: any
                  ) =>
                    this._locatarioSelect
                      .watch({
                        limit: limit,
                        offset: offset,
                        ...(term && typeof term === 'string'
                          ? {
                              where: {
                                ris_id: {
                                  _eq: this.id,
                                },
                                _or: [
                                  {
                                    nome: { _ilike: '%' + term + '%' },
                                  },
                                  {
                                    cognome: { _ilike: '%' + term + '%' },
                                  },
                                ],
                              },
                            }
                          : {}),
                      })
                      .valueChanges.pipe(
                        map((result) => result.data?.sis_locatario)
                      ),
                },
                expressionProperties: {
                  'templateOptions.label':
                    this._translateService.stream('Locatario'),
                  'templateOptions.disabled': this.disabled.base,
                },
              },
              {
                key: 'conducente',
                type: 'autocomplete',
                templateOptions: {
                  required: this._required.sis('veicoli.conducente'),

                  displayWith: (e: any) => (e ? e.nome + ' ' + e.cognome : ''),
                  filter: (
                    term: any,
                    limit: number,
                    offset: number,
                    parent?: any
                  ) =>
                    this._conducenteSelect
                      .watch({
                        limit: limit,
                        offset: offset,
                        ...(term && typeof term === 'string'
                          ? {
                              where: {
                                ris_id: {
                                  _eq: this.id,
                                },
                                _or: [
                                  {
                                    nome: { _ilike: '%' + term + '%' },
                                  },
                                  {
                                    cognome: { _ilike: '%' + term + '%' },
                                  },
                                ],
                              },
                            }
                          : {}),
                      })
                      .valueChanges.pipe(
                        map((result) => result.data?.sis_conducente)
                      ),
                },
                expressionProperties: {
                  'templateOptions.label':
                    this._translateService.stream('Conducente'),
                  'templateOptions.disabled': this.disabled.base,
                },
              },

              {
                key: 'trasportati',
                type: 'autocomplete',
                templateOptions: {
                  required: this._required.sis('veicoli.trasportati'),

                  multiple: true,
                  displayWith: (e: any) => (e ? e.nome + ' ' + e.cognome : ''),
                  filter: (
                    term: any,
                    limit: number,
                    offset: number,
                    parent?: any
                  ) =>
                    this._trasportatoSelect
                      .watch({
                        limit: limit,
                        offset: offset,
                        ...(term && typeof term === 'string'
                          ? {
                              where: {
                                ris_id: {
                                  _eq: this.id,
                                },
                                _or: [
                                  {
                                    nome: { _ilike: '%' + term + '%' },
                                  },
                                  {
                                    cognome: { _ilike: '%' + term + '%' },
                                  },
                                ],
                              },
                            }
                          : {}),
                      })
                      .valueChanges.pipe(
                        map((result) => result.data?.sis_trasportato)
                      ),
                },
                expressionProperties: {
                  'templateOptions.label':
                    this._translateService.stream('Trasportati'),
                  'templateOptions.disabled': this.disabled.base,
                },
              },

              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'stato',
                    className: 'flex-1',

                    type: 'autocomplete',
                    templateOptions: {
                      required: this._required.sis('veicoli.stato'),

                      filter: (
                        term: any,
                        limit: number,
                        offset: number,
                        parent?: any
                      ) =>
                        this._statoVeicoloSelect
                          .watch({
                            limit: limit,
                            offset: offset,
                            ...(term && typeof term === 'string'
                              ? {
                                  nome: { _ilike: '%' + term + '%' },
                                }
                              : {}),
                          })
                          .valueChanges.pipe(
                            map((result) => result.data?.sis__stato_veicolo)
                          ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Stato del veicolo'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'tipologia_veicolo',
                    className: 'flex-2',
                    type: 'autocomplete',
                    templateOptions: {
                      required: this._required.sis('veicoli.tipologia_veicolo'),

                      filter: (
                        term: any,
                        limit: number,
                        offset: number,
                        parent?: any
                      ) =>
                        this._tipologiaVeicoloSelect
                          .watch({
                            limit: limit,
                            offset: offset,
                            ...(term && typeof term === 'string'
                              ? {
                                  nome: { _ilike: '%' + term + '%' },
                                }
                              : {}),
                          })
                          .valueChanges.pipe(
                            map((result) => result.data?.sis__tipologia_veicolo)
                          ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Tipo di veicolo'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'tipologia_veicolo_note',
                    className: 'flex-1',
                    hideExpression: (model: any, formState: any) =>
                      !(
                        model &&
                        model.tipologia_veicolo &&
                        model.tipologia_veicolo.id == 34
                      ),
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis(
                        'veicoli.tipologia_veicolo_note'
                      ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Specifica altro'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },

              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'marca',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis('veicoli.marca'),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Marca'),
                    },
                  },
                  {
                    key: 'modello',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis('veicoli.modello'),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Modello'),
                    },
                  },
                  {
                    key: 'targa',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis('veicoli.targa'),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Targa'),
                    },
                  },
                ],
              },
              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'nazione',
                    className: 'flex-1',
                    type: 'autocomplete',
                    templateOptions: {
                      required: this._required.sis('veicoli.nazione'),

                      filter: (
                        term: any,
                        limit: number,
                        offset: number,
                        parent?: any
                      ) =>
                        this._nazioneSelect
                          .watch({
                            limit: limit,
                            offset: offset,
                            ...(term && typeof term === 'string'
                              ? {
                                  nome: { _ilike: '%' + term + '%' },
                                }
                              : {}),
                          })
                          .valueChanges.pipe(
                            map((result) => result.data?._nazione)
                          ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Nazione'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'telaio',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis('veicoli.telaio'),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Telaio'),
                    },
                  },
                  {
                    key: 'cilindrata',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis('veicoli.cilindrata'),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('cilindrata'),
                    },
                  },
                ],
              },

              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'alimentazione',
                    className: 'flex-1',
                    type: 'autocomplete',
                    templateOptions: {
                      required: this._required.sis('veicoli.alimentazione'),

                      filter: (
                        term: any,
                        limit: number,
                        offset: number,
                        parent?: any
                      ) =>
                        this._alimentazioneVeicoloSelect
                          .watch({
                            limit: limit,
                            offset: offset,
                            ...(term && typeof term === 'string'
                              ? {
                                  nome: { _ilike: '%' + term + '%' },
                                }
                              : {}),
                          })
                          .valueChanges.pipe(
                            map(
                              (result) =>
                                result.data?.sis__alimentazione_veicolo
                            )
                          ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Alimentazione'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'alimentazione_note',
                    className: 'flex-1',
                    hideExpression: (model: any, formState: any) =>
                      !(
                        model &&
                        model.alimentazione &&
                        model.alimentazione.id == 7
                      ),
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis(
                        'veicoli.alimentazione_note'
                      ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Specifica altro'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },

              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'peso',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis('veicoli.peso'),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Peso'),
                    },
                  },
                  {
                    key: 'tara',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis('veicoli.tara'),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Tara'),
                    },
                  },
                  {
                    key: 'p_u',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis('veicoli.p_u'),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('P.U.'),
                    },
                  },
                  {
                    key: 'p_c',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis('veicoli.p_c'),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('P.C. potenziale'),
                    },
                  },
                ],
              },
              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'posti',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis('veicoli.posti'),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Posti'),
                    },
                  },
                  {
                    key: 'anno_prima_immatricolazione',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis(
                        'veicoli.anno_prima_immatricolazione'
                      ),
                    },
                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Anno 1ª immatricolazione'
                      ),
                    },
                  },
                  {
                    key: 'colore_carrozzeria',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis(
                        'veicoli.colore_carrozzeria'
                      ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Colore carrozzeria'),
                    },
                  },
                  {
                    key: 'data_ultima_revisione',
                    className: 'flex-1',
                    type: 'datepicker',
                    templateOptions: {
                      required: this._required.sis(
                        'veicoli.data_ultima_revisione'
                      ),
                    },
                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Data ultima revisione'
                      ),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },
              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'uso_veicolo',
                    className: 'flex-1',
                    type: 'autocomplete',
                    templateOptions: {
                      required: this._required.sis('veicoli.uso_veicolo'),

                      filter: (
                        term: any,
                        limit: number,
                        offset: number,
                        parent?: any
                      ) =>
                        this._usoVeicoloSelect
                          .watch({
                            limit: limit,
                            offset: offset,
                            ...(term && typeof term === 'string'
                              ? {
                                  nome: { _ilike: '%' + term + '%' },
                                }
                              : {}),
                          })
                          .valueChanges.pipe(
                            map((result) => result.data?.sis__uso_veicolo)
                          ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Uso'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'codice_merce_pericolasa',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis(
                        'veicoli.codice_merce_pericolasa'
                      ),
                    },
                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Codice merce pericolosa'
                      ),
                    },
                  },
                  {
                    key: 'codice_pericolo',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis('veicoli.codice_pericolo'),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Codice pericolo'),
                    },
                  },
                  {
                    key: 'retrovisore_esterno',
                    className: 'flex-1',
                    type: 'autocomplete',
                    templateOptions: {
                      required: this._required.sis(
                        'veicoli.retrovisore_esterno'
                      ),

                      filter: (
                        term: any,
                        limit: number,
                        offset: number,
                        parent?: any
                      ) =>
                        this._retrovisoreEsternoSelect
                          .watch({
                            limit: limit,
                            offset: offset,
                            ...(term && typeof term === 'string'
                              ? {
                                  nome: { _ilike: '%' + term + '%' },
                                }
                              : {}),
                          })
                          .valueChanges.pipe(
                            map(
                              (result) => result.data?.sis__retrovisore_esterno
                            )
                          ),
                    },
                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Dispos. retrovisore esterno'
                      ),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },
              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'dispositivi_acustici',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis(
                        'veicoli.dispositivi_acustici'
                      ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Dispos. acustici'),
                    },
                  },
                  {
                    key: 'indicatori_direzione',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis(
                        'veicoli.indicatori_direzione'
                      ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Indic. direzione'),
                    },
                  },
                  {
                    key: 'luci_arresto',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis('veicoli.luci_arresto'),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Luci arresto'),
                    },
                  },
                  {
                    key: 'impianto_illuminazione',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis(
                        'veicoli.impianto_illuminazione'
                      ),
                    },
                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Impianto di illuminazione'
                      ),
                    },
                  },
                ],
              },
              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'stato_pneumatici',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis('veicoli.stato_pneumatici'),
                    },
                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Stato dei pneumatici'
                      ),
                    },
                  },
                  {
                    key: 'km_percorsi',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis('veicoli.km_percorsi'),
                    },
                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Km percorsi (dal contachilometri)'
                      ),
                    },
                  },
                  {
                    key: 'marcia_inserita',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis('veicoli.marcia_inserita'),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Marcia inserita'),
                    },
                  },
                  {
                    key: 'velocita_presunta',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis('veicoli.velocita_presunta'),
                    },
                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Velocità presunta (tratta dal disco del cronotachigrafo per veicoli industriali)'
                      ),
                    },
                  },
                ],
              },

              {
                key: 'carta_circolazione_sinoaltro',
                type: 'autocomplete',
                templateOptions: {
                  required: this._required.sis(
                    'veicoli.carta_circolazione_sinoaltro'
                  ),

                  filter: (
                    term: any,
                    limit: number,
                    offset: number,
                    parent?: any
                  ) =>
                    this._siNoAltroSelect
                      .watch({
                        limit: limit,
                        offset: offset,
                        ...(term && typeof term === 'string'
                          ? { citta: { _ilike: '%' + term + '%' } }
                          : {}),
                      })
                      .valueChanges.pipe(
                        map((result) => result.data?._sinoaltro)
                      ),
                },
                expressionProperties: {
                  'templateOptions.label': this._translateService.stream(
                    'Presenza carta/certificato di circolazione?'
                  ),
                  'templateOptions.disabled': this.disabled.base,
                },
              },
              {
                key: 'carta_circolazione_altro_note',
                className: 'flex-1',
                type: 'textarea',
                templateOptions: {
                  required: this._required.sis(
                    'veicoli.carta_circolazione_altro_note'
                  ),
                },
                hideExpression: (model: any, formState: any) =>
                  !(
                    model &&
                    model.carta_circolazione_sinoaltro &&
                    model.carta_circolazione_sinoaltro.id != 1 &&
                    model.carta_circolazione_sinoaltro.id != 2
                  ),
                expressionProperties: {
                  'templateOptions.label': this._translateService.stream(
                    'Motivazione della mancanza'
                  ),
                  'templateOptions.disabled': this.disabled.base,
                },
              },

              {
                fieldGroupClassName: 'display-flex',
                hideExpression: (model: any, formState: any) =>
                  !(
                    model &&
                    model.carta_circolazione_sinoaltro &&
                    model.carta_circolazione_sinoaltro.id != 2 &&
                    model.carta_circolazione_sinoaltro.id != 3
                  ),
                fieldGroup: [
                  {
                    key: 'carta_circolazione',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis(
                        'veicoli.carta_circolazione'
                      ),
                    },
                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Carta/certificato di circolazione n.'
                      ),
                    },
                  },
                  {
                    key: 'carta_circolazione_data',
                    className: 'flex-1',
                    type: 'datepicker',
                    templateOptions: {
                      required: this._required.sis(
                        'veicoli.carta_circolazione_data'
                      ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('ril. il'),
                    },
                  },
                  {
                    key: 'carta_circolazione_ddt',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis(
                        'veicoli.carta_circolazione_ddt'
                      ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('da D.T.T. di'),
                    },
                  },
                ],
              },

              {
                key: 'assicurazione_sinoaltro',
                type: 'autocomplete',
                templateOptions: {
                  required: this._required.sis(
                    'veicoli.assicurazione_sinoaltro'
                  ),

                  filter: (
                    term: any,
                    limit: number,
                    offset: number,
                    parent?: any
                  ) =>
                    this._siNoAltroSelect
                      .watch({
                        limit: limit,
                        offset: offset,
                        ...(term && typeof term === 'string'
                          ? { citta: { _ilike: '%' + term + '%' } }
                          : {}),
                      })
                      .valueChanges.pipe(
                        map((result) => result.data?._sinoaltro)
                      ),
                },
                expressionProperties: {
                  'templateOptions.label': this._translateService.stream(
                    'Presenza assicurazione?'
                  ),
                  'templateOptions.disabled': this.disabled.base,
                },
              },
              {
                key: 'assicurazione_altro_note',
                className: 'flex-1',
                type: 'textarea',
                templateOptions: {
                  required: this._required.sis(
                    'veicoli.assicurazione_altro_note'
                  ),
                },
                hideExpression: (model: any, formState: any) =>
                  !(
                    model &&
                    model.assicurazione_sinoaltro &&
                    model.assicurazione_sinoaltro.id != 1 &&
                    model.assicurazione_sinoaltro.id != 2
                  ),
                expressionProperties: {
                  'templateOptions.label': this._translateService.stream(
                    'Motivazione della mancanza'
                  ),
                  'templateOptions.disabled': this.disabled.base,
                },
              },
              {
                hideExpression: (model: any, formState: any) =>
                  !(
                    model &&
                    model.assicurazione_sinoaltro &&
                    model.assicurazione_sinoaltro.id != 2 &&
                    model.assicurazione_sinoaltro.id != 3
                  ),
                fieldGroup: [
                  {
                    fieldGroupClassName: 'display-flex',

                    fieldGroup: [
                      {
                        key: 'assicurazione_societa',
                        className: 'flex-1',
                        type: 'input',
                        templateOptions: {
                          required: this._required.sis(
                            'veicoli.assicurazione_societa'
                          ),
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream(
                              'Il veicolo è assicurato con'
                            ),
                        },
                      },
                      {
                        key: 'assicurazione_agenzia',
                        className: 'flex-1',
                        type: 'input',
                        templateOptions: {
                          required: this._required.sis(
                            'veicoli.assicurazione_agenzia'
                          ),
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Agenzia'),
                        },
                      },
                    ],
                  },
                  {
                    fieldGroupClassName: 'display-flex',

                    fieldGroup: [
                      {
                        key: 'assicurazione_polizza',
                        className: 'flex-1',
                        type: 'input',
                        templateOptions: {
                          required: this._required.sis(
                            'veicoli.assicurazione_polizza'
                          ),
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Polizza n.'),
                        },
                      },
                      {
                        key: 'assicurazione_data_inizio',
                        className: 'flex-1',
                        type: 'datepicker',
                        templateOptions: {
                          required: this._required.sis(
                            'veicoli.assicurazione_data_inizio'
                          ),
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Valida dal'),
                        },
                      },
                      {
                        key: 'assicurazione_data_fine',
                        className: 'flex-1',
                        type: 'datepicker',
                        templateOptions: {
                          required: this._required.sis(
                            'veicoli.assicurazione_data_fine'
                          ),
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('al'),
                        },
                      },
                    ],
                  },
                ],
              },

              {
                fieldGroupClassName: 'display-flex',

                fieldGroup: [
                  {
                    key: 'accertamenti_uso_cintura_sinoaltro',
                    className: 'flex-1',
                    type: 'autocomplete',
                    templateOptions: {
                      required: this._required.sis(
                        'veicoli.accertamenti_uso_cintura_sinoaltro'
                      ),

                      filter: (
                        term: any,
                        limit: number,
                        offset: number,
                        parent?: any
                      ) =>
                        this._siNoAltroSelect
                          .watch({
                            limit: limit,
                            offset: offset,
                            ...(term && typeof term === 'string'
                              ? { citta: { _ilike: '%' + term + '%' } }
                              : {}),
                          })
                          .valueChanges.pipe(
                            map((result) => result.data?._sinoaltro)
                          ),
                    },
                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Uso cintura sicurezza?'
                      ),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'accertamenti_uso_cintura_altro_note',
                    className: 'flex-2',
                    type: 'textarea',
                    templateOptions: {
                      required: this._required.sis(
                        'veicoli.accertamenti_uso_cintura_altro_note'
                      ),
                    },
                    hideExpression: (model: any, formState: any) =>
                      !(
                        model &&
                        model.accertamenti_uso_cintura_sinoaltro &&
                        model.accertamenti_uso_cintura_sinoaltro.id != 1 &&
                        model.accertamenti_uso_cintura_sinoaltro.id != 2
                      ),
                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Motivazione della mancanza'
                      ),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },
              {
                fieldGroupClassName: 'display-flex',

                fieldGroup: [
                  {
                    key: 'accertamenti_uso_casco_sinoaltro',
                    className: 'flex-1',
                    type: 'autocomplete',
                    templateOptions: {
                      required: this._required.sis(
                        'veicoli.accertamenti_uso_casco_sinoaltro'
                      ),

                      filter: (
                        term: any,
                        limit: number,
                        offset: number,
                        parent?: any
                      ) =>
                        this._siNoAltroSelect
                          .watch({
                            limit: limit,
                            offset: offset,
                            ...(term && typeof term === 'string'
                              ? { citta: { _ilike: '%' + term + '%' } }
                              : {}),
                          })
                          .valueChanges.pipe(
                            map((result) => result.data?._sinoaltro)
                          ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Uso casco?'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'accertamenti_uso_casco_altro_note',
                    className: 'flex-2',
                    type: 'textarea',
                    templateOptions: {
                      required: this._required.sis(
                        'veicoli.accertamenti_uso_casco_altro_note'
                      ),
                    },
                    hideExpression: (model: any, formState: any) =>
                      !(
                        model &&
                        model.accertamenti_uso_casco_sinoaltro &&
                        model.accertamenti_uso_casco_sinoaltro.id != 1 &&
                        model.accertamenti_uso_casco_sinoaltro.id != 2
                      ),
                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Motivazione della mancanza'
                      ),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },
              {
                fieldGroupClassName: 'display-flex',

                fieldGroup: [
                  {
                    key: 'accertamento_uso_antiabbandono_sinoaltro',
                    type: 'autocomplete',
                    className: 'flex-1',
                    templateOptions: {
                      required: this._required.sis(
                        'veicoli.accertamento_uso_antiabbandono_sinoaltro'
                      ),

                      filter: (
                        term: any,
                        limit: number,
                        offset: number,
                        parent?: any
                      ) =>
                        this._siNoAltroSelect
                          .watch({
                            limit: limit,
                            offset: offset,
                            ...(term && typeof term === 'string'
                              ? { citta: { _ilike: '%' + term + '%' } }
                              : {}),
                          })
                          .valueChanges.pipe(
                            map((result) => result.data?._sinoaltro)
                          ),
                    },
                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Uso sistema anti abbandono?'
                      ),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'accertamento_uso_antiabbandono_altro_note',
                    className: 'flex-2',
                    type: 'textarea',
                    templateOptions: {
                      required: this._required.sis(
                        'veicoli.accertamento_uso_antiabbandono_altro_note'
                      ),
                    },
                    hideExpression: (model: any, formState: any) =>
                      !(
                        model &&
                        model.accertamento_uso_antiabbandono_sinoaltro &&
                        model.accertamento_uso_antiabbandono_sinoaltro.id !=
                          1 &&
                        model.accertamento_uso_antiabbandono_sinoaltro.id != 2
                      ),
                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Motivazione della mancanza'
                      ),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },
              {
                fieldGroupClassName: 'display-flex',

                fieldGroup: [
                  {
                    key: 'accertamento_uso_sistema_bambini_sinoaltro',
                    className: 'flex-1',
                    type: 'autocomplete',
                    templateOptions: {
                      required: this._required.sis(
                        'veicoli.accertamento_uso_sistema_bambini_sinoaltro'
                      ),

                      filter: (
                        term: any,
                        limit: number,
                        offset: number,
                        parent?: any
                      ) =>
                        this._siNoAltroSelect
                          .watch({
                            limit: limit,
                            offset: offset,
                            ...(term && typeof term === 'string'
                              ? { citta: { _ilike: '%' + term + '%' } }
                              : {}),
                          })
                          .valueChanges.pipe(
                            map((result) => result.data?._sinoaltro)
                          ),
                    },
                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Uso sistema ritenuta bambini?'
                      ),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'accertamento_uso_sistema_bambini_altro_note',
                    className: 'flex-2',
                    type: 'textarea',
                    templateOptions: {
                      required: this._required.sis(
                        'veicoli.accertamento_uso_sistema_bambini_altro_note'
                      ),
                    },
                    hideExpression: (model: any, formState: any) =>
                      !(
                        model &&
                        model.accertamento_uso_sistema_bambini_sinoaltro &&
                        model.accertamento_uso_sistema_bambini_sinoaltro.id !=
                          1 &&
                        model.accertamento_uso_sistema_bambini_sinoaltro.id != 2
                      ),
                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Motivazione della mancanza'
                      ),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },

              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'dotazione_cinture',
                    type: 'toggle',
                    className: 'flex-1',
                    templateOptions: {
                      appearance: 'standard',
                    },

                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Il veicolo è dotato di cinture di sicurezza?'
                      ),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'dotazione_airbag',
                    type: 'toggle',
                    className: 'flex-1',
                    templateOptions: {
                      appearance: 'standard',
                    },

                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Il veicolo è dotato di airbag?'
                      ),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'accertamenti_abs',
                    type: 'toggle',
                    className: 'flex-1',
                    templateOptions: {
                      appearance: 'standard',
                    },

                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('ABS?'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'accertamenti_attivazione',
                    type: 'toggle',
                    className: 'flex-1',
                    templateOptions: {
                      appearance: 'standard',
                    },

                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Attivazione airbag?'
                      ),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },

              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'danni_su_veicolo_constatati',
                    type: 'textarea',
                    className: 'flex-1',
                    templateOptions: {
                      required: this._required.sis(
                        'veicoli.danni_su_veicolo_constatati'
                      ),
                    },
                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Danni constatati sul veicolo'
                      ),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'danni_del_veicolo_a_cose',
                    type: 'textarea',
                    className: 'flex-1',
                    templateOptions: {
                      required: this._required.sis(
                        'veicoli.danni_del_veicolo_a_cose'
                      ),
                    },
                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Danni a cose da parte del veicolo'
                      ),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },

              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'danni_del_veicolo_a_cose_rilievo',
                    type: 'toggle',
                    className: 'flex-1',
                    templateOptions: {
                      appearance: 'standard',
                    },

                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Si da atto che si è proceduto ai rilievi fotografici?'
                      ),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'danni_del_veicolo_a_cose_rilievo_data_inizio',
                    type: 'datepicker',
                    className: 'flex-1',
                    templateOptions: {
                      required: this._required.sis(
                        'veicoli.danni_del_veicolo_a_cose_rilievo_data_inizio'
                      ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Ora inizio rilievi'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'danni_del_veicolo_a_cose_rilievo_data_fine',
                    type: 'datepicker',
                    className: 'flex-1',
                    templateOptions: {
                      required: this._required.sis(
                        'veicoli.danni_del_veicolo_a_cose_rilievo_data_fine'
                      ),
                    },

                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Ora fine rilievi'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },

              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'danni_del_veicolo_a_cose_rilievo_presente',
                    type: 'toggle',
                    className: 'flex-1',
                    templateOptions: {
                      appearance: 'standard',
                    },

                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'La persona sottoposta alle indagini è presente?'
                      ),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'danni_del_veicolo_a_cose_rilievo_difensore',
                    type: 'toggle',
                    className: 'flex-1',
                    templateOptions: {
                      appearance: 'standard',
                    },

                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'ed è stata resa edotta dalla facoltà di farsi assistere da un difensore di fiducia che è intervenuto?'
                      ),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },

              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'destinazione_ritirato',
                    type: 'toggle',
                    className: 'flex-1',
                    templateOptions: {
                      appearance: 'standard',
                    },

                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Il veicolo è stato ritirato dal conducente?'
                      ),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'destinazione_sequestrato',
                    type: 'toggle',
                    className: 'flex-1',
                    templateOptions: {
                      appearance: 'standard',
                    },

                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Il veicolo è stato sequestrato?'
                      ),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },

              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'destinazione_decisione',
                    className: 'flex-1',
                    type: 'autocomplete',
                    templateOptions: {
                      required: this._required.sis(
                        'veicoli.destinazione_decisione'
                      ),

                      filter: (
                        term: any,
                        limit: number,
                        offset: number,
                        parent?: any
                      ) =>
                        this._destinazioneDecisioneSelect
                          .watch({
                            limit: limit,
                            offset: offset,
                            ...(term && typeof term === 'string'
                              ? { nome: { _ilike: '%' + term + '%' } }
                              : {}),
                          })
                          .valueChanges.pipe(
                            map(
                              (result) =>
                                result.data?.sis__destinazione_decisione
                            )
                          ),
                    },
                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Il recupero è stato deciso'
                      ),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'destinazione_decisione_altro',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis(
                        'veicoli.destinazione_decisione_altro'
                      ),
                    },
                    hideExpression: (model: any, formState: any) =>
                      !(
                        model &&
                        model.destinazione_decisione &&
                        model.destinazione_decisione.id == 3
                      ),
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Specificare altro'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },

              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'destinazione_trasportato_presso',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                      required: this._required.sis(
                        'veicoli.destinazione_trasportato_presso'
                      ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Trasportato presso'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'destinazione_persona_affidataria',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                      required: this._required.sis(
                        'veicoli.destinazione_persona_affidataria'
                      ),
                    },
                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Il tutto è stato affidato al Sig.'
                      ),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'destinazione_data',
                    type: 'datepicker',
                    className: 'flex-1',
                    templateOptions: {
                      required: this._required.sis('veicoli.destinazione_data'),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('in data'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },

              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'traccia_suolo',
                    type: 'toggle',
                    className: 'flex-1',
                    templateOptions: {
                      appearance: 'standard',
                    },

                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Tracce al suolo?'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'traccia_suolo_abs',
                    type: 'toggle',
                    className: 'flex-1',
                    templateOptions: {
                      appearance: 'standard',
                    },
                    hideExpression: (model: any, formState: any) =>
                      model
                        ? model.traccia_suolo
                          ? model.traccia_suolo == true
                          : false
                        : false,
                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Il veicolo è munito di impianto antibloccaggio ruote (ABS)?'
                      ),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },

              {
                hideExpression: (model: any, formState: any) =>
                  model
                    ? model.traccia_suolo
                      ? model.traccia_suolo == false
                      : true
                    : true,
                fieldGroup: [
                  {
                    fieldGroupClassName: 'display-flex',
                    fieldGroup: [
                      {
                        key: 'traccia_suolo_tipologia',
                        className: 'flex-1',
                        type: 'autocomplete',
                        templateOptions: {
                          required: this._required.sis(
                            'veicoli.traccia_suolo_tipologia'
                          ),

                          filter: (
                            term: any,
                            limit: number,
                            offset: number,
                            parent?: any
                          ) =>
                            this._tracciaSuoloTipologiaSelect
                              .watch({
                                limit: limit,
                                offset: offset,
                                ...(term && typeof term === 'string'
                                  ? { nome: { _ilike: '%' + term + '%' } }
                                  : {}),
                              })
                              .valueChanges.pipe(
                                map(
                                  (result) =>
                                    result.data?.sis__traccia_suolo_tipologia
                                )
                              ),
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Tipologia'),
                          'templateOptions.disabled': this.disabled.base,
                        },
                      },
                      {
                        key: 'traccia_suolo_frenata_tipologia',
                        className: 'flex-1',
                        type: 'autocomplete',
                        hideExpression: (model: any, formState: any) =>
                          !(
                            model &&
                            model.traccia_suolo_tipologia &&
                            model.traccia_suolo_tipologia.id == 1
                          ),
                        templateOptions: {
                          required: this._required.sis(
                            'veicoli.traccia_suolo_frenata_tipologia'
                          ),

                          filter: (
                            term: any,
                            limit: number,
                            offset: number,
                            parent?: any
                          ) =>
                            this._tracciaSuoloFrenataTipologiaSelect
                              .watch({
                                limit: limit,
                                offset: offset,
                                ...(term && typeof term === 'string'
                                  ? { nome: { _ilike: '%' + term + '%' } }
                                  : {}),
                              })
                              .valueChanges.pipe(
                                map(
                                  (result) =>
                                    result.data
                                      ?.sis__traccia_suolo_frenata_tipologia
                                )
                              ),
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Specificare'),
                          'templateOptions.disabled': this.disabled.base,
                        },
                      },
                      {
                        key: 'traccia_suolo_metri',
                        type: 'input',
                        className: 'flex-1',
                        templateOptions: {
                          required: this._required.sis(
                            'veicoli.traccia_suolo_metri'
                          ),
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Metri'),
                          'templateOptions.disabled': this.disabled.base,
                        },
                      },
                    ],
                  },
                  {
                    key: 'traccia_suolo_terminazione',
                    type: 'autocomplete',
                    templateOptions: {
                      required: this._required.sis(
                        'veicoli.traccia_suolo_terminazione'
                      ),

                      filter: (
                        term: any,
                        limit: number,
                        offset: number,
                        parent?: any
                      ) =>
                        this._tracciaSuoloTerminazioneSelect
                          .watch({
                            limit: limit,
                            offset: offset,
                            ...(term && typeof term === 'string'
                              ? { nome: { _ilike: '%' + term + '%' } }
                              : {}),
                          })
                          .valueChanges.pipe(
                            map(
                              (result) =>
                                result.data?.sis__traccia_suolo_terminazione
                            )
                          ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Terminanti con'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },

                  {
                    fieldGroupClassName: 'display-flex',
                    hideExpression: (model: any, formState: any) =>
                      !(
                        model &&
                        model.traccia_suolo_terminazione &&
                        model.traccia_suolo_terminazione.id != 1
                      ),
                    fieldGroup: [
                      {
                        key: 'traccia_suolo_terminazione_tipologia',
                        type: 'autocomplete',
                        className: 'flex-1',
                        templateOptions: {
                          required: this._required.sis(
                            'veicoli.traccia_suolo_terminazione_tipologia'
                          ),

                          filter: (
                            term: any,
                            limit: number,
                            offset: number,
                            parent?: any
                          ) =>
                            this._tracciaSuoloTerminazioneTipologiaSelect
                              .watch({
                                limit: limit,
                                offset: offset,
                                ...(term && typeof term === 'string'
                                  ? { nome: { _ilike: '%' + term + '%' } }
                                  : {}),
                              })
                              .valueChanges.pipe(
                                map(
                                  (result) =>
                                    result.data
                                      ?.sis__traccia_suolo_terminazione_tipologia
                                )
                              ),
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Specifica'),
                          'templateOptions.disabled': this.disabled.base,
                        },
                      },

                      {
                        key: 'traccia_suolo_terminazione_metri',
                        hideExpression: (model: any, formState: any) =>
                          !(
                            model && model.traccia_suolo_terminazione_tipologia
                          ),
                        type: 'input',
                        className: 'flex-1',
                        templateOptions: {
                          required: this._required.sis(
                            'veicoli.traccia_suolo_terminazione_metri'
                          ),
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Metri'),
                          'templateOptions.disabled': this.disabled.base,
                        },
                      },
                    ],
                  },

                  {
                    fieldGroupClassName: 'display-flex',
                    hideExpression: (model: any, formState: any) =>
                      !(
                        model &&
                        model.traccia_suolo_terminazione &&
                        model.traccia_suolo_terminazione.id != 1
                      ),
                    fieldGroup: [
                      {
                        key: 'traccia_suolo_terminazione_intensita',
                        type: 'autocomplete',
                        className: 'flex-1',
                        templateOptions: {
                          required: this._required.sis(
                            'veicoli.traccia_suolo_terminazione_intensita'
                          ),

                          filter: (
                            term: any,
                            limit: number,
                            offset: number,
                            parent?: any
                          ) =>
                            this._tracciaSuoloTerminazioneIntensitaSelect
                              .watch({
                                limit: limit,
                                offset: offset,
                                ...(term && typeof term === 'string'
                                  ? { nome: { _ilike: '%' + term + '%' } }
                                  : {}),
                              })
                              .valueChanges.pipe(
                                map(
                                  (result) =>
                                    result.data
                                      ?.sis__traccia_suolo_terminazione_intensita
                                )
                              ),
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Intensità'),
                          'templateOptions.disabled': this.disabled.base,
                        },
                      },
                      {
                        key: 'traccia_suolo_terminazione_forma',
                        type: 'autocomplete',
                        className: 'flex-1',
                        templateOptions: {
                          required: this._required.sis(
                            'veicoli.traccia_suolo_terminazione_forma'
                          ),

                          filter: (
                            term: any,
                            limit: number,
                            offset: number,
                            parent?: any
                          ) =>
                            this._tracciaSuoloTerminazioneFormaSelect
                              .watch({
                                limit: limit,
                                offset: offset,
                                ...(term && typeof term === 'string'
                                  ? { nome: { _ilike: '%' + term + '%' } }
                                  : {}),
                              })
                              .valueChanges.pipe(
                                map(
                                  (result) =>
                                    result.data
                                      ?.sis__traccia_suolo_terminazione_forma
                                )
                              ),
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Forma'),
                          'templateOptions.disabled': this.disabled.base,
                        },
                      },
                      {
                        key: 'traccia_suolo_terminazione_andamento',
                        type: 'autocomplete',
                        className: 'flex-1',
                        templateOptions: {
                          required: this._required.sis(
                            'veicoli.traccia_suolo_terminazione_andamento'
                          ),

                          filter: (
                            term: any,
                            limit: number,
                            offset: number,
                            parent?: any
                          ) =>
                            this._tracciaSuoloTerminazioneAndamentoSelect
                              .watch({
                                limit: limit,
                                offset: offset,
                                ...(term && typeof term === 'string'
                                  ? { nome: { _ilike: '%' + term + '%' } }
                                  : {}),
                              })
                              .valueChanges.pipe(
                                map(
                                  (result) =>
                                    result.data
                                      ?.sis__traccia_suolo_terminazione_andamento
                                )
                              ),
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Andamento'),
                          'templateOptions.disabled': this.disabled.base,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Infrazioni'),
      },
      fieldGroup: [
        {
          key: 'infrazioni',
          type: 'repeat',
          expressionProperties: {
            'templateOptions.addText':
              this._translateService.stream('Aggiungi'),
            'templateOptions.disabled': this.disabled.base,
          },
          fieldArray: {
            fieldGroup: [
              {
                key: 'id',
                className: 'hidden',
                type: 'input',
                templateOptions: {
                  readonly: true,
                },
              },
              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'conducente',
                    className: 'flex-1',
                    hideExpression: (model: any, formState: any) =>
                      model && (model.veicolo || model.pedone),
                    type: 'autocomplete',
                    templateOptions: {
                      required: this._required.sis('infrazioni.conducente'),

                      displayWith: (e: any) =>
                        e ? e.nome + ' ' + e.cognome : '',
                      filter: (
                        term: any,
                        limit: number,
                        offset: number,
                        parent?: any
                      ) =>
                        this._conducenteSelect
                          .watch({
                            limit: limit,
                            offset: offset,
                            ...(term && typeof term === 'string'
                              ? {
                                  where: {
                                    ris_id: {
                                      _eq: this.id,
                                    },
                                    _or: [
                                      {
                                        nome: { _ilike: '%' + term + '%' },
                                      },
                                      {
                                        cognome: { _ilike: '%' + term + '%' },
                                      },
                                    ],
                                  },
                                }
                              : {}),
                          })
                          .valueChanges.pipe(
                            map((result) => result.data?.sis_conducente)
                          ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Conducente'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'pedone',
                    className: 'flex-1',
                    hideExpression: (model: any, formState: any) =>
                      model && (model.conducente || model.veicolo),
                    type: 'autocomplete',
                    templateOptions: {
                      required: this._required.sis('infrazioni.pedone'),

                      displayWith: (e: any) =>
                        e ? e.nome + ' ' + e.cognome : '',
                      filter: (
                        term: any,
                        limit: number,
                        offset: number,
                        parent?: any
                      ) =>
                        this._pedoneSelect
                          .watch({
                            limit: limit,
                            offset: offset,
                            ...(term && typeof term === 'string'
                              ? {
                                  where: {
                                    ris_id: {
                                      _eq: this.id,
                                    },
                                    _or: [
                                      {
                                        nome: { _ilike: '%' + term + '%' },
                                      },
                                      {
                                        cognome: { _ilike: '%' + term + '%' },
                                      },
                                    ],
                                  },
                                }
                              : {}),
                          })
                          .valueChanges.pipe(
                            map((result) => result.data?.sis_pedone)
                          ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Pedone'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'veicolo',
                    className: 'flex-1',
                    hideExpression: (model: any, formState: any) =>
                      model && (model.conducente || model.pedone),
                    type: 'autocomplete',
                    templateOptions: {
                      required: this._required.sis('infrazioni.veicolo'),

                      displayWith: (e: any) =>
                        e ? e.targa + ' ' + e.marca + ' ' + e.modello : '',
                      filter: (
                        term: any,
                        limit: number,
                        offset: number,
                        parent?: any
                      ) =>
                        this._veicoloSelect
                          .watch({
                            limit: limit,
                            offset: offset,
                            ...(term && typeof term === 'string'
                              ? {
                                  where: {
                                    ris_id: {
                                      _eq: this.id,
                                    },
                                    _or: [
                                      {
                                        targa: { _ilike: '%' + term + '%' },
                                      },
                                      {
                                        modello: { _ilike: '%' + term + '%' },
                                      },
                                      {
                                        marca: { _ilike: '%' + term + '%' },
                                      },
                                    ],
                                  },
                                }
                              : {}),
                          })
                          .valueChanges.pipe(
                            map((result) => result.data?.sis_veicolo)
                          ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Veicolo'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },

              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'verbale_n',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis('infrazioni.verbale_n'),
                    },

                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Verbale n.'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'verbale_data',
                    className: 'flex-1',
                    type: 'datepicker',
                    templateOptions: {
                      required: this._required.sis('infrazioni.verbale_data'),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Data'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },
              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'articolo',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis('infrazioni.articolo'),
                    },

                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Articolo'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'note',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis('infrazioni.note'),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Note'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },
              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'utg_prefettura',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis('infrazioni.utg_prefettura'),
                    },

                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('U.T.G. prefettura'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'data_trasmissione_rapporto',
                    className: 'flex-1',
                    type: 'datepicker',
                    templateOptions: {
                      required: this._required.sis(
                        'infrazioni.data_trasmissione_rapporto'
                      ),
                    },
                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Data trasmissione rapporto'
                      ),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },

              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'uffici_provinciale',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis(
                        'infrazioni.uffici_provinciale'
                      ),
                    },

                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Ufficio provinciale D.T.T.'
                      ),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'art_80_dtt',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis('infrazioni.art_80_dtt'),
                    },

                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Segnalazione Art. 80 D.T.T.'
                      ),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'art_80_data',
                    className: 'flex-1',
                    type: 'datepicker',
                    templateOptions: {
                      required: this._required.sis('infrazioni.art_80_data'),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('del'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Infortunati'),
      },
      fieldGroup: [
        {
          key: 'infortunati',
          type: 'repeat',
          expressionProperties: {
            'templateOptions.addText':
              this._translateService.stream('Aggiungi'),
            'templateOptions.disabled': this.disabled.base,
          },
          fieldArray: {
            fieldGroup: [
              {
                key: 'id',
                className: 'hidden',
                type: 'input',
                templateOptions: {
                  readonly: true,
                },
              },
              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'veicolo',
                    className: 'flex-1',
                    hideExpression: (model: any, formState: any) =>
                      model && model.pedone,
                    type: 'autocomplete',
                    templateOptions: {
                      required: this._required.sis('infortunati.veicolo'),

                      displayWith: (e: any) =>
                        e ? e.targa + ' ' + e.marca + ' ' + e.modello : '',
                      filter: (
                        term: any,
                        limit: number,
                        offset: number,
                        parent?: any
                      ) =>
                        this._veicoloSelect
                          .watch({
                            limit: limit,
                            offset: offset,
                            ...(term && typeof term === 'string'
                              ? {
                                  where: {
                                    ris_id: {
                                      _eq: this.id,
                                    },
                                    _or: [
                                      {
                                        targa: { _ilike: '%' + term + '%' },
                                      },
                                      {
                                        modello: { _ilike: '%' + term + '%' },
                                      },
                                      {
                                        marca: { _ilike: '%' + term + '%' },
                                      },
                                    ],
                                  },
                                }
                              : {}),
                          })
                          .valueChanges.pipe(
                            map((result) => result.data?.sis_veicolo)
                          ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Veicolo'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },

                  {
                    key: 'conducente',
                    className: 'flex-1',
                    hideExpression: (model: any, formState: any) =>
                      model
                        ? model.veicolo && model.trasportato == undefined
                          ? false
                          : true
                        : true,
                    type: 'autocomplete',
                    templateOptions: {
                      required: this._required.sis('infortunati.conducente'),

                      displayWith: (e: any) =>
                        e ? e.nome + ' ' + e.cognome : '',
                      filter: (
                        term: any,
                        limit: number,
                        offset: number,
                        parent?: any
                      ) =>
                        this._conducenteSelect
                          .watch({
                            limit: limit,
                            offset: offset,
                            ...(term && typeof term === 'string'
                              ? {
                                  where: {
                                    ris_id: {
                                      _eq: this.id,
                                    },
                                    _or: [
                                      {
                                        nome: { _ilike: '%' + term + '%' },
                                      },
                                      {
                                        cognome: { _ilike: '%' + term + '%' },
                                      },
                                    ],
                                  },
                                }
                              : {}),
                          })
                          .valueChanges.pipe(
                            map((result) => result.data?.sis_conducente)
                          ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Conducente'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'trasportato',
                    className: 'flex-1',
                    hideExpression: (model: any, formState: any) =>
                      model
                        ? model.veicolo && model.conducente == undefined
                          ? false
                          : true
                        : true,
                    type: 'autocomplete',
                    templateOptions: {
                      required: this._required.sis('infortunati.trasportato'),

                      displayWith: (e: any) =>
                        e ? e.nome + ' ' + e.cognome : '',
                      filter: (
                        term: any,
                        limit: number,
                        offset: number,
                        parent?: any
                      ) =>
                        this._trasportatoSelect
                          .watch({
                            limit: limit,
                            offset: offset,
                            ...(term && typeof term === 'string'
                              ? {
                                  where: {
                                    ris_id: {
                                      _eq: this.id,
                                    },
                                    _or: [
                                      {
                                        nome: { _ilike: '%' + term + '%' },
                                      },
                                      {
                                        cognome: { _ilike: '%' + term + '%' },
                                      },
                                    ],
                                  },
                                }
                              : {}),
                          })
                          .valueChanges.pipe(
                            map((result) => result.data?.sis_trasportato)
                          ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Trasportato'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },
              {
                key: 'pedone',
                className: 'flex-1',
                hideExpression: (model: any, formState: any) =>
                  model ? (model.veicolo ? true : false) : false,
                type: 'autocomplete',
                templateOptions: {
                  required: this._required.sis('infortunati.pedone'),

                  displayWith: (e: any) => (e ? e.nome + ' ' + e.cognome : ''),
                  filter: (
                    term: any,
                    limit: number,
                    offset: number,
                    parent?: any
                  ) =>
                    this._pedoneSelect
                      .watch({
                        limit: limit,
                        offset: offset,
                        ...(term && typeof term === 'string'
                          ? {
                              where: {
                                ris_id: {
                                  _eq: this.id,
                                },
                                _or: [
                                  {
                                    nome: { _ilike: '%' + term + '%' },
                                  },
                                  {
                                    cognome: { _ilike: '%' + term + '%' },
                                  },
                                ],
                              },
                            }
                          : {}),
                      })
                      .valueChanges.pipe(
                        map((result) => result.data?.sis_pedone)
                      ),
                },
                expressionProperties: {
                  'templateOptions.label':
                    this._translateService.stream('Pedone'),
                  'templateOptions.disabled': this.disabled.base,
                },
              },

              {
                hideExpression: (model: any, formState: any) =>
                  model &&
                  (model.conducente || model.trasportato || model.pedone),
                fieldGroup: [
                  {
                    fieldGroupClassName: 'display-flex',
                    fieldGroup: [
                      {
                        key: 'titolo',
                        className: 'flex-1',
                        type: 'autocomplete',
                        templateOptions: {
                          required: this._required.sis('infortunati.titolo'),

                          filter: (
                            term: any,
                            limit: number,
                            offset: number,
                            parent?: any
                          ) =>
                            this._titoloSelectGQL
                              .watch({
                                limit: limit,
                                offset: offset,
                                ...(term && typeof term === 'string'
                                  ? { nome: { _ilike: '%' + term + '%' } }
                                  : {}),
                              })
                              .valueChanges.pipe(
                                map((result) => result.data?._titolo)
                              ),
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Titolo'),
                          'templateOptions.disabled': this.disabled.base,
                        },
                      },
                      {
                        key: 'nome',
                        className: 'flex-1',
                        type: 'input',
                        templateOptions: {
                          required: this._required.sis('infortunati.nome'),
                        },

                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Nome'),
                          'templateOptions.disabled': this.disabled.base,
                        },
                      },
                      {
                        key: 'cognome',
                        className: 'flex-1',
                        type: 'input',
                        templateOptions: {
                          required: this._required.sis('infortunati.cognome'),
                        },

                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Cognome'),
                          'templateOptions.disabled': this.disabled.base,
                        },
                      },
                    ],
                  },
                  {
                    fieldGroupClassName: 'display-flex',
                    fieldGroup: [
                      {
                        key: 'sesso',
                        className: 'flex-1',
                        type: 'autocomplete',
                        templateOptions: {
                          required: this._required.sis('infortunati.sesso'),

                          filter: (
                            term: any,
                            limit: number,
                            offset: number,
                            parent?: any
                          ) =>
                            this._sessoSelect
                              .watch({
                                limit: limit,
                                offset: offset,
                                ...(term && typeof term === 'string'
                                  ? { nome: { _ilike: '%' + term + '%' } }
                                  : {}),
                              })
                              .valueChanges.pipe(
                                map((result) => result.data?._sesso)
                              ),
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Sesso'),
                          'templateOptions.disabled': this.disabled.base,
                        },
                      },
                      {
                        key: 'telefono',
                        className: 'flex-1',
                        type: 'input',
                        templateOptions: {
                          required: this._required.sis('infortunati.telefono'),
                        },

                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Telefono'),
                          'templateOptions.disabled': this.disabled.base,
                        },
                      },
                    ],
                  },
                  {
                    fieldGroupClassName: 'display-flex',
                    fieldGroup: [
                      {
                        key: 'nascita_data',
                        className: 'flex-1',
                        type: 'datepicker',
                        templateOptions: {
                          required: this._required.sis(
                            'infortunati.nascita_data'
                          ),
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Data di nascita'),
                        },
                      },
                      {
                        key: 'nascita_citta',
                        className: 'flex-1',
                        type: 'autocomplete',
                        templateOptions: {
                          required: this._required.sis(
                            'infortunati.nascita_citta'
                          ),

                          displayWith: (e: any) =>
                            e
                              ? e.citta +
                                (e.p_abbreviazione && e.p_abbreviazione != ''
                                  ? ' (' + e.p_abbreviazione + ')'
                                  : '')
                              : '',
                          filter: (
                            term: any,
                            limit: number,
                            offset: number,
                            parent?: any
                          ) =>
                            this._cittaSelect
                              .watch({
                                limit: limit,
                                offset: offset,
                                ...(term && typeof term === 'string'
                                  ? { citta: { _ilike: '%' + term + '%' } }
                                  : {}),
                              })
                              .valueChanges.pipe(
                                map((result) => result.data?._citta)
                              ),
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Città di nascita'),
                          'templateOptions.disabled': this.disabled.base,
                        },
                      },
                      {
                        key: 'nascita_citta_altro',
                        className: 'flex-1',
                        type: 'input',
                        templateOptions: {
                          required: this._required.sis(
                            'infortunati.nascita_citta_altro'
                          ),
                        },
                        hideExpression: (model: any, formState: any) =>
                          !(
                            model &&
                            model.nascita_citta &&
                            model.nascita_citta.id == 109
                          ),
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Specificare altro'),
                          'templateOptions.disabled': this.disabled.base,
                        },
                      },
                    ],
                  },
                  {
                    fieldGroupClassName: 'display-flex',
                    fieldGroup: [
                      {
                        key: 'residente_indirizzo',
                        className: 'flex-1',
                        type: 'input',
                        templateOptions: {
                          required: this._required.sis(
                            'infortunati.residente_indirizzo'
                          ),
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream(
                              'Indirizzo di residenza'
                            ),
                        },
                      },
                      {
                        key: 'residente_citta',
                        className: 'flex-1',
                        type: 'autocomplete',
                        templateOptions: {
                          required: this._required.sis(
                            'infortunati.residente_citta'
                          ),

                          displayWith: (e: any) =>
                            e
                              ? e.citta +
                                (e.p_abbreviazione && e.p_abbreviazione != ''
                                  ? ' (' + e.p_abbreviazione + ')'
                                  : '')
                              : '',
                          filter: (
                            term: any,
                            limit: number,
                            offset: number,
                            parent?: any
                          ) =>
                            this._cittaSelect
                              .watch({
                                limit: limit,
                                offset: offset,
                                ...(term && typeof term === 'string'
                                  ? { citta: { _ilike: '%' + term + '%' } }
                                  : {}),
                              })
                              .valueChanges.pipe(
                                map((result) => result.data?._citta)
                              ),
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Città di residenza'),
                          'templateOptions.disabled': this.disabled.base,
                        },
                      },
                      {
                        key: 'residente_citta_altro',
                        className: 'flex-1',
                        type: 'input',
                        templateOptions: {
                          required: this._required.sis(
                            'infortunati.residente_citta_altro'
                          ),
                        },
                        hideExpression: (model: any, formState: any) =>
                          !(
                            model &&
                            model.residente_citta &&
                            model.residente_citta.id == 109
                          ),
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Specificare altro'),
                          'templateOptions.disabled': this.disabled.base,
                        },
                      },
                    ],
                  },
                ],
              },

              {
                key: 'rifiuta_cure_immediate',
                type: 'toggle',
                className: 'flex-1',
                templateOptions: {
                  appearance: 'standard',
                },

                expressionProperties: {
                  'templateOptions.label': this._translateService.stream(
                    'Rifiuta cure immediate?'
                  ),
                  'templateOptions.disabled': this.disabled.base,
                },
              },

              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'danni_lamentati',
                    type: 'textarea',
                    className: 'flex-1',
                    templateOptions: {
                      required: this._required.sis(
                        'infortunati.danni_lamentati'
                      ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Danni lamentati'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'cura_da_parte',
                    type: 'textarea',
                    className: 'flex-1',
                    templateOptions: {
                      required: this._required.sis('infortunati.cura_da_parte'),
                    },
                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Sottoposto a cura mediche da parte di'
                      ),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },
              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'ospedale_ricoverato',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                      required: this._required.sis(
                        'infortunati.ospedale_ricoverato'
                      ),
                    },
                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        "Ricoverato all'ospedale"
                      ),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'ospedale_referto',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                      required: this._required.sis(
                        'infortunati.ospedale_referto'
                      ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Referto n.'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'ospedale_referto_rilasciato_da',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                      required: this._required.sis(
                        'infortunati.ospedale_referto_rilasciato_da'
                      ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Rilasciato da'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },
              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'ospedale_diagnosi',
                    type: 'textarea',
                    className: 'flex-1',
                    templateOptions: {
                      required: this._required.sis(
                        'infortunati.ospedale_diagnosi'
                      ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Diagnosi'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'ospedale_prognosi',
                    type: 'textarea',
                    className: 'flex-1',
                    templateOptions: {
                      required: this._required.sis(
                        'infortunati.ospedale_prognosi'
                      ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Prognosi'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },
              {
                key: 'ospedale_altro',
                type: 'textarea',
                className: 'flex-1',
                templateOptions: {
                  required: this._required.sis('infortunati.ospedale_altro'),
                },
                expressionProperties: {
                  'templateOptions.label': this._translateService.stream(
                    'Altre eventuali notizie'
                  ),
                  'templateOptions.disabled': this.disabled.base,
                },
              },
              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'trasportato_ambulanza',
                    className: 'flex-1',
                    type: 'autocomplete',
                    templateOptions: {
                      required: this._required.sis(
                        'infortunati.trasportato_ambulanza'
                      ),

                      filter: (
                        term: any,
                        limit: number,
                        offset: number,
                        parent?: any
                      ) =>
                        this._infortunatoTrasportatoSelect
                          .watch({
                            limit: limit,
                            offset: offset,
                            ...(term && typeof term === 'string'
                              ? { nome: { _ilike: '%' + term + '%' } }
                              : {}),
                          })
                          .valueChanges.pipe(
                            map(
                              (result) =>
                                result.data?.sis__intortunato_tasportato
                            )
                          ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Trasportato in'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'trasportato_richiesta',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                      required: this._required.sis(
                        'infortunati.trasportato_richiesta'
                      ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Su richiesta di'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'trasportato_targa_auto',
                    type: 'input',
                    className: 'flex-1',
                    templateOptions: {
                      required: this._required.sis(
                        'infortunati.trasportato_targa_auto'
                      ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Targa'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },
              {
                key: 'informazioni',
                className: 'flex-1',
                type: 'autocomplete',
                templateOptions: {
                  required: this._required.sis('infortunati.informazioni'),

                  multiple: true,
                  filter: (
                    term: any,
                    limit: number,
                    offset: number,
                    parent?: any
                  ) =>
                    this._infortunatoInformazioneSelect
                      .watch({
                        limit: limit,
                        offset: offset,
                        ...(term && typeof term === 'string'
                          ? { nome: { _ilike: '%' + term + '%' } }
                          : {}),
                      })
                      .valueChanges.pipe(
                        map(
                          (result) => result.data?.sis__infortunato_informazione
                        )
                      ),
                },
                expressionProperties: {
                  'templateOptions.label': this._translateService.stream(
                    "Informazioni sull'infortunato"
                  ),
                  'templateOptions.disabled': this.disabled.base,
                },
              },
            ],
          },
        },
      ],
    },
    {
      expressionProperties: {
        'templateOptions.label': this._translateService.stream(
          'Localizzazione incidente'
        ),
      },
      key: 'localizzazione',
      fieldGroup: [
        {
          fieldGroupClassName: 'display-flex',
          fieldGroup: [
            {
              className: 'flex-1',
              type: 'autocomplete',
              key: 'municipalita',
              templateOptions: {
                required: true,
                filter: (
                  term: any,
                  limit: number,
                  offset: number,
                  parent?: any
                ) =>
                  this._municipalitaSelectGQL
                    .watch({
                      limit,
                      offset,
                      ...(term && typeof term === 'string'
                        ? { nome: { _ilike: '%' + term + '%' } }
                        : {}),
                    })
                    .valueChanges.pipe(
                      map((result) => result.data?.toponomastica_municipalita)
                    ),
                parentReset: (field: FormlyFieldConfig) => {
                  field.parent?.fieldGroup![1].formControl?.reset();
                  field.parent?.fieldGroup![2].formControl?.reset();
                },
              },
              expressionProperties: {
                'templateOptions.label':
                  this._translateService.stream('Municipalità'),
                'templateOptions.disabled': this.disabled.base,
              },
            },
            {
              className: 'flex-1',
              type: 'autocomplete',
              key: 'quartiere',
              templateOptions: {
                required: true,
                filter: (
                  term: any,
                  limit: number,
                  offset: number,
                  parent?: any
                ) =>
                  this._quartiereSelectGQL
                    .watch({
                      limit,
                      offset,
                      where: {
                        ...(term && typeof term === 'string'
                          ? { nome: { _ilike: '%' + term + '%' } }
                          : {}),
                        municipalita: {
                          municipalita_id: {
                            _eq: parent ? parent.id : 0,
                          },
                        },
                      },
                    })
                    .valueChanges.pipe(
                      map((result) => result.data?.toponomastica_quartiere)
                    ),
                parentReset: (field: FormlyFieldConfig) => {
                  field.parent?.fieldGroup![2].formControl?.reset();
                },
              },
              hooks: {
                onInit: (field) => {
                  field!.templateOptions!.parent =
                    field?.parent?.fieldGroup![0].formControl;
                },
              },
              expressionProperties: {
                'templateOptions.label':
                  this._translateService.stream('Quartiere'),
                'templateOptions.disabled': this.disabled.base,
              },
            },
            {
              className: 'flex-1',
              type: 'autocomplete',
              key: 'toponimo',
              templateOptions: {
                required: true,
                displayWith: (e: any) =>
                  e ? (e.dug ? e.dug.nome + ' ' : '') + e.nome : '',
                filter: (
                  term: any,
                  limit: number,
                  offset: number,
                  parent?: any
                ) =>
                  this._toponimoSelectGQL
                    .watch({
                      limit,
                      offset,
                      where: {
                        ...(term && typeof term === 'string'
                          ? { nome: { _ilike: '%' + term + '%' } }
                          : {}),
                        assegnazioni: {
                          quartiere_id: {
                            _eq: parent ? parent.id : 0,
                          },
                        },
                      },
                    })
                    .valueChanges.pipe(
                      map((result) => result.data?.toponomastica_toponimo)
                    ),
                parentReset: (field: FormlyFieldConfig) => {
                  field.parent?.parent?.fieldGroup![1].fieldGroup![1].formControl?.reset();
                  field.parent?.parent?.fieldGroup![1].fieldGroup![2].fieldGroup![0].fieldGroup![0].formControl?.reset();
                  field.parent?.parent?.fieldGroup![1].fieldGroup![2].fieldGroup![0].fieldGroup![1].formControl?.reset();
                  field.parent?.parent?.fieldGroup![1].fieldGroup![2].fieldGroup![0].fieldGroup![2].formControl?.reset();
                  field.parent?.parent?.fieldGroup![1].fieldGroup![2].fieldGroup![0].fieldGroup![3].formControl?.reset();
                  field.parent?.parent?.fieldGroup![1].fieldGroup![3].formControl?.reset();
                },
              },
              hooks: {
                onInit: (field) => {
                  field!.templateOptions!.parent =
                    field?.parent?.fieldGroup![1].formControl;
                },
              },
              expressionProperties: {
                'templateOptions.label':
                  this._translateService.stream('Toponimo'),
                'templateOptions.disabled': this.disabled.base,
              },
            },
          ],
        },
        {
          key: 'posizionamento_toponimo',
          hideExpression: (
            model: any,
            formState: any,
            field: FormlyFieldConfig | undefined
          ) =>
            field?.parent?.fieldGroup![0].fieldGroup![2].formControl?.value ==
            null,
          fieldGroup: [
            {
              className: 'section-label',
              template:
                '<h3><b>' +
                this._translateService.instant('Punto iniziale') +
                '</b></h3>',
            },
            {
              key: 'tipologia',
              type: 'autocomplete',
              templateOptions: {
                required: true,
                filter: (
                  term: any,
                  limit: number,
                  offset: number,
                  parent?: any
                ) =>
                  this._tipologiaPosizionamentoToponimoSelectGQL
                    .watch({
                      limit,
                      offset,
                      ...(term && typeof term === 'string'
                        ? { nome: { _ilike: '%' + term + '%' } }
                        : {}),
                    })
                    .valueChanges.pipe(
                      map(
                        (result) =>
                          result.data?.gis__tipologia_posizionamento_toponimo
                      )
                    ),
                parentReset: (field: FormlyFieldConfig) => {
                  field.parent?.fieldGroup![2].fieldGroup![0].fieldGroup![0].formControl?.reset();
                  field.parent?.fieldGroup![2].fieldGroup![0].fieldGroup![1].formControl?.reset();
                  field.parent?.fieldGroup![2].fieldGroup![0].fieldGroup![2].formControl?.reset();
                  field.parent?.fieldGroup![2].fieldGroup![0].fieldGroup![3].formControl?.reset();
                  field.parent?.fieldGroup![3].formControl?.reset();
                },
              },
              expressionProperties: {
                'templateOptions.label':
                  this._translateService.stream('Posizione'),
                'templateOptions.disabled': this.disabled.base,
              },
            },
            {
              fieldGroup: [
                {
                  hideExpression: (
                    model: any,
                    formState: any,
                    field?: FormlyFieldConfig
                  ) =>
                    !(
                      field?.parent?.parent?.fieldGroup![1].formControl
                        ?.value &&
                      [1, 2].includes(
                        field?.parent?.parent?.fieldGroup[1].formControl?.value
                          .id
                      )
                    ),
                  fieldGroupClassName: 'display-flex',
                  fieldGroup: [
                    {
                      className: 'flex-1',
                      key: 'specifica',
                      type: 'autocomplete',
                      templateOptions: {
                        required: true,
                        filter: (
                          term: any,
                          limit: number,
                          offset: number,
                          parent?: any
                        ) =>
                          this._specificaPosizionamentoToponimoSelectGQL
                            .watch({
                              limit,
                              offset,
                              ...(term && typeof term === 'string'
                                ? { nome: { _ilike: '%' + term + '%' } }
                                : {}),
                            })
                            .valueChanges.pipe(
                              map(
                                (result) =>
                                  result.data
                                    ?.gis__specifica_posizionamento_toponimo
                              )
                            ),
                        parentReset: (field: FormlyFieldConfig) => {
                          field.parent?.fieldGroup![1].formControl?.reset();
                          field.parent?.fieldGroup![2].formControl?.reset();
                          field.parent?.fieldGroup![3].formControl?.reset();
                        },
                      },
                      expressionProperties: {
                        'templateOptions.label':
                          this._translateService.stream('Specificare'),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                    {
                      key: 'civico', // CIVICO
                      type: 'autocomplete',
                      templateOptions: {
                        required: true,
                        displayWith: (element: any) => {
                          return element != null
                            ? typeof element === 'object'
                              ? element.civico1
                              : element
                            : '';
                        },
                        filter: (
                          term: any,
                          limit: number,
                          offset: number,
                          parent?: any
                        ) =>
                          this._civiciSelectGQL
                            .watch({
                              limit,
                              offset,
                              fk_t_code: {
                                _ilike: parent
                                  ? '%;' + parent.codice + ';%'
                                  : '',
                              },
                              ...(term && typeof term === 'string' && term != ''
                                ? { civico1: { _ilike: '%' + term + '%' } }
                                : {}),
                            })
                            .valueChanges.pipe(
                              map((result) => result.data?.gis_civico)
                            ),
                      },
                      hooks: {
                        onInit: (field) => {
                          field!.templateOptions!.parent =
                            field?.parent?.parent?.parent?.parent?.fieldGroup![0].fieldGroup![2].formControl;
                        },
                      },
                      hideExpression: (model: any, formState: any) =>
                        !(model.specifica && [1].includes(model.specifica.id)),
                      expressionProperties: {
                        'templateOptions.label': (model: any, formState: any) =>
                          this._translateService.instant('Civico'),
                        'templateOptions.disabled': this.disabled.base,
                      },
                      validators: {
                        forceSelection: {
                          expression: () => true,
                        },
                      },
                    },
                    {
                      key: 'ipi', // IPI
                      type: 'autocomplete',
                      templateOptions: {
                        required: true,
                        displayWith: (element: any) => {
                          return element != null
                            ? typeof element === 'object'
                              ? element.matricola
                              : element
                            : '';
                        },
                        filter: (
                          term: any,
                          limit: number,
                          offset: number,
                          parent?: any
                        ) =>
                          this._sostegniIpiSelectGQL
                            .watch({
                              limit,
                              offset,
                              fk_t_code: {
                                _ilike: parent
                                  ? '%;' + parent.codice + ';%'
                                  : '',
                              },
                              ...(term && typeof term === 'string' && term != ''
                                ? { matricola: { _ilike: '%' + term + '%' } }
                                : {}),
                            })
                            .valueChanges.pipe(
                              map((result) => result.data?.gis_sostegno_ipi)
                            ),
                      },
                      hooks: {
                        onInit: (field) => {
                          field!.templateOptions!.parent =
                            field?.parent?.parent?.parent?.parent?.fieldGroup![0].fieldGroup![2].formControl;
                        },
                      },
                      hideExpression: (model: any, formState: any) =>
                        !(model.specifica && [2].includes(model.specifica.id)),
                      expressionProperties: {
                        'templateOptions.label': (model: any, formState: any) =>
                          this._translateService.instant('Palo della luce'),
                        'templateOptions.disabled': this.disabled.base,
                      },
                      validators: {
                        forceSelection: {
                          expression: () => true,
                        },
                      },
                    },
                    {
                      key: 'km', // KM
                      type: 'input',
                      templateOptions: {
                        required: true,
                      },
                      hideExpression: (model: any, formState: any) =>
                        !(model.specifica && [3].includes(model.specifica.id)),
                      expressionProperties: {
                        'templateOptions.label': (model: any, formState: any) =>
                          this._translateService.instant('Km'),
                        'templateOptions.disabled': this.disabled.base,
                      },
                    },
                  ],
                },
              ],
            },
            {
              key: 'connessione', // CONNESSIONE
              type: 'autocomplete',
              templateOptions: {
                required: true,
                displayWith: (element: any) => {
                  return element != null
                    ? typeof element === 'object'
                      ? element.nome
                      : element
                    : '';
                },
                filter: (
                  term: any,
                  limit: number,
                  offset: number,
                  parent?: any
                ) =>
                  this._connessioniGrafoSelectGQL
                    .watch({
                      limit,
                      offset,
                      fk_t_code: {
                        _ilike: parent ? '%;' + parent.codice + ';%' : '',
                      },
                    })
                    .valueChanges.pipe(
                      mergeMap(async (result) => {
                        let ret = Array();
                        for (
                          let i = 0;
                          i < result.data!.gis_connessione_grafo.length;
                          i++
                        ) {
                          let c = result.data!.gis_connessione_grafo[i];
                          let _in = c.fk_t_code
                            ? c.fk_t_code?.slice(1, -1).split(';;')
                            : [];
                          ret.push({
                            ...c,
                            ...{
                              nome: await firstValueFrom(
                                this._toponimoNomeSelectGQL
                                  .watch({ _in: _in })
                                  .valueChanges.pipe(
                                    map((toponimo) =>
                                      toponimo.data.toponomastica_toponimo
                                        .map(
                                          (el) =>
                                            (el.dug ? el.dug.nome + ' ' : '') +
                                            el.nome
                                        )
                                        .join(', ')
                                    )
                                  )
                              ),
                            },
                          });
                        }
                        return ret;
                      }),
                      map((data) =>
                        term && typeof term === 'string' && term != ''
                          ? data.filter(
                              (t) =>
                                t.nome
                                  .toLowerCase()
                                  .indexOf(term.toLocaleLowerCase()) > -1
                            )
                          : data
                      )
                    ),
              },
              hooks: {
                onInit: (field) => {
                  field!.templateOptions!.parent =
                    field?.parent?.parent?.fieldGroup![0].fieldGroup![2].formControl;
                },
              },
              hideExpression: (
                model: any,
                formState: any,
                field?: FormlyFieldConfig
              ) =>
                !(
                  field?.parent?.fieldGroup![1].formControl?.value &&
                  [3, 4].includes(
                    field?.parent?.fieldGroup[1].formControl?.value.id
                  )
                ),
              expressionProperties: {
                'templateOptions.label': (model: any, formState: any) =>
                  this._translateService.instant('Incrocio'),
                'templateOptions.disabled': this.disabled.base,
              },
              validators: {
                forceSelection: {
                  expression: () => true,
                },
              },
            },
            {
              key: 'note',
              type: 'textarea',
              expressionProperties: {
                'templateOptions.label': this._translateService.stream('Note'),
                'templateOptions.disabled': this.disabled.base,
              },
            },
            {
              key: 'id',
              className: 'hidden',
              type: 'input',
              templateOptions: {
                readonly: true,
              },
            },
          ],
        },
      ],
    },
    {
      expressionProperties: {
        'templateOptions.label':
          this._translateService.stream('Geo-localizzazione'),
      },
      key: 'geolocalizzazione',
      fieldGroup: [
        {
          key: 'mappa',
          type: 'mappa',
          templateOptions: {
            lazyLoading: true,
          },
          hooks: {
            onInit: (field) => {
              let punto_iniziale = field?.formControl?.value.find(
                (f: marker) => f.key == 'punto_iniziale'
              );
              // CIVICO punto iniziale
              field?.parent?.parent?.fieldGroup
                ?.find((f) => f.key == 'localizzazione')
                ?.fieldGroup![1].fieldGroup![2].fieldGroup![0].fieldGroup![1].formControl!.valueChanges.subscribe(
                  (s) => {
                    if (s && typeof s != 'string' && punto_iniziale) {
                      punto_iniziale.punto.next({
                        ...punto_iniziale.punto.value,
                        latitudine: s.geom.coordinates[0],
                        longitudine: s.geom.coordinates[1],
                      });
                    } else if (punto_iniziale) {
                      punto_iniziale.punto.next({
                        ...punto_iniziale.punto.value,
                        latitudine: null,
                        longitudine: null,
                      });
                    }
                  }
                );
              // IPI punto iniziale
              field?.parent?.parent?.fieldGroup
                ?.find((f) => f.key == 'localizzazione')
                ?.fieldGroup![1].fieldGroup![2].fieldGroup![0].fieldGroup![2].formControl!.valueChanges.subscribe(
                  (s) => {
                    if (s && typeof s != 'string' && punto_iniziale) {
                      punto_iniziale.punto.next({
                        ...punto_iniziale.punto.value,
                        latitudine: s.geom.coordinates[0][0],
                        longitudine: s.geom.coordinates[0][1],
                      });
                    } else if (punto_iniziale) {
                      punto_iniziale.punto.next({
                        ...punto_iniziale.punto.value,
                        latitudine: null,
                        longitudine: null,
                      });
                    }
                  }
                );
              // CONNESSIONI punto iniziale
              field?.parent?.parent?.fieldGroup
                ?.find((f) => f.key == 'localizzazione')
                ?.fieldGroup![1].fieldGroup![3].formControl!.valueChanges.subscribe(
                  (s) => {
                    if (s && typeof s != 'string' && punto_iniziale) {
                      punto_iniziale.punto.next({
                        ...punto_iniziale.punto.value,
                        latitudine: s.geom.coordinates[0],
                        longitudine: s.geom.coordinates[1],
                        propagate: true,
                      });
                    } else if (punto_iniziale) {
                      punto_iniziale.punto.next({
                        ...punto_iniziale.punto.value,
                        latitudine: null,
                        longitudine: null,
                      });
                    }
                  }
                );
            },
          },
        },
      ],
    },

    {
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Decessi'),
      },
      key: 'decessi',
      fieldGroup: [
        {
          key: 'decessi_numero',
          type: 'input',
          templateOptions: {
            type: 'number',
            required: this._required.sis('decesi.decessi_numero'),
          },

          expressionProperties: {
            'templateOptions.label': this._translateService.stream(
              'Numero persone decedute'
            ),
            'templateOptions.disabled': this.disabled.base,
          },
        },
        {
          hideExpression: (model: any, formState: any) =>
            !(model && model.decessi_numero && model.decessi_numero != 0),
          fieldGroup: [
            {
              key: 'decessi_tipologie',
              type: 'autocomplete',
              templateOptions: {
                required: this._required.sis('decesi.decessi_tipologie'),

                multiple: true,
                filter: (
                  term: any,
                  limit: number,
                  offset: number,
                  parent?: any
                ) =>
                  this._decessiTipologiaSelect
                    .watch({
                      limit: limit,
                      offset: offset,
                      ...(term && typeof term === 'string'
                        ? { nome: { _ilike: '%' + term + '%' } }
                        : {}),
                    })
                    .valueChanges.pipe(
                      map((result) => result.data?.sis__decessi_tipologia)
                    ),
              },
              expressionProperties: {
                'templateOptions.label':
                  this._translateService.stream('Tipologie'),
                'templateOptions.disabled': this.disabled.base,
              },
            },
            {
              fieldGroupClassName: 'display-flex',
              fieldGroup: [
                {
                  key: 'decessi_notiziato_pm',
                  type: 'toggle',
                  className: 'flex-1',
                  templateOptions: {
                    appearance: 'standard',
                  },

                  expressionProperties: {
                    'templateOptions.label': this._translateService.stream(
                      'Notiziato P.M. di turno?'
                    ),
                    'templateOptions.disabled': this.disabled.base,
                  },
                },
                {
                  key: 'decessi_verbale_riconoscimento_salma',
                  type: 'toggle',
                  className: 'flex-1',
                  templateOptions: {
                    appearance: 'standard',
                  },

                  expressionProperties: {
                    'templateOptions.label': this._translateService.stream(
                      'Verbale di riconoscimento salma/e allegatoso casco?'
                    ),
                    'templateOptions.disabled': this.disabled.base,
                  },
                },
                {
                  key: 'decessi_oggetti_rinvenuti',
                  type: 'toggle',
                  className: 'flex-1',
                  templateOptions: {
                    appearance: 'standard',
                  },

                  expressionProperties: {
                    'templateOptions.label': this._translateService.stream(
                      'Oggetti personali rinvenuti?'
                    ),
                    'templateOptions.disabled': this.disabled.base,
                  },
                },
                {
                  key: 'decessi_intervento_polizia_mortuaria',
                  type: 'toggle',
                  className: 'flex-1',
                  templateOptions: {
                    appearance: 'standard',
                  },

                  expressionProperties: {
                    'templateOptions.label': this._translateService.stream(
                      'Intervenuta Polizia Mortuaria?'
                    ),
                    'templateOptions.disabled': this.disabled.base,
                  },
                },
              ],
            },
            {
              key: 'decessi_certificato',
              type: 'toggle',
              templateOptions: {
                appearance: 'standard',
              },

              expressionProperties: {
                'templateOptions.label': this._translateService.stream(
                  'Certificato di decesso allegato?'
                ),
                'templateOptions.disabled': this.disabled.base,
              },
            },
            {
              fieldGroupClassName: 'display-flex',
              hideExpression: (model: any, formState: any) =>
                !(
                  model &&
                  model.decessi_certificato &&
                  model.decessi_certificato == true
                ),
              fieldGroup: [
                {
                  key: 'decessi_certificato_redattore',
                  className: 'flex-1',
                  type: 'input',
                  templateOptions: {
                    required: this._required.sis(
                      'decesi.decessi_certificato_redattore'
                    ),
                  },
                  expressionProperties: {
                    'templateOptions.label':
                      this._translateService.stream('Redatto dal Dott.'),
                    'templateOptions.disabled': this.disabled.base,
                  },
                },
                {
                  key: 'decessi_certificato_redattore_in_servizio',
                  className: 'flex-1',
                  type: 'input',
                  templateOptions: {
                    required: this._required.sis(
                      'decesi.decessi_certificato_redattore_in_servizio'
                    ),
                  },
                  expressionProperties: {
                    'templateOptions.label':
                      this._translateService.stream('In servizio presso'),
                    'templateOptions.disabled': this.disabled.base,
                  },
                },
                {
                  key: 'decessi_certificato_redattore_recapito',
                  className: 'flex-1',
                  type: 'input',
                  templateOptions: {
                    required: this._required.sis(
                      'decesi.decessi_certificato_redattore_recapito'
                    ),
                  },
                  expressionProperties: {
                    'templateOptions.label': this._translateService.stream(
                      'Recapito telefonico'
                    ),
                    'templateOptions.disabled': this.disabled.base,
                  },
                },
              ],
            },
            {
              key: 'decessi_trasporto_salme_presso',
              type: 'input',
              templateOptions: {
                required: this._required.sis(
                  'decesi.decessi_trasporto_salme_presso'
                ),
              },
              expressionProperties: {
                'templateOptions.label': this._translateService.stream(
                  'Salma/e traslata/e presso'
                ),
                'templateOptions.disabled': this.disabled.base,
              },
            },
            {
              key: 'decessi_note',
              type: 'textarea',
              templateOptions: {
                required: this._required.sis('decesi.decessi_note'),
              },
              expressionProperties: {
                'templateOptions.label': this._translateService.stream('Note'),
                'templateOptions.disabled': this.disabled.base,
              },
            },
          ],
        },
      ],
    },

    {
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Accertamenti'),
      },
      fieldGroup: [
        {
          key: 'accertamenti',
          type: 'repeat',
          expressionProperties: {
            'templateOptions.addText':
              this._translateService.stream('Aggiungi'),
            'templateOptions.disabled': this.disabled.base,
          },
          fieldArray: {
            fieldGroup: [
              {
                key: 'id',
                className: 'hidden',
                type: 'input',
                templateOptions: {
                  readonly: true,
                },
              },
              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'centro_abitato',
                    type: 'toggle',
                    className: 'flex-1',
                    templateOptions: {
                      appearance: 'standard',
                    },

                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Centro abitato?'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'data',
                    className: 'flex-1',
                    type: 'datepicker',
                    templateOptions: {
                      required: this._required.sis('accertamenti.data'),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Data'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },

              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'direzione_da',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis('accertamenti.direzione_da'),
                    },
                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Direzione di marcia da'
                      ),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'direzione_a',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis('accertamenti.direzione_a'),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('a'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },
              {
                key: 'tipologia_strada_carreggiate_n',
                className: 'flex-1',
                type: 'input',
                templateOptions: {
                  required: this._required.sis(
                    'accertamenti.tipologia_strada_carreggiate_n'
                  ),
                },
                expressionProperties: {
                  'templateOptions.label':
                    this._translateService.stream('N. carreggiate'),
                  'templateOptions.disabled': this.disabled.base,
                },
              },
              {
                fieldGroupClassName: 'display-flex',
                hideExpression: (model: any, formState: any) =>
                  !(
                    model &&
                    model.tipologia_strada_carreggiate_n &&
                    model.tipologia_strada_carreggiate_n == ''
                  ),
                fieldGroup: [
                  {
                    key: 'tipologia_strada_carreggiate',
                    className: 'flex-1',
                    type: 'textarea',
                    templateOptions: {
                      required: this._required.sis(
                        'accertamenti.tipologia_strada_carreggiate'
                      ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Descrizione'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'tipologia_strada_conformazione',
                    className: 'flex-1',
                    type: 'textarea',
                    templateOptions: {
                      required: this._required.sis(
                        'accertamenti.tipologia_strada_conformazione'
                      ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Conformazione'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },

              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'descrizione_piano_pavimentazione',
                    className: 'flex-1',
                    type: 'textarea',
                    templateOptions: {
                      required: this._required.sis(
                        'accertamenti.descrizione_piano_pavimentazione'
                      ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Pavimentazione'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'descrizione_piano_stato_fondo',
                    className: 'flex-1',
                    type: 'textarea',
                    templateOptions: {
                      required: this._required.sis(
                        'accertamenti.descrizione_piano_stato_fondo'
                      ),
                    },
                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Stato del fondo stradale'
                      ),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'descrizione_piano_note',
                    className: 'flex-1',
                    type: 'textarea',
                    templateOptions: {
                      required: this._required.sis(
                        'accertamenti.descrizione_piano_note'
                      ),
                    },
                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Descrizione sede stradale e sue adiacenze'
                      ),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },
              {
                key: 'condizioni_meteo_tempo',
                className: 'flex-1',
                type: 'textarea',
                templateOptions: {
                  required: this._required.sis(
                    'accertamenti.condizioni_meteo_tempo'
                  ),
                },
                expressionProperties: {
                  'templateOptions.label': this._translateService.stream(
                    'Condizioni del tempo'
                  ),
                  'templateOptions.disabled': this.disabled.base,
                },
              },
              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'condizioni_meteo_visibilita_limitata_tipologia',
                    className: 'flex-1',
                    type: 'autocomplete',
                    templateOptions: {
                      required: this._required.sis(
                        'accertamenti.condizioni_meteo_visibilita_limitata_tipologia'
                      ),

                      multiple: true,
                      filter: (
                        term: any,
                        limit: number,
                        offset: number,
                        parent?: any
                      ) =>
                        this._visibilitaLimitataTipologiaSelect
                          .watch({
                            limit: limit,
                            offset: offset,
                            ...(term && typeof term === 'string'
                              ? { nome: { _ilike: '%' + term + '%' } }
                              : {}),
                          })
                          .valueChanges.pipe(
                            map(
                              (result) =>
                                result.data?.sis__visibilita_limitata_tipologia
                            )
                          ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Visibilità'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'condizioni_meteo_visibilita_limitata',
                    className: 'flex-1',
                    hideExpression: (model: any, formState: any) =>
                      !(
                        model &&
                        model.condizioni_meteo_visibilita_limitata_tipologia &&
                        new Set(
                          model.condizioni_meteo_visibilita_limitata_tipologia.map(
                            (e: any) => e.id
                          )
                        ).has(4)
                      ),
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis(
                        'accertamenti.condizioni_meteo_visibilita_limitata'
                      ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Specifica altro'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'condizioni_meteo_visibilita_limitata_tipologia_metri',
                    className: 'flex-1',
                    type: 'input',
                    templateOptions: {
                      required: this._required.sis(
                        'accertamenti.condizioni_meteo_visibilita_limitata_tipologia_metri'
                      ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Metri'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },
              {
                key: 'condizioni_meteo_illuminazione',
                className: 'flex-1',
                type: 'textarea',
                templateOptions: {
                  required: this._required.sis(
                    'accertamenti.condizioni_meteo_illuminazione'
                  ),
                },
                expressionProperties: {
                  'templateOptions.label':
                    this._translateService.stream('Illuminazione'),
                  'templateOptions.disabled': this.disabled.base,
                },
              },
              {
                key: 'traffico',
                className: 'flex-1',
                type: 'textarea',
                templateOptions: {
                  required: this._required.sis('accertamenti.traffico'),
                },
                expressionProperties: {
                  'templateOptions.label':
                    this._translateService.stream('Traffico'),
                  'templateOptions.disabled': this.disabled.base,
                },
              },
              {
                key: 'segnaletica',
                className: 'flex-1',
                type: 'textarea',
                templateOptions: {
                  required: this._required.sis('accertamenti.segnaletica'),
                },
                expressionProperties: {
                  'templateOptions.label':
                    this._translateService.stream('Segnaletica'),
                  'templateOptions.disabled': this.disabled.base,
                },
              },
            ],
          },
        },
      ],
    },

    {
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Verbali'),
      },
      fieldGroup: [
        {
          key: 'verbali',
          type: 'repeat',
          expressionProperties: {
            'templateOptions.addText':
              this._translateService.stream('Aggiungi'),
            'templateOptions.disabled': this.disabled.base,
          },
          fieldArray: {
            fieldGroup: [
              {
                key: 'id',
                className: 'hidden',
                type: 'input',
                templateOptions: {
                  readonly: true,
                },
              },
              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'tipologia_verbale',
                    className: 'flex-1',
                    type: 'autocomplete',
                    templateOptions: {
                      required: this._required.sis('verbali.tipologia_verbale'),

                      filter: (
                        term: any,
                        limit: number,
                        offset: number,
                        parent?: any
                      ) =>
                        this._tipologiaVerbaleSelect
                          .watch({
                            limit: limit,
                            offset: offset,
                            ...(term && typeof term === 'string'
                              ? { nome: { _ilike: '%' + term + '%' } }
                              : {}),
                          })
                          .valueChanges.pipe(
                            map((result) => result.data?.sis__tipologia_verbale)
                          ),
                    },
                    expressionProperties: {
                      'templateOptions.label': this._translateService.stream(
                        'Tipo di dichiarazioni'
                      ),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'data',
                    className: 'flex-1',
                    type: 'datepicker',
                    templateOptions: {
                      required: this._required.sis('verbali.data'),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Data'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },

              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'proprietario',
                    hideExpression: (model: any, formState: any) =>
                      model &&
                      (model.locatario ||
                        model.conducente ||
                        model.trasportato ||
                        model.pedone ||
                        model.testimone),
                    className: 'flex-1',
                    type: 'autocomplete',
                    templateOptions: {
                      required: this._required.sis('verbali.proprietario'),

                      displayWith: (e: any) =>
                        e ? e.nome + ' ' + e.cognome : '',
                      filter: (
                        term: any,
                        limit: number,
                        offset: number,
                        parent?: any
                      ) =>
                        this._proprietarioSelect
                          .watch({
                            limit: limit,
                            offset: offset,
                            ...(term && typeof term === 'string'
                              ? {
                                  where: {
                                    ris_id: {
                                      _eq: this.id,
                                    },
                                    _or: [
                                      {
                                        nome: { _ilike: '%' + term + '%' },
                                      },
                                      {
                                        cognome: { _ilike: '%' + term + '%' },
                                      },
                                    ],
                                  },
                                }
                              : {}),
                          })
                          .valueChanges.pipe(
                            map((result) => result.data?.sis_proprietario)
                          ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Proprietario'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'locatario',
                    hideExpression: (model: any, formState: any) =>
                      model &&
                      (model.proprietario ||
                        model.conducente ||
                        model.trasportato ||
                        model.pedone ||
                        model.testimone),
                    className: 'flex-1',
                    type: 'autocomplete',
                    templateOptions: {
                      required: this._required.sis('verbali.locatario'),

                      displayWith: (e: any) =>
                        e ? e.nome + ' ' + e.cognome : '',
                      filter: (
                        term: any,
                        limit: number,
                        offset: number,
                        parent?: any
                      ) =>
                        this._locatarioSelect
                          .watch({
                            limit: limit,
                            offset: offset,
                            ...(term && typeof term === 'string'
                              ? {
                                  where: {
                                    ris_id: {
                                      _eq: this.id,
                                    },
                                    _or: [
                                      {
                                        nome: { _ilike: '%' + term + '%' },
                                      },
                                      {
                                        cognome: { _ilike: '%' + term + '%' },
                                      },
                                    ],
                                  },
                                }
                              : {}),
                          })
                          .valueChanges.pipe(
                            map((result) => result.data?.sis_locatario)
                          ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Locatario'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'conducente',
                    className: 'flex-1',
                    hideExpression: (model: any, formState: any) =>
                      model &&
                      (model.proprietario ||
                        model.locatario ||
                        model.trasportato ||
                        model.pedone ||
                        model.testimone),
                    type: 'autocomplete',
                    templateOptions: {
                      required: this._required.sis('verbali.conducente'),

                      displayWith: (e: any) =>
                        e ? e.nome + ' ' + e.cognome : '',
                      filter: (
                        term: any,
                        limit: number,
                        offset: number,
                        parent?: any
                      ) =>
                        this._conducenteSelect
                          .watch({
                            limit: limit,
                            offset: offset,
                            ...(term && typeof term === 'string'
                              ? {
                                  where: {
                                    ris_id: {
                                      _eq: this.id,
                                    },
                                    _or: [
                                      {
                                        nome: { _ilike: '%' + term + '%' },
                                      },
                                      {
                                        cognome: { _ilike: '%' + term + '%' },
                                      },
                                    ],
                                  },
                                }
                              : {}),
                          })
                          .valueChanges.pipe(
                            map((result) => result.data?.sis_conducente)
                          ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Conducente'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },

              {
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                  {
                    key: 'trasportato',
                    hideExpression: (model: any, formState: any) =>
                      model &&
                      (model.proprietario ||
                        model.locatario ||
                        model.conducente ||
                        model.pedone ||
                        model.testimone),
                    className: 'flex-1',
                    type: 'autocomplete',
                    templateOptions: {
                      required: this._required.sis('verbali.trasportato'),

                      displayWith: (e: any) =>
                        e ? e.nome + ' ' + e.cognome : '',
                      filter: (
                        term: any,
                        limit: number,
                        offset: number,
                        parent?: any
                      ) =>
                        this._trasportatoSelect
                          .watch({
                            limit: limit,
                            offset: offset,
                            ...(term && typeof term === 'string'
                              ? {
                                  where: {
                                    ris_id: {
                                      _eq: this.id,
                                    },
                                    _or: [
                                      {
                                        nome: { _ilike: '%' + term + '%' },
                                      },
                                      {
                                        cognome: { _ilike: '%' + term + '%' },
                                      },
                                    ],
                                  },
                                }
                              : {}),
                          })
                          .valueChanges.pipe(
                            map((result) => result.data?.sis_trasportato)
                          ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Trasportato'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'pedone',
                    className: 'flex-1',
                    hideExpression: (model: any, formState: any) =>
                      model &&
                      (model.proprietario ||
                        model.locatario ||
                        model.conducente ||
                        model.trasportato ||
                        model.testimone),
                    type: 'autocomplete',
                    templateOptions: {
                      required: this._required.sis('verbali.pedone'),

                      displayWith: (e: any) =>
                        e ? e.nome + ' ' + e.cognome : '',
                      filter: (
                        term: any,
                        limit: number,
                        offset: number,
                        parent?: any
                      ) =>
                        this._pedoneSelect
                          .watch({
                            limit: limit,
                            offset: offset,
                            ...(term && typeof term === 'string'
                              ? {
                                  where: {
                                    ris_id: {
                                      _eq: this.id,
                                    },
                                    _or: [
                                      {
                                        nome: { _ilike: '%' + term + '%' },
                                      },
                                      {
                                        cognome: { _ilike: '%' + term + '%' },
                                      },
                                    ],
                                  },
                                }
                              : {}),
                          })
                          .valueChanges.pipe(
                            map((result) => result.data?.sis_pedone)
                          ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Pedone'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                  {
                    key: 'testimone',
                    hideExpression: (model: any, formState: any) =>
                      model &&
                      (model.proprietario ||
                        model.locatario ||
                        model.conducente ||
                        model.trasportato ||
                        model.pedone),
                    className: 'flex-1',
                    type: 'autocomplete',
                    templateOptions: {
                      required: this._required.sis('verbali.testimone'),

                      displayWith: (e: any) =>
                        e ? e.nome + ' ' + e.cognome : '',
                      filter: (
                        term: any,
                        limit: number,
                        offset: number,
                        parent?: any
                      ) =>
                        this._testimoneSelect
                          .watch({
                            limit: limit,
                            offset: offset,
                            ...(term && typeof term === 'string'
                              ? {
                                  where: {
                                    ris_id: {
                                      _eq: this.id,
                                    },
                                    _or: [
                                      {
                                        nome: { _ilike: '%' + term + '%' },
                                      },
                                      {
                                        cognome: { _ilike: '%' + term + '%' },
                                      },
                                    ],
                                  },
                                }
                              : {}),
                          })
                          .valueChanges.pipe(
                            map((result) => result.data?.sis_testimone)
                          ),
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Testimone'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },
              // {
              //   key: 'veicolo',
              //   className: 'flex-1',
              //   hideExpression: (model: any, formState: any) =>
              //     model &&
              //     (model.proprietario ||
              //       model.locatario ||
              //       model.conducente ||
              //       model.trasportato ||
              //       model.pedone ||
              //       model.testimone),
              //   type: 'autocomplete',
              //   templateOptions: {
              //     required: this._required.sis('verbali.veicolo'),

              //     displayWith: (e: any) =>
              //       e ? e.targa + ' ' + e.marca + ' ' + e.modello : '',
              //     filter: (
              //       term: any,
              //       limit: number,
              //       offset: number,
              //       parent?: any
              //     ) =>
              //       this._veicoloSelect
              //         .watch({
              //           limit: limit,
              //           offset: offset,
              //           ...(term && typeof term === 'string'
              //             ? {
              //                 where: {
              //                   ris_id: {
              //                     _eq: this.id,
              //                   },
              //                   _or: [
              //                     {
              //                       targa: { _ilike: '%' + term + '%' },
              //                     },
              //                     {
              //                       modello: { _ilike: '%' + term + '%' },
              //                     },
              //                     {
              //                       marca: { _ilike: '%' + term + '%' },
              //                     },
              //                   ],
              //                 },
              //               }
              //             : {}),
              //         })
              //         .valueChanges.pipe(map((result) => result.data?.veicolo)),
              //   },
              //   expressionProperties: {
              //     'templateOptions.label':
              //       this._translateService.stream('Veicolo'),
              //     'templateOptions.disabled': this.disabled.base,
              //   },
              // },

              {
                hideExpression: (model: any, formState: any) =>
                  model &&
                  (model.proprietario ||
                    model.locatario ||
                    model.conducente ||
                    model.trasportato ||
                    model.pedone ||
                    model.testimone),
                fieldGroup: [
                  {
                    fieldGroupClassName: 'display-flex',
                    fieldGroup: [
                      {
                        key: 'titolo',
                        className: 'flex-1',
                        type: 'autocomplete',
                        templateOptions: {
                          required: this._required.sis('verbali.titolo'),

                          filter: (
                            term: any,
                            limit: number,
                            offset: number,
                            parent?: any
                          ) =>
                            this._titoloSelectGQL
                              .watch({
                                limit: limit,
                                offset: offset,
                                ...(term && typeof term === 'string'
                                  ? { nome: { _ilike: '%' + term + '%' } }
                                  : {}),
                              })
                              .valueChanges.pipe(
                                map((result) => result.data?._titolo)
                              ),
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Titolo'),
                          'templateOptions.disabled': this.disabled.base,
                        },
                      },
                      {
                        key: 'nome',
                        className: 'flex-1',
                        type: 'input',
                        templateOptions: {
                          required: this._required.sis('verbali.nome'),
                        },

                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Nome'),
                          'templateOptions.disabled': this.disabled.base,
                        },
                      },
                      {
                        key: 'cognome',
                        className: 'flex-1',
                        type: 'input',
                        templateOptions: {
                          required: this._required.sis('verbali.cognome'),
                        },

                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Cognome'),
                          'templateOptions.disabled': this.disabled.base,
                        },
                      },
                    ],
                  },
                  {
                    fieldGroupClassName: 'display-flex',
                    fieldGroup: [
                      {
                        key: 'sesso',
                        className: 'flex-1',
                        type: 'autocomplete',
                        templateOptions: {
                          required: this._required.sis('verbali.sesso'),

                          filter: (
                            term: any,
                            limit: number,
                            offset: number,
                            parent?: any
                          ) =>
                            this._sessoSelect
                              .watch({
                                limit: limit,
                                offset: offset,
                                ...(term && typeof term === 'string'
                                  ? { nome: { _ilike: '%' + term + '%' } }
                                  : {}),
                              })
                              .valueChanges.pipe(
                                map((result) => result.data?._sesso)
                              ),
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Sesso'),
                          'templateOptions.disabled': this.disabled.base,
                        },
                      },
                      {
                        key: 'telefono',
                        className: 'flex-1',
                        type: 'input',
                        templateOptions: {
                          required: this._required.sis('verbali.telefono'),
                        },

                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Telefono'),
                          'templateOptions.disabled': this.disabled.base,
                        },
                      },
                    ],
                  },
                  {
                    fieldGroupClassName: 'display-flex',
                    fieldGroup: [
                      {
                        key: 'nascita_data',
                        className: 'flex-1',
                        type: 'datepicker',
                        templateOptions: {
                          required: this._required.sis('verbali.nascita_data'),
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Data di nascita'),
                        },
                      },
                      {
                        key: 'nascita_citta',
                        className: 'flex-1',
                        type: 'autocomplete',
                        templateOptions: {
                          required: this._required.sis('verbali.nascita_citta'),

                          displayWith: (e: any) =>
                            e
                              ? e.citta +
                                (e.p_abbreviazione && e.p_abbreviazione != ''
                                  ? ' (' + e.p_abbreviazione + ')'
                                  : '')
                              : '',
                          filter: (
                            term: any,
                            limit: number,
                            offset: number,
                            parent?: any
                          ) =>
                            this._cittaSelect
                              .watch({
                                limit: limit,
                                offset: offset,
                                ...(term && typeof term === 'string'
                                  ? { citta: { _ilike: '%' + term + '%' } }
                                  : {}),
                              })
                              .valueChanges.pipe(
                                map((result) => result.data?._citta)
                              ),
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Città di nascita'),
                          'templateOptions.disabled': this.disabled.base,
                        },
                      },
                      {
                        key: 'nascita_citta_altro',
                        className: 'flex-1',
                        type: 'input',
                        templateOptions: {
                          required: this._required.sis(
                            'verbali.nascita_citta_altro'
                          ),
                        },
                        hideExpression: (model: any, formState: any) =>
                          !(
                            model &&
                            model.nascita_citta &&
                            model.nascita_citta.id == 109
                          ),
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Specificare altro'),
                          'templateOptions.disabled': this.disabled.base,
                        },
                      },
                    ],
                  },
                  {
                    fieldGroupClassName: 'display-flex',
                    fieldGroup: [
                      {
                        key: 'residente_indirizzo',
                        className: 'flex-1',
                        type: 'input',
                        templateOptions: {
                          required: this._required.sis(
                            'verbali.residente_indirizzo'
                          ),
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream(
                              'Indirizzo di residenza'
                            ),
                        },
                      },
                      {
                        key: 'residente_citta',
                        className: 'flex-1',
                        type: 'autocomplete',
                        templateOptions: {
                          required: this._required.sis(
                            'verbali.residente_citta'
                          ),

                          displayWith: (e: any) =>
                            e
                              ? e.citta +
                                (e.p_abbreviazione && e.p_abbreviazione != ''
                                  ? ' (' + e.p_abbreviazione + ')'
                                  : '')
                              : '',
                          filter: (
                            term: any,
                            limit: number,
                            offset: number,
                            parent?: any
                          ) =>
                            this._cittaSelect
                              .watch({
                                limit: limit,
                                offset: offset,
                                ...(term && typeof term === 'string'
                                  ? { citta: { _ilike: '%' + term + '%' } }
                                  : {}),
                              })
                              .valueChanges.pipe(
                                map((result) => result.data?._citta)
                              ),
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Città di residenza'),
                          'templateOptions.disabled': this.disabled.base,
                        },
                      },
                      {
                        key: 'residente_citta_altro',
                        className: 'flex-1',
                        type: 'input',
                        templateOptions: {
                          required: this._required.sis(
                            'verbali.residente_citta_altro'
                          ),
                        },
                        hideExpression: (model: any, formState: any) =>
                          !(
                            model &&
                            model.residente_citta &&
                            model.residente_citta.id == 109
                          ),
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Specificare altro'),
                          'templateOptions.disabled': this.disabled.base,
                        },
                      },
                    ],
                  },
                ],
              },

              {
                hideExpression: (model: any, formState: any) =>
                  model &&
                  (model.conducente ||
                    model.trasportato ||
                    model.pedone ||
                    model.veicolo ||
                    model.testimone),
                fieldGroup: [
                  {
                    fieldGroupClassName: 'display-flex',
                    fieldGroup: [
                      {
                        key: 'documento_tipo',
                        className: 'flex-1',
                        type: 'input',
                        templateOptions: {
                          required: this._required.sis(
                            'verbali.documento_tipo'
                          ),
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Tipo di documento'),
                        },
                      },
                      {
                        key: 'documento_numero',
                        className: 'flex-1',
                        type: 'input',
                        templateOptions: {
                          required: this._required.sis(
                            'verbali.documento_numero'
                          ),
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Numero'),
                        },
                      },
                    ],
                  },
                  {
                    fieldGroupClassName: 'display-flex',
                    fieldGroup: [
                      {
                        key: 'documento_rilasciato_da',
                        className: 'flex-1',
                        type: 'input',
                        templateOptions: {
                          required: this._required.sis(
                            'verbali.documento_rilasciato_da'
                          ),
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream(
                              'Documento rilasciato da'
                            ),
                        },
                      },
                      {
                        key: 'documento_rilasciato_da_citta',
                        className: 'flex-1',
                        type: 'autocomplete',
                        templateOptions: {
                          required: this._required.sis(
                            'verbali.documento_rilasciato_da_citta'
                          ),

                          displayWith: (e: any) =>
                            e
                              ? e.citta +
                                (e.p_abbreviazione && e.p_abbreviazione != ''
                                  ? ' (' + e.p_abbreviazione + ')'
                                  : '')
                              : '',
                          filter: (
                            term: any,
                            limit: number,
                            offset: number,
                            parent?: any
                          ) =>
                            this._cittaSelect
                              .watch({
                                limit: limit,
                                offset: offset,
                                ...(term && typeof term === 'string'
                                  ? { citta: { _ilike: '%' + term + '%' } }
                                  : {}),
                              })
                              .valueChanges.pipe(
                                map((result) => result.data?._citta)
                              ),
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('in'),
                          'templateOptions.disabled': this.disabled.base,
                        },
                      },
                      {
                        key: 'documento_rilasciato_data',
                        className: 'flex-1',
                        type: 'datepicker',
                        templateOptions: {
                          required: this._required.sis(
                            'verbali.documento_rilasciato_data'
                          ),
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('in data'),
                        },
                      },
                    ],
                  },
                ],
              },

              {
                key: 'dichiarazione',
                className: 'flex-1',
                type: 'textarea',
                templateOptions: {
                  required: this._required.sis('verbali.dichiarazione'),
                },
                expressionProperties: {
                  'templateOptions.label':
                    this._translateService.stream('Dichiarazione'),
                },
              },
              {
                key: 'motivazione_no_sottoscrizione',
                className: 'flex-1',
                type: 'textarea',
                templateOptions: {
                  required: this._required.sis(
                    'verbali.motivazione_no_sottoscrizione'
                  ),
                },
                expressionProperties: {
                  'templateOptions.label': this._translateService.stream(
                    'Motivazione di non sottoscrizione'
                  ),
                },
              },
            ],
          },
        },
      ],
    },

    {
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Allegati'),
      },
      key: 'allegati',
      fieldGroup: [
        {
          key: 'allegati',
          type: 'file',
          templateOptions: {
            uploadUrl: '/upload',
          },
          expressionProperties: {
            'templateOptions.label': this._translateService.stream('Allegati'),
            'templateOptions.disabled': this.disabled.base,
          },
        },
      ],
    },
    {
      key: 'protocollo',
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Protocollo'),
      },
      fieldGroup: [
        {
          key: 'id',
          className: 'hidden',
          type: 'input',
          templateOptions: {
            readonly: true,
          },
        },
        {
          fieldGroupClassName: 'display-flex',
          fieldGroup: [
            {
              key: 'numero',
              className: 'flex-1',
              type: 'input',
              templateOptions: {
                disabled: true,
              },
              expressionProperties: {
                'templateOptions.label':
                  this._translateService.stream('Numero'),
              },
            },
            {
              key: 'data',
              className: 'flex-1',
              type: 'datepicker',
              templateOptions: {
                disabled: true,
              },
              expressionProperties: {
                'templateOptions.label': this._translateService.stream('Data'),
              },
            },
          ],
        },
        {
          key: 'mittente',
          type: 'autocomplete',
          templateOptions: {
            required: true,
            displayWith: (e: any) =>
              e
                ? e.settore +
                  '.' +
                  e.servizio +
                  '.' +
                  e.uoc +
                  '.' +
                  e.uos +
                  '.' +
                  e.postazione +
                  ' - ' +
                  e.nome
                : '',
            filter: (term: any, limit: number, offset: number, parent?: any) =>
              this._sezioneProtocolloSelectGQL
                .watch({
                  limit: limit,
                  offset: offset,
                  ...(term && typeof term === 'string'
                    ? {
                        where: {
                          _or: [{ nome: { _ilike: '%' + term + '%' } }],
                        },
                      }
                    : {}),
                })
                .valueChanges.pipe(
                  map((result) => result.data?.protocollo__sezione_protocollo)
                ),
          },
          expressionProperties: {
            'templateOptions.label': this._translateService.stream('Mittente'),
            'templateOptions.disabled': this.disabled.base,
          },
        },
        {
          key: 'destinatari',
          type: 'repeat',
          templateOptions: {
            requiredN: 1,
          },
          expressionProperties: {
            'templateOptions.addText': this._translateService.stream(
              'Aggiungi Destinatario'
            ),
            'templateOptions.disabled': this.disabled.base,
          },
          fieldArray: {
            fieldGroup: [
              {
                key: 'id',
                className: 'hidden',
                type: 'input',
                templateOptions: {
                  readonly: true,
                },
              },
              {
                key: 'e_esterno',
                type: 'toggle',
                defaultValue: false,
                templateOptions: {
                  appearance: 'standard',
                },
                expressionProperties: {
                  'templateOptions.label': this._translateService.stream(
                    'Il destinatario è esterno?'
                  ),
                  'templateOptions.disabled': this.disabled.base,
                },
              },
              {
                key: 'destinatario_interno',
                hideExpression: (model: any, formState: any) => model.e_esterno,
                type: 'autocomplete',
                templateOptions: {
                  required: true,
                  displayWith: (e: any) =>
                    e
                      ? e.settore +
                        '.' +
                        e.servizio +
                        '.' +
                        e.uoc +
                        '.' +
                        e.uos +
                        '.' +
                        e.postazione +
                        ' - ' +
                        e.nome
                      : '',
                  filter: (
                    term: any,
                    limit: number,
                    offset: number,
                    parent?: any
                  ) =>
                    this._sezioneProtocolloSelectGQL
                      .watch({
                        limit: limit,
                        offset: offset,
                        ...(term && typeof term === 'string'
                          ? {
                              where: {
                                _or: [{ nome: { _ilike: '%' + term + '%' } }],
                              },
                            }
                          : {}),
                      })
                      .valueChanges.pipe(
                        map(
                          (result) =>
                            result.data?.protocollo__sezione_protocollo
                        )
                      ),
                },
                expressionProperties: {
                  'templateOptions.label':
                    this._translateService.stream('Destinatario'),
                  'templateOptions.disabled': this.disabled.base,
                },
              },
              {
                key: 'destinatario_esterno',
                hideExpression: (
                  model: any,
                  formState: any,
                  field: FormlyFieldConfig | undefined
                ) =>
                  field?.parent?.fieldGroup![1].formControl?.value == null ||
                  field?.parent?.fieldGroup![1].formControl?.value == false,
                fieldGroup: [
                  {
                    key: 'id',
                    className: 'hidden',
                    type: 'input',
                    templateOptions: {
                      readonly: true,
                    },
                  },
                  {
                    fieldGroupClassName: 'display-flex',
                    fieldGroup: [
                      {
                        key: 'nome',
                        className: 'flex-1',
                        type: 'input',
                        templateOptions: {
                          required: true,
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Nome'),
                          'templateOptions.disabled': this.disabled.base,
                        },
                      },
                      {
                        key: 'cognome',
                        className: 'flex-1',
                        type: 'input',
                        templateOptions: {
                          required: true,
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Cognome'),
                          'templateOptions.disabled': this.disabled.base,
                        },
                      },
                      {
                        key: 'codice_fiscale',
                        className: 'flex-1',
                        type: 'input',
                        templateOptions: {
                          required: true,
                        },
                        expressionProperties: {
                          'templateOptions.label':
                            this._translateService.stream('Codice fiscale'),
                          'templateOptions.disabled': this.disabled.base,
                        },
                      },
                    ],
                  },
                  {
                    key: 'email',
                    type: 'input',
                    templateOptions: {
                      type: 'email',
                      required: true,
                    },
                    expressionProperties: {
                      'templateOptions.label':
                        this._translateService.stream('Email'),
                      'templateOptions.disabled': this.disabled.base,
                    },
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  ];

  constructor(
    protected _required: RequiredService,
    protected _http: HttpClient,
    protected _translateService: TranslateService,
    protected _risGQL: RisGQL,
    protected _sezioneProtocolloSelectGQL: SezioneProtocolloSelectGQL,
    protected _titoloSelectGQL: TitoloSelectGQL,
    protected _municipalitaSelectGQL: MunicipalitaSelectGQL,
    protected _quartiereSelectGQL: QuartiereSelectGQL,
    protected _toponimoSelectGQL: ToponimoSelectGQL,
    protected _toponimoNomeSelectGQL: ToponimoNomeSelectGQL,
    protected _specificaPosizionamentoToponimoSelectGQL: SpecificaPosizionamentoToponimoSelectGQL,
    protected _tipologiaPosizionamentoToponimoSelectGQL: TipologiaPosizionamentoToponimoSelectGQL,
    protected _updateRisGQL: UpdateRisGQL,
    protected _civiciSelectGQL: CiviciSelectGQL,
    protected _sostegniIpiSelectGQL: SostegniIpiSelectGQL,
    protected _connessioniGrafoSelectGQL: ConnessioniGrafoSelectGQL,
    protected _route: ActivatedRoute,
    protected _router: Router,
    protected _loaderService: NgxUiLoaderService,
    protected _dialog: MatDialog,

    protected _siNoAltroSelect: SiNoAltroSelectGQL,

    protected _infortunatoTrasportatoSelect: InfortunatoTrasportatoSelectGQL,
    protected _sessoSelect: SessoSelectGQL,
    protected _alimentazioneVeicoloSelect: AlimentazioneVeicoloSelectGQL,
    protected _cittaSelect: CittaSelectGQL,
    protected _condizioniMeteoVisibilitaLimitataTipologiaSelect: CondizioniTrafficoSelectGQL,
    protected _conseguenzaVeicoloSelect: ConseguenzaVeicoloSelectGQL,
    protected _decessiTipologiaSelect: DecessiTipologiaSelectGQL,
    protected _destinazioneDecisioneSelect: DestinazioneDecisioneSelectGQL,
    protected _enteSelect: EnteSelectGQL,
    protected _enteSecondarioSelect: EnteSecondarioSelectGQL,
    protected _impiantoSemaforicoSelect: ImpiantoSemaforicoSelectGQL,
    protected _infortunatoInformazioneSelect: InfortunatoInformazioneSelectGQL,
    protected _localizzazioneAltroSelect: LocalizzazioneAltroSelectGQL,
    protected _localizzazioneCondizioniAtmosfericheSelect: LocalizzazioneCondizioniAtmosfericheSelectGQL,
    protected _localizzazioneCondizioniTrafficoSelect: LocalizzazioneCondizioniTrafficoSelectGQL,
    protected _localizzazioneExtraAbitatoSelect: LocalizzazioneExtraAbitatoSelectGQL,
    protected _localizzazioneFondoStradaleSelect: LocalizzazioneFondoStradaleSelectGQL,
    protected _localizzazioneIlluminazioneSelect: LocalizzazioneIlluminazioneSelectGQL,
    protected _localizzazioneParticolaritaStradaSelect: LocalizzazioneParticolaritaStradaSelectGQL,
    protected _localizzazionePavimentazioneSelect: LocalizzazionePavimentazioneSelectGQL,
    protected _localizzazioneTipoStradaSelect: LocalizzazioneTipoStradaSelectGQL,
    protected _localizzazioneVisibilitaSelect: LocalizzazioneVisibilitaSelectGQL,
    protected _nazioneSelect: NazioneSelectGQL,
    protected _patenteCategoriaSelect: PatenteCategoriaSelectGQL,
    protected _posizioneFinaleVeicoloCarreggiataSelect: PosizioneFinaleVeicoloCarreggiataSelectGQL,
    protected _posizioneFinaleVeicoloFuoriSedeSelect: PosizioneFinaleVeicoloCarreggiataSelectGQL,
    protected _posizioneFinaleVeicoloMarginiSelect: PosizioneFinaleVeicoloMarginiSelectGQL,
    protected _puntiRilieviNoTipologiaSelect: PuntiRilieviNoTipologiaSelectGQL,
    protected _retrovisoreEsternoSelect: RetrovisoreEsternoSelectGQL,
    protected _risConsegnatoASelect: RisConsegnatoASelectGQL,
    protected _statoVeicoloSelect: StatoVeicoloSelectGQL,
    protected _tipologiaRisSelect: TipologiaRisSelectGQL,
    protected _tipologiaVeicoloSelect: TipologiaVeicoloSelectGQL,
    protected _tipologiaVerbaleSelect: TipologiaVerbaleSelectGQL,
    protected _tracciaSuoloFrenataTipologiaSelect: TracciaSuoloFrenataTipologiaSelectGQL,
    protected _tracciaSuoloTerminazioneSelect: TracciaSuoloTerminazioneSelectGQL,
    protected _tracciaSuoloTerminazioneAndamentoSelect: TracciaSuoloTerminazioneAndamentoSelectGQL,
    protected _tracciaSuoloTerminazioneIntensitaSelect: TracciaSuoloTerminazioneIntensitaSelectGQL,
    protected _tracciaSuoloTerminazioneTipologiaSelect: TracciaSuoloTerminazioneTipologiaSelectGQL,
    protected _tracciaSuoloTerminazioneFormaSelect: TracciaSuoloTerminazioneFormaSelectGQL,
    protected _tracciaSuoloTipologiaSelect: TracciaSuoloTipologiaSelectGQL,
    protected _unitaOperativaSelectGQL: UnitaOperativaSelectGQL,
    protected _usoVeicoloSelect: UsoVeicoloSelectGQL,
    protected _visibilitaLimitataTipologiaSelect: VisibilitaLimitataTipologiaSelectGQL,
    protected _conducenteSelect: ConducenteSelectGQL,
    protected _locatarioSelect: LocatarioSelectGQL,
    protected _pedoneSelect: PedoneSelectGQL,
    protected _proprietarioSelect: ProprietarioSelectGQL,
    protected _proprietarioGiuridicoSelect: ProprietarioGiuridicoSelectGQL,
    protected _testimoneSelect: TestimoneSelectGQL,
    protected _trasportatoSelect: TrasportatoSelectGQL,
    protected _veicoloSelect: VeicoloSelectGQL,
    protected _naturaIncidenteSelect: NaturaIncidenteSelectGQL,
    protected _trasportatoStatoSelect: TrasportatoStatoSelectGQL,
    protected _trasportatoPosizioneSelect: TrasportatoPosizioneSelectGQL,
    protected _protocollo: GeneraProtocolloGQL,
    protected roles: RolesService
  ) {
    super();
    this.id = parseInt(this._route.snapshot.paramMap.get('id')!);
  }

  async baseSave(event: any) {
    this.saving = true;
    if (event.loading) this._loaderService.start();
    var i = 0;

    let p_d = this.startData.protocollo.destinatari.filter(
      (x: any) =>
        !this.model.protocollo.destinatari.map((d: any) => d.id).includes(x)
    );

    const allegati = this.model.allegati.allegati
      ? await fileListToBase64(this.model.allegati.allegati)
      : [];
    let d = this.startData.allegati.filter(
      (x: any) => !allegati.map((f: any) => f.nome).includes(x.nome)
    );
    let n = allegati.filter(
      (x: any) =>
        !this.startData.allegati.map((f: any) => f.nome).includes(x.nome)
    );

    let agenti_accertatori_d = this.startData.agenti_accertatori.filter(
      (x: any) =>
        !this.model.ris.agenti_accertatori
          .map((f: any) => f.username)
          .includes(x.username)
    );
    let agenti_accertatori_n = this.model.ris.agenti_accertatori.filter(
      (x: any) =>
        !this.startData.agenti_accertatori
          .map((f: any) => f.username)
          .includes(x.username)
    );

    let tipologia_ris_d = this.startData.tipologia_ris.filter(
      (x: any) =>
        !this.model.ris.tipologia_ris
          .map((f: any) => f.id)
          .includes(x.tipologia.id)
    );
    let tipologia_ris_n = this.model.ris.tipologia_ris.filter(
      (x: any) =>
        !this.startData.tipologia_ris
          .map((f: any) => f.tipologia.id)
          .includes(x.id)
    );

    let enti_segnalatori_d = this.startData.enti_segnalatori.filter(
      (x: any) =>
        !this.model.intervento.enti_segnalatori
          .map((f: any) => f.id)
          .includes(x.ente.id)
    );
    let enti_segnalatori_n = this.model.intervento.enti_segnalatori.filter(
      (x: any) =>
        !this.startData.enti_segnalatori
          .map((f: any) => f.ente.id)
          .includes(x.id)
    );

    let enti_primo_intervento_d = this.startData.enti_primo_intervento.filter(
      (x: any) =>
        !this.model.intervento.enti_primo_intervento
          .filter((d: any) => d != undefined)
          .map((d: any) => d.id)
          .includes(x)
    );

    let enti_secondario_intervenuti_d =
      this.startData.enti_secondario_intervenuti.filter(
        (x: any) =>
          !this.model.intervento.enti_secondario_intervenuti
            .map((f: any) => f.id)
            .includes(x.ente_secondario.id)
      );
    let enti_secondario_intervenuti_n =
      this.model.intervento.enti_secondario_intervenuti.filter(
        (x: any) =>
          !this.startData.enti_secondario_intervenuti
            .map((f: any) => f.ente_secondario.id)
            .includes(x.id)
      );

    let nature_incidente_d = this.startData.natura_incidente.filter(
      (x: any) =>
        !this.model.incidente.natura_incidente
          .map((f: any) => f.id)
          .includes(x.natura_incidente.id)
    );
    let nature_incidente_n = this.model.incidente.natura_incidente.filter(
      (x: any) =>
        !this.startData.natura_incidente
          .map((f: any) => f.natura_incidente.id)
          .includes(x.id)
    );

    let posizioni_finali_veicolo_carreggiata_d =
      this.startData.posizioni_finali_veicolo_carreggiata.filter(
        (x: any) =>
          !this.model.incidente.posizioni_finali_veicolo_carreggiata
            .map((f: any) => f.id)
            .includes(x.posizione_finale_veicolo_carreggiata.id)
      );
    let posizioni_finali_veicolo_carreggiata_n =
      this.model.incidente.posizioni_finali_veicolo_carreggiata.filter(
        (x: any) =>
          !this.startData.posizioni_finali_veicolo_carreggiata
            .map((f: any) => f.posizione_finale_veicolo_carreggiata.id)
            .includes(x.id)
      );
    let posizioni_finali_veicolo_margini_d =
      this.startData.posizioni_finali_veicolo_margini.filter(
        (x: any) =>
          !this.model.incidente.posizioni_finali_veicolo_margini
            .map((f: any) => f.id)
            .includes(x.posizione_finale_veicolo_margini.id)
      );
    let posizioni_finali_veicolo_margini_n =
      this.model.incidente.posizioni_finali_veicolo_margini.filter(
        (x: any) =>
          !this.startData.posizioni_finali_veicolo_margini
            .map((f: any) => f.posizione_finale_veicolo_margini.id)
            .includes(x.id)
      );
    let posizioni_finali_veicolo_fuori_sede_d =
      this.startData.posizioni_finali_veicolo_fuori_sede.filter(
        (x: any) =>
          !this.model.incidente.posizioni_finali_veicolo_fuori_sede
            .map((f: any) => f.id)
            .includes(x.posizione_finale_veicolo_fuori_sede.id)
      );
    let posizioni_finali_veicolo_fuori_sede_n =
      this.model.incidente.posizioni_finali_veicolo_fuori_sede.filter(
        (x: any) =>
          !this.startData.posizioni_finali_veicolo_fuori_sede
            .map((f: any) => f.posizione_finale_veicolo_fuori_sede.id)
            .includes(x.id)
      );
    let conseguenze_veicolo_d = this.startData.conseguenze_veicolo.filter(
      (x: any) =>
        !this.model.incidente.conseguenze_veicolo
          .map((f: any) => f.id)
          .includes(x.conseguenza_veicolo.id)
    );
    let conseguenze_veicolo_n = this.model.incidente.conseguenze_veicolo.filter(
      (x: any) =>
        !this.startData.conseguenze_veicolo
          .map((f: any) => f.conseguenza_veicolo.id)
          .includes(x.id)
    );
    let localizzazioni_extra_abitato_d =
      this.startData.localizzazioni_extra_abitato.filter(
        (x: any) =>
          !this.model.incidente.localizzazioni_extra_abitato
            .map((f: any) => f.id)
            .includes(x.localizzazione_extra_abitato.id)
      );
    let localizzazioni_extra_abitato_n =
      this.model.incidente.localizzazioni_extra_abitato.filter(
        (x: any) =>
          !this.startData.localizzazioni_extra_abitato
            .map((f: any) => f.localizzazione_extra_abitato.id)
            .includes(x.id)
      );
    let localizzazioni_tipo_strade_d =
      this.startData.localizzazioni_tipo_strade.filter(
        (x: any) =>
          !this.model.incidente.localizzazioni_tipo_strade
            .map((f: any) => f.id)
            .includes(x.localizzazione_tipo_strada.id)
      );
    let localizzazioni_tipo_strade_n =
      this.model.incidente.localizzazioni_tipo_strade.filter(
        (x: any) =>
          !this.startData.localizzazioni_tipo_strade
            .map((f: any) => f.localizzazione_tipo_strada.id)
            .includes(x.id)
      );
    let localizzazioni_particolarita_strada_d =
      this.startData.localizzazioni_particolarita_strada.filter(
        (x: any) =>
          !this.model.incidente.localizzazioni_particolarita_strada
            .map((f: any) => f.id)
            .includes(x.localizzazione_particolarita_strada.id)
      );
    let localizzazioni_particolarita_strada_n =
      this.model.incidente.localizzazioni_particolarita_strada.filter(
        (x: any) =>
          !this.startData.localizzazioni_particolarita_strada
            .map((f: any) => f.localizzazione_particolarita_strada.id)
            .includes(x.id)
      );
    let localizzazioni_pavimentazione_d =
      this.startData.localizzazioni_pavimentazione.filter(
        (x: any) =>
          !this.model.incidente.localizzazioni_pavimentazione
            .map((f: any) => f.id)
            .includes(x.localizzazione_pavimentazione.id)
      );
    let localizzazioni_pavimentazione_n =
      this.model.incidente.localizzazioni_pavimentazione.filter(
        (x: any) =>
          !this.startData.localizzazioni_pavimentazione
            .map((f: any) => f.localizzazione_pavimentazione.id)
            .includes(x.id)
      );
    let localizzazioni_fondo_stradale_d =
      this.startData.localizzazioni_fondo_stradale.filter(
        (x: any) =>
          !this.model.incidente.localizzazioni_fondo_stradale
            .map((f: any) => f.id)
            .includes(x.localizzazione_fondo_stradale.id)
      );
    let localizzazioni_fondo_stradale_n =
      this.model.incidente.localizzazioni_fondo_stradale.filter(
        (x: any) =>
          !this.startData.localizzazioni_fondo_stradale
            .map((f: any) => f.localizzazione_fondo_stradale.id)
            .includes(x.id)
      );
    let localizzazioni_condizioni_atmosferiche_d =
      this.startData.localizzazioni_condizioni_atmosferiche.filter(
        (x: any) =>
          !this.model.incidente.localizzazioni_condizioni_atmosferiche
            .map((f: any) => f.id)
            .includes(x.localizzazione_condizioni_atmosferiche.id)
      );
    let localizzazioni_condizioni_atmosferiche_n =
      this.model.incidente.localizzazioni_condizioni_atmosferiche.filter(
        (x: any) =>
          !this.startData.localizzazioni_condizioni_atmosferiche
            .map((f: any) => f.localizzazione_condizioni_atmosferiche.id)
            .includes(x.id)
      );

    let localizzazioni_visibilita_d =
      this.startData.localizzazioni_visibilita.filter(
        (x: any) =>
          !this.model.incidente.localizzazioni_visibilita
            .map((f: any) => f.id)
            .includes(x.localizzazione_visibilita.id)
      );
    let localizzazioni_visibilita_n =
      this.model.incidente.localizzazioni_visibilita.filter(
        (x: any) =>
          !this.startData.localizzazioni_visibilita
            .map((f: any) => f.localizzazione_visibilita.id)
            .includes(x.id)
      );
    let localizzazioni_illuminazione_d =
      this.startData.localizzazioni_illuminazione.filter(
        (x: any) =>
          !this.model.incidente.localizzazioni_illuminazione
            .map((f: any) => f.id)
            .includes(x.localizzazione_illuminazione.id)
      );
    let localizzazioni_illuminazione_n =
      this.model.incidente.localizzazioni_illuminazione.filter(
        (x: any) =>
          !this.startData.localizzazioni_illuminazione
            .map((f: any) => f.localizzazione_illuminazione.id)
            .includes(x.id)
      );

    let localizzazioni_condizioni_traffico_d =
      this.startData.localizzazioni_condizioni_traffico.filter(
        (x: any) =>
          !this.model.incidente.localizzazioni_condizioni_traffico
            .map((f: any) => f.id)
            .includes(x.localizzazione_condizioni_traffico.id)
      );
    let localizzazioni_condizioni_traffico_n =
      this.model.incidente.localizzazioni_condizioni_traffico.filter(
        (x: any) =>
          !this.startData.localizzazioni_condizioni_traffico
            .map((f: any) => f.localizzazione_condizioni_traffico.id)
            .includes(x.id)
      );
    let localizzazioni_altro_d = this.startData.localizzazioni_altro.filter(
      (x: any) =>
        !this.model.incidente.localizzazioni_altro
          .map((f: any) => f.id)
          .includes(x.localizzazione_altro.id)
    );
    let localizzazioni_altro_n =
      this.model.incidente.localizzazioni_altro.filter(
        (x: any) =>
          !this.startData.localizzazioni_altro
            .map((f: any) => f.localizzazione_altro.id)
            .includes(x.id)
      );
    let decessi_tipologie_d = this.startData.decessi_tipologie.filter(
      (x: any) =>
        !this.model.decessi.decessi_tipologie
          .map((f: any) => f.id)
          .includes(x.decessi_tipologia.id)
    );
    let decessi_tipologie_n = this.model.decessi.decessi_tipologie.filter(
      (x: any) =>
        !this.startData.decessi_tipologie
          .map((f: any) => f.decessi_tipologia.id)
          .includes(x.id)
    );

    let proprietari_d = this.startData.persone.proprietari.filter(
      (x: any) =>
        !this.model.persone.proprietari
          .filter((d: any) => d != undefined)
          .map((d: any) => d.id)
          .includes(x)
    );
    let proprietari_giuridico_d =
      this.startData.persone.proprietari_giuridico.filter(
        (x: any) =>
          !this.model.persone.proprietari_giuridico
            .filter((d: any) => d != undefined)
            .map((d: any) => d.id)
            .includes(x)
      );
    let locatari_d = this.startData.persone.locatari.filter(
      (x: any) =>
        !this.model.persone.locatari
          .filter((d: any) => d != undefined)
          .map((d: any) => d.id)
          .includes(x)
    );
    let conducenti_d = this.startData.persone.conducenti.filter(
      (x: any) =>
        !this.model.persone.conducenti
          .filter((d: any) => d != undefined)
          .map((d: any) => d.id)
          .includes(x.id)
    );

    let patente_d: any = {};
    let patente_n: any = {};
    i = 0;
    this.model.persone.conducenti.forEach((conducente: any) => {
      let id = 'p_' + i;
      if (conducente.id != undefined) id = conducente.id;
      let start = this.startData.conducenti_patente[id];
      patente_d[id] = start
        ? start.filter((x: any) => {
            return !conducente.patente
              .map((f: any) => f.id)
              .includes(x.patente_categoria.id);
          })
        : [];
      patente_n[id] = start
        ? conducente.patente.filter(
            (x: any) =>
              !start.map((f: any) => f.patente_categoria.id).includes(x.id)
          )
        : conducente.patente;
      i = i + 1;
    });

    let trasportati_d = this.startData.persone.trasportati.filter(
      (x: any) =>
        !this.model.persone.trasportati
          .filter((d: any) => d != undefined)
          .map((d: any) => d.id)
          .includes(x)
    );
    let testimoni_d = this.startData.persone.testimoni.filter(
      (x: any) =>
        !this.model.persone.testimoni
          .filter((d: any) => d != undefined)
          .map((d: any) => d.id)
          .includes(x)
    );
    let pedoni_d = this.startData.persone.pedoni.filter(
      (x: any) =>
        !this.model.persone.pedoni
          .filter((d: any) => d != undefined)
          .map((d: any) => d.id)
          .includes(x)
    );
    let altri_d = this.startData.persone.altri.filter(
      (x: any) =>
        !this.model.persone.altri
          .filter((d: any) => d != undefined)
          .map((d: any) => d.id)
          .includes(x)
    );

    let veicoli_d = this.startData.veicoli.filter(
      (x: any) =>
        !this.model.veicoli
          .filter((d: any) => d != undefined)
          .map((d: any) => d.id)
          .includes(x)
    );

    let veicoli_trasportati_d: any = {};
    let veicoli_trasportati_n: any = {};

    i = 0;
    this.model.veicoli
      .filter((d: any) => d != undefined)
      .forEach((veicolo: any) => {
        let id = 'p_' + i;
        if (veicolo.id != undefined) id = veicolo.id;
        let start = this.startData.veicoli_trasportati[id];
        veicoli_trasportati_d[id] = start
          ? start.filter((x: any) => {
              return !veicolo.trasportati
                .map((f: any) => f.id)
                .includes(x.trasportato.id);
            })
          : [];
        veicoli_trasportati_n[id] = start
          ? veicolo.trasportati.filter(
              (x: any) =>
                !start.map((f: any) => f.trasportato.id).includes(x.id)
            )
          : veicolo.trasportati;

        i = i + 1;
      });

    let infrazioni_d = this.startData.infrazioni.filter(
      (x: any) =>
        !this.model.infrazioni
          .filter((d: any) => d != undefined)
          .map((d: any) => d.id)
          .includes(x)
    );

    let infortunati_d = this.startData.infortunati.filter(
      (x: any) =>
        !this.model.infortunati
          .filter((d: any) => d != undefined)
          .map((d: any) => d.id)
          .includes(x)
    );

    let infortunati_informazioni_d: any = {};
    let infortunati_informazioni_n: any = {};
    i = 0;
    this.model.infortunati
      .filter((d: any) => d != undefined)
      .forEach((infortunato: any) => {
        let id = 'p_' + i;
        if (infortunato.id != undefined) id = infortunato.id;
        let start = this.startData.infortunati_informazioni[id];
        infortunati_informazioni_d[id] = start
          ? start.filter((x: any) => {
              return !infortunato.informazioni
                .map((f: any) => f.id)
                .includes(x.id);
            })
          : [];
        infortunati_informazioni_n[id] = start
          ? infortunato.informazioni.filter(
              (x: any) => !start.map((f: any) => f.id).includes(x.id)
            )
          : infortunato.informazioni;
        i = i + 1;
      });

    let accertamenti_d = this.startData.accertamenti.filter(
      (x: any) => !this.model.accertamenti.map((d: any) => d.id).includes(x)
    );

    let accertamenti_visibilita_d: any = {};
    let accertamenti_visibilita_n: any = {};
    i = 0;
    this.model.accertamenti
      .filter((d: any) => d != undefined)
      .forEach((accertamento: any) => {
        let id = 'p_' + i;
        if (accertamento.id != undefined) id = accertamento.id;
        let start = this.startData.accertamenti_visibilita[id];
        accertamenti_visibilita_d[id] = start
          ? start.filter((x: any) => {
              return !accertamento.condizioni_meteo_visibilita_limitata_tipologia
                .map((f: any) => f.id)
                .includes(x.id);
            })
          : [];
        accertamenti_visibilita_n[id] = start
          ? accertamento.condizioni_meteo_visibilita_limitata_tipologia.filter(
              (x: any) => !start.map((f: any) => f.id).includes(x.id)
            )
          : accertamento.condizioni_meteo_visibilita_limitata_tipologia;
        i = i + 1;
      });

    let verbali_d = this.startData.verbali.filter(
      (x: any) =>
        !this.model.verbali
          .filter((d: any) => d != undefined)
          .map((d: any) => d.id)
          .includes(x)
    );

    console.log(agenti_accertatori_d);
    console.log(agenti_accertatori_n);

    let model = {
      id: this.id,

      ...(tipologia_ris_n.length > 0 || tipologia_ris_d.length > 0
        ? {
            tipologie_ris: {
              on_conflict: {
                constraint:
                  Sis_Associazione_Tipologia_Ris_Constraint.AssociazioneTipologiaRisPkey,
                update_columns: [
                  Sis_Associazione_Tipologia_Ris_Update_Column.Delete,
                  Sis_Associazione_Tipologia_Ris_Update_Column.TipologiaRisId,
                ],
              },
              data: [
                ...tipologia_ris_n.map((e: any) => {
                  return {
                    tipologia_ris_id: e.id,
                  };
                }),
                ...tipologia_ris_d.map((e: any) => {
                  return {
                    id: e.id,
                    tipologia_ris_id: e.tipologia.id,
                    delete: true,
                  };
                }),
              ],
            },
          }
        : {}),

      ...(agenti_accertatori_n.length > 0 || agenti_accertatori_d.length > 0
        ? {
            agenti_accertatori: {
              on_conflict: {
                constraint:
                  Sis_Agente_Accertatore_Constraint.AgenteAccertatorePkey,
                update_columns: [
                  Sis_Agente_Accertatore_Update_Column.Delete,
                  Sis_Agente_Accertatore_Update_Column.Username,
                  Sis_Agente_Accertatore_Update_Column.Agente,
                ],
              },
              data: [
                ...agenti_accertatori_n.map((e: any) => {
                  return {
                    username: e.username,
                    agente: e.agente,
                  };
                }),
                ...agenti_accertatori_d.map((e: any) => {
                  return {
                    id: e.id,
                    username: e.username,
                    agente: e.agente,
                    delete: true,
                  };
                }),
              ],
            },
          }
        : {}),

      unita_operativa_id: this.model.ris.unita_operativa
        ? this.model.ris.unita_operativa.id
        : null,

      operazione_terminate_data: this.model.ris.operazione_terminate_data,
      ris_consegnato_a_id: this.model.ris.ris_consegnato_a
        ? this.model.ris.ris_consegnato_a.id
        : null,
      ris_consegnato_a_altro: this.model.ris.ris_consegnato_a_altro,
      ris_consegnato_data: this.model.ris.ris_consegnato_data,

      ...(enti_segnalatori_n.length > 0 || enti_segnalatori_d.length > 0
        ? {
            enti_segnalatori: {
              on_conflict: {
                constraint:
                  Sis_Associazione_Ente_Segnalatore_Constraint.AssociazioneEnteSegnalatorePkey,
                update_columns: [
                  Sis_Associazione_Ente_Segnalatore_Update_Column.Delete,
                  Sis_Associazione_Ente_Segnalatore_Update_Column.EnteId,
                ],
              },
              data: [
                ...enti_segnalatori_n.map((e: any) => {
                  return {
                    ente_id: e.id,
                  };
                }),
                ...enti_segnalatori_d.map((e: any) => {
                  return {
                    id: e.id,
                    ente_id: e.ente.id,
                    delete: true,
                  };
                }),
              ],
            },
          }
        : {}),

      ente_segnalatore_note: this.model.intervento.ente_segnalatore_note,
      data_segnalazione: this.model.intervento.data_segnalazione,
      data_presunta: this.model.intervento.data_presunta,
      data_intervento: this.model.intervento.data_intervento,
      note_intervento: this.model.intervento.note_intervento,
      ente_primo_intervento_note:
        this.model.intervento.ente_primo_intervento_note,

      enti_primo_intervento: {
        on_conflict: {
          constraint:
            Sis_Associazione_Ente_Primo_Intervento_Constraint.AssociazioneEntePrimoInterventoPkey,
          update_columns: [
            Sis_Associazione_Ente_Primo_Intervento_Update_Column.EnteId,
            Sis_Associazione_Ente_Primo_Intervento_Update_Column.TargaAuto,
            Sis_Associazione_Ente_Primo_Intervento_Update_Column.Tipo,
            Sis_Associazione_Ente_Primo_Intervento_Update_Column.Delete,
          ],
        },
        data: [
          ...this.model.intervento.enti_primo_intervento
            .filter((d: any) => d != undefined)
            .map((e: any) => {
              return {
                ...(e.id ? { id: e.id } : {}),
                ...(e.ente ? { ente_id: e.ente.id } : {}),
                ...(e.tipo ? { tipo: e.tipo } : {}),
                ...(e.targa_auto ? { targa_auto: e.targa_auto } : {}),
              };
            }),
          ...enti_primo_intervento_d.map((d: any) => {
            return { id: d, delete: true, ente_id: 1 };
          }),
        ],
      },

      ...(enti_secondario_intervenuti_n.length > 0 ||
      enti_secondario_intervenuti_d.length > 0
        ? {
            enti_secondario_intervenuti: {
              on_conflict: {
                constraint:
                  Sis_Associazione_Ente_Secondario_Intervenuti_Constraint.AssociazioneEnteSecondarioIntervenutiPkey,
                update_columns: [
                  Sis_Associazione_Ente_Secondario_Intervenuti_Update_Column.Delete,
                  Sis_Associazione_Ente_Secondario_Intervenuti_Update_Column.EnteSecondarioIntervenutiId,
                ],
              },
              data: [
                ...enti_secondario_intervenuti_n.map((e: any) => {
                  return {
                    ente_secondario_intervenuti_id: e.id,
                  };
                }),
                ...enti_secondario_intervenuti_d.map((e: any) => {
                  return {
                    id: e.id,
                    ente_secondario_intervenuti_id: e.ente_secondario.id,
                    delete: true,
                  };
                }),
              ],
            },
          }
        : {}),
      ente_secondario_intervenuti_altro:
        this.model.intervento.ente_secondario_intervenuti_altro,
      ente_secondario_intervenuti_vvff_comando:
        this.model.intervento.ente_secondario_intervenuti_vvff_comando,
      ente_secondario_intervenuti_vvff_capo_pattuglia:
        this.model.intervento.ente_secondario_intervenuti_vvff_capo_pattuglia,
      ente_secondario_intervenuti_vvff_gia_intervenuti:
        this.model.intervento.ente_secondario_intervenuti_vvff_gia_intervenuti,
      ente_secondario_intervenuti_motivazione:
        this.model.intervento.ente_secondario_intervenuti_motivazione,

      ...(nature_incidente_n.length > 0 || nature_incidente_d.length > 0
        ? {
            nature_incidente: {
              on_conflict: {
                constraint:
                  Sis_Associazione_Natura_Incidente_Constraint.AssociazioneNaturaIncidentePkey,
                update_columns: [
                  Sis_Associazione_Natura_Incidente_Update_Column.Delete,
                  Sis_Associazione_Natura_Incidente_Update_Column.NaturaIncidenteId,
                ],
              },
              data: [
                ...nature_incidente_n.map((e: any) => {
                  return {
                    natura_incidente_id: e.id,
                  };
                }),
                ...nature_incidente_d.map((e: any) => {
                  return {
                    id: e.id,
                    natura_incidente_id: e.natura_incidente.id,
                    delete: true,
                  };
                }),
              ],
            },
          }
        : {}),
      natura_incidente_note: this.model.incidente.natura_incidente_note,
      dinamica: this.model.incidente.dinamica,
      altro: this.model.incidente.altro,
      ...(posizioni_finali_veicolo_carreggiata_n.length > 0 ||
      posizioni_finali_veicolo_carreggiata_d.length > 0
        ? {
            posizioni_finali_veicolo_carreggiata: {
              on_conflict: {
                constraint:
                  Sis_Associazione_Posizione_Finale_Veicolo_Carreggiata_Constraint.AssociazionePosizioneFinaleVeicoloCarreggiataPkey,
                update_columns: [
                  Sis_Associazione_Posizione_Finale_Veicolo_Carreggiata_Update_Column.Delete,
                  Sis_Associazione_Posizione_Finale_Veicolo_Carreggiata_Update_Column.PosizioneFinaleVeicoloCarreggiataId,
                ],
              },
              data: [
                ...posizioni_finali_veicolo_carreggiata_n.map((e: any) => {
                  return {
                    posizione_finale_veicolo_carreggiata_id: e.id,
                  };
                }),
                ...posizioni_finali_veicolo_carreggiata_d.map((e: any) => {
                  return {
                    id: e.id,
                    posizione_finale_veicolo_carreggiata_id:
                      e.posizione_finale_veicolo_carreggiata.id,
                    delete: true,
                  };
                }),
              ],
            },
          }
        : {}),
      posizione_finale_veicolo_carreggiata_note:
        this.model.incidente.posizione_finale_veicolo_carreggiata_note,
      ...(posizioni_finali_veicolo_margini_n.length > 0 ||
      posizioni_finali_veicolo_margini_d.length > 0
        ? {
            posizioni_finali_veicolo_margini: {
              on_conflict: {
                constraint:
                  Sis_Associazione_Posizione_Finale_Veicolo_Margini_Constraint.AssociazionePosizioneFinaleVeicoloMarginiPkey,
                update_columns: [
                  Sis_Associazione_Posizione_Finale_Veicolo_Margini_Update_Column.Delete,
                  Sis_Associazione_Posizione_Finale_Veicolo_Margini_Update_Column.PosizioneFinaleVeicoloMarginiId,
                ],
              },
              data: [
                ...posizioni_finali_veicolo_margini_n.map((e: any) => {
                  return {
                    posizione_finale_veicolo_margini_id: e.id,
                  };
                }),
                ...posizioni_finali_veicolo_margini_d.map((e: any) => {
                  return {
                    id: e.id,
                    posizione_finale_veicolo_margini_id:
                      e.posizione_finale_veicolo_margini.id,
                    delete: true,
                  };
                }),
              ],
            },
          }
        : {}),
      posizione_finale_veicolo_margini_note:
        this.model.incidente.posizione_finale_veicolo_margini_note,
      ...(posizioni_finali_veicolo_fuori_sede_n.length > 0 ||
      posizioni_finali_veicolo_fuori_sede_d.length > 0
        ? {
            posizioni_finali_veicolo_fuori_sede: {
              on_conflict: {
                constraint:
                  Sis_Associazione_Posizione_Finale_Veicolo_Fuori_Sede_Constraint.AssociazionePosizioneFinaleVeicoloFuoriSedePkey,
                update_columns: [
                  Sis_Associazione_Posizione_Finale_Veicolo_Fuori_Sede_Update_Column.Delete,
                  Sis_Associazione_Posizione_Finale_Veicolo_Fuori_Sede_Update_Column.PosizioneFinaleVeicoloFuoriSedeId,
                ],
              },
              data: [
                ...posizioni_finali_veicolo_fuori_sede_n.map((e: any) => {
                  return {
                    posizione_finale_veicolo_fuori_sede_id: e.id,
                  };
                }),
                ...posizioni_finali_veicolo_fuori_sede_d.map((e: any) => {
                  return {
                    id: e.id,
                    posizione_finale_veicolo_fuori_sede_id:
                      e.posizione_finale_veicolo_fuori_sede.id,
                    delete: true,
                  };
                }),
              ],
            },
          }
        : {}),
      posizione_finale_veicolo_fuori_sede_note:
        this.model.incidente.posizione_finale_veicolo_fuori_sede_note,
      ...(conseguenze_veicolo_n.length > 0 || conseguenze_veicolo_d.length > 0
        ? {
            conseguenze_veicolo: {
              on_conflict: {
                constraint:
                  Sis_Associazione_Conseguenza_Veicolo_Constraint.AssociazioneConseguenzaVeicoloPkey,
                update_columns: [
                  Sis_Associazione_Conseguenza_Veicolo_Update_Column.Delete,
                  Sis_Associazione_Conseguenza_Veicolo_Update_Column.ConseguenzaVeicoloId,
                ],
              },
              data: [
                ...conseguenze_veicolo_n.map((e: any) => {
                  return {
                    conseguenza_veicolo_id: e.id,
                  };
                }),
                ...conseguenze_veicolo_d.map((e: any) => {
                  return {
                    id: e.id,
                    conseguenza_veicolo_id: e.conseguenza_veicolo.id,
                    delete: true,
                  };
                }),
              ],
            },
          }
        : {}),
      conseguenza_veicolo_note: this.model.incidente.conseguenza_veicolo_note,
      ...(localizzazioni_extra_abitato_n.length > 0 ||
      localizzazioni_extra_abitato_d.length > 0
        ? {
            localizzazioni_extra_abitato: {
              on_conflict: {
                constraint:
                  Sis_Associazione_Localizzazione_Extra_Abitato_Constraint.AssociazioneLocalizzazioneExtraAbitatoPkey,
                update_columns: [
                  Sis_Associazione_Localizzazione_Extra_Abitato_Update_Column.Delete,
                  Sis_Associazione_Localizzazione_Extra_Abitato_Update_Column.LocalizzazioneExtraAbitatoId,
                ],
              },
              data: [
                ...localizzazioni_extra_abitato_n.map((e: any) => {
                  return {
                    localizzazione_extra_abitato_id: e.id,
                  };
                }),
                ...localizzazioni_extra_abitato_d.map((e: any) => {
                  return {
                    id: e.id,
                    localizzazione_extra_abitato_id:
                      e.localizzazione_extra_abitato.id,
                    delete: true,
                  };
                }),
              ],
            },
          }
        : {}),
      localizzazione_extra_abitato_note:
        this.model.incidente.localizzazione_extra_abitato_note,
      ...(localizzazioni_tipo_strade_n.length > 0 ||
      localizzazioni_tipo_strade_d.length > 0
        ? {
            localizzazioni_tipo_strade: {
              on_conflict: {
                constraint:
                  Sis_Associazione_Localizzazione_Tipo_Strada_Constraint.AssociazioneLocalizzazioneTipoStradaPkey,
                update_columns: [
                  Sis_Associazione_Localizzazione_Tipo_Strada_Update_Column.Delete,
                  Sis_Associazione_Localizzazione_Tipo_Strada_Update_Column.LocalizzazioneTipoStradaId,
                ],
              },
              data: [
                ...localizzazioni_tipo_strade_n.map((e: any) => {
                  return {
                    localizzazione_tipo_strada_id: e.id,
                  };
                }),
                ...localizzazioni_tipo_strade_d.map((e: any) => {
                  return {
                    id: e.id,
                    localizzazione_tipo_strada_id:
                      e.localizzazione_tipo_strada.id,
                    delete: true,
                  };
                }),
              ],
            },
          }
        : {}),
      localizzazione_tipo_strada_note:
        this.model.incidente.localizzazione_tipo_strada_note,
      ...(localizzazioni_particolarita_strada_n.length > 0 ||
      localizzazioni_particolarita_strada_d.length > 0
        ? {
            localizzazioni_particolarita_strada: {
              on_conflict: {
                constraint:
                  Sis_Associazione_Localizzazione_Particolarita_Strada_Constraint.AssociazioneLocalizzazioneParticolaritaStradaPkey,
                update_columns: [
                  Sis_Associazione_Localizzazione_Particolarita_Strada_Update_Column.Delete,
                  Sis_Associazione_Localizzazione_Particolarita_Strada_Update_Column.LocalizzazioneParticolaritaStradaId,
                ],
              },
              data: [
                ...localizzazioni_particolarita_strada_n.map((e: any) => {
                  return {
                    localizzazione_particolarita_strada_id: e.id,
                  };
                }),
                ...localizzazioni_particolarita_strada_d.map((e: any) => {
                  return {
                    id: e.id,
                    localizzazione_particolarita_strada_id:
                      e.localizzazione_particolarita_strada.id,
                    delete: true,
                  };
                }),
              ],
            },
          }
        : {}),
      localizzazione_particolarita_strada_note:
        this.model.incidente.localizzazione_particolarita_strada_note,
      ...(localizzazioni_pavimentazione_n.length > 0 ||
      localizzazioni_pavimentazione_d.length > 0
        ? {
            localizzazioni_pavimentazione: {
              on_conflict: {
                constraint:
                  Sis_Associazione_Localizzazione_Pavimentazione_Constraint.AssociazioneLocalizzazionePavimentazionePkey,
                update_columns: [
                  Sis_Associazione_Localizzazione_Pavimentazione_Update_Column.Delete,
                  Sis_Associazione_Localizzazione_Pavimentazione_Update_Column.LocalizzazionePavimentazioneId,
                ],
              },
              data: [
                ...localizzazioni_pavimentazione_n.map((e: any) => {
                  return {
                    localizzazione_pavimentazione_id: e.id,
                  };
                }),
                ...localizzazioni_pavimentazione_d.map((e: any) => {
                  return {
                    id: e.id,
                    localizzazione_pavimentazione_id:
                      e.localizzazione_pavimentazione.id,
                    delete: true,
                  };
                }),
              ],
            },
          }
        : {}),
      localizzazione_pavimentazione_note:
        this.model.incidente.localizzazione_pavimentazione_note,
      ...(localizzazioni_fondo_stradale_n.length > 0 ||
      localizzazioni_fondo_stradale_d.length > 0
        ? {
            localizzazioni_fondo_stradale: {
              on_conflict: {
                constraint:
                  Sis_Associazione_Localizzazione_Fondo_Stradale_Constraint.AssociazioneLocalizzazioneFondoStradalePkey,
                update_columns: [
                  Sis_Associazione_Localizzazione_Fondo_Stradale_Update_Column.Delete,
                  Sis_Associazione_Localizzazione_Fondo_Stradale_Update_Column.LocalizzazioneFondoStradaleId,
                ],
              },
              data: [
                ...localizzazioni_fondo_stradale_n.map((e: any) => {
                  return {
                    localizzazione_fondo_stradale_id: e.id,
                  };
                }),
                ...localizzazioni_fondo_stradale_d.map((e: any) => {
                  return {
                    id: e.id,
                    localizzazione_fondo_stradale_id:
                      e.localizzazione_fondo_stradale.id,
                    delete: true,
                  };
                }),
              ],
            },
          }
        : {}),
      localizzazione_fondo_stradale_note:
        this.model.incidente.localizzazione_fondo_stradale_note,
      ...(localizzazioni_condizioni_atmosferiche_n.length > 0 ||
      localizzazioni_condizioni_atmosferiche_d.length > 0
        ? {
            localizzazioni_condizioni_atmosferiche: {
              on_conflict: {
                constraint:
                  Sis_Associazione_Localizzazione_Condizioni_Atmosferiche_Constraint.AssociazioneLocalizzazioneCondizioniAtmosferichePkey,
                update_columns: [
                  Sis_Associazione_Localizzazione_Condizioni_Atmosferiche_Update_Column.Delete,
                  Sis_Associazione_Localizzazione_Condizioni_Atmosferiche_Update_Column.LocalizzazioneCondizioniAtmosfericheId,
                ],
              },
              data: [
                ...localizzazioni_condizioni_atmosferiche_n.map((e: any) => {
                  return {
                    localizzazione_condizioni_atmosferiche_id: e.id,
                  };
                }),
                ...localizzazioni_condizioni_atmosferiche_d.map((e: any) => {
                  return {
                    id: e.id,
                    localizzazione_condizioni_atmosferiche_id:
                      e.localizzazione_condizioni_atmosferiche.id,
                    delete: true,
                  };
                }),
              ],
            },
          }
        : {}),
      localizzazione_condizioni_atmosferiche_note:
        this.model.incidente.localizzazione_condizioni_atmosferiche_note,
      ...(localizzazioni_visibilita_n.length > 0 ||
      localizzazioni_visibilita_d.length > 0
        ? {
            localizzazioni_visibilita: {
              on_conflict: {
                constraint:
                  Sis_Associazione_Localizzazione_Visibilita_Constraint.AssociazioneLocalizzazioneVisibilitaPkey,
                update_columns: [
                  Sis_Associazione_Localizzazione_Visibilita_Update_Column.Delete,
                  Sis_Associazione_Localizzazione_Visibilita_Update_Column.LocalizzazioneVisibilitaId,
                ],
              },
              data: [
                ...localizzazioni_visibilita_n.map((e: any) => {
                  return {
                    localizzazione_visibilita_id: e.id,
                  };
                }),
                ...localizzazioni_visibilita_d.map((e: any) => {
                  return {
                    id: e.id,
                    localizzazione_visibilita_id:
                      e.localizzazione_visibilita.id,
                    delete: true,
                  };
                }),
              ],
            },
          }
        : {}),
      localizzazione_visibilita_note:
        this.model.incidente.localizzazione_visibilita_note,
      ...(localizzazioni_illuminazione_n.length > 0 ||
      localizzazioni_illuminazione_d.length > 0
        ? {
            localizzazioni_illuminazione: {
              on_conflict: {
                constraint:
                  Sis_Associazione_Localizzazione_Illuminazione_Constraint.AssociazioneLocalizzazioneIlluminazionePkey,
                update_columns: [
                  Sis_Associazione_Localizzazione_Illuminazione_Update_Column.Delete,
                  Sis_Associazione_Localizzazione_Illuminazione_Update_Column.LocalizzazioneIlluminazioneId,
                ],
              },
              data: [
                ...localizzazioni_illuminazione_n.map((e: any) => {
                  return {
                    localizzazione_illuminazione_id: e.id,
                  };
                }),
                ...localizzazioni_illuminazione_d.map((e: any) => {
                  return {
                    id: e.id,
                    localizzazione_illuminazione_id:
                      e.localizzazione_illuminazione.id,
                    delete: true,
                  };
                }),
              ],
            },
          }
        : {}),
      localizzazione_illuminazione_note:
        this.model.incidente.localizzazione_illuminazione_note,
      ...(localizzazioni_condizioni_traffico_n.length > 0 ||
      localizzazioni_condizioni_traffico_d.length > 0
        ? {
            localizzazioni_condizioni_traffico: {
              on_conflict: {
                constraint:
                  Sis_Associzione_Localizzazione_Condizioni_Traffico_Constraint.AssocizioneLocalizzazioneCondizioniTrafficoPkey,
                update_columns: [
                  Sis_Associzione_Localizzazione_Condizioni_Traffico_Update_Column.Delete,
                  Sis_Associzione_Localizzazione_Condizioni_Traffico_Update_Column.LocalizzazioneCondizioniTrafficoId,
                ],
              },
              data: [
                ...localizzazioni_condizioni_traffico_n.map((e: any) => {
                  return {
                    localizzazione_condizioni_traffico_id: e.id,
                  };
                }),
                ...localizzazioni_condizioni_traffico_d.map((e: any) => {
                  return {
                    id: e.id,
                    localizzazione_condizioni_traffico_id:
                      e.localizzazione_condizioni_traffico.id,
                    delete: true,
                  };
                }),
              ],
            },
          }
        : {}),
      localizzazione_condizioni_traffico_note:
        this.model.incidente.localizzazione_condizioni_traffico_note,
      ...(localizzazioni_altro_n.length > 0 || localizzazioni_altro_d.length > 0
        ? {
            localizzazioni_altro: {
              on_conflict: {
                constraint:
                  Sis_Associazione_Localizzazione_Altro_Constraint.AssociazioneLocalizzazioneAltroPkey,
                update_columns: [
                  Sis_Associazione_Localizzazione_Altro_Update_Column.Delete,
                  Sis_Associazione_Localizzazione_Altro_Update_Column.LocalizzazioneAltroId,
                ],
              },
              data: [
                ...localizzazioni_altro_n.map((e: any) => {
                  return {
                    localizzazione_altro_id: e.id,
                  };
                }),
                ...localizzazioni_altro_d.map((e: any) => {
                  return {
                    id: e.id,
                    localizzazione_altro_id: e.localizzazione_altro.id,
                    delete: true,
                  };
                }),
              ],
            },
          }
        : {}),
      localizzazione_altro_note: this.model.incidente.localizzazione_altro_note,
      localizzazione_note: this.model.incidente.localizzazione_note,
      punti_urto: this.model.incidente.punti_urto,
      punti_urto_multiplo: this.model.incidente.punti_urto_multiplo,
      punti_investimento: this.model.incidente.punti_investimento,
      punti_investimento_multiplo:
        this.model.incidente.punti_investimento_multiplo,
      punti_rilievi: this.model.incidente.punti_rilievi,
      punti_rilievi_no_tipologia_id: this.model.incidente
        .punti_rilievi_no_tipologia
        ? this.model.incidente.punti_rilievi_no_tipologia.id
        : null,
      punti_descrizione_analitica:
        this.model.incidente.punti_descrizione_analitica,
      punti_urto_accorda: this.model.incidente.punti_urto_accorda,
      punti_urto_note: this.model.incidente.punti_urto_note,
      posizione_statica_rilievi_veicoli_rimossi:
        this.model.incidente.posizione_statica_rilievi_veicoli_rimossi,
      posizione_statica_rilievi: this.model.incidente.posizione_statica_rilievi,
      posizione_statica_rilievi_no_tipologia_id: this.model.incidente
        .posizione_statica_rilievi_no_tipologia
        ? this.model.incidente.posizione_statica_rilievi_no_tipologia.id
        : null,
      posizione_statica_descrizione_analitica:
        this.model.incidente.posizione_statica_descrizione_analitica,

      proprietari: {
        on_conflict: {
          constraint: Sis_Proprietario_Constraint.ProprietarioPkey,
          update_columns: [
            Sis_Proprietario_Update_Column.TitoloId,
            Sis_Proprietario_Update_Column.Nome,
            Sis_Proprietario_Update_Column.Cognome,
            Sis_Proprietario_Update_Column.SessoId,
            Sis_Proprietario_Update_Column.Telefono,
            Sis_Proprietario_Update_Column.NascitaData,
            Sis_Proprietario_Update_Column.NascitaCittaId,
            Sis_Proprietario_Update_Column.NascitaCittaAltro,
            Sis_Proprietario_Update_Column.ResidenteIndirizzo,
            Sis_Proprietario_Update_Column.ResidenteCittaId,
            Sis_Proprietario_Update_Column.ResidenteCittaAltro,
            Sis_Proprietario_Update_Column.Delete,
          ],
        },
        data: [
          ...this.model.persone.proprietari
            .filter((d: any) => d != undefined)
            .map((e: any) => {
              return {
                ...(e.id ? { id: e.id } : {}),
                ...(e.titolo ? { titolo_id: e.titolo.id } : {}),
                ...(e.nome ? { nome: e.nome } : {}),
                ...(e.cognome ? { cognome: e.cognome } : {}),
                ...(e.sesso ? { sesso_id: e.sesso.id } : {}),
                ...(e.telefono ? { telefono: e.telefono } : {}),
                ...(e.nascita_data ? { nascita_data: e.nascita_data } : {}),
                ...(e.nascita_citta
                  ? { nascita_citta_id: e.nascita_citta.id }
                  : {}),
                ...(e.nascita_citta_altro
                  ? { nascita_citta_altro: e.nascita_citta_altro }
                  : {}),
                ...(e.residente_indirizzo
                  ? { residente_indirizzo: e.residente_indirizzo }
                  : {}),
                ...(e.residente_citta
                  ? { residente_citta_id: e.residente_citta.id }
                  : {}),
                ...(e.residente_citta_altro
                  ? { residente_citta_altro: e.residente_citta_altro }
                  : {}),
              };
            }),
          ...proprietari_d.map((d: any) => {
            return { id: d, delete: true };
          }),
        ],
      },

      proprietari_giuridico: {
        on_conflict: {
          constraint:
            Sis_Proprietario_Giuridico_Constraint.ProprietarioGiuridicoPkey,
          update_columns: [
            Sis_Proprietario_Giuridico_Update_Column.RagioneSociale,
            Sis_Proprietario_Giuridico_Update_Column.PartitaIva,
            Sis_Proprietario_Giuridico_Update_Column.CodiceFiscale,
            Sis_Proprietario_Giuridico_Update_Column.Telefono,
            Sis_Proprietario_Giuridico_Update_Column.CittaId,
            Sis_Proprietario_Giuridico_Update_Column.CittaAltro,
            Sis_Proprietario_Giuridico_Update_Column.Indirizzo,
            Sis_Proprietario_Giuridico_Update_Column.Delete,
          ],
        },
        data: [
          ...this.model.persone.proprietari_giuridico
            .filter((d: any) => d != undefined)
            .map((e: any) => {
              return {
                ...(e.id ? { id: e.id } : {}),
                ...(e.ragione_sociale
                  ? { ragione_sociale: e.ragione_sociale }
                  : {}),
                ...(e.partita_iva ? { partita_iva: e.partita_iva } : {}),
                ...(e.codice_fiscale
                  ? { codice_fiscale: e.codice_fiscale }
                  : {}),
                ...(e.telefono ? { telefono: e.telefono } : {}),
                ...(e.citta ? { citta_id: e.citta.id } : {}),
                ...(e.citta_altro ? { citta_altro: e.citta_altro } : {}),
                ...(e.indirizzo ? { indirizzo: e.indirizzo } : {}),
              };
            }),
          ...proprietari_giuridico_d.map((d: any) => {
            return { id: d, delete: true };
          }),
        ],
      },

      locatari: {
        on_conflict: {
          constraint: Sis_Locatario_Constraint.LocatarioPkey,
          update_columns: [
            Sis_Locatario_Update_Column.TitoloId,
            Sis_Locatario_Update_Column.Nome,
            Sis_Locatario_Update_Column.Cognome,
            Sis_Locatario_Update_Column.SessoId,
            Sis_Locatario_Update_Column.Telefono,
            Sis_Locatario_Update_Column.NascitaData,
            Sis_Locatario_Update_Column.NascitaCittaId,
            Sis_Locatario_Update_Column.NascitaCittaAltro,
            Sis_Locatario_Update_Column.ResidenteIndirizzo,
            Sis_Locatario_Update_Column.ResidenteCittaId,
            Sis_Locatario_Update_Column.ResidenteCittaAltro,
            Sis_Locatario_Update_Column.Delete,
          ],
        },
        data: [
          ...this.model.persone.locatari
            .filter((d: any) => d != undefined)
            .map((e: any) => {
              return {
                ...(e.id ? { id: e.id } : {}),
                ...(e.titolo ? { titolo_id: e.titolo.id } : {}),
                ...(e.nome ? { nome: e.nome } : {}),
                ...(e.cognome ? { cognome: e.cognome } : {}),
                ...(e.sesso ? { sesso_id: e.sesso.id } : {}),
                ...(e.telefono ? { telefono: e.telefono } : {}),
                ...(e.nascita_data ? { nascita_data: e.nascita_data } : {}),
                ...(e.nascita_citta
                  ? { nascita_citta_id: e.nascita_citta.id }
                  : {}),
                ...(e.nascita_citta_altro
                  ? { nascita_citta_altro: e.nascita_citta_altro }
                  : {}),
                ...(e.residente_indirizzo
                  ? { residente_indirizzo: e.residente_indirizzo }
                  : {}),
                ...(e.residente_citta
                  ? { residente_citta_id: e.residente_citta.id }
                  : {}),
                ...(e.residente_citta_altro
                  ? { residente_citta_altro: e.residente_citta_altro }
                  : {}),
              };
            }),
          ...locatari_d.map((d: any) => {
            return { id: d, delete: true };
          }),
        ],
      },

      conducenti: {
        on_conflict: {
          constraint: Sis_Conducente_Constraint.ConducentePkey,
          update_columns: [
            Sis_Conducente_Update_Column.TitoloId,
            Sis_Conducente_Update_Column.Nome,
            Sis_Conducente_Update_Column.Cognome,
            Sis_Conducente_Update_Column.SessoId,
            Sis_Conducente_Update_Column.Telefono,
            Sis_Conducente_Update_Column.NascitaData,
            Sis_Conducente_Update_Column.NascitaCittaId,
            Sis_Conducente_Update_Column.NascitaCittaAltro,
            Sis_Conducente_Update_Column.ResidenteIndirizzo,
            Sis_Conducente_Update_Column.ResidenteCittaId,
            Sis_Conducente_Update_Column.ResidenteCittaAltro,
            Sis_Conducente_Update_Column.Delete,
            Sis_Conducente_Update_Column.PatenteSinoaltroId,
            Sis_Conducente_Update_Column.PatenteCategoriaAltro,
            Sis_Conducente_Update_Column.PatenteAltroNote,
            Sis_Conducente_Update_Column.PatenteNumero,
            Sis_Conducente_Update_Column.PatenteRilasciataData,
            Sis_Conducente_Update_Column.PatenteRilasciataValidaData,
            Sis_Conducente_Update_Column.PatenteRilasciataDa,
            Sis_Conducente_Update_Column.PatenteRilasciataDaCittaId,
            Sis_Conducente_Update_Column.PatentePrescrizioni,
            Sis_Conducente_Update_Column.CapTipo,
            Sis_Conducente_Update_Column.CapNumero,
            Sis_Conducente_Update_Column.CapRilasciataDaDdt,
            Sis_Conducente_Update_Column.CapRilasciataDaDdtData,
            Sis_Conducente_Update_Column.RichiestaEsami,
            Sis_Conducente_Update_Column.RichiestaEsamiEffettuatiPresso,
            Sis_Conducente_Update_Column.ProvaEtilometro,
            Sis_Conducente_Update_Column.ProvaEtilometroEsito,
            Sis_Conducente_Update_Column.ProvaNarcotest,
            Sis_Conducente_Update_Column.ProvaNarcotestEsito,
          ],
        },
        data: [
          ...this.model.persone.conducenti
            .filter((d: any) => d != undefined)
            .map((e: any, i: number) => {
              let id = 'p_' + i;
              if (e.id != undefined) id = e.id;
              return {
                ...(e.id ? { id: e.id } : {}),
                ...(e.titolo ? { titolo_id: e.titolo.id } : {}),
                ...(e.nome ? { nome: e.nome } : {}),
                ...(e.cognome ? { cognome: e.cognome } : {}),
                ...(e.sesso ? { sesso_id: e.sesso.id } : {}),
                ...(e.telefono ? { telefono: e.telefono } : {}),
                ...(e.nascita_data ? { nascita_data: e.nascita_data } : {}),
                ...(e.nascita_citta
                  ? { nascita_citta_id: e.nascita_citta.id }
                  : {}),
                ...(e.nascita_citta_altro
                  ? { nascita_citta_altro: e.nascita_citta_altro }
                  : {}),
                ...(e.residente_indirizzo
                  ? { residente_indirizzo: e.residente_indirizzo }
                  : {}),
                ...(e.residente_citta
                  ? { residente_citta_id: e.residente_citta.id }
                  : {}),
                ...(e.residente_citta_altro
                  ? { residente_citta_altro: e.residente_citta_altro }
                  : {}),
                ...(e.patente_sinoaltro
                  ? { patente_sinoaltro_id: e.patente_sinoaltro.id }
                  : {}),

                ...((patente_n[id] != undefined && patente_n[id].length > 0) ||
                (patente_d[id] != undefined && patente_d[id].length > 0)
                  ? {
                      patente: {
                        on_conflict: {
                          constraint:
                            Sis_Associazione_Patente_Constraint.AssociazionePatentePkey,
                          update_columns: [
                            Sis_Associazione_Patente_Update_Column.Delete,
                            Sis_Associazione_Patente_Update_Column.CategoriaId,
                          ],
                        },
                        data: [
                          ...patente_n[id].map((e: any) => {
                            return {
                              categoria_id: e.id,
                            };
                          }),
                          ...patente_d[id].map((c: any) => {
                            return {
                              id: c.id,
                              categoria_id: 1,
                              delete: true,
                            };
                          }),
                        ],
                      },
                    }
                  : {}),
                ...(e.patente_altro_note
                  ? { patente_altro_note: e.patente_altro_note }
                  : {}),
                ...(e.patente_numero
                  ? { patente_numero: e.patente_numero }
                  : {}),
                ...(e.patente_rilasciata_data
                  ? { patente_rilasciata_data: e.patente_rilasciata_data }
                  : {}),
                ...(e.patente_rilasciata_valida_data
                  ? {
                      patente_rilasciata_valida_data:
                        e.patente_rilasciata_valida_data,
                    }
                  : {}),
                ...(e.patente_rilasciata_da
                  ? { patente_rilasciata_da: e.patente_rilasciata_da }
                  : {}),
                ...(e.patente_rilasciata_da_citta
                  ? {
                      patente_rilasciata_da_citta_id:
                        e.patente_rilasciata_da_citta.id,
                    }
                  : {}),
                ...(e.patente_prescrizioni
                  ? { patente_prescrizioni: e.patente_prescrizioni }
                  : {}),
                ...(e.cap_tipo ? { cap_tipo: e.cap_tipo } : {}),
                ...(e.cap_numero ? { cap_numero: e.cap_numero } : {}),
                ...(e.cap_rilasciata_da_ddt
                  ? { cap_rilasciata_da_ddt: e.cap_rilasciata_da_ddt }
                  : {}),
                ...(e.cap_rilasciata_da_ddt_data
                  ? { cap_rilasciata_da_ddt_data: e.cap_rilasciata_da_ddt_data }
                  : {}),
                ...(e.richiesta_esami
                  ? { richiesta_esami: e.richiesta_esami }
                  : {}),
                ...(e.richiesta_esami_effettuati_presso
                  ? {
                      richiesta_esami_effettuati_presso:
                        e.richiesta_esami_effettuati_presso,
                    }
                  : {}),
                ...(e.prova_etilometro
                  ? { prova_etilometro: e.prova_etilometro }
                  : {}),
                ...(e.prova_etilometro_esito
                  ? { prova_etilometro_esito: e.prova_etilometro_esito }
                  : {}),
                ...(e.prova_narcotest
                  ? { prova_narcotest: e.prova_narcotest }
                  : {}),
                ...(e.prova_narcotest_esito
                  ? { prova_narcotest_esito: e.prova_narcotest_esito }
                  : {}),
              };
            }),
          ...conducenti_d.map((d: any) => {
            return { id: d, delete: true };
          }),
        ],
      },

      trasportati: {
        on_conflict: {
          constraint: Sis_Trasportato_Constraint.TrasportatoPkey,
          update_columns: [
            Sis_Trasportato_Update_Column.TitoloId,
            Sis_Trasportato_Update_Column.Nome,
            Sis_Trasportato_Update_Column.Cognome,
            Sis_Trasportato_Update_Column.SessoId,
            Sis_Trasportato_Update_Column.Telefono,
            Sis_Trasportato_Update_Column.NascitaData,
            Sis_Trasportato_Update_Column.NascitaCittaId,
            Sis_Trasportato_Update_Column.NascitaCittaAltro,
            Sis_Trasportato_Update_Column.ResidenteIndirizzo,
            Sis_Trasportato_Update_Column.ResidenteCittaId,
            Sis_Trasportato_Update_Column.ResidenteCittaAltro,
            Sis_Trasportato_Update_Column.Delete,
            Sis_Trasportato_Update_Column.DocumentoTipo,
            Sis_Trasportato_Update_Column.DocumentoNumero,
            Sis_Trasportato_Update_Column.DocumentoRilasciatoDa,
            Sis_Trasportato_Update_Column.DocumentoRilasciatoDaCittaId,
            Sis_Trasportato_Update_Column.DocumentoRilasciatoData,
            Sis_Trasportato_Update_Column.PosizioneId,
            Sis_Trasportato_Update_Column.StatoId,
            Sis_Trasportato_Update_Column.AccertamentoAttivazioneAirbag,
            Sis_Trasportato_Update_Column.AccertamentoUsoCintura,
            Sis_Trasportato_Update_Column.AccertamentoUsoCasco,
            Sis_Trasportato_Update_Column.AccertamentoUsoSistemaBambini,
          ],
        },
        data: [
          ...this.model.persone.trasportati
            .filter((d: any) => d != undefined)
            .map((e: any) => {
              return {
                ...(e.id ? { id: e.id } : {}),
                ...(e.titolo ? { titolo_id: e.titolo.id } : {}),
                ...(e.nome ? { nome: e.nome } : {}),
                ...(e.cognome ? { cognome: e.cognome } : {}),
                ...(e.sesso ? { sesso_id: e.sesso.id } : {}),
                ...(e.telefono ? { telefono: e.telefono } : {}),
                ...(e.nascita_data ? { nascita_data: e.nascita_data } : {}),
                ...(e.nascita_citta
                  ? { nascita_citta_id: e.nascita_citta.id }
                  : {}),
                ...(e.nascita_citta_altro
                  ? { nascita_citta_altro: e.nascita_citta_altro }
                  : {}),
                ...(e.residente_indirizzo
                  ? { residente_indirizzo: e.residente_indirizzo }
                  : {}),
                ...(e.residente_citta
                  ? { residente_citta_id: e.residente_citta.id }
                  : {}),
                ...(e.residente_citta_altro
                  ? { residente_citta_altro: e.residente_citta_altro }
                  : {}),
                ...(e.documento_tipo
                  ? { documento_tipo: e.documento_tipo }
                  : {}),
                ...(e.documento_numero
                  ? { documento_numero: e.documento_numero }
                  : {}),
                ...(e.documento_rilasciato_da
                  ? { documento_rilasciato_da: e.documento_rilasciato_da }
                  : {}),
                ...(e.documento_rilasciato_da_citta
                  ? {
                      documento_rilasciato_da_citta_id:
                        e.documento_rilasciato_da_citta.id,
                    }
                  : {}),
                ...(e.documento_rilasciato_data
                  ? { documento_rilasciato_data: e.documento_rilasciato_data }
                  : {}),
                ...(e.posizione ? { posizione_id: e.posizione.id } : {}),
                ...(e.stato ? { stato_id: e.stato.id } : {}),
                ...(e.accertamento_uso_cintura
                  ? { accertamento_uso_cintura: e.accertamento_uso_cintura }
                  : {}),
                ...(e.accertamento_uso_casco
                  ? { accertamento_uso_casco: e.accertamento_uso_casco }
                  : {}),
                ...(e.accertamento_uso_sistema_bambini
                  ? {
                      accertamento_uso_sistema_bambini:
                        e.accertamento_uso_sistema_bambini,
                    }
                  : {}),
                ...(e.accertamento_attivazione_airbag
                  ? {
                      accertamento_attivazione_airbag:
                        e.accertamento_attivazione_airbag,
                    }
                  : {}),
              };
            }),
          ...trasportati_d.map((d: any) => {
            return { id: d, delete: true };
          }),
        ],
      },

      testimoni: {
        on_conflict: {
          constraint: Sis_Testimone_Constraint.TestimonePkey,
          update_columns: [
            Sis_Testimone_Update_Column.TitoloId,
            Sis_Testimone_Update_Column.Nome,
            Sis_Testimone_Update_Column.Cognome,
            Sis_Testimone_Update_Column.SessoId,
            Sis_Testimone_Update_Column.Telefono,
            Sis_Testimone_Update_Column.NascitaData,
            Sis_Testimone_Update_Column.NascitaCittaId,
            Sis_Testimone_Update_Column.NascitaCittaAltro,
            Sis_Testimone_Update_Column.ResidenteIndirizzo,
            Sis_Testimone_Update_Column.ResidenteCittaId,
            Sis_Testimone_Update_Column.ResidenteCittaAltro,
            Sis_Testimone_Update_Column.Delete,
            Sis_Testimone_Update_Column.DocumentoTipo,
            Sis_Testimone_Update_Column.DocumentoNumero,
            Sis_Testimone_Update_Column.DocumentoRilasciatoDa,
            Sis_Testimone_Update_Column.DocumentoRilasciatoDaCittaId,
            Sis_Testimone_Update_Column.DocumentoRilasciatoData,
          ],
        },
        data: [
          ...this.model.persone.testimoni
            .filter((d: any) => d != undefined)
            .map((e: any) => {
              return {
                ...(e.id ? { id: e.id } : {}),
                ...(e.titolo ? { titolo_id: e.titolo.id } : {}),
                ...(e.nome ? { nome: e.nome } : {}),
                ...(e.cognome ? { cognome: e.cognome } : {}),
                ...(e.sesso ? { sesso_id: e.sesso.id } : {}),
                ...(e.telefono ? { telefono: e.telefono } : {}),
                ...(e.nascita_data ? { nascita_data: e.nascita_data } : {}),
                ...(e.nascita_citta
                  ? { nascita_citta_id: e.nascita_citta.id }
                  : {}),
                ...(e.nascita_citta_altro
                  ? { nascita_citta_altro: e.nascita_citta_altro }
                  : {}),
                ...(e.residente_indirizzo
                  ? { residente_indirizzo: e.residente_indirizzo }
                  : {}),
                ...(e.residente_citta
                  ? { residente_citta_id: e.residente_citta.id }
                  : {}),
                ...(e.residente_citta_altro
                  ? { residente_citta_altro: e.residente_citta_altro }
                  : {}),
                ...(e.documento_tipo
                  ? { documento_tipo: e.documento_tipo }
                  : {}),
                ...(e.documento_numero
                  ? { documento_numero: e.documento_numero }
                  : {}),
                ...(e.documento_rilasciato_da
                  ? { documento_rilasciato_da: e.documento_rilasciato_da }
                  : {}),
                ...(e.documento_rilasciato_da_citta
                  ? {
                      documento_rilasciato_da_citta_id:
                        e.documento_rilasciato_da_citta.id,
                    }
                  : {}),
                ...(e.documento_rilasciato_data
                  ? { documento_rilasciato_data: e.documento_rilasciato_data }
                  : {}),
              };
            }),
          ...testimoni_d.map((d: any) => {
            return { id: d, delete: true };
          }),
        ],
      },

      pedoni: {
        on_conflict: {
          constraint: Sis_Pedone_Constraint.PedonePkey,
          update_columns: [
            Sis_Pedone_Update_Column.TitoloId,
            Sis_Pedone_Update_Column.Nome,
            Sis_Pedone_Update_Column.Cognome,
            Sis_Pedone_Update_Column.SessoId,
            Sis_Pedone_Update_Column.Telefono,
            Sis_Pedone_Update_Column.NascitaData,
            Sis_Pedone_Update_Column.NascitaCittaId,
            Sis_Pedone_Update_Column.NascitaCittaAltro,
            Sis_Pedone_Update_Column.ResidenteIndirizzo,
            Sis_Pedone_Update_Column.ResidenteCittaId,
            Sis_Pedone_Update_Column.ResidenteCittaAltro,
            Sis_Pedone_Update_Column.Delete,
            Sis_Pedone_Update_Column.DocumentoTipo,
            Sis_Pedone_Update_Column.DocumentoNumero,
            Sis_Pedone_Update_Column.DocumentoRilasciatoDa,
            Sis_Pedone_Update_Column.DocumentoRilasciatoDaCittaId,
            Sis_Pedone_Update_Column.DocumentoRilasciatoData,
          ],
        },
        data: [
          ...this.model.persone.pedoni
            .filter((d: any) => d != undefined)
            .map((e: any) => {
              return {
                ...(e.id ? { id: e.id } : {}),
                ...(e.titolo ? { titolo_id: e.titolo.id } : {}),
                ...(e.nome ? { nome: e.nome } : {}),
                ...(e.cognome ? { cognome: e.cognome } : {}),
                ...(e.sesso ? { sesso_id: e.sesso.id } : {}),
                ...(e.telefono ? { telefono: e.telefono } : {}),
                ...(e.nascita_data ? { nascita_data: e.nascita_data } : {}),
                ...(e.nascita_citta
                  ? { nascita_citta_id: e.nascita_citta.id }
                  : {}),
                ...(e.nascita_citta_altro
                  ? { nascita_citta_altro: e.nascita_citta_altro }
                  : {}),
                ...(e.residente_indirizzo
                  ? { residente_indirizzo: e.residente_indirizzo }
                  : {}),
                ...(e.residente_citta
                  ? { residente_citta_id: e.residente_citta.id }
                  : {}),
                ...(e.residente_citta_altro
                  ? { residente_citta_altro: e.residente_citta_altro }
                  : {}),
                ...(e.documento_tipo
                  ? { documento_tipo: e.documento_tipo }
                  : {}),
                ...(e.documento_numero
                  ? { documento_numero: e.documento_numero }
                  : {}),
                ...(e.documento_rilasciato_da
                  ? { documento_rilasciato_da: e.documento_rilasciato_da }
                  : {}),
                ...(e.documento_rilasciato_da_citta
                  ? {
                      documento_rilasciato_da_citta_id:
                        e.documento_rilasciato_da_citta.id,
                    }
                  : {}),
                ...(e.documento_rilasciato_data
                  ? { documento_rilasciato_data: e.documento_rilasciato_data }
                  : {}),
              };
            }),
          ...pedoni_d.map((d: any) => {
            return { id: d, delete: true };
          }),
        ],
      },

      altri: {
        on_conflict: {
          constraint: Sis_Altro_Constraint.AltroPkey,
          update_columns: [
            Sis_Altro_Update_Column.Note,
            Sis_Altro_Update_Column.Delete,
          ],
        },
        data: [
          ...this.model.persone.altri
            .filter((d: any) => d != undefined)
            .map((e: any) => {
              return {
                ...(e.id ? { id: e.id } : {}),
                ...(e.note ? { note: e.note } : {}),
              };
            }),
          ...altri_d.map((d: any) => {
            return { id: d, delete: true };
          }),
        ],
      },

      veicoli: {
        on_conflict: {
          constraint: Sis_Veicolo_Constraint.VeicoloPkey,
          update_columns: [
            Sis_Veicolo_Update_Column.ProprietarioId,
            Sis_Veicolo_Update_Column.ProprietarioGiuridicoId,
            Sis_Veicolo_Update_Column.LocatarioId,
            Sis_Veicolo_Update_Column.ConducenteId,
            Sis_Veicolo_Update_Column.StatoId,
            Sis_Veicolo_Update_Column.TipologiaVeicoloId,
            Sis_Veicolo_Update_Column.TipologiaVeicoloNote,
            Sis_Veicolo_Update_Column.Marca,
            Sis_Veicolo_Update_Column.Modello,
            Sis_Veicolo_Update_Column.Targa,
            Sis_Veicolo_Update_Column.NazioneId,
            Sis_Veicolo_Update_Column.Telaio,
            Sis_Veicolo_Update_Column.Cilindrata,
            Sis_Veicolo_Update_Column.AlimentazioneId,
            Sis_Veicolo_Update_Column.AlimentazioneNote,
            Sis_Veicolo_Update_Column.Peso,
            Sis_Veicolo_Update_Column.Tara,
            Sis_Veicolo_Update_Column.PU,
            Sis_Veicolo_Update_Column.PC,
            Sis_Veicolo_Update_Column.Posti,
            Sis_Veicolo_Update_Column.AnnoPrimaImmatricolazione,
            Sis_Veicolo_Update_Column.ColoreCarrozzeria,
            Sis_Veicolo_Update_Column.DataUltimaRevisione,
            Sis_Veicolo_Update_Column.UsoVeicoloId,
            Sis_Veicolo_Update_Column.CodiceMercePericolasa,
            Sis_Veicolo_Update_Column.CodicePericolo,
            Sis_Veicolo_Update_Column.RetrovisoreEsternoId,
            Sis_Veicolo_Update_Column.DispositiviAcustici,
            Sis_Veicolo_Update_Column.IndicatoriDirezione,
            Sis_Veicolo_Update_Column.LuciArresto,
            Sis_Veicolo_Update_Column.ImpiantoIlluminazione,
            Sis_Veicolo_Update_Column.StatoPneumatici,
            Sis_Veicolo_Update_Column.KmPercorsi,
            Sis_Veicolo_Update_Column.MarciaInserita,
            Sis_Veicolo_Update_Column.VelocitaPresunta,
            Sis_Veicolo_Update_Column.CartaCircolazioneSinoaltroId,
            Sis_Veicolo_Update_Column.CartaCircolazione,
            Sis_Veicolo_Update_Column.CartaCircolazioneData,
            Sis_Veicolo_Update_Column.CartaCircolazioneDdt,
            Sis_Veicolo_Update_Column.AssicurazioneSinoaltroId,
            Sis_Veicolo_Update_Column.AssicurazioneAltroNote,
            Sis_Veicolo_Update_Column.AssicurazioneSocieta,
            Sis_Veicolo_Update_Column.AssicurazioneAgenzia,
            Sis_Veicolo_Update_Column.AssicurazionePolizza,
            Sis_Veicolo_Update_Column.AssicurazioneDataInizio,
            Sis_Veicolo_Update_Column.AssicurazioneDataFine,
            Sis_Veicolo_Update_Column.AccertamentiUsoCinturaSinoaltroId,
            Sis_Veicolo_Update_Column.AccertamentiUsoCinturaAltroNote,
            Sis_Veicolo_Update_Column.AccertamentiUsoCascoSinoaltroId,
            Sis_Veicolo_Update_Column.AccertamentiUsoCascoAltroNote,
            Sis_Veicolo_Update_Column.AccertamentoUsoAntiabbandonoSinoaltroId,
            Sis_Veicolo_Update_Column.AccertamentoUsoAntiabbandonoAltroNote,
            Sis_Veicolo_Update_Column.AccertamentoUsoSistemaBambiniSinoaltroId,
            Sis_Veicolo_Update_Column.AccertamentoUsoSistemaBambiniAltroNote,
            Sis_Veicolo_Update_Column.DotazioneCinture,
            Sis_Veicolo_Update_Column.DotazioneAirbag,
            Sis_Veicolo_Update_Column.AccertamentiAbs,
            Sis_Veicolo_Update_Column.AccertamentiAttivazione,
            Sis_Veicolo_Update_Column.DanniSuVeicoloConstatati,
            Sis_Veicolo_Update_Column.DanniDelVeicoloACose,
            Sis_Veicolo_Update_Column.DanniDelVeicoloACoseRilievo,
            Sis_Veicolo_Update_Column.DanniDelVeicoloACoseRilievoDataInizio,
            Sis_Veicolo_Update_Column.DanniDelVeicoloACoseRilievoDataFine,
            Sis_Veicolo_Update_Column.DanniDelVeicoloACoseRilievoPresente,
            Sis_Veicolo_Update_Column.DanniDelVeicoloACoseRilievoDifensore,
            Sis_Veicolo_Update_Column.DestinazioneRitirato,
            Sis_Veicolo_Update_Column.DestinazioneSequestrato,
            Sis_Veicolo_Update_Column.DestinazioneDecisioneId,
            Sis_Veicolo_Update_Column.DestinazioneDecisioneAltro,
            Sis_Veicolo_Update_Column.DestinazioneTrasportatoPresso,
            Sis_Veicolo_Update_Column.DestinazionePersonaAffidataria,
            Sis_Veicolo_Update_Column.DestinazioneData,
            Sis_Veicolo_Update_Column.TracciaSuolo,
            Sis_Veicolo_Update_Column.TracciaSuoloAbs,
            Sis_Veicolo_Update_Column.TracciaSuoloTipoId,
            Sis_Veicolo_Update_Column.TracciaSuoloFrenataTipologiaId,
            Sis_Veicolo_Update_Column.TracciaSuoloMetri,
            Sis_Veicolo_Update_Column.TracciaSuoloTerminazioneId,
            Sis_Veicolo_Update_Column.TracciaSuoloTerminazioneTipologiaId,
            Sis_Veicolo_Update_Column.TracciaSuoloTerminazioneMetri,
            Sis_Veicolo_Update_Column.TracciaSuoloTerminazioneIntensitaId,
            Sis_Veicolo_Update_Column.TracciaSuoloTerminazioneFormaId,
            Sis_Veicolo_Update_Column.TracciaSuoloTerminazioneAndamentoId,
            Sis_Veicolo_Update_Column.Delete,
          ],
        },
        data: [
          ...this.model.veicoli
            .filter((d: any) => d != undefined)
            .map((e: any, i: number) => {
              let id = 'p_' + i;
              if (e.id != undefined) id = e.id;

              return {
                ...(e.id ? { id: e.id } : {}),
                ...(e.proprietario
                  ? { proprietario_id: e.proprietario.id }
                  : {}),
                ...(e.proprietario_giuridico
                  ? { proprietario_giuridico_id: e.proprietario_giuridico.id }
                  : {}),
                ...(e.locatario ? { locatario_id: e.locatario.id } : {}),
                ...(e.conducente ? { conducente_id: e.conducente.id } : {}),
                ...((veicoli_trasportati_n[id] != undefined &&
                  veicoli_trasportati_n[id].length > 0) ||
                (veicoli_trasportati_d[id] != undefined &&
                  veicoli_trasportati_d[id].length > 0)
                  ? {
                      trasportati: {
                        on_conflict: {
                          constraint:
                            Sis_Trasportati_Veicolo_Constraint.TrasportatiVeicoloPkey,
                          update_columns: [
                            Sis_Trasportati_Veicolo_Update_Column.Delete,
                            Sis_Trasportati_Veicolo_Update_Column.TrasportatoId,
                          ],
                        },
                        data: [
                          ...veicoli_trasportati_n[id].map((e: any) => {
                            return {
                              trasportato_id: e.id,
                            };
                          }),
                          ...veicoli_trasportati_d[id].map((c: any) => {
                            return {
                              id: c.id,
                              trasportato_id: 1,
                              delete: true,
                            };
                          }),
                        ],
                      },
                    }
                  : {}),
                ...(e.stato ? { stato_id: e.stato.id } : {}),
                ...(e.tipologia_veicolo
                  ? { tipologia_veicolo_id: e.tipologia_veicolo.id }
                  : {}),
                ...(e.tipologia_veicolo_note
                  ? { note: e.tipologia_veicolo_note }
                  : {}),
                ...(e.marca ? { marca: e.marca } : {}),
                ...(e.modello ? { modello: e.modello } : {}),
                ...(e.targa ? { targa: e.targa } : {}),
                ...(e.nazione ? { nazione_id: e.nazione.id } : {}),
                ...(e.telaio ? { telaio: e.telaio } : {}),
                ...(e.cilindrata ? { cilindrata: e.cilindrata } : {}),
                ...(e.alimentazione
                  ? { alimentazione_id: e.alimentazione.id }
                  : {}),
                ...(e.alimentazione_note
                  ? { alimentazione_note: e.alimentazione_note }
                  : {}),
                ...(e.peso ? { peso: e.peso } : {}),
                ...(e.tara ? { tara: e.tara } : {}),
                ...(e.p_u ? { p_u: e.p_u } : {}),
                ...(e.p_c ? { p_c: e.p_c } : {}),
                ...(e.posti ? { posti: e.posti } : {}),
                ...(e.anno_prima_immatricolazione
                  ? {
                      anno_prima_immatricolazione:
                        e.anno_prima_immatricolazione,
                    }
                  : {}),
                ...(e.colore_carrozzeria
                  ? { colore_carrozzeria: e.colore_carrozzeria }
                  : {}),
                ...(e.data_ultima_revisione
                  ? { data_ultima_revisione: e.data_ultima_revisione }
                  : {}),
                ...(e.uso_veicolo ? { uso_veicolo_id: e.uso_veicolo.id } : {}),
                ...(e.codice_merce_pericolasa
                  ? { codice_merce_pericolasa: e.codice_merce_pericolasa }
                  : {}),
                ...(e.codice_pericolo
                  ? { codice_pericolo: e.codice_pericolo }
                  : {}),
                ...(e.retrovisore_esterno
                  ? { retrovisore_esterno_id: e.retrovisore_esterno.id }
                  : {}),
                ...(e.dispositivi_acustici
                  ? { dispositivi_acustici: e.dispositivi_acustici }
                  : {}),
                ...(e.indicatori_direzione
                  ? { indicatori_direzione: e.indicatori_direzione }
                  : {}),
                ...(e.luci_arresto ? { luci_arresto: e.luci_arresto } : {}),
                ...(e.impianto_illuminazione
                  ? { impianto_illuminazione: e.impianto_illuminazione }
                  : {}),
                ...(e.stato_pneumatici
                  ? { stato_pneumatici: e.stato_pneumatici }
                  : {}),
                ...(e.km_percorsi ? { km_percorsi: e.km_percorsi } : {}),
                ...(e.marcia_inserita
                  ? { marcia_inserita: e.marcia_inserita }
                  : {}),
                ...(e.velocita_presunta
                  ? { velocita_presunta: e.velocita_presunta }
                  : {}),
                ...(e.carta_circolazione_sinoaltro
                  ? {
                      carta_circolazione_sinoaltro_id:
                        e.carta_circolazione_sinoaltro.id,
                    }
                  : {}),
                ...(e.carta_circolazione_altro_note
                  ? {
                      carta_circolazione_altro_note:
                        e.carta_circolazione_altro_note,
                    }
                  : {}),
                ...(e.carta_circolazione
                  ? { carta_circolazione: e.carta_circolazione }
                  : {}),
                ...(e.carta_circolazione_data
                  ? { carta_circolazione_data: e.carta_circolazione_data }
                  : {}),
                ...(e.carta_circolazione_ddt
                  ? { carta_circolazione_ddt: e.carta_circolazione_ddt }
                  : {}),
                ...(e.assicurazione_sinoaltro
                  ? { assicurazione_sinoaltro_id: e.assicurazione_sinoaltro.id }
                  : {}),
                ...(e.assicurazione_altro_note
                  ? { assicurazione_altro_note: e.assicurazione_altro_note }
                  : {}),
                ...(e.assicurazione_societa
                  ? { assicurazione_societa: e.assicurazione_societa }
                  : {}),
                ...(e.assicurazione_agenzia
                  ? { assicurazione_agenzia: e.assicurazione_agenzia }
                  : {}),
                ...(e.assicurazione_polizza
                  ? { assicurazione_polizza: e.assicurazione_polizza }
                  : {}),
                ...(e.assicurazione_data_inizio
                  ? { assicurazione_data_inizio: e.assicurazione_data_inizio }
                  : {}),
                ...(e.assicurazione_data_fine
                  ? { assicurazione_data_fine: e.assicurazione_data_fine }
                  : {}),
                ...(e.accertamenti_uso_cintura_sinoaltro
                  ? {
                      accertamenti_uso_cintura_sinoaltro_id:
                        e.accertamenti_uso_cintura_sinoaltro.id,
                    }
                  : {}),
                ...(e.accertamenti_uso_cintura_altro_note
                  ? {
                      accertamenti_uso_cintura_altro_note:
                        e.accertamenti_uso_cintura_altro_note,
                    }
                  : {}),
                ...(e.accertamenti_uso_casco_sinoaltro
                  ? {
                      accertamenti_uso_casco_sinoaltro_id:
                        e.accertamenti_uso_casco_sinoaltro.id,
                    }
                  : {}),
                ...(e.accertamenti_uso_casco_altro_note
                  ? {
                      accertamenti_uso_casco_altro_note:
                        e.accertamenti_uso_casco_altro_note,
                    }
                  : {}),
                ...(e.accertamento_uso_antiabbandono_sinoaltro
                  ? {
                      accertamento_uso_antiabbandono_sinoaltro_id:
                        e.accertamento_uso_antiabbandono_sinoaltro.id,
                    }
                  : {}),
                ...(e.accertamento_uso_antiabbandono_altro_note
                  ? {
                      accertamento_uso_antiabbandono_altro_note:
                        e.accertamento_uso_antiabbandono_altro_note,
                    }
                  : {}),
                ...(e.accertamento_uso_sistema_bambini_sinoaltro
                  ? {
                      accertamento_uso_sistema_bambini_sinoaltro_id:
                        e.accertamento_uso_sistema_bambini_sinoaltro.id,
                    }
                  : {}),
                ...(e.accertamento_uso_sistema_bambini_altro_note
                  ? {
                      accertamento_uso_sistema_bambini_altro_note:
                        e.accertamento_uso_sistema_bambini_altro_note,
                    }
                  : {}),
                ...(e.dotazione_cinture
                  ? { dotazione_cinture: e.dotazione_cinture }
                  : {}),
                ...(e.dotazione_airbag
                  ? { dotazione_airbag: e.dotazione_airbag }
                  : {}),
                ...(e.accertamenti_abs
                  ? { accertamenti_abs: e.accertamenti_abs }
                  : {}),
                ...(e.accertamenti_attivazione
                  ? { accertamenti_attivazione: e.accertamenti_attivazione }
                  : {}),
                ...(e.danni_su_veicolo_constatati
                  ? {
                      danni_su_veicolo_constatati:
                        e.danni_su_veicolo_constatati,
                    }
                  : {}),
                ...(e.danni_del_veicolo_a_cose
                  ? { danni_del_veicolo_a_cose: e.danni_del_veicolo_a_cose }
                  : {}),
                ...(e.danni_del_veicolo_a_cose_rilievo
                  ? {
                      danni_del_veicolo_a_cose_rilievo:
                        e.danni_del_veicolo_a_cose_rilievo,
                    }
                  : {}),
                ...(e.danni_del_veicolo_a_cose_rilievo_data_inizio
                  ? {
                      danni_del_veicolo_a_cose_rilievo_data_inizio:
                        e.danni_del_veicolo_a_cose_rilievo_data_inizio,
                    }
                  : {}),
                ...(e.danni_del_veicolo_a_cose_rilievo_data_fine
                  ? {
                      danni_del_veicolo_a_cose_rilievo_data_fine:
                        e.danni_del_veicolo_a_cose_rilievo_data_fine,
                    }
                  : {}),
                ...(e.danni_del_veicolo_a_cose_rilievo_presente
                  ? {
                      danni_del_veicolo_a_cose_rilievo_presente:
                        e.danni_del_veicolo_a_cose_rilievo_presente,
                    }
                  : {}),
                ...(e.danni_del_veicolo_a_cose_rilievo_difensore
                  ? {
                      danni_del_veicolo_a_cose_rilievo_difensore:
                        e.danni_del_veicolo_a_cose_rilievo_difensore,
                    }
                  : {}),
                ...(e.destinazione_ritirato
                  ? { destinazione_ritirato: e.destinazione_ritirato }
                  : {}),
                ...(e.destinazione_sequestrato
                  ? { destinazione_sequestrato: e.destinazione_sequestrato }
                  : {}),
                ...(e.destinazione_decisione
                  ? { destinazione_decisione_id: e.destinazione_decisione.id }
                  : {}),
                ...(e.destinazione_decisione_altro
                  ? {
                      destinazione_decisione_altro:
                        e.destinazione_decisione_altro,
                    }
                  : {}),
                ...(e.destinazione_trasportato_presso
                  ? {
                      destinazione_trasportato_presso:
                        e.destinazione_trasportato_presso,
                    }
                  : {}),
                ...(e.destinazione_persona_affidataria
                  ? {
                      destinazione_persona_affidataria:
                        e.destinazione_persona_affidataria,
                    }
                  : {}),
                ...(e.destinazione_data
                  ? { destinazione_data: e.destinazione_data }
                  : {}),
                ...(e.traccia_suolo ? { traccia_suolo: e.traccia_suolo } : {}),
                ...(e.traccia_suolo_abs
                  ? { traccia_suolo_abs: e.traccia_suolo_abs }
                  : {}),
                ...(e.traccia_suolo_tipologia
                  ? { traccia_suolo_tipo_id: e.traccia_suolo_tipologia.id }
                  : {}),
                ...(e.traccia_suolo_frenata_tipologia
                  ? {
                      traccia_suolo_frenata_tipologia_id:
                        e.traccia_suolo_frenata_tipologia.id,
                    }
                  : {}),

                ...(e.traccia_suolo_metri
                  ? { traccia_suolo_metri: e.traccia_suolo_metri }
                  : {}),
                ...(e.traccia_suolo_terminazione
                  ? {
                      traccia_suolo_terminazione_id:
                        e.traccia_suolo_terminazione.id,
                    }
                  : {}),
                ...(e.traccia_suolo_terminazione_tipologia
                  ? {
                      traccia_suolo_terminazione_tipologia_id:
                        e.traccia_suolo_terminazione_tipologia.id,
                    }
                  : {}),
                ...(e.traccia_suolo_terminazione_metri
                  ? {
                      traccia_suolo_terminazione_metri:
                        e.traccia_suolo_terminazione_metri,
                    }
                  : {}),
                ...(e.traccia_suolo_terminazione_intensita
                  ? {
                      traccia_suolo_terminazione_intensita_id:
                        e.traccia_suolo_terminazione_intensita.id,
                    }
                  : {}),
                ...(e.traccia_suolo_terminazione_forma
                  ? {
                      traccia_suolo_terminazione_forma_id:
                        e.traccia_suolo_terminazione_forma.id,
                    }
                  : {}),
                ...(e.traccia_suolo_terminazione_andamento
                  ? {
                      traccia_suolo_terminazione_andamento_id:
                        e.traccia_suolo_terminazione_andamento.id,
                    }
                  : {}),
              };
            }),
          ...veicoli_d.map((d: any) => {
            return { id: d, delete: true };
          }),
        ],
      },

      infrazioni: {
        on_conflict: {
          constraint: Sis_Infrazione_Constraint.InfrazionePkey,
          update_columns: [
            Sis_Infrazione_Update_Column.ConducenteId,
            Sis_Infrazione_Update_Column.PedoneId,
            Sis_Infrazione_Update_Column.VeicoloId,
            Sis_Infrazione_Update_Column.VerbaleN,
            Sis_Infrazione_Update_Column.VerbaleData,
            Sis_Infrazione_Update_Column.Articolo,
            Sis_Infrazione_Update_Column.Note,
            Sis_Infrazione_Update_Column.UtgPrefettura,
            Sis_Infrazione_Update_Column.DataTrasmissioneRapporto,
            Sis_Infrazione_Update_Column.UfficiProvinciale,
            Sis_Infrazione_Update_Column.Art_80Dtt,
            Sis_Infrazione_Update_Column.Art_80Data,
            Sis_Infrazione_Update_Column.Delete,
          ],
        },
        data: [
          ...this.model.infrazioni
            .filter((d: any) => d != undefined)
            .map((e: any) => {
              return {
                ...(e.id ? { id: e.id } : {}),
                ...(e.conducente ? { conducente_id: e.conducente.id } : {}),
                ...(e.pedone ? { pedone_id: e.pedone.id } : {}),
                ...(e.veicolo ? { veicolo_id: e.veicolo.id } : {}),
                ...(e.verbale_n ? { verbale_n: e.verbale_n } : {}),
                ...(e.verbale_data ? { verbale_data: e.verbale_data } : {}),
                ...(e.articolo ? { articolo: e.articolo } : {}),
                ...(e.note ? { note: e.note } : {}),
                ...(e.utg_prefettura
                  ? { utg_prefettura: e.utg_prefettura }
                  : {}),
                ...(e.data_trasmissione_rapporto
                  ? { data_trasmissione_rapporto: e.data_trasmissione_rapporto }
                  : {}),
                ...(e.uffici_provinciale
                  ? { uffici_provinciale: e.uffici_provinciale }
                  : {}),
                ...(e.art_80_dtt ? { art_80_dtt: e.art_80_dtt } : {}),
                ...(e.art_80_data ? { art_80_data: e.art_80_data } : {}),
              };
            }),
          ...infrazioni_d.map((d: any) => {
            return { id: d, delete: true };
          }),
        ],
      },
      infortunati: {
        on_conflict: {
          constraint: Sis_Infortunato_Constraint.InfortunatoPkey,
          update_columns: [
            Sis_Infortunato_Update_Column.VeicoloId,
            Sis_Infortunato_Update_Column.ConducenteId,
            Sis_Infortunato_Update_Column.TrasportatoId,
            Sis_Infortunato_Update_Column.PedoneId,
            Sis_Infortunato_Update_Column.TitoloId,
            Sis_Infortunato_Update_Column.Nome,
            Sis_Infortunato_Update_Column.Cognome,
            Sis_Infortunato_Update_Column.SessoId,
            Sis_Infortunato_Update_Column.Telefono,
            Sis_Infortunato_Update_Column.NascitaData,
            Sis_Infortunato_Update_Column.NascitaCittaId,
            Sis_Infortunato_Update_Column.NascitaCittaAltro,
            Sis_Infortunato_Update_Column.ResidenteIndirizzo,
            Sis_Infortunato_Update_Column.ResidenteCittaId,
            Sis_Infortunato_Update_Column.ResidenteCittaAltro,
            Sis_Infortunato_Update_Column.RifiutaCureImmediate,
            Sis_Infortunato_Update_Column.DanniLamentati,
            Sis_Infortunato_Update_Column.CuraDaParte,
            Sis_Infortunato_Update_Column.OspedaleRicoverato,
            Sis_Infortunato_Update_Column.OspedaleReferto,
            Sis_Infortunato_Update_Column.OspedaleRefertoRilasciatoDa,
            Sis_Infortunato_Update_Column.OspedaleDiagnosi,
            Sis_Infortunato_Update_Column.OspedalePrognosi,
            Sis_Infortunato_Update_Column.OspedaleAltro,
            Sis_Infortunato_Update_Column.TrasportatoAmbulanzaId,
            Sis_Infortunato_Update_Column.TrasportatoRichiesta,
            Sis_Infortunato_Update_Column.TrasportatoTargaAuto,
            Sis_Infortunato_Update_Column.Delete,
          ],
        },
        data: [
          ...this.model.infortunati
            .filter((d: any) => d != undefined)
            .map((e: any, i: number) => {
              let id = 'p_' + i;
              if (e.id != undefined) id = e.id;
              return {
                ...(e.id ? { id: e.id } : {}),
                ...(e.veicolo ? { veicolo_id: e.veicolo.id } : {}),
                ...(e.conducente ? { conducente_id: e.conducente.id } : {}),
                ...(e.trasportato ? { trasportato_id: e.trasportato.id } : {}),
                ...(e.pedone ? { pedone_id: e.pedone.id } : {}),
                ...(e.titolo ? { titolo_id: e.titolo.id } : {}),
                ...(e.nome ? { nome: e.nome } : {}),
                ...(e.cognome ? { cognome: e.cognome } : {}),
                ...(e.sesso ? { sesso_id: e.sesso.id } : {}),
                ...(e.telefono ? { telefono: e.telefono } : {}),
                ...(e.nascita_data ? { nascita_data: e.nascita_data } : {}),
                ...(e.nascita_citta
                  ? { nascita_citta_id: e.nascita_citta.id }
                  : {}),
                ...(e.nascita_citta_altro
                  ? { nascita_citta_altro: e.nascita_citta_altro }
                  : {}),
                ...(e.residente_indirizzo
                  ? { residente_indirizzo: e.residente_indirizzo }
                  : {}),
                ...(e.residente_citta
                  ? { residente_citta_id: e.residente_citta.id }
                  : {}),
                ...(e.residente_citta_altro
                  ? { residente_citta_altro: e.residente_citta_altro }
                  : {}),
                ...(e.rifiuta_cure_immediate
                  ? { rifiuta_cure_immediate: e.rifiuta_cure_immediate }
                  : {}),
                ...(e.danni_lamentati
                  ? { danni_lamentati: e.danni_lamentati }
                  : {}),
                ...(e.cura_da_parte ? { cura_da_parte: e.cura_da_parte } : {}),
                ...(e.ospedale_ricoverato
                  ? { ospedale_ricoverato: e.ospedale_ricoverato }
                  : {}),
                ...(e.ospedale_referto
                  ? { ospedale_referto: e.ospedale_referto }
                  : {}),
                ...(e.ospedale_referto_rilasciato_da
                  ? {
                      ospedale_referto_rilasciato_da:
                        e.ospedale_referto_rilasciato_da,
                    }
                  : {}),
                ...(e.ospedale_diagnosi
                  ? { ospedale_diagnosi: e.ospedale_diagnosi }
                  : {}),
                ...(e.ospedale_prognosi
                  ? { ospedale_prognosi: e.ospedale_prognosi }
                  : {}),
                ...(e.ospedale_altro
                  ? { ospedale_altro: e.ospedale_altro }
                  : {}),
                ...(e.trasportato_ambulanza
                  ? { trasportato_ambulanza_id: e.trasportato_ambulanza.id }
                  : {}),
                ...(e.trasportato_richiesta
                  ? { trasportato_richiesta: e.trasportato_richiesta }
                  : {}),
                ...(e.trasportato_targa_auto
                  ? { trasportato_targa_auto: e.trasportato_targa_auto }
                  : {}),

                ...((infortunati_informazioni_n[id] != undefined &&
                  infortunati_informazioni_n[id].length > 0) ||
                (infortunati_informazioni_d[id] != undefined &&
                  infortunati_informazioni_d[id].length > 0)
                  ? {
                      informazioni: {
                        on_conflict: {
                          constraint:
                            Sis_Associazione_Informazioni_Infortunato_Constraint.AssociazioneInformazioniInfortunatoPkey,
                          update_columns: [
                            Sis_Associazione_Informazioni_Infortunato_Update_Column.Delete,
                            Sis_Associazione_Informazioni_Infortunato_Update_Column.InformazioneId,
                          ],
                        },
                        data: [
                          ...infortunati_informazioni_n[id].map((e: any) => {
                            return {
                              informazione_id: e.id,
                            };
                          }),
                          ...infortunati_informazioni_d[id].map((c: any) => {
                            return {
                              id: c.id,
                              informazione_id: 1,
                              delete: true,
                            };
                          }),
                        ],
                      },
                    }
                  : {}),
              };
            }),
          ...infortunati_d.map((d: any) => {
            return { id: d, delete: true };
          }),
        ],
      },

      decessi_numero: this.model.decessi.decessi_numero,

      ...(decessi_tipologie_n.length > 0 || decessi_tipologie_d.length > 0
        ? {
            decessi_tipologie: {
              on_conflict: {
                constraint:
                  Sis_Associazione_Decessi_Tipologie_Constraint.AssociazioneDecessiTipologiePkey,
                update_columns: [
                  Sis_Associazione_Decessi_Tipologie_Update_Column.Delete,
                  Sis_Associazione_Decessi_Tipologie_Update_Column.DecessiTipologiaId,
                ],
              },
              data: [
                ...decessi_tipologie_n.map((e: any) => {
                  return {
                    decessi_tipologia_id: e.id,
                  };
                }),
                ...decessi_tipologie_d.map((e: any) => {
                  return {
                    id: e.id,
                    decessi_tipologia_id: e.decessi_tipologia.id,
                    delete: true,
                  };
                }),
              ],
            },
          }
        : {}),

      decessi_notiziato_pm: this.model.decessi.decessi_notiziato_pm,
      decessi_verbale_riconoscimento_salma:
        this.model.decessi.decessi_verbale_riconoscimento_salma,
      decessi_oggetti_rinvenuti: this.model.decessi.decessi_oggetti_rinvenuti,
      decessi_intervento_polizia_mortuaria:
        this.model.decessi.decessi_intervento_polizia_mortuaria,
      decessi_certificato: this.model.decessi.decessi_certificato,
      decessi_certificato_redattore:
        this.model.decessi.decessi_certificato_redattore,
      decessi_certificato_redattore_in_servizio:
        this.model.decessi.decessi_certificato_redattore_in_servizio,
      decessi_certificato_redattore_recapito:
        this.model.decessi.decessi_certificato_redattore_recapito,
      decessi_trasporto_salme_presso:
        this.model.decessi.decessi_trasporto_salme_presso,
      decessi_note: this.model.decessi.decessi_note,

      accertamenti: {
        on_conflict: {
          constraint: Sis_Accertamento_Constraint.AccertamentoPkey,
          update_columns: [
            Sis_Accertamento_Update_Column.CentroAbitato,
            Sis_Accertamento_Update_Column.Data,
            Sis_Accertamento_Update_Column.DirezioneA,
            Sis_Accertamento_Update_Column.DirezioneDa,
            Sis_Accertamento_Update_Column.TipologiaStradaCarreggiateN,
            Sis_Accertamento_Update_Column.TipologiaStradaCarreggiate,
            Sis_Accertamento_Update_Column.TipologiaStradaConformazione,
            Sis_Accertamento_Update_Column.DescrizionePianoPavimentazione,
            Sis_Accertamento_Update_Column.DescrizionePianoStatoFondo,
            Sis_Accertamento_Update_Column.DescrizionePianoNote,
            Sis_Accertamento_Update_Column.CondizioniMeteoTempo,
            Sis_Accertamento_Update_Column.CondizioniMeteoVisibilitaLimitata,
            Sis_Accertamento_Update_Column.CondizioniMeteoVisibilitaLimitataTipologiaMetri,
            Sis_Accertamento_Update_Column.CondizioniMeteoIlluminazione,
            Sis_Accertamento_Update_Column.Traffico,
            Sis_Accertamento_Update_Column.Segnaletica,
            Sis_Accertamento_Update_Column.Delete,
          ],
        },
        data: [
          ...this.model.accertamenti.map((e: any, i: number) => {
            let id = 'p_' + i;
            if (e.id != undefined) id = e.id;
            return {
              ...(e.id ? { id: e.id } : {}),
              ...(e.centro_abitato ? { centro_abitato: e.centro_abitato } : {}),
              ...(e.data ? { data: e.data } : {}),
              ...(e.direzione_da ? { direzione_da: e.direzione_da } : {}),
              ...(e.direzione_a ? { direzione_a: e.direzione_a } : {}),
              ...(e.tipologia_strada_carreggiate_n
                ? {
                    tipologia_strada_carreggiate_n:
                      e.tipologia_strada_carreggiate_n,
                  }
                : {}),
              ...(e.tipologia_strada_carreggiate
                ? {
                    tipologia_strada_carreggiate:
                      e.tipologia_strada_carreggiate,
                  }
                : {}),
              ...(e.tipologia_strada_conformazione
                ? {
                    tipologia_strada_conformazione:
                      e.tipologia_strada_conformazione,
                  }
                : {}),
              ...(e.descrizione_piano_pavimentazione
                ? {
                    descrizione_piano_pavimentazione:
                      e.descrizione_piano_pavimentazione,
                  }
                : {}),
              ...(e.descrizione_piano_stato_fondo
                ? {
                    descrizione_piano_stato_fondo:
                      e.descrizione_piano_stato_fondo,
                  }
                : {}),
              ...(e.descrizione_piano_note
                ? { descrizione_piano_note: e.descrizione_piano_note }
                : {}),
              ...(e.condizioni_meteo_tempo
                ? { condizioni_meteo_tempo: e.condizioni_meteo_tempo }
                : {}),
              ...(e.condizioni_meteo_visibilita_limitata
                ? {
                    condizioni_meteo_visibilita_limitata:
                      e.condizioni_meteo_visibilita_limitata,
                  }
                : {}),
              ...(e.condizioni_meteo_illuminazione
                ? {
                    condizioni_meteo_illuminazione:
                      e.condizioni_meteo_illuminazione,
                  }
                : {}),
              ...(e.traffico ? { traffico: e.traffico } : {}),
              ...(e.segnaletica ? { segnaletica: e.segnaletica } : {}),
              ...(e.condizioni_meteo_visibilita_limitata_tipologia_metri
                ? {
                    condizioni_meteo_visibilita_limitata_tipologia_metri:
                      e.condizioni_meteo_visibilita_limitata_tipologia_metri,
                  }
                : {}),
              ...((accertamenti_visibilita_n[id] != undefined &&
                accertamenti_visibilita_n[id].length > 0) ||
              (accertamenti_visibilita_d[id] != undefined &&
                accertamenti_visibilita_d[id].length > 0)
                ? {
                    condizioni_meteo_visibilita_limitata_tipologia: {
                      on_conflict: {
                        constraint:
                          Sis_Assegnazione_Condizioni_Meteo_Visibilita_Limitata_Tipologia_Constraint.AssegnazioneCondizioniMeteoVisibilitaLimitataTipologiPkey,
                        update_columns: [
                          Sis_Assegnazione_Condizioni_Meteo_Visibilita_Limitata_Tipologia_Update_Column.Delete,
                          Sis_Assegnazione_Condizioni_Meteo_Visibilita_Limitata_Tipologia_Update_Column.CondizioniMeteoVisibilitaLimitataTipologiaId,
                        ],
                      },
                      data: [
                        ...accertamenti_visibilita_n[id].map((e: any) => {
                          return {
                            condizioni_meteo_visibilita_limitata_tipologia_id:
                              e.id,
                          };
                        }),
                        ...accertamenti_visibilita_d[id].map((c: any) => {
                          return {
                            id: c.id,
                            condizioni_meteo_visibilita_limitata_tipologia_id: 1,
                            delete: true,
                          };
                        }),
                      ],
                    },
                  }
                : {}),
            };
          }),
          ...accertamenti_d.map((d: any) => {
            return { id: d, delete: true };
          }),
        ],
      },
      verbali: {
        on_conflict: {
          constraint: Sis_Verbale_Constraint.VerbalePkey,
          update_columns: [
            Sis_Verbale_Update_Column.TipologiaVerbaleId,
            Sis_Verbale_Update_Column.Data,
            Sis_Verbale_Update_Column.ProprietarioId,
            Sis_Verbale_Update_Column.LocatarioId,
            Sis_Verbale_Update_Column.ConducenteId,
            Sis_Verbale_Update_Column.TrasportatoId,
            Sis_Verbale_Update_Column.PedoneId,
            Sis_Verbale_Update_Column.TestimoneId,
            Sis_Verbale_Update_Column.VeicoloId,
            Sis_Verbale_Update_Column.TitoloId,
            Sis_Verbale_Update_Column.Nome,
            Sis_Verbale_Update_Column.Cognome,
            Sis_Verbale_Update_Column.SessoId,
            Sis_Verbale_Update_Column.Telefono,
            Sis_Verbale_Update_Column.NascitaData,
            Sis_Verbale_Update_Column.NascitaCittaId,
            Sis_Verbale_Update_Column.NascitaCittaAltro,
            Sis_Verbale_Update_Column.ResidenteIndirizzo,
            Sis_Verbale_Update_Column.ResidenteCittaId,
            Sis_Verbale_Update_Column.ResidenteCittaAltro,
            Sis_Verbale_Update_Column.DocumentoTipo,
            Sis_Verbale_Update_Column.DocumentoNumero,
            Sis_Verbale_Update_Column.DocumentoRilasciatoDa,
            Sis_Verbale_Update_Column.DocumentoRilasciatoDaCittaId,
            Sis_Verbale_Update_Column.DocumentoRilasciatoData,
            Sis_Verbale_Update_Column.Dichiarazione,
            Sis_Verbale_Update_Column.MotivazioneNoSottoscrizione,
            Sis_Verbale_Update_Column.Delete,
          ],
        },
        data: [
          ...this.model.verbali
            .filter((d: any) => d != undefined)
            .map((e: any) => {
              return {
                ...(e.id ? { id: e.id } : {}),
                ...(e.tipologia_verbale
                  ? { tipologia_verbale_id: e.tipologia_verbale.id }
                  : {}),
                ...(e.data ? { data: e.data } : {}),
                ...(e.proprietario
                  ? { proprietario_id: e.proprietario.id }
                  : {}),
                ...(e.locatario ? { locatario_id: e.locatario.id } : {}),
                ...(e.conducente ? { conducente_id: e.conducente.id } : {}),
                ...(e.trasportato ? { trasportato_id: e.trasportato.id } : {}),
                ...(e.pedone ? { pedone_id: e.pedone.id } : {}),
                ...(e.testimone ? { testimone_id: e.testimone.id } : {}),
                ...(e.veicolo ? { veicolo_id: e.veicolo.id } : {}),
                ...(e.titolo ? { titolo_id: e.titolo.id } : {}),
                ...(e.nome ? { nome: e.nome } : {}),
                ...(e.cognome ? { cognome: e.cognome } : {}),
                ...(e.sesso ? { sesso_id: e.sesso.id } : {}),
                ...(e.telefono ? { telefono: e.telefono } : {}),
                ...(e.nascita_data ? { nascita_data: e.nascita_data } : {}),
                ...(e.nascita_citta
                  ? { nascita_citta_id: e.nascita_citta.id }
                  : {}),
                ...(e.nascita_citta_altro
                  ? { nascita_citta_altro: e.nascita_citta_altro }
                  : {}),
                ...(e.residente_indirizzo
                  ? { residente_indirizzo: e.residente_indirizzo }
                  : {}),
                ...(e.residente_citta
                  ? { residente_citta_id: e.residente_citta.id }
                  : {}),
                ...(e.residente_citta_altro
                  ? { residente_citta_altro: e.residente_citta_altro }
                  : {}),

                ...(e.documento_tipo
                  ? { documento_tipo: e.documento_tipo }
                  : {}),
                ...(e.documento_numero
                  ? { documento_numero: e.documento_numero }
                  : {}),
                ...(e.documento_numero
                  ? { documento_numero: e.documento_numero }
                  : {}),

                ...(e.documento_rilasciato_da_citta
                  ? {
                      documento_rilasciato_da_citta_id:
                        e.documento_rilasciato_da_citta.id,
                    }
                  : {}),

                ...(e.documento_rilasciato_data
                  ? { documento_rilasciato_data: e.documento_rilasciato_data }
                  : {}),
                ...(e.dichiarazione ? { dichiarazione: e.dichiarazione } : {}),
                ...(e.motivazione_no_sottoscrizione
                  ? {
                      motivazione_no_sottoscrizione:
                        e.motivazione_no_sottoscrizione,
                    }
                  : {}),
              };
            }),
          ...verbali_d.map((d: any) => {
            return { id: d, delete: true };
          }),
        ],
      },

      eventi: {
        data: [],
      },
      ...(event.type == 'protocolla'
        ? { stato: Sis__Stato_Ris_Enum.Protocollato }
        : {}),
      ...(event.type == 'compila'
        ? { stato: Sis__Stato_Ris_Enum.Compilazione }
        : {}),
      ...(event.type == 'invia' ? { stato: Sis__Stato_Ris_Enum.Inviato } : {}),
      ...(this.model.localizzazione.municipalita
        ? { municipalita_id: this.model.localizzazione.municipalita.id }
        : {}),
      ...(this.model.localizzazione.municipalita
        ? { municipalita_storica: this.model.localizzazione.municipalita }
        : {}),

      ...(this.model.localizzazione.quartiere
        ? { quartiere_id: this.model.localizzazione.quartiere.id }
        : {}),
      ...(this.model.localizzazione.quartiere
        ? { quartiere_storico: this.model.localizzazione.quartiere }
        : {}),

      ...(this.model.localizzazione.toponimo
        ? { toponimo_id: this.model.localizzazione.toponimo.id }
        : {}),
      ...(this.model.localizzazione.toponimo
        ? { toponimo_storico: this.model.localizzazione.toponimo }
        : {}),
      ...(n.length > 0 || d.length > 0
        ? {
            allegati: {
              data: [
                ...n,
                ...d.map((f: any) => {
                  return {
                    id: f.id,
                    delete: true,
                    file: '',
                    nome: f.name,
                    tipo: '',
                  };
                }),
              ],
            },
            // allegati: {
            //   on_conflict: {
            //     constraint: Allegato_Constraint.AllegatoPkey,
            //     update_columns: [Allegato_Update_Column.Delete],
            //   },
            //   data: [
            //     ...n,
            //     ...d.map((f: any) => {
            //       return {
            //         id: f.id,
            //         delete: true,
            //         file: '',
            //         nome: '',
            //         tipo: '',
            //       };
            //     }),
            //   ],
            // },
          }
        : {}),
      posizionamento_toponimo: {
        on_conflict: {
          constraint:
            Gis_Posizionamento_Toponimo_Constraint.PosizionamentoToponimoPkey,
          update_columns: [
            Gis_Posizionamento_Toponimo_Update_Column.Civico,
            Gis_Posizionamento_Toponimo_Update_Column.Ipi,
            Gis_Posizionamento_Toponimo_Update_Column.Km,
            Gis_Posizionamento_Toponimo_Update_Column.Connessione,
            Gis_Posizionamento_Toponimo_Update_Column.Note,
            Gis_Posizionamento_Toponimo_Update_Column.Geoloc,
            Gis_Posizionamento_Toponimo_Update_Column.TipologiaId,
            Gis_Posizionamento_Toponimo_Update_Column.SpecificaId,
          ],
        },
        data: this.model.localizzazione.posizionamento_toponimo
          ? {
              ...this.model.localizzazione.posizionamento_toponimo,
              ...(this.model.localizzazione.posizionamento_toponimo.tipologia
                ? {
                    tipologia_id:
                      this.model.localizzazione.posizionamento_toponimo
                        .tipologia.id,
                  }
                : {}),
              specifica_id: this.model.localizzazione.posizionamento_toponimo
                .specifica
                ? this.model.localizzazione.posizionamento_toponimo.specifica.id
                : null,
              civico:
                this.model.localizzazione.posizionamento_toponimo.civico &&
                typeof this.model.localizzazione.posizionamento_toponimo
                  .civico === 'object'
                  ? this.model.localizzazione.posizionamento_toponimo.civico
                      .civico1
                  : this.model.localizzazione.posizionamento_toponimo.civico,
              ipi:
                this.model.localizzazione.posizionamento_toponimo.ipi &&
                typeof this.model.localizzazione.posizionamento_toponimo.ipi ===
                  'object'
                  ? this.model.localizzazione.posizionamento_toponimo.ipi
                      .matricola
                  : this.model.localizzazione.posizionamento_toponimo.ipi,
              connessione:
                this.model.localizzazione.posizionamento_toponimo.connessione &&
                typeof this.model.localizzazione.posizionamento_toponimo
                  .connessione === 'object'
                  ? this.model.localizzazione.posizionamento_toponimo
                      .connessione.nome
                  : this.model.localizzazione.posizionamento_toponimo
                      .connessione,
              ...(this.model.geolocalizzazione.mappa![0].punto.value
                .latitudine &&
              this.model.geolocalizzazione.mappa![0].punto.value.longitudine
                ? {
                    geoloc: {
                      type: 'Point',
                      coordinates: [
                        parseFloat(
                          this.model.geolocalizzazione.mappa![0].punto.value
                            .latitudine
                        ),
                        parseFloat(
                          this.model.geolocalizzazione.mappa![0].punto.value
                            .longitudine
                        ),
                      ],
                    },
                  }
                : {}),
            }
          : {},
      },
      protocollo: {
        on_conflict: {
          constraint: Protocollo_Protocollo_Constraint.ProtocolloPkey,
          update_columns: [
            Protocollo_Protocollo_Update_Column.MittenteId,
            Protocollo_Protocollo_Update_Column.Note,
          ],
        },
        data: {
          ...this.model.protocollo,
          mittente_id: this.model.protocollo.mittente
            ? this.model.protocollo.mittente.id
            : null,
          destinatari: {
            on_conflict: {
              constraint:
                Protocollo_Protocollo_Destinatario_Constraint.ProtocolloDestinatarioPkey,
              update_columns: [
                Protocollo_Protocollo_Destinatario_Update_Column.EsternoId,
                Protocollo_Protocollo_Destinatario_Update_Column.InternoId,
                Protocollo_Protocollo_Destinatario_Update_Column.Delete,
              ],
            },
            data: [
              ...this.model.protocollo.destinatari.map((destinatario: any) => {
                return {
                  ...(destinatario.id ? { id: destinatario.id } : {}),
                  ...(destinatario.e_esterno
                    ? { e_esterno: destinatario.e_esterno }
                    : {}),
                  ...(destinatario.e_esterno == false
                    ? {
                        interno_id: destinatario.destinatario_interno
                          ? destinatario.destinatario_interno.id
                          : null,
                      }
                    : {}),
                  ...(destinatario.e_esterno == true
                    ? {
                        destinatario_esterno: {
                          on_conflict: {
                            constraint:
                              Protocollo_Protocollo_Destinatario_Esterno_Constraint.ProtocolloDestinatarioEsternoPkey,
                            update_columns: [
                              Protocollo_Protocollo_Destinatario_Esterno_Update_Column.Nome,
                              Protocollo_Protocollo_Destinatario_Esterno_Update_Column.Cognome,
                              Protocollo_Protocollo_Destinatario_Esterno_Update_Column.Email,
                              Protocollo_Protocollo_Destinatario_Esterno_Update_Column.CodiceFiscale,
                            ],
                          },
                          data: destinatario.destinatario_esterno
                            ? {
                                ...(destinatario.destinatario_esterno.id
                                  ? { id: destinatario.destinatario_esterno.id }
                                  : {}),
                                ...(destinatario.destinatario_esterno.nome
                                  ? {
                                      nome: destinatario.destinatario_esterno
                                        .nome,
                                    }
                                  : {}),
                                ...(destinatario.destinatario_esterno.cognome
                                  ? {
                                      cognome:
                                        destinatario.destinatario_esterno
                                          .cognome,
                                    }
                                  : {}),
                                ...(destinatario.destinatario_esterno
                                  .codice_fiscale
                                  ? {
                                      codice_fiscale:
                                        destinatario.destinatario_esterno
                                          .codice_fiscale,
                                    }
                                  : {}),
                                ...(destinatario.destinatario_esterno.email
                                  ? {
                                      email:
                                        destinatario.destinatario_esterno.email,
                                    }
                                  : {}),
                              }
                            : {},
                        },
                      }
                    : {}),
                };
              }),
              ...p_d.map((d: any) => {
                return { id: d, delete: true };
              }),
            ],
          },
        },
      },
    };

    console.log(model);

    delete model.posizionamento_toponimo.data.tipologia;
    delete model.posizionamento_toponimo.data.specifica;

    delete model.protocollo.data.mittente;

    if (n.length == 0 && d.length == 0) delete model.allegati;
    return model;
  }

  async onSaveNext(
    result: FetchResult<
      UpdateRisMutation,
      Record<string, any>,
      Record<string, any>
    >
  ) {
    this.dirty = false;
    const ret = result.data?.custom_insert_ris?.ris!;

    let bucket: any = await firstValueFrom(
      this._http.post('/storage/bucket/list', { bucket: 'ris-' + ret.id })
    );
    this.startData.allegati = bucket.allegati.filter(
      (el: any) => el.name.indexOf('allegati') == 0
    );

    this.startData.protocollo.destinatari = ret.protocollo?.destinatari.map(
      (d: any) => d.id
    );

    this.startData.tipologia_ris = [...ret.tipologie_ris!];
    this.startData.agenti_accertatori = [...ret.agenti_accertatori!];

    this.startData.enti_segnalatori = [...ret.enti_segnalatori!];

    this.startData.enti_primo_intervento = ret.enti_primo_intervento.map(
      (d: any) => d.id
    );
    this.startData.enti_secondario_intervenuti = [
      ...ret.enti_secondario_intervenuti!,
    ];

    this.startData.natura_incidente = [...ret.nature_incidente!];
    this.startData.posizioni_finali_veicolo_carreggiata = [
      ...ret.posizioni_finali_veicolo_carreggiata,
    ];
    this.startData.posizioni_finali_veicolo_margini = [
      ...ret.posizioni_finali_veicolo_margini,
    ];
    this.startData.posizioni_finali_veicolo_fuori_sede = [
      ...ret.posizioni_finali_veicolo_fuori_sede,
    ];
    this.startData.conseguenze_veicolo = [...ret.conseguenze_veicolo];
    this.startData.localizzazioni_extra_abitato = [
      ...ret.localizzazioni_extra_abitato,
    ];
    this.startData.localizzazioni_tipo_strade = [
      ...ret.localizzazioni_tipo_strade,
    ];
    this.startData.localizzazioni_particolarita_strada = [
      ...ret.localizzazioni_particolarita_strada,
    ];
    this.startData.localizzazioni_pavimentazione = [
      ...ret.localizzazioni_pavimentazione,
    ];
    this.startData.localizzazioni_fondo_stradale = [
      ...ret.localizzazioni_fondo_stradale,
    ];
    this.startData.localizzazioni_condizioni_atmosferiche = [
      ...ret.localizzazioni_condizioni_atmosferiche,
    ];
    this.startData.localizzazioni_visibilita = [
      ...ret.localizzazioni_visibilita,
    ];
    this.startData.localizzazioni_illuminazione = [
      ...ret.localizzazioni_illuminazione,
    ];
    this.startData.localizzazioni_condizioni_traffico = [
      ...ret.localizzazioni_condizioni_traffico,
    ];
    this.startData.localizzazioni_altro = [...ret.localizzazioni_altro];

    this.startData.decessi_tipologie = [...ret.decessi_tipologie];

    this.startData.conducenti_patente = Object.fromEntries(
      ret.conducenti.map((c: any) => {
        return [c.id, c.patente];
      })
    );

    this.startData.veicoli_trasportati = Object.fromEntries(
      ret.veicoli.map((c) => {
        return [c.id, c.trasportati];
      })
    );

    this.startData.infortunati_informazioni = Object.fromEntries(
      ret.infortunati.map((c) => {
        return [c.id, c.informazioni];
      })
    );

    this.startData.accertamenti_visibilita = Object.fromEntries(
      ret.accertamenti.map((c) => {
        return [c.id, c.condizioni_meteo_visibilita_limitata_tipologia];
      })
    );

    this.startData.persone.proprietari = ret.proprietari.map((d: any) => d.id);
    this.startData.persone.proprietari_giuridico =
      ret.proprietari_giuridico.map((d: any) => d.id);
    this.startData.persone.locatari = ret.locatari.map((d: any) => d.id);
    this.startData.persone.conducenti = ret.conducenti.map((d: any) => d);
    this.startData.persone.trasportati = ret.trasportati.map((d: any) => d.id);
    this.startData.persone.testimoni = ret.testimoni.map((d: any) => d.id);
    this.startData.persone.pedoni = ret.pedoni.map((d: any) => d.id);
    this.startData.persone.altri = ret.altri.map((d: any) => d.id);
    this.startData.veicoli = ret.veicoli.map((d: any) => d.id);
    this.startData.infrazioni = ret.infrazioni.map((d: any) => d.id);
    this.startData.infortunati = ret.infortunati.map((d: any) => d.id);
    this.startData.accertamenti = ret.accertamenti.map((d: any) => d.id);
    this.startData.verbali = ret.verbali.map((d: any) => d.id);

    this.model.protocollo.destinatari = ret.protocollo?.destinatari.map(
      (e: any) => {
        return {
          id: e.id,
          destinatario_interno: e.destinatario_interno,
          ...(e.destinatario_esterno
            ? {
                destinatario_esterno: {
                  id: e.destinatario_esterno.id,
                },
              }
            : {}),
          e_esterno: e.e_esterno,
        };
      }
    );
  }

  onSaveError(error: any) {
    this._loaderService.stop();
    this.saving = false;
    this._dialog.open(ConfirmDialogComponent, {
      data: {
        title: this._translateService.instant('Attenzione'),
        content: this._translateService.instant(
          'Non è stato possibile completare la richiesta di salvataggio. Errore: ' +
            error
        ),
      },
    });
  }

  async baseInit(
    where: Exact<{ where: Sis_Ris_Bool_Exp }>,
    mapInit?: any,
    repeatInit?: any
  ) {
    this._loaderService.start();

    this.model = await firstValueFrom(
      this._risGQL.watch(where).valueChanges.pipe(
        map(async (result) => {
          let ris = result.data?.sis_ris[0];
          if (ris === undefined) {
            this._loaderService.stop();
            this._router.navigate(['/', '404']);
          }

          let bucket: any = await firstValueFrom(
            this._http.post('/storage/bucket/list', { bucket: 'ris-' + ris.id })
          );
          this.startData.allegati = bucket.allegati.filter(
            (el: any) => el.name.indexOf('allegati') == 0
          );

          // this.startData.allegati = [...ris.allegati];

          this.startData.tipologia_ris = [...ris.tipologie_ris];
          this.startData.agenti_accertatori = [...ris.agenti_accertatori];
          this.startData.enti_segnalatori = [...ris.enti_segnalatori];
          this.startData.enti_secondario_intervenuti = [
            ...ris.enti_secondario_intervenuti,
          ];
          this.startData.natura_incidente = [...ris.nature_incidente];
          this.startData.posizioni_finali_veicolo_carreggiata = [
            ...ris.posizioni_finali_veicolo_carreggiata,
          ];
          this.startData.posizioni_finali_veicolo_margini = [
            ...ris.posizioni_finali_veicolo_margini,
          ];
          this.startData.posizioni_finali_veicolo_fuori_sede = [
            ...ris.posizioni_finali_veicolo_fuori_sede,
          ];
          this.startData.conseguenze_veicolo = [...ris.conseguenze_veicolo];
          this.startData.localizzazioni_extra_abitato = [
            ...ris.localizzazioni_extra_abitato,
          ];
          this.startData.localizzazioni_tipo_strade = [
            ...ris.localizzazioni_tipo_strade,
          ];
          this.startData.localizzazioni_particolarita_strada = [
            ...ris.localizzazioni_particolarita_strada,
          ];
          this.startData.localizzazioni_pavimentazione = [
            ...ris.localizzazioni_pavimentazione,
          ];
          this.startData.localizzazioni_fondo_stradale = [
            ...ris.localizzazioni_fondo_stradale,
          ];
          this.startData.localizzazioni_condizioni_atmosferiche = [
            ...ris.localizzazioni_condizioni_atmosferiche,
          ];
          this.startData.localizzazioni_visibilita = [
            ...ris.localizzazioni_visibilita,
          ];
          this.startData.localizzazioni_illuminazione = [
            ...ris.localizzazioni_illuminazione,
          ];
          this.startData.localizzazioni_condizioni_traffico = [
            ...ris.localizzazioni_condizioni_traffico,
          ];
          this.startData.localizzazioni_altro = [...ris.localizzazioni_altro];

          this.startData.decessi_tipologie = [...ris.decessi_tipologie];

          this.startData.conducenti_patente = Object.fromEntries(
            ris.conducenti.map((c) => {
              return [c.id, c.patente];
            })
          );
          this.startData.veicoli_trasportati = Object.fromEntries(
            ris.veicoli.map((c) => {
              return [c.id, c.trasportati];
            })
          );

          this.startData.infortunati_informazioni = Object.fromEntries(
            ris.infortunati.map((c) => {
              return [c.id, c.informazioni];
            })
          );

          this.startData.accertamenti_visibilita = Object.fromEntries(
            ris.accertamenti.map((c) => {
              return [c.id, c.condizioni_meteo_visibilita_limitata_tipologia];
            })
          );

          return {
            ...{ id: ris.id },
            ...{ stato: ris.stato },
            ...{ eventi: ris.eventi },
            ris: {
              tipologia_ris: ris.tipologie_ris?.map((e) => e.tipologia),
              id: ris.id,
              unita_operativa: ris.unita_operativa,
              agenti_accertatori: ris.agenti_accertatori,
              operazione_terminate_data: ris.operazione_terminate_data,
              ris_consegnato_a: ris.ris_consegnato_a,
              ris_consegnato_a_altro: ris.ris_consegnato_a_altro,
              ris_consegnato_data: ris.ris_consegnato_data,
            },
            intervento: {
              enti_segnalatori: ris.enti_segnalatori?.map((e) => e.ente),
              ente_segnalatore_note: ris.ente_segnalatore_note,
              data_segnalazione: ris.data_segnalazione,
              data_presunta: ris.data_presunta,
              data_intervento: ris.data_intervento,
              note_intervento: ris.note_intervento,
              ente_primo_intervento_note: ris.ente_primo_intervento_note,
              enti_primo_intervento: ris.enti_primo_intervento.map((e) => {
                return Object.assign(
                  {},
                  {
                    id: e.id,
                    ente: e.ente,
                    tipo: e.tipo,
                    targa_auto: e.targa_auto,
                  }
                );
              }),
              enti_secondario_intervenuti: ris.enti_secondario_intervenuti?.map(
                (e) => e.ente_secondario
              ),
              ente_secondario_intervenuti_altro:
                ris.ente_secondario_intervenuti_altro,
              ente_secondario_intervenuti_vvff_comando:
                ris.ente_secondario_intervenuti_vvff_comando,
              ente_secondario_intervenuti_vvff_capo_pattuglia:
                ris.ente_secondario_intervenuti_vvff_capo_pattuglia,
              ente_secondario_intervenuti_vvff_gia_intervenuti:
                ris.ente_secondario_intervenuti_vvff_gia_intervenuti,
              ente_secondario_intervenuti_motivazione:
                ris.ente_secondario_intervenuti_motivazione,
            },
            incidente: {
              natura_incidente: ris.nature_incidente?.map((e) =>
                Object.assign({}, e.natura_incidente)
              ),
              natura_incidente_note: ris.natura_incidente_note,
              dinamica: ris.dinamica,
              altro: ris.altro,
              posizioni_finali_veicolo_carreggiata:
                ris.posizioni_finali_veicolo_carreggiata?.map((e) =>
                  Object.assign({}, e.posizione_finale_veicolo_carreggiata)
                ),
              posizione_finale_veicolo_carreggiata_note:
                ris.posizione_finale_veicolo_carreggiata_note,
              posizioni_finali_veicolo_margini:
                ris.posizioni_finali_veicolo_margini?.map((e) =>
                  Object.assign({}, e.posizione_finale_veicolo_margini)
                ),
              posizione_finale_veicolo_margini_note:
                ris.posizione_finale_veicolo_margini_note,
              posizioni_finali_veicolo_fuori_sede:
                ris.posizioni_finali_veicolo_fuori_sede?.map((e) =>
                  Object.assign({}, e.posizione_finale_veicolo_fuori_sede)
                ),
              posizione_finale_veicolo_fuori_sede_note:
                ris.posizione_finale_veicolo_fuori_sede_note,
              conseguenze_veicolo: ris.conseguenze_veicolo?.map((e) =>
                Object.assign({}, e.conseguenza_veicolo)
              ),
              conseguenza_veicolo_note: ris.conseguenza_veicolo_note,
              localizzazioni_extra_abitato:
                ris.localizzazioni_extra_abitato?.map((e) =>
                  Object.assign({}, e.localizzazione_extra_abitato)
                ),
              localizzazione_extra_abitato_note:
                ris.localizzazione_extra_abitato_note,
              localizzazioni_tipo_strade: ris.localizzazioni_tipo_strade?.map(
                (e) => Object.assign({}, e.localizzazione_tipo_strada)
              ),
              localizzazione_tipo_strada_note:
                ris.localizzazione_tipo_strada_note,
              localizzazioni_particolarita_strada:
                ris.localizzazioni_particolarita_strada?.map((e) =>
                  Object.assign({}, e.localizzazione_particolarita_strada)
                ),
              localizzazione_particolarita_strada_note:
                ris.localizzazione_particolarita_strada_note,
              localizzazioni_pavimentazione:
                ris.localizzazioni_pavimentazione?.map((e) =>
                  Object.assign({}, e.localizzazione_pavimentazione)
                ),
              localizzazione_pavimentazione_note:
                ris.localizzazione_pavimentazione_note,
              localizzazioni_fondo_stradale:
                ris.localizzazioni_fondo_stradale?.map((e) =>
                  Object.assign({}, e.localizzazione_fondo_stradale)
                ),
              localizzazione_fondo_stradale_note:
                ris.localizzazione_fondo_stradale_note,
              localizzazioni_condizioni_atmosferiche:
                ris.localizzazioni_condizioni_atmosferiche?.map((e) =>
                  Object.assign({}, e.localizzazione_condizioni_atmosferiche)
                ),
              localizzazione_condizioni_atmosferiche_note:
                ris.localizzazione_condizioni_atmosferiche_note,
              localizzazioni_visibilita: ris.localizzazioni_visibilita?.map(
                (e) => Object.assign({}, e.localizzazione_visibilita)
              ),
              localizzazione_visibilita_note:
                ris.localizzazione_visibilita_note,
              localizzazioni_illuminazione:
                ris.localizzazioni_illuminazione?.map((e) =>
                  Object.assign({}, e.localizzazione_illuminazione)
                ),
              localizzazione_illuminazione_note:
                ris.localizzazione_illuminazione_note,
              localizzazioni_condizioni_traffico:
                ris.localizzazioni_condizioni_traffico?.map((e) =>
                  Object.assign({}, e.localizzazione_condizioni_traffico)
                ),
              localizzazione_condizioni_traffico_note:
                ris.localizzazione_condizioni_traffico_note,
              localizzazioni_altro: ris.localizzazioni_altro?.map((e) =>
                Object.assign({}, e.localizzazione_altro)
              ),
              localizzazione_altro_note: ris.localizzazione_altro_note,
              localizzazione_note: ris.localizzazione_note,
              punti_urto: ris.punti_urto,
              punti_urto_multiplo: ris.punti_urto_multiplo,
              punti_investimento: ris.punti_investimento,
              punti_investimento_multiplo: ris.punti_investimento_multiplo,
              punti_rilievi: ris.punti_rilievi,
              punti_rilievi_no_tipologia: ris.punti_rilievi_no_tipologia,
              punti_descrizione_analitica: ris.punti_descrizione_analitica,
              punti_urto_accorda: ris.punti_urto_accorda,
              punti_urto_note: ris.punti_urto_note,
              posizione_statica_rilievi_veicoli_rimossi:
                ris.posizione_statica_rilievi_veicoli_rimossi,
              posizione_statica_rilievi: ris.posizione_statica_rilievi,
              posizione_statica_rilievi_no_tipologia:
                ris.posizione_statica_rilievi_no_tipologia,
              posizione_statica_descrizione_analitica:
                ris.posizione_statica_descrizione_analitica,
            },
            persone: {
              proprietari: ris.proprietari.map((proprietario) => {
                return Object.assign(
                  {},
                  {
                    id: proprietario.id,
                    titolo: proprietario.titolo,
                    nome: proprietario.nome,
                    cognome: proprietario.cognome,
                    sesso: proprietario.sesso,
                    telefono: proprietario.telefono,
                    nascita_data: proprietario.nascita_data,
                    nascita_citta: proprietario.nascita_citta,
                    nascita_citta_altro: proprietario.nascita_citta_altro,
                    residente_indirizzo: proprietario.residente_indirizzo,
                    residente_citta: proprietario.residente_citta,
                    residente_citta_altro: proprietario.residente_citta_altro,
                  }
                );
              }),
              proprietari_giuridico: ris.proprietari_giuridico.map(
                (proprietario_giuridico) => {
                  return Object.assign(
                    {},
                    {
                      id: proprietario_giuridico.id,
                      ragione_sociale: proprietario_giuridico.ragione_sociale,
                      codice_fiscale: proprietario_giuridico.codice_fiscale,
                      indirizzo: proprietario_giuridico.indirizzo,
                      partita_iva: proprietario_giuridico.partita_iva,
                      telefono: proprietario_giuridico.telefono,
                      citta: proprietario_giuridico.citta,
                      citta_altro: proprietario_giuridico.citta_altro,
                    }
                  );
                }
              ),
              locatari: ris.locatari.map((locatario) => {
                return Object.assign(
                  {},
                  {
                    id: locatario.id,
                    titolo: locatario.titolo,
                    nome: locatario.nome,
                    cognome: locatario.cognome,
                    sesso: locatario.sesso,
                    telefono: locatario.telefono,
                    nascita_data: locatario.nascita_data,
                    nascita_citta: locatario.nascita_citta,
                    nascita_citta_altro: locatario.nascita_citta_altro,
                    residente_indirizzo: locatario.residente_indirizzo,
                    residente_citta: locatario.residente_citta,
                    residente_citta_altro: locatario.residente_citta_altro,
                  }
                );
              }),
              conducenti: ris.conducenti.map((conducente) => {
                return Object.assign(
                  {},
                  {
                    id: conducente.id,
                    titolo: conducente.titolo,
                    nome: conducente.nome,
                    cognome: conducente.cognome,
                    sesso: conducente.sesso,
                    telefono: conducente.telefono,
                    nascita_data: conducente.nascita_data,
                    nascita_citta: conducente.nascita_citta,
                    nascita_citta_altro: conducente.nascita_citta_altro,
                    residente_indirizzo: conducente.residente_indirizzo,
                    residente_citta: conducente.residente_citta,
                    residente_citta_altro: conducente.residente_citta_altro,
                    patente_sinoaltro: conducente.patente_sinoaltro,
                    patente: conducente.patente?.map(
                      (e) => e.patente_categoria
                    ),
                    patente_categoria_altro: conducente.patente_categoria_altro,
                    patente_altro_note: conducente.patente_altro_note,
                    patente_numero: conducente.patente_numero,
                    patente_rilasciata_data: conducente.patente_rilasciata_data,
                    patente_rilasciata_valida_data:
                      conducente.patente_rilasciata_valida_data,
                    patente_rilasciata_da: conducente.patente_rilasciata_da,
                    patente_rilasciata_da_citta:
                      conducente.patente_rilasciata_da_citta,
                    patente_prescrizioni: conducente.patente_prescrizioni,
                    cap_tipo: conducente.cap_tipo,
                    cap_numero: conducente.cap_numero,
                    cap_rilasciata_da_ddt: conducente.cap_rilasciata_da_ddt,
                    cap_rilasciata_da_ddt_data:
                      conducente.cap_rilasciata_da_ddt_data,
                    richiesta_esami: conducente.richiesta_esami,
                    richiesta_esami_effettuati_presso:
                      conducente.richiesta_esami_effettuati_presso,
                    prova_etilometro: conducente.prova_etilometro,
                    prova_etilometro_esito: conducente.prova_etilometro_esito,
                    prova_narcotest: conducente.prova_narcotest,
                    prova_narcotest_esito: conducente.prova_narcotest_esito,
                  }
                );
              }),
              trasportati: ris.trasportati.map((trasportato) => {
                return Object.assign(
                  {},
                  {
                    id: trasportato.id,
                    titolo: trasportato.titolo,
                    nome: trasportato.nome,
                    cognome: trasportato.cognome,
                    sesso: trasportato.sesso,
                    telefono: trasportato.telefono,
                    nascita_data: trasportato.nascita_data,
                    nascita_citta: trasportato.nascita_citta,
                    nascita_citta_altro: trasportato.nascita_citta_altro,
                    residente_indirizzo: trasportato.residente_indirizzo,
                    residente_citta: trasportato.residente_citta,
                    residente_citta_altro: trasportato.residente_citta_altro,
                    documento_tipo: trasportato.documento_tipo,
                    documento_numero: trasportato.documento_numero,
                    documento_rilasciato_da:
                      trasportato.documento_rilasciato_da,
                    documento_rilasciato_da_citta:
                      trasportato.documento_rilasciato_da_citta,
                    documento_rilasciato_data:
                      trasportato.documento_rilasciato_data,
                    posizione: trasportato.posizione,
                    stato: trasportato.stato,
                    accertamento_uso_cintura:
                      trasportato.accertamento_uso_cintura,
                    accertamento_uso_casco: trasportato.accertamento_uso_casco,
                    accertamento_uso_sistema_bambini:
                      trasportato.accertamento_uso_sistema_bambini,
                    accertamento_attivazione_airbag:
                      trasportato.accertamento_attivazione_airbag,
                  }
                );
              }),
              testimoni: ris.testimoni.map((testimone) => {
                return Object.assign(
                  {},
                  {
                    id: testimone.id,
                    titolo: testimone.titolo,
                    nome: testimone.nome,
                    cognome: testimone.cognome,
                    sesso: testimone.sesso,
                    telefono: testimone.telefono,
                    nascita_data: testimone.nascita_data,
                    nascita_citta: testimone.nascita_citta,
                    nascita_citta_altro: testimone.nascita_citta_altro,
                    residente_indirizzo: testimone.residente_indirizzo,
                    residente_citta: testimone.residente_citta,
                    residente_citta_altro: testimone.residente_citta_altro,
                    documento_tipo: testimone.documento_tipo,
                    documento_numero: testimone.documento_numero,
                    documento_rilasciato_da: testimone.documento_rilasciato_da,
                    documento_rilasciato_da_citta:
                      testimone.documento_rilasciato_da_citta,
                    documento_rilasciato_data:
                      testimone.documento_rilasciato_data,
                  }
                );
              }),
              pedoni: ris.pedoni.map((pedone) => {
                return Object.assign(
                  {},
                  {
                    id: pedone.id,
                    titolo: pedone.titolo,
                    nome: pedone.nome,
                    cognome: pedone.cognome,
                    sesso: pedone.sesso,
                    telefono: pedone.telefono,
                    nascita_data: pedone.nascita_data,
                    nascita_citta: pedone.nascita_citta,
                    nascita_citta_altro: pedone.nascita_citta_altro,
                    residente_indirizzo: pedone.residente_indirizzo,
                    residente_citta: pedone.residente_citta,
                    residente_citta_altro: pedone.residente_citta_altro,
                    documento_tipo: pedone.documento_tipo,
                    documento_numero: pedone.documento_numero,
                    documento_rilasciato_da: pedone.documento_rilasciato_da,
                    documento_rilasciato_da_citta:
                      pedone.documento_rilasciato_da_citta,
                    documento_rilasciato_data: pedone.documento_rilasciato_data,
                  }
                );
              }),
              altri: ris.altri.map((altro) => {
                return Object.assign(
                  {},
                  {
                    id: altro.id,
                    note: altro.note,
                  }
                );
              }),
            },
            veicoli: ris.veicoli.map((veicolo) => {
              return Object.assign(
                {},
                {
                  id: veicolo.id,
                  proprietario:
                    veicolo.proprietario != null
                      ? {
                          id: veicolo.proprietario?.id,
                          titolo: Object.assign(
                            {},
                            veicolo.proprietario?.titolo
                          ),
                          nome: veicolo.proprietario?.nome,
                          cognome: veicolo.proprietario?.cognome,
                          nascita_data: veicolo.proprietario?.nascita_data,
                          nascita_citta: Object.assign(
                            {},
                            veicolo.proprietario?.nascita_citta
                          ),
                          nascita_citta_altro:
                            veicolo.proprietario?.nascita_citta_altro,
                          residente_indirizzo:
                            veicolo.proprietario?.residente_indirizzo,
                          residente_citta: Object.assign(
                            {},
                            veicolo.proprietario?.residente_citta
                          ),
                          residente_citta_altro:
                            veicolo.proprietario?.residente_citta_altro,
                        }
                      : null,
                  proprietario_giuridico:
                    veicolo.proprietario_giuridico != null
                      ? {
                          id: veicolo.proprietario_giuridico?.id,
                          ragione_sociale:
                            veicolo.proprietario_giuridico?.ragione_sociale,
                          codice_fiscale:
                            veicolo.proprietario_giuridico?.codice_fiscale,
                          partita_iva:
                            veicolo.proprietario_giuridico?.partita_iva,
                          citta: Object.assign(
                            {},
                            veicolo.proprietario_giuridico?.citta
                          ),
                          citta_altro:
                            veicolo.proprietario_giuridico?.citta_altro,
                        }
                      : null,
                  locatario: veicolo.locatario,
                  conducente: veicolo.conducente,
                  trasportati: veicolo.trasportati?.map((e) => e.trasportato),
                  stato: veicolo.stato,
                  tipologia_veicolo: veicolo.tipologia_veicolo,
                  tipologia_veicolo_note: veicolo.tipologia_veicolo_note,
                  marca: veicolo.marca,
                  modello: veicolo.modello,
                  targa: veicolo.targa,
                  nazione: veicolo.nazione,
                  telaio: veicolo.telaio,
                  cilindrata: veicolo.cilindrata,
                  alimentazione: veicolo.alimentazione,
                  alimentazione_note: veicolo.alimentazione_note,
                  peso: veicolo.peso,
                  tara: veicolo.tara,
                  p_u: veicolo.p_u,
                  p_c: veicolo.p_c,
                  posti: veicolo.posti,
                  anno_prima_immatricolazione:
                    veicolo.anno_prima_immatricolazione,
                  colore_carrozzeria: veicolo.colore_carrozzeria,
                  data_ultima_revisione: veicolo.data_ultima_revisione,
                  uso_veicolo: veicolo.uso_veicolo,
                  codice_merce_pericolasa: veicolo.codice_merce_pericolasa,
                  codice_pericolo: veicolo.codice_pericolo,
                  retrovisore_esterno: veicolo.retrovisore_esterno,
                  dispositivi_acustici: veicolo.dispositivi_acustici,
                  indicatori_direzione: veicolo.indicatori_direzione,
                  luci_arresto: veicolo.luci_arresto,
                  impianto_illuminazione: veicolo.impianto_illuminazione,
                  stato_pneumatici: veicolo.stato_pneumatici,
                  km_percorsi: veicolo.km_percorsi,
                  marcia_inserita: veicolo.marcia_inserita,
                  velocita_presunta: veicolo.velocita_presunta,
                  carta_circolazione_sinoaltro:
                    veicolo.carta_circolazione_sinoaltro,
                  carta_circolazione_altro_note:
                    veicolo.carta_circolazione_altro_note,
                  carta_circolazione: veicolo.carta_circolazione,
                  carta_circolazione_data: veicolo.carta_circolazione_data,
                  carta_circolazione_ddt: veicolo.carta_circolazione_ddt,
                  assicurazione_sinoaltro: veicolo.assicurazione_sinoaltro,
                  assicurazione_altro_note: veicolo.assicurazione_altro_note,
                  assicurazione_societa: veicolo.assicurazione_societa,
                  assicurazione_agenzia: veicolo.assicurazione_agenzia,
                  assicurazione_polizza: veicolo.assicurazione_polizza,
                  assicurazione_data_inizio: veicolo.assicurazione_data_inizio,
                  assicurazione_data_fine: veicolo.assicurazione_data_fine,
                  accertamenti_uso_cintura_sinoaltro:
                    veicolo.accertamenti_uso_cintura_sinoaltro,
                  accertamenti_uso_cintura_altro_note:
                    veicolo.accertamenti_uso_cintura_altro_note,
                  accertamenti_uso_casco_sinoaltro:
                    veicolo.accertamenti_uso_casco_sinoaltro,
                  accertamenti_uso_casco_altro_note:
                    veicolo.accertamenti_uso_casco_altro_note,
                  accertamento_uso_antiabbandono_sinoaltro:
                    veicolo.accertamento_uso_antiabbandono_sinoaltro,
                  accertamento_uso_antiabbandono_altro_note:
                    veicolo.accertamento_uso_antiabbandono_altro_note,
                  accertamento_uso_sistema_bambini_sinoaltro:
                    veicolo.accertamento_uso_sistema_bambini_sinoaltro,
                  accertamento_uso_sistema_bambini_altro_note:
                    veicolo.accertamento_uso_sistema_bambini_altro_note,
                  dotazione_cinture: veicolo.dotazione_cinture,
                  dotazione_airbag: veicolo.dotazione_airbag,
                  accertamenti_abs: veicolo.accertamenti_abs,
                  accertamenti_attivazione: veicolo.accertamenti_attivazione,
                  danni_su_veicolo_constatati:
                    veicolo.danni_su_veicolo_constatati,
                  danni_del_veicolo_a_cose: veicolo.danni_del_veicolo_a_cose,
                  danni_del_veicolo_a_cose_rilievo:
                    veicolo.danni_del_veicolo_a_cose_rilievo,
                  danni_del_veicolo_a_cose_rilievo_data_inizio:
                    veicolo.danni_del_veicolo_a_cose_rilievo_data_inizio,
                  danni_del_veicolo_a_cose_rilievo_data_fine:
                    veicolo.danni_del_veicolo_a_cose_rilievo_data_fine,
                  danni_del_veicolo_a_cose_rilievo_presente:
                    veicolo.danni_del_veicolo_a_cose_rilievo_presente,
                  danni_del_veicolo_a_cose_rilievo_difensore:
                    veicolo.danni_del_veicolo_a_cose_rilievo_difensore,
                  destinazione_ritirato: veicolo.destinazione_ritirato,
                  destinazione_sequestrato: veicolo.destinazione_sequestrato,
                  destinazione_decisione: veicolo.destinazione_decisione,
                  destinazione_decisione_altro:
                    veicolo.destinazione_decisione_altro,
                  destinazione_trasportato_presso:
                    veicolo.destinazione_trasportato_presso,
                  destinazione_persona_affidataria:
                    veicolo.destinazione_persona_affidataria,
                  destinazione_data: veicolo.destinazione_data,
                  traccia_suolo: veicolo.traccia_suolo,
                  traccia_suolo_abs: veicolo.traccia_suolo_abs,
                  traccia_suolo_tipologia: veicolo.traccia_suolo_tipologia,
                  traccia_suolo_frenata_tipologia:
                    veicolo.traccia_suolo_frenata_tipologia,
                  traccia_suolo_metri: veicolo.traccia_suolo_metri,
                  traccia_suolo_terminazione:
                    veicolo.traccia_suolo_terminazione,
                  traccia_suolo_terminazione_tipologia:
                    veicolo.traccia_suolo_terminazione_tipologia,
                  traccia_suolo_terminazione_metri:
                    veicolo.traccia_suolo_terminazione_metri,
                  traccia_suolo_terminazione_intensita:
                    veicolo.traccia_suolo_terminazione_intensita,
                  traccia_suolo_terminazione_forma:
                    veicolo.traccia_suolo_terminazione_forma,
                  traccia_suolo_terminazione_andamento:
                    veicolo.traccia_suolo_terminazione_andamento,
                }
              );
            }),
            infrazioni: ris.infrazioni.map((infrazione) => {
              return Object.assign(
                {},
                {
                  id: infrazione.id,
                  conducente:
                    infrazione.conducente != null
                      ? {
                          id: infrazione.conducente?.id,
                          titolo: Object.assign(
                            {},
                            infrazione.conducente?.titolo
                          ),
                          nome: infrazione.conducente?.nome,
                          cognome: infrazione.conducente?.cognome,
                          nascita_data: infrazione.conducente?.nascita_data,
                          nascita_citta: Object.assign(
                            {},
                            infrazione.conducente?.nascita_citta
                          ),
                          nascita_citta_altro:
                            infrazione.conducente?.nascita_citta_altro,
                          residente_indirizzo:
                            infrazione.conducente?.residente_indirizzo,
                          residente_citta: Object.assign(
                            {},
                            infrazione.conducente?.residente_citta
                          ),
                          residente_citta_altro:
                            infrazione.conducente?.residente_citta_altro,
                        }
                      : null,
                  pedone:
                    infrazione.pedone != null
                      ? {
                          id: infrazione.pedone?.id,
                          titolo: Object.assign({}, infrazione.pedone?.titolo),
                          nome: infrazione.pedone?.nome,
                          cognome: infrazione.pedone?.cognome,
                          nascita_data: infrazione.pedone?.nascita_data,
                          nascita_citta: Object.assign(
                            {},
                            infrazione.pedone?.nascita_citta
                          ),
                          nascita_citta_altro:
                            infrazione.pedone?.nascita_citta_altro,
                          residente_indirizzo:
                            infrazione.pedone?.residente_indirizzo,
                          residente_citta: Object.assign(
                            {},
                            infrazione.pedone?.residente_citta
                          ),
                          residente_citta_altro:
                            infrazione.pedone?.residente_citta_altro,
                        }
                      : null,
                  veicolo:
                    infrazione.veicolo != null
                      ? {
                          id: infrazione.veicolo.id,
                          marca: infrazione.veicolo.marca,
                          modello: infrazione.veicolo.modello,
                          targa: infrazione.veicolo.targa,
                        }
                      : null,
                  verbale_n: infrazione.verbale_n,
                  articolo: infrazione.articolo,
                  note: infrazione.note,
                  utg_prefettura: infrazione.utg_prefettura,
                  data_trasmissione_rapporto:
                    infrazione.data_trasmissione_rapporto,
                  uffici_provinciale: infrazione.uffici_provinciale,
                  art_80_dtt: infrazione.art_80_dtt,
                  art_80_data: infrazione.art_80_data,
                }
              );
            }),
            infortunati: ris.infortunati.map((infortunato) => {
              return Object.assign(
                {},
                {
                  id: infortunato.id,
                  veicolo: infortunato.veicolo,
                  conducente:
                    infortunato.conducente != null
                      ? {
                          id: infortunato.conducente?.id,
                          titolo: Object.assign(
                            {},
                            infortunato.conducente?.titolo
                          ),
                          nome: infortunato.conducente?.nome,
                          cognome: infortunato.conducente?.cognome,
                          nascita_data: infortunato.conducente?.nascita_data,
                          nascita_citta: Object.assign(
                            {},
                            infortunato.conducente?.nascita_citta
                          ),
                          nascita_citta_altro:
                            infortunato.conducente?.nascita_citta_altro,
                        }
                      : null,
                  trasportato:
                    infortunato.trasportato != null
                      ? {
                          id: infortunato.trasportato?.id,
                          titolo: Object.assign(
                            {},
                            infortunato.trasportato?.titolo
                          ),
                          nome: infortunato.trasportato?.nome,
                          cognome: infortunato.trasportato?.cognome,
                          nascita_data: infortunato.trasportato?.nascita_data,
                          nascita_citta: Object.assign(
                            {},
                            infortunato.trasportato?.nascita_citta
                          ),
                          nascita_citta_altro:
                            infortunato.trasportato?.nascita_citta_altro,
                        }
                      : null,
                  pedone:
                    infortunato.pedone != null
                      ? {
                          id: infortunato.pedone?.id,
                          titolo: Object.assign({}, infortunato.pedone?.titolo),
                          nome: infortunato.pedone?.nome,
                          cognome: infortunato.pedone?.cognome,
                          nascita_data: infortunato.pedone?.nascita_data,
                          nascita_citta: Object.assign(
                            {},
                            infortunato.pedone?.nascita_citta
                          ),
                          nascita_citta_altro:
                            infortunato.pedone?.nascita_citta_altro,
                        }
                      : null,
                  titolo: infortunato.titolo,
                  nome: infortunato.nome,
                  cognome: infortunato.cognome,
                  sesso: infortunato.sesso,
                  telefono: infortunato.telefono,
                  nascita_data: infortunato.nascita_data,
                  nascita_citta: infortunato.nascita_citta,
                  nascita_citta_altro: infortunato.nascita_citta_altro,
                  residente_indirizzo: infortunato.residente_indirizzo,
                  residente_citta: infortunato.residente_citta,
                  residente_citta_altro: infortunato.residente_citta_altro,
                  rifiuta_cure_immediate: infortunato.rifiuta_cure_immediate,
                  danni_lamentati: infortunato.danni_lamentati,
                  cura_da_parte: infortunato.cura_da_parte,
                  ospedale_ricoverato: infortunato.ospedale_ricoverato,
                  ospedale_referto: infortunato.ospedale_referto,
                  ospedale_referto_rilasciato_da:
                    infortunato.ospedale_referto_rilasciato_da,
                  ospedale_diagnosi: infortunato.ospedale_diagnosi,
                  ospedale_prognosi: infortunato.ospedale_prognosi,
                  ospedale_altro: infortunato.ospedale_altro,
                  trasportato_richiesta: infortunato.trasportato_richiesta,
                  trasportato_ambulanza: infortunato.trasportato_ambulanza,
                  trasportato_targa_auto: infortunato.trasportato_targa_auto,
                  informazioni: infortunato.informazioni?.map(
                    (e) => e.informazione
                  ),
                }
              );
            }),
            decessi: {
              decessi_numero: ris.decessi_numero,
              decessi_tipologie: ris.decessi_tipologie?.map(
                (e) => e.decessi_tipologia
              ),
              decessi_notiziato_pm: ris.decessi_notiziato_pm,
              decessi_verbale_riconoscimento_salma:
                ris.decessi_verbale_riconoscimento_salma,
              decessi_oggetti_rinvenuti: ris.decessi_oggetti_rinvenuti,
              decessi_intervento_polizia_mortuaria:
                ris.decessi_intervento_polizia_mortuaria,
              decessi_certificato: ris.decessi_certificato,
              decessi_certificato_redattore: ris.decessi_certificato_redattore,
              decessi_certificato_redattore_in_servizio:
                ris.decessi_certificato_redattore_in_servizio,
              decessi_certificato_redattore_recapito:
                ris.decessi_certificato_redattore_recapito,
              decessi_trasporto_salme_presso:
                ris.decessi_trasporto_salme_presso,
              decessi_note: ris.decessi_note,
            },
            accertamenti: ris.accertamenti.map((accertamento) => {
              return Object.assign(
                {},
                {
                  id: accertamento.id,
                  centro_abitato: accertamento.centro_abitato,
                  data: accertamento.data,
                  direzione_da: accertamento.direzione_da,
                  direzione_a: accertamento.direzione_a,
                  tipologia_strada_carreggiate_n:
                    accertamento.tipologia_strada_carreggiate_n,
                  tipologia_strada_carreggiate:
                    accertamento.tipologia_strada_carreggiate,
                  tipologia_strada_conformazione:
                    accertamento.tipologia_strada_conformazione,
                  descrizione_piano_pavimentazione:
                    accertamento.descrizione_piano_pavimentazione,
                  descrizione_piano_stato_fondo:
                    accertamento.descrizione_piano_stato_fondo,
                  descrizione_piano_note: accertamento.descrizione_piano_note,
                  condizioni_meteo_tempo: accertamento.condizioni_meteo_tempo,
                  condizioni_meteo_visibilita_limitata:
                    accertamento.condizioni_meteo_visibilita_limitata,
                  condizioni_meteo_visibilita_limitata_tipologia_metri:
                    accertamento.condizioni_meteo_visibilita_limitata_tipologia_metri,
                  condizioni_meteo_illuminazione:
                    accertamento.condizioni_meteo_illuminazione,
                  traffico: accertamento.traffico,
                  segnaletica: accertamento.segnaletica,
                  condizioni_meteo_visibilita_limitata_tipologia:
                    accertamento.condizioni_meteo_visibilita_limitata_tipologia?.map(
                      (e) => e.condizioni_meteo_visibilita_limitata_tipologia
                    ),
                }
              );
            }),
            verbali: ris.verbali.map((verbale) => {
              return Object.assign(
                {},
                {
                  id: verbale.id,
                  tipologia_verbale: verbale.tipologia_verbale,
                  data: verbale.data,
                  proprietario:
                    verbale.proprietario != null
                      ? {
                          id: verbale.proprietario?.id,
                          titolo: Object.assign(
                            {},
                            verbale.proprietario?.titolo
                          ),
                          nome: verbale.proprietario?.nome,
                          cognome: verbale.proprietario?.cognome,
                          nascita_data: verbale.proprietario?.nascita_data,
                          nascita_citta: Object.assign(
                            {},
                            verbale.proprietario?.nascita_citta
                          ),
                          nascita_citta_altro:
                            verbale.proprietario?.nascita_citta_altro,
                        }
                      : null,
                  locatario:
                    verbale.locatario != null
                      ? {
                          id: verbale.locatario?.id,
                          titolo: Object.assign({}, verbale.locatario?.titolo),
                          nome: verbale.locatario?.nome,
                          cognome: verbale.locatario?.cognome,
                          nascita_data: verbale.locatario?.nascita_data,
                          nascita_citta: Object.assign(
                            {},
                            verbale.locatario?.nascita_citta
                          ),
                          nascita_citta_altro:
                            verbale.locatario?.nascita_citta_altro,
                        }
                      : null,
                  conducente:
                    verbale.conducente != null
                      ? {
                          id: verbale.conducente?.id,
                          titolo: Object.assign({}, verbale.conducente?.titolo),
                          nome: verbale.conducente?.nome,
                          cognome: verbale.conducente?.cognome,
                          nascita_data: verbale.conducente?.nascita_data,
                          nascita_citta: Object.assign(
                            {},
                            verbale.conducente?.nascita_citta
                          ),
                          nascita_citta_altro:
                            verbale.conducente?.nascita_citta_altro,
                        }
                      : null,
                  pedone:
                    verbale.pedone != null
                      ? {
                          id: verbale.pedone?.id,
                          titolo: Object.assign({}, verbale.pedone?.titolo),
                          nome: verbale.pedone?.nome,
                          cognome: verbale.pedone?.cognome,
                          nascita_data: verbale.pedone?.nascita_data,
                          nascita_citta: Object.assign(
                            {},
                            verbale.pedone?.nascita_citta
                          ),
                          nascita_citta_altro:
                            verbale.pedone?.nascita_citta_altro,
                        }
                      : null,
                  testimone:
                    verbale.testimone != null
                      ? {
                          id: verbale.testimone?.id,
                          titolo: Object.assign({}, verbale.testimone?.titolo),
                          nome: verbale.testimone?.nome,
                          cognome: verbale.testimone?.cognome,
                          nascita_data: verbale.testimone?.nascita_data,
                          nascita_citta: Object.assign(
                            {},
                            verbale.testimone?.nascita_citta
                          ),
                          nascita_citta_altro:
                            verbale.testimone?.nascita_citta_altro,
                        }
                      : null,
                  trasportato:
                    verbale.trasportato != null
                      ? {
                          id: verbale.trasportato?.id,
                          titolo: Object.assign(
                            {},
                            verbale.trasportato?.titolo
                          ),
                          nome: verbale.trasportato?.nome,
                          cognome: verbale.trasportato?.cognome,
                          nascita_data: verbale.trasportato?.nascita_data,
                          nascita_citta: Object.assign(
                            {},
                            verbale.trasportato?.nascita_citta
                          ),
                          nascita_citta_altro:
                            verbale.trasportato?.nascita_citta_altro,
                        }
                      : null,
                  veicolo: verbale.veicolo,
                  titolo: verbale.titolo,
                  nome: verbale.nome,
                  cognome: verbale.cognome,
                  sesso: verbale.sesso,
                  telefono: verbale.telefono,
                  nascita_data: verbale.nascita_data,
                  nascita_citta: verbale.nascita_citta,
                  nascita_citta_altro: verbale.nascita_citta_altro,
                  residente_indirizzo: verbale.residente_indirizzo,
                  residente_citta: verbale.residente_citta,
                  residente_citta_altro: verbale.residente_citta_altro,
                  documento_tipo: verbale.documento_tipo,
                  documento_numero: verbale.documento_numero,
                  documento_rilasciato_da: verbale.documento_rilasciato_da,
                  documento_rilasciato_da_citta:
                    verbale.documento_rilasciato_da_citta,
                  documento_rilasciato_data: verbale.documento_rilasciato_data,
                  dichiarazione: verbale.dichiarazione,
                  motivazione_no_sottoscrizione:
                    verbale.motivazione_no_sottoscrizione,
                }
              );
            }),
            allegati: {
              allegati: this.startData.allegati.map((f: any) =>
                Object.defineProperty(
                  new File([], f.name, {
                    type: f.metadata['content-type'],
                  }),
                  'bucket',
                  {
                    value: 'ris-' + ris.id,
                    writable: false,
                  }
                )
              ),
            },
            ...{
              geolocalizzazione: {
                mappa: [
                  ...(ris.posizionamento_toponimo?.geoloc != null
                    ? [
                        {
                          key: 'punto_iniziale',
                          label:
                            this._translateService.instant('Punto iniziale'),
                          punto: new BehaviorSubject<{
                            latitudine: number | null;
                            longitudine: number | null;
                            key: string;
                          }>({
                            latitudine:
                              ris.posizionamento_toponimo?.geoloc
                                .coordinates[0],
                            longitudine:
                              ris.posizionamento_toponimo?.geoloc
                                .coordinates[1],
                            key: 'punto_iniziale',
                          }),
                          color: { code: '#005dc1', label: 'accent' },
                        },
                      ]
                    : [
                        {
                          key: 'punto_iniziale',
                          label:
                            this._translateService.instant('Punto iniziale'),
                          punto: new BehaviorSubject<{
                            latitudine: number | null;
                            longitudine: number | null;
                            key: string;
                          }>({
                            latitudine: null,
                            longitudine: null,
                            key: 'punto_iniziale',
                          }),
                          color: { code: '#005dc1', label: 'accent' },
                        },
                      ]),
                ],
              },
            },
            ...{
              localizzazione: {
                municipalita: ris.municipalita,
                quartiere: ris.quartiere,
                toponimo: ris.toponimo,
                posizionamento_toponimo: Object.assign(
                  {},
                  ris.posizionamento_toponimo
                ),
              },
            },
            ...{
              protocollo: {
                ...{ id: ris.protocollo!.id },
                ...{ numero: ris.protocollo!.numero },
                ...{ data: ris.protocollo!.data },
                ...{ mittente: ris.protocollo?.mittente },
                ...{
                  destinatari: ris.protocollo!.destinatari.map((e) => {
                    return {
                      id: e.id,
                      destinatario_interno: e.destinatario_interno,
                      destinatario_esterno: e.destinatario_esterno,
                      e_esterno: e.e_esterno,
                    };
                  }),
                },
              },
            },
            ...(mapInit ? { ...mapInit(ris) } : {}),
          };
        })
      )
    );

    this.startData.protocollo.destinatari =
      this.model.protocollo?.destinatari.map((d: any) => d.id);

    this.startData.enti_primo_intervento =
      this.model.intervento.enti_primo_intervento.map((d: any) => d.id);

    this.startData.persone.proprietari = this.model.persone.proprietari
      ? this.model.persone.proprietari.map((d: any) => d.id)
      : [];

    this.startData.persone.proprietari_giuridico = this.model.persone
      .proprietari_giuridico
      ? this.model.persone.proprietari_giuridico.map((d: any) => d.id)
      : [];
    this.startData.persone.locatari = this.model.persone.locatari
      ? this.model.persone.locatari.map((d: any) => d.id)
      : [];
    this.startData.persone.conducenti = this.model.persone.conducenti
      ? this.model.persone.conducenti.map((d: any) => d)
      : [];
    this.startData.persone.trasportati = this.model.persone.trasportati
      ? this.model.persone.trasportati.map((d: any) => d.id)
      : [];
    this.startData.persone.testimoni = this.model.persone.testimoni
      ? this.model.persone.testimoni.map((d: any) => d.id)
      : [];
    this.startData.persone.pedoni = this.model.persone.pedoni
      ? this.model.persone.pedoni.map((d: any) => d.id)
      : [];
    this.startData.persone.altri = this.model.persone.altri
      ? this.model.persone.altri.map((d: any) => d.id)
      : [];
    this.startData.veicoli = this.model.veicoli
      ? this.model.veicoli.map((d: any) => d.id)
      : [];
    this.startData.infrazioni = this.model.infrazioni
      ? this.model.infrazioni.map((d: any) => d.id)
      : [];
    this.startData.infortunati = this.model.infortunati
      ? this.model.infortunati.map((d: any) => d.id)
      : [];
    this.startData.accertamenti = this.model.accertamenti
      ? this.model.accertamenti.map((d: any) => d.id)
      : [];
    this.startData.verbali = this.model.verbali
      ? this.model.verbali.map((d: any) => d.id)
      : [];

    if (repeatInit) repeatInit();
    this._loaderService.stop();
  }
}
