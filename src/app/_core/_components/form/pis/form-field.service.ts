import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom, map, mergeMap } from 'rxjs';
import {
  CiviciSelectGQL,
  ConnessioniGrafoSelectGQL,
  MunicipalitaSelectGQL,
  QuartiereSelectGQL,
  SostegniIpiSelectGQL,
  SpecificaPosizionamentoToponimoSelectGQL,
  TipologiaPosizionamentoToponimoSelectGQL,
  ToponimoNomeSelectGQL,
  ToponimoSelectGQL,
} from 'src/app/_core/_services/generated/graphql';

interface LocalizzazioneNamedParameters {
  key?: string;
  clazz?: string;
  root?: string;
  fields?: FormGroup;
  required?: boolean;
  multiple?: boolean;
  groupLabel?: string;
  autosave?: Array<(value: any, field: FormlyFieldConfig) => void>;
}

@Injectable({
  providedIn: 'root',
})
export class LocalizzazioneFormFieldService {
  constructor(
    private _translateService: TranslateService,
    private _municipalitaSelectGQL: MunicipalitaSelectGQL,
    private _quartiereSelectGQL: QuartiereSelectGQL,
    private _toponimoSelectGQL: ToponimoSelectGQL,
    private _toponimoNomeSelectGQL: ToponimoNomeSelectGQL,
    private _specificaPosizionamentoToponimoSelectGQL: SpecificaPosizionamentoToponimoSelectGQL,
    private _tipologiaPosizionamentoToponimoSelectGQL: TipologiaPosizionamentoToponimoSelectGQL,
    private _civiciSelectGQL: CiviciSelectGQL,
    private _sostegniIpiSelectGQL: SostegniIpiSelectGQL,
    private _connessioniGrafoSelectGQL: ConnessioniGrafoSelectGQL
  ) {}

  getMunicipalita(params?: LocalizzazioneNamedParameters): FormlyFieldConfig {
    let field: FormlyFieldConfig = {
      className: params?.clazz || '',
      type: 'autocomplete',
      ...(params?.key ? { key: params.key } : {}),
      templateOptions: {
        required: params?.required === undefined ? true : params?.required,
        multiple: params?.multiple === undefined ? false : params?.multiple,
        ...(params?.autosave ? { autosave: params.autosave[0] } : {}),
        filter: (term: any, limit: number, offset: number, parent?: any) =>
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
      },
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Municipalità'),
      },
      validation: {
        messages: {
          duplicate: (error: any, field: FormlyFieldConfig) =>
            this._translateService.instant(
              'Non ci possono essere municipalità duplicati'
            ),
        },
      },
    };
    return field;
  }

  getQuartieri(params?: LocalizzazioneNamedParameters): FormlyFieldConfig {
    let field: FormlyFieldConfig = {
      className: params?.clazz || '',
      type: 'autocomplete',
      ...(params?.key ? { key: params.key } : {}),
      templateOptions: {
        required: params?.required === undefined ? true : params?.required,
        multiple: params?.multiple === undefined ? false : params?.multiple,
        ...(params?.autosave ? { autosave: params.autosave[0] } : {}),
        filter: (term: any, limit: number, offset: number, parent?: any) =>
          this._quartiereSelectGQL
            .watch({
              limit,
              offset,
              where: {
                ...(term && typeof term === 'string'
                  ? { nome: { _ilike: '%' + term + '%' } }
                  : {}),
                ...(params?.root
                  ? {
                      municipalita: {
                        municipalita_id: {
                          _eq: parent ? parent.id : 0,
                        },
                      },
                    }
                  : {}),
              },
            })
            .valueChanges.pipe(
              map((result) => result.data?.toponomastica_quartiere)
            ),
      },
      ...(params?.root
        ? {
            hooks: {
              onInit: (field) => {
                field!.templateOptions!.parent =
                  field?.parent?.fieldGroup?.find(
                    (f) => f.key === params.root
                  )?.formControl;
              },
            },
          }
        : {}),
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Quartiere'),
      },
      validation: {
        messages: {
          duplicate: (error: any, field: FormlyFieldConfig) =>
            this._translateService.instant(
              'Non ci possono essere quartieri duplicati'
            ),
        },
      },
    };
    return field;
  }

  getToponimi(params?: LocalizzazioneNamedParameters): FormlyFieldConfig {
    let field: FormlyFieldConfig = {
      className: params?.clazz || '',
      type: 'autocomplete',
      ...(params?.key ? { key: params.key } : {}),
      templateOptions: {
        required: params?.required === undefined ? true : params?.required,
        multiple: params?.multiple === undefined ? false : params?.multiple,
        ...(params?.autosave ? { autosave: params.autosave[0] } : {}),
        displayWith: (e: any) =>
          e ? (e.dug ? e.dug.nome + ' ' : '') + e.nome : '',
        filter: (term: any, limit: number, offset: number, parent?: any) =>
          this._toponimoSelectGQL
            .watch({
              limit,
              offset,
              where: {
                ...(term && typeof term === 'string'
                  ? { nome: { _ilike: '%' + term + '%' } }
                  : {}),
                ...(params?.root
                  ? {
                      assegnazioni: {
                        quartiere_id: {
                          _eq: parent ? parent.id : 0,
                        },
                      },
                    }
                  : {}),
              },
            })
            .valueChanges.pipe(
              map((result) => result.data?.toponomastica_toponimo)
            ),
      },
      ...(params?.root
        ? {
            hooks: {
              onInit: (field) => {
                field!.templateOptions!.parent =
                  field?.parent?.fieldGroup?.find(
                    (f) => f.key === params.root
                  )?.formControl;
              },
            },
          }
        : {}),
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Toponimo'),
      },
    };
    return field;
  }
  getPosizionamentoToponimo(
    params?: LocalizzazioneNamedParameters
  ): FormlyFieldConfig {
    let field: FormlyFieldConfig = {
      ...(params?.key ? { key: params.key } : {}),
      fieldGroup: [
        {
          ...(params?.groupLabel
            ? {
                className: 'section-label',
                template: '<h3><b>' + params?.groupLabel + '</b></h3>',
              }
            : {}),
        },
        {
          key: 'tipologia',
          type: 'autocomplete',
          templateOptions: {
            required: true,
            ...(params?.autosave ? { autosave: params.autosave[0] } : {}),
            filter: (term: any, limit: number, offset: number, parent?: any) =>
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
          },
          expressionProperties: {
            'templateOptions.label': this._translateService.stream('Posizione'),
          },
        },
        {
          fieldGroup: [
            {
              hideExpression: (model: any, formState: any) =>
                !(model.tipologia && [1, 2].includes(model.tipologia.id)),
              fieldGroupClassName: 'display-flex',
              fieldGroup: [
                {
                  className: 'flex-1',
                  key: 'specifica',
                  type: 'autocomplete',
                  templateOptions: {
                    required: true,
                    ...(params?.autosave
                      ? { autosave: params.autosave[1] }
                      : {}),
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
                  },
                  expressionProperties: {
                    'templateOptions.label': this._translateService.stream(
                      'Specificare per punto iniziale'
                    ),
                  },
                },
                {
                  key: 'civico', // CIVICO
                  type: 'autocomplete',
                  templateOptions: {
                    required: true,
                    ...(params?.autosave
                      ? { autosave: params.autosave[2] }
                      : {}),
                    displayWith: (element: any) =>
                      element != null ? element.civico1 : '',
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
                          ...(params?.root
                            ? {
                                fk_t_code: {
                                  _ilike: parent
                                    ? '%;' + parent.codice + ';%'
                                    : '',
                                },
                              }
                            : {}),
                          ...(term && typeof term === 'string'
                            ? { civico1: { _ilike: '%' + term + '%' } }
                            : {}),
                        })
                        .valueChanges.pipe(
                          map((result) => result.data?.gis_civico)
                        ),
                  },
                  ...(params?.root
                    ? {
                        hooks: {
                          onInit: (field) => {
                            field!.templateOptions!.parent =
                              params.fields?.controls[params.root!];
                          },
                        },
                      }
                    : {}),
                  hideExpression: (model: any, formState: any) =>
                    !(model.specifica && [1].includes(model.specifica.id)),
                  expressionProperties: {
                    'templateOptions.label': (model: any, formState: any) =>
                      this._translateService.instant('Civico'),
                  },
                  validators: {
                    forceSelection: {
                      expression: () => true,
                    },
                  },
                },
                {
                  key: 'ipi', // SOSTEGNO IPI
                  type: 'autocomplete',
                  templateOptions: {
                    required: true,
                    ...(params?.autosave
                      ? { autosave: params.autosave[3] }
                      : {}),
                    displayWith: (element: any) =>
                      element != null ? element.matricola : '',
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
                          ...(params?.root
                            ? {
                                fk_t_code: {
                                  _ilike: parent
                                    ? '%;' + parent.codice + ';%'
                                    : '',
                                },
                              }
                            : {}),
                          ...(term && typeof term === 'string'
                            ? { matricola: { _ilike: '%' + term + '%' } }
                            : {}),
                        })
                        .valueChanges.pipe(
                          map((result) => result.data?.gis_sostegno_ipi)
                        ),
                  },
                  ...(params?.root
                    ? {
                        hooks: {
                          onInit: (field) => {
                            field!.templateOptions!.parent =
                              params.fields?.controls[params.root!];
                          },
                        },
                      }
                    : {}),
                  hideExpression: (model: any, formState: any) =>
                    !(model.specifica && [2].includes(model.specifica.id)),
                  expressionProperties: {
                    'templateOptions.label': (model: any, formState: any) =>
                      this._translateService.instant('Palo della luce'),
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
                    ...(params?.autosave
                      ? { autosave: params.autosave[4] }
                      : {}),
                  },
                  hideExpression: (model: any, formState: any) =>
                    !(model.specifica && [3].includes(model.specifica.id)),
                  expressionProperties: {
                    'templateOptions.label': (model: any, formState: any) =>
                      this._translateService.instant('Km'),
                  },
                },
              ],
            },
          ],
        },
        {
          key: 'connessione', // CONNESSIONI
          type: 'autocomplete',
          templateOptions: {
            required: true,
            displayWith: (element: any) => (element ? element.nome : ''),
            ...(params?.autosave ? { autosave: params.autosave[5] } : {}),

            filter: (term: any, limit: number, offset: number, parent?: any) =>
              this._connessioniGrafoSelectGQL
                .watch({
                  limit,
                  offset,
                  ...(params?.root
                    ? {
                        fk_t_code: {
                          _ilike: parent ? '%;' + parent.codice + ';%' : '',
                        },
                      }
                    : {}),
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
                    term && typeof term === 'string'
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
          ...(params?.root
            ? {
                hooks: {
                  onInit: (field) => {
                    field!.templateOptions!.parent =
                      params.fields?.controls[params.root!];
                  },
                },
              }
            : {}),
          hideExpression: (model: any, formState: any) =>
            !(model.tipologia && [3, 4].includes(model.tipologia.id)),
          expressionProperties: {
            'templateOptions.label': this._translateService.stream('Incrocio'),
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
          templateOptions: {
            ...(params?.autosave ? { autosave: params.autosave[6] } : {}),
          },
          expressionProperties: {
            'templateOptions.label': this._translateService.stream('Note'),
          },
        },
        {
          key: 'id',
          // className: 'hidden',
          type: 'input',
          templateOptions: {
            required: true,
          },
        },
      ],
    };
    return field;
  }
}
