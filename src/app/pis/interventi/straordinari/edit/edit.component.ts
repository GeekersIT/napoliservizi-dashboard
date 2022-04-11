import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { BehaviorSubject, firstValueFrom, map, mergeMap } from 'rxjs';
import { ConfirmDialogComponent } from 'src/app/_core/_components/confirm-dialog/confirm-dialog.component';
import { marker } from 'src/app/_core/_formly/_components/mappa-formly/mappa-formly.component';
import { fileListToBase64 } from 'src/app/_core/_functions';
import {
  CiviciSelectGQL,
  ConnessioniGrafoSelectGQL,
  InterventoStraordinarioGQL,
  Pis_Intervento_Straordinario_Constraint,
  Pis_Intervento_Straordinario_Update_Column,
  MunicipalitaSelectGQL,
  Gis_Posizionamento_Toponimo_Constraint,
  Gis_Posizionamento_Toponimo_Update_Column,
  PrioritaSelectGQL,
  QuartiereSelectGQL,
  SostegniIpiSelectGQL,
  SpecificaPosizionamentoToponimoSelectGQL,
  TipologiaPosizionamentoToponimoSelectGQL,
  ToponimoNomeSelectGQL,
  ToponimoSelectGQL,
  UpdateInterventoStraordinarioGQL,
  Pis__Stato_Segnalazione_Enum,
} from 'src/app/_core/_services/generated/graphql';
import { Dirty } from 'src/app/_core/_components/form/form.component';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-interventi-straordinari-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class InterventiStraordinariEditComponent
  extends Dirty
  implements OnInit
{
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  id: number;

  startData: any = {
    allegati: [],
  };

  saving: boolean = false;

  fields: FormlyFieldConfig[] = [
    {
      type: 'stepper',
      templateOptions: {
        orientation: 'horizontal',
      },
      fieldGroup: [
        {
          expressionProperties: {
            'templateOptions.label': this._translateService.stream(
              'Localizzazione intervento'
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
                          map(
                            (result) => result.data?.toponomastica_municipalita
                          )
                        ),
                    parentReset: (field: FormlyFieldConfig) => {
                      field.parent?.fieldGroup![1].formControl?.reset();
                      field.parent?.fieldGroup![2].formControl?.reset();
                    },
                  },
                  expressionProperties: {
                    'templateOptions.label':
                      this._translateService.stream('Municipalità'),
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
                      // LOCALIZZAZIONE PUNTO INIZIALE
                      field.parent?.parent?.fieldGroup![1].fieldGroup![1].formControl?.reset();
                      field.parent?.parent?.fieldGroup![1].fieldGroup![2].fieldGroup![0].fieldGroup![0].formControl?.reset();
                      field.parent?.parent?.fieldGroup![1].fieldGroup![2].fieldGroup![0].fieldGroup![1].formControl?.reset();
                      field.parent?.parent?.fieldGroup![1].fieldGroup![2].fieldGroup![0].fieldGroup![2].formControl?.reset();
                      field.parent?.parent?.fieldGroup![1].fieldGroup![2].fieldGroup![0].fieldGroup![3].formControl?.reset();
                      field.parent?.parent?.fieldGroup![1].fieldGroup![3].formControl?.reset();

                      //LOCALIZZAZIONE PUNTO FINALE
                      field.parent?.parent?.fieldGroup![2].fieldGroup![1].formControl?.reset();
                      field.parent?.parent?.fieldGroup![2].fieldGroup![2].fieldGroup![0].fieldGroup![0].formControl?.reset();
                      field.parent?.parent?.fieldGroup![2].fieldGroup![2].fieldGroup![0].fieldGroup![1].formControl?.reset();
                      field.parent?.parent?.fieldGroup![2].fieldGroup![2].fieldGroup![0].fieldGroup![2].formControl?.reset();
                      field.parent?.parent?.fieldGroup![2].fieldGroup![2].fieldGroup![0].fieldGroup![3].formControl?.reset();
                      field.parent?.parent?.fieldGroup![2].fieldGroup![3].formControl?.reset();
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
                  },
                },
              ],
            },
            {
              key: 'posizionamento_toponimo_punto_iniziale',
              hideExpression: (
                model: any,
                formState: any,
                field: FormlyFieldConfig | undefined
              ) =>
                field?.parent?.fieldGroup![0].fieldGroup![2].formControl
                  ?.value == null,
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
                              result.data
                                ?.gis__tipologia_posizionamento_toponimo
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
                            field?.parent?.parent?.fieldGroup[1].formControl
                              ?.value.id
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
                                  ...(term &&
                                  typeof term === 'string' &&
                                  term != ''
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
                            !(
                              model.specifica &&
                              [1].includes(model.specifica.id)
                            ),
                          expressionProperties: {
                            'templateOptions.label': (
                              model: any,
                              formState: any
                            ) => this._translateService.instant('Civico'),
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
                                  ...(term &&
                                  typeof term === 'string' &&
                                  term != ''
                                    ? {
                                        matricola: { _ilike: '%' + term + '%' },
                                      }
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
                            !(
                              model.specifica &&
                              [2].includes(model.specifica.id)
                            ),
                          expressionProperties: {
                            'templateOptions.label': (
                              model: any,
                              formState: any
                            ) =>
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
                          },
                          hideExpression: (model: any, formState: any) =>
                            !(
                              model.specifica &&
                              [3].includes(model.specifica.id)
                            ),
                          expressionProperties: {
                            'templateOptions.label': (
                              model: any,
                              formState: any
                            ) => this._translateService.instant('Km'),
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
                                                (el.dug
                                                  ? el.dug.nome + ' '
                                                  : '') + el.nome
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
                    'templateOptions.label':
                      this._translateService.stream('Note'),
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
            {
              key: 'posizionamento_toponimo_punto_finale',
              hideExpression: (
                model: any,
                formState: any,
                field: FormlyFieldConfig | undefined
              ) =>
                field?.parent?.fieldGroup![0].fieldGroup![2].formControl
                  ?.value == null,
              fieldGroup: [
                {
                  className: 'section-label',
                  template:
                    '<h3><b>' +
                    this._translateService.instant('Punto finale') +
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
                              result.data
                                ?.gis__tipologia_posizionamento_toponimo
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
                            field?.parent?.parent?.fieldGroup[1].formControl
                              ?.value.id
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
                                  ...(term &&
                                  typeof term === 'string' &&
                                  term != ''
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
                            !(
                              model.specifica &&
                              [1].includes(model.specifica.id)
                            ),
                          expressionProperties: {
                            'templateOptions.label': (
                              model: any,
                              formState: any
                            ) => this._translateService.instant('Civico'),
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
                                  ...(term &&
                                  typeof term === 'string' &&
                                  term != ''
                                    ? {
                                        matricola: { _ilike: '%' + term + '%' },
                                      }
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
                            !(
                              model.specifica &&
                              [2].includes(model.specifica.id)
                            ),
                          expressionProperties: {
                            'templateOptions.label': (
                              model: any,
                              formState: any
                            ) =>
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
                          },
                          hideExpression: (model: any, formState: any) =>
                            !(
                              model.specifica &&
                              [3].includes(model.specifica.id)
                            ),
                          expressionProperties: {
                            'templateOptions.label': (
                              model: any,
                              formState: any
                            ) => this._translateService.instant('Km'),
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
                                                (el.dug
                                                  ? el.dug.nome + ' '
                                                  : '') + el.nome
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
                    'templateOptions.label':
                      this._translateService.stream('Note'),
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
        // {
        //   expressionProperties: {
        //     'templateOptions.label':
        //       this._translateService.stream('Geo-localizzazione'),
        //   },
        //   key: 'geolocalizzazione',
        //   fieldGroup: [
        //     {
        //       key: 'mappa',
        //       type: 'mappa',
        //       templateOptions: {
        //         lazyLoading: true,
        //       },
        //       hooks: {
        //         onInit: (field) => {
        //           let punto_iniziale = field?.formControl?.value.find(
        //             (f: marker) => f.key == 'punto_iniziale'
        //           );
        //           let punto_finale = field?.formControl?.value.find(
        //             (f: marker) => f.key == 'punto_finale'
        //           );
        //           // CIVICO punto iniziale
        //           field?.parent?.parent?.fieldGroup
        //             ?.find((f) => f.key == 'localizzazione')
        //             ?.fieldGroup![1].fieldGroup![2].fieldGroup![0].fieldGroup![1].formControl!.valueChanges.subscribe(
        //               (s) => {
        //                 if (s && typeof s != 'string' && punto_iniziale) {
        //                   punto_iniziale.punto.next({
        //                     latitudine: s.geom.coordinates[0],
        //                     longitudine: s.geom.coordinates[1],
        //                   });
        //                 } else if (punto_iniziale) {
        //                   punto_iniziale.punto.next({
        //                     latitudine: null,
        //                     longitudine: null,
        //                   });
        //                 }
        //               }
        //             );
        //           // IPI punto iniziale
        //           field?.parent?.parent?.fieldGroup
        //             ?.find((f) => f.key == 'localizzazione')
        //             ?.fieldGroup![1].fieldGroup![2].fieldGroup![0].fieldGroup![2].formControl!.valueChanges.subscribe(
        //               (s) => {
        //                 if (s && typeof s != 'string' && punto_iniziale) {
        //                   punto_iniziale.punto.next({
        //                     latitudine: s.geom.coordinates[0][0],
        //                     longitudine: s.geom.coordinates[0][1],
        //                   });
        //                 } else if (punto_iniziale) {
        //                   punto_iniziale.punto.next({
        //                     latitudine: null,
        //                     longitudine: null,
        //                   });
        //                 }
        //               }
        //             );
        //           // CONNESSIONI punto iniziale
        //           field?.parent?.parent?.fieldGroup
        //             ?.find((f) => f.key == 'localizzazione')
        //             ?.fieldGroup![1].fieldGroup![3].formControl!.valueChanges.subscribe(
        //               (s) => {
        //                 if (s && typeof s != 'string' && punto_iniziale) {
        //                   punto_iniziale.punto.next({
        //                     latitudine: s.geom.coordinates[0],
        //                     longitudine: s.geom.coordinates[1],
        //                     propagate: true,
        //                   });
        //                 } else if (punto_iniziale) {
        //                   punto_iniziale.punto.next({
        //                     latitudine: null,
        //                     longitudine: null,
        //                   });
        //                 }
        //               }
        //             );

        //           // CIVICO punto finale
        //           field?.parent?.parent?.fieldGroup
        //             ?.find((f) => f.key == 'localizzazione')
        //             ?.fieldGroup![2].fieldGroup![2].fieldGroup![0].fieldGroup![1].formControl!.valueChanges.subscribe(
        //               (s) => {
        //                 if (s && typeof s != 'string' && punto_finale) {
        //                   punto_finale.punto.next({
        //                     latitudine: s.geom.coordinates[0],
        //                     longitudine: s.geom.coordinates[1],
        //                   });
        //                 } else if (punto_finale) {
        //                   punto_finale.punto.next({
        //                     latitudine: null,
        //                     longitudine: null,
        //                   });
        //                 }
        //               }
        //             );
        //           // IPI punto finale
        //           field?.parent?.parent?.fieldGroup
        //             ?.find((f) => f.key == 'localizzazione')
        //             ?.fieldGroup![2].fieldGroup![2].fieldGroup![0].fieldGroup![2].formControl!.valueChanges.subscribe(
        //               (s) => {
        //                 if (s && typeof s != 'string' && punto_finale) {
        //                   punto_finale.punto.next({
        //                     latitudine: s.geom.coordinates[0][0],
        //                     longitudine: s.geom.coordinates[0][1],
        //                   });
        //                 } else if (punto_finale) {
        //                   punto_finale.punto.next({
        //                     latitudine: null,
        //                     longitudine: null,
        //                   });
        //                 }
        //               }
        //             );
        //           // CONNESSIONI punto finale
        //           field?.parent?.parent?.fieldGroup
        //             ?.find((f) => f.key == 'localizzazione')
        //             ?.fieldGroup![2].fieldGroup![3].formControl!.valueChanges.subscribe(
        //               (s) => {
        //                 if (s && typeof s != 'string' && punto_finale) {
        //                   punto_finale.punto.next({
        //                     latitudine: s.geom.coordinates[0],
        //                     longitudine: s.geom.coordinates[1],
        //                     propagate: true,
        //                   });
        //                 } else if (punto_finale) {
        //                   punto_finale.punto.next({
        //                     latitudine: null,
        //                     longitudine: null,
        //                   });
        //                 }
        //               }
        //             );
        //         },
        //       },
        //     },
        //   ],
        // },
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
                'templateOptions.label':
                  this._translateService.stream('Allegati'),
              },
            },
          ],
        },
        {
          expressionProperties: {
            'templateOptions.label': this._translateService.stream(
              'Informazioni intervento'
            ),
          },
          key: 'intervento',
          fieldGroup: [
            {
              key: 'data_inserimento',
              type: 'datepicker',
              templateOptions: {
                required: true,
              },
              expressionProperties: {
                'templateOptions.label':
                  this._translateService.stream('Data inserimento'),
              },
            },
            {
              key: 'priorita',
              type: 'autocomplete',
              templateOptions: {
                required: true,
                filter: (
                  term: any,
                  limit: number,
                  offset: number,
                  parent?: any
                ) =>
                  this._prioritaSelectGQL
                    .watch({
                      limit: limit,
                      offset: offset,
                      ...(term && typeof term === 'string'
                        ? { nome: { _ilike: '%' + term + '%' } }
                        : {}),
                    })
                    .valueChanges.pipe(
                      map((result) => result.data?.pis__priorita)
                    ),
              },
              expressionProperties: {
                'templateOptions.label':
                  this._translateService.stream('Priorità'),
              },
            },
            {
              key: 'data_inizio_lavori',
              type: 'datepicker',
              templateOptions: {
                required: true,
              },
              expressionProperties: {
                'templateOptions.label':
                  this._translateService.stream('Data inizio lavori'),
              },
            },
            {
              key: 'tipologia_intervento',
              type: 'textarea',
              templateOptions: {
                required: true,
              },
              expressionProperties: {
                'templateOptions.label': this._translateService.stream(
                  'Tipologia di intervento'
                ),
              },
            },
            {
              key: 'terminato',
              type: 'toggle',
              defaultValue: false,
              templateOptions: {
                appearance: 'standard',
              },
              expressionProperties: {
                'templateOptions.label': this._translateService.stream(
                  "L'intervento è terminato?"
                ),
              },
            },
            {
              hideExpression: (
                model: any,
                formState: any,
                field: FormlyFieldConfig | undefined
              ) => field?.parent?.fieldGroup![4].formControl?.value == false,
              fieldGroup: [
                {
                  key: 'data_fine_lavori',
                  type: 'datepicker',
                  templateOptions: {
                    required: true,
                  },
                  expressionProperties: {
                    'templateOptions.label':
                      this._translateService.stream('Data fine lavori'),
                  },
                },
                {
                  key: 'lavori_effettuati',
                  type: 'textarea',
                  templateOptions: {
                    required: true,
                  },
                  expressionProperties: {
                    'templateOptions.label':
                      this._translateService.stream('Lavori effettuati'),
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  async save(event: any) {
    this.saving = true;
    if (event.loading) this._loaderService.start();
    const allegati = this.model.allegati.allegati
      ? await fileListToBase64(this.model.allegati.allegati)
      : [];

    let d = this.startData.allegati.filter(
      (x: any) => !allegati.map((f: any) => f.nome).includes(x.name)
    );
    let n = allegati.filter(
      (x: any) =>
        !this.startData.allegati.map((f: any) => f.name).includes(x.nome)
    );

    let model = {
      id: this.model.id,
      ...(event.type == 'def'
        ? {
            stato: this.model.intervento.data_fine_lavori
              ? Pis__Stato_Segnalazione_Enum.Completata
              : Pis__Stato_Segnalazione_Enum.Aperta,
          }
        : {}),
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
          }
        : {}),
      posizionamento_toponimo_punto_iniziale: {
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
        data: this.model.localizzazione.posizionamento_toponimo_punto_iniziale
          ? {
              ...this.model.localizzazione
                .posizionamento_toponimo_punto_iniziale,
              ...(this.model.localizzazione
                .posizionamento_toponimo_punto_iniziale.tipologia
                ? {
                    tipologia_id:
                      this.model.localizzazione
                        .posizionamento_toponimo_punto_iniziale.tipologia.id,
                  }
                : {}),
              specifica_id: this.model.localizzazione
                .posizionamento_toponimo_punto_iniziale.specifica
                ? this.model.localizzazione
                    .posizionamento_toponimo_punto_iniziale.specifica.id
                : null,
              civico:
                this.model.localizzazione.posizionamento_toponimo_punto_iniziale
                  .civico &&
                typeof this.model.localizzazione
                  .posizionamento_toponimo_punto_iniziale.civico === 'object'
                  ? this.model.localizzazione
                      .posizionamento_toponimo_punto_iniziale.civico.civico1
                  : this.model.localizzazione
                      .posizionamento_toponimo_punto_iniziale.civico,
              ipi:
                this.model.localizzazione.posizionamento_toponimo_punto_iniziale
                  .ipi &&
                typeof this.model.localizzazione
                  .posizionamento_toponimo_punto_iniziale.ipi === 'object'
                  ? this.model.localizzazione
                      .posizionamento_toponimo_punto_iniziale.ipi.matricola
                  : this.model.localizzazione
                      .posizionamento_toponimo_punto_iniziale.ipi,
              connessione:
                this.model.localizzazione.posizionamento_toponimo_punto_iniziale
                  .connessione &&
                typeof this.model.localizzazione
                  .posizionamento_toponimo_punto_iniziale.connessione ===
                  'object'
                  ? this.model.localizzazione
                      .posizionamento_toponimo_punto_iniziale.connessione.nome
                  : this.model.localizzazione
                      .posizionamento_toponimo_punto_iniziale.connessione,
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

      posizionamento_toponimo_punto_finale: {
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
        data: this.model.localizzazione.posizionamento_toponimo_punto_finale
          ? {
              ...this.model.localizzazione.posizionamento_toponimo_punto_finale,
              ...(this.model.localizzazione.posizionamento_toponimo_punto_finale
                .tipologia
                ? {
                    tipologia_id:
                      this.model.localizzazione
                        .posizionamento_toponimo_punto_finale.tipologia.id,
                  }
                : {}),
              specifica_id: this.model.localizzazione
                .posizionamento_toponimo_punto_finale.specifica
                ? this.model.localizzazione.posizionamento_toponimo_punto_finale
                    .specifica.id
                : null,
              civico:
                this.model.localizzazione.posizionamento_toponimo_punto_finale
                  .civico &&
                typeof this.model.localizzazione
                  .posizionamento_toponimo_punto_finale.civico === 'object'
                  ? this.model.localizzazione
                      .posizionamento_toponimo_punto_finale.civico.civico1
                  : this.model.localizzazione
                      .posizionamento_toponimo_punto_finale.civico,
              ipi:
                this.model.localizzazione.posizionamento_toponimo_punto_finale
                  .ipi &&
                typeof this.model.localizzazione
                  .posizionamento_toponimo_punto_finale.ipi === 'object'
                  ? this.model.localizzazione
                      .posizionamento_toponimo_punto_finale.ipi.matricola
                  : this.model.localizzazione
                      .posizionamento_toponimo_punto_finale.ipi,
              connessione:
                this.model.localizzazione.posizionamento_toponimo_punto_finale
                  .connessione &&
                typeof this.model.localizzazione
                  .posizionamento_toponimo_punto_finale.connessione === 'object'
                  ? this.model.localizzazione
                      .posizionamento_toponimo_punto_finale.connessione.nome
                  : this.model.localizzazione
                      .posizionamento_toponimo_punto_finale.connessione,
              ...(this.model.geolocalizzazione.mappa![1].punto.value
                .latitudine &&
              this.model.geolocalizzazione.mappa![1].punto.value.longitudine
                ? {
                    geoloc: {
                      type: 'Point',
                      coordinates: [
                        parseFloat(
                          this.model.geolocalizzazione.mappa![1].punto.value
                            .latitudine
                        ),
                        parseFloat(
                          this.model.geolocalizzazione.mappa![1].punto.value
                            .longitudine
                        ),
                      ],
                    },
                  }
                : {}),
            }
          : {},
      },
      ...(this.model.intervento.data_inserimento
        ? { data_inserimento: new Date(this.model.intervento.data_inserimento) }
        : {}),
      ...(this.model.intervento.data_inizio_lavori
        ? {
            data_inizio_lavori: new Date(
              this.model.intervento.data_inizio_lavori
            ),
          }
        : {}),
      ...(this.model.intervento.data_fine_lavori
        ? { data_fine_lavori: new Date(this.model.intervento.data_fine_lavori) }
        : {}),
      ...(this.model.intervento.priorita
        ? { priorita_id: this.model.intervento.priorita.id }
        : {}),
      tipologia_intervento: this.model.intervento.tipologia_intervento,
      lavori_effettuati: this.model.intervento.lavori_effettuati,
    };
    delete model.posizionamento_toponimo_punto_iniziale.data.tipologia;
    delete model.posizionamento_toponimo_punto_iniziale.data.specifica;
    delete model.posizionamento_toponimo_punto_finale.data.tipologia;
    delete model.posizionamento_toponimo_punto_finale.data.specifica;
    if (n.length == 0 && d.length == 0) delete model.allegati;

    this._updateInterventoStraordinarioGQL
      .mutate({
        on_conflict: {
          constraint:
            Pis_Intervento_Straordinario_Constraint.InterventoStraordinarioPkey,
          update_columns: [
            Pis_Intervento_Straordinario_Update_Column.MunicipalitaId,
            Pis_Intervento_Straordinario_Update_Column.MunicipalitaStorica,
            Pis_Intervento_Straordinario_Update_Column.QuartiereId,
            Pis_Intervento_Straordinario_Update_Column.QuartiereStorico,
            Pis_Intervento_Straordinario_Update_Column.ToponimoId,
            Pis_Intervento_Straordinario_Update_Column.ToponimoStorico,
            Pis_Intervento_Straordinario_Update_Column.PuntoInizialePosizionamentoId,
            Pis_Intervento_Straordinario_Update_Column.PuntoFinalePosizionamentoId,
            Pis_Intervento_Straordinario_Update_Column.DataInserimento,
            Pis_Intervento_Straordinario_Update_Column.PrioritaId,
            Pis_Intervento_Straordinario_Update_Column.DataInizioLavori,
            Pis_Intervento_Straordinario_Update_Column.DataFineLavori,
            Pis_Intervento_Straordinario_Update_Column.TipologiaIntervento,
            Pis_Intervento_Straordinario_Update_Column.LavoriEffettuati,
            Pis_Intervento_Straordinario_Update_Column.Stato,
          ],
        },
        intervento_straordinario: model,
      })
      .subscribe({
        next: async (result) => {
          this.dirty = false;
          const ret =
            result.data?.custom_insert_intervento_straordinario
              ?.intervento_straordinario!;

          let bucket: any = await firstValueFrom(
            this._http.post('/storage/bucket/list', {
              bucket: 'intervento-straordinario-' + ret.id,
            })
          );
          this.startData.allegati = bucket.allegati.filter(
            (el: any) => el.name.indexOf('allegati') == 0
          );
        },
        error: (error) => {
          this._loaderService.stop();
          this.dialog.open(ConfirmDialogComponent, {
            data: {
              title: this._translateService.instant('Attenzione'),
              content: this._translateService.instant(
                'Non è stato possibile completare la richiesta di salvataggio. Errore: ' +
                  error
              ),
            },
          });
        },
        complete: () => {
          this.saving = false;
          if (event.loading) this._loaderService.stop();
          if (event.type == 'def')
            this._router.navigate(['/', 'pis', 'interventi', 'straordinari']);
        },
      });
  }

  constructor(
    private _http: HttpClient,
    private _translateService: TranslateService,
    private _prioritaSelectGQL: PrioritaSelectGQL,
    private _municipalitaSelectGQL: MunicipalitaSelectGQL,
    private _quartiereSelectGQL: QuartiereSelectGQL,
    private _toponimoSelectGQL: ToponimoSelectGQL,
    private _interventoStraordinarioGQL: InterventoStraordinarioGQL,
    private _toponimoNomeSelectGQL: ToponimoNomeSelectGQL,
    private _specificaPosizionamentoToponimoSelectGQL: SpecificaPosizionamentoToponimoSelectGQL,
    private _tipologiaPosizionamentoToponimoSelectGQL: TipologiaPosizionamentoToponimoSelectGQL,
    private _updateInterventoStraordinarioGQL: UpdateInterventoStraordinarioGQL,
    private _civiciSelectGQL: CiviciSelectGQL,
    private _sostegniIpiSelectGQL: SostegniIpiSelectGQL,
    private _connessioniGrafoSelectGQL: ConnessioniGrafoSelectGQL,
    private _route: ActivatedRoute,
    private _loaderService: NgxUiLoaderService,
    private _router: Router,
    public dialog: MatDialog
  ) {
    super();
    this.id = parseInt(this._route.snapshot.paramMap.get('id')!);
  }

  ngOnInit(): void {
    this._init();
  }

  private async _init() {
    this._loaderService.start();
    this.model = await firstValueFrom(
      this._interventoStraordinarioGQL
        .watch({
          where: {
            id: { _eq: this.id },
          },
        })
        .valueChanges.pipe(
          map(async (result) => {
            let intervento_straordinario =
              result.data?.pis_intervento_straordinario[0];
            if (intervento_straordinario === undefined) {
              this._loaderService.stop();
              this._router.navigate(['/', '404']);
            }

            let bucket: any = await firstValueFrom(
              this._http.post('/storage/bucket/list', {
                bucket:
                  'intervento-straordinario-' + intervento_straordinario.id,
              })
            );
            this.startData.allegati = bucket.allegati.filter(
              (el: any) => el.name.indexOf('allegati') == 0
            );

            return {
              ...{ id: intervento_straordinario.id },
              ...{
                // allegati: { allegati: base64ListToFile(segnalazione.allegati) },
                allegati: {
                  allegati: this.startData.allegati.map((f: any) =>
                    Object.defineProperty(
                      new File([], f.nome, {
                        type: f.tipo,
                      }),
                      'bucket',
                      {
                        value:
                          'intervento-straordinario-' +
                          intervento_straordinario.id,
                        writable: false,
                      }
                    )
                  ),
                },
              },
              ...{
                geolocalizzazione: {
                  mappa: [
                    ...(intervento_straordinario
                      .posizionamento_toponimo_punto_iniziale?.geoloc != null
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
                                intervento_straordinario
                                  .posizionamento_toponimo_punto_iniziale
                                  ?.geoloc.coordinates[0],
                              longitudine:
                                intervento_straordinario
                                  .posizionamento_toponimo_punto_iniziale
                                  ?.geoloc.coordinates[1],
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
                    ...(intervento_straordinario
                      .posizionamento_toponimo_punto_finale?.geoloc != null
                      ? [
                          {
                            key: 'punto_finale',
                            label:
                              this._translateService.instant('Punto finale'),
                            punto: new BehaviorSubject<{
                              latitudine: number | null;
                              longitudine: number | null;
                              key: string;
                            }>({
                              latitudine:
                                intervento_straordinario
                                  .posizionamento_toponimo_punto_finale?.geoloc
                                  .coordinates[0],
                              longitudine:
                                intervento_straordinario
                                  .posizionamento_toponimo_punto_finale?.geoloc
                                  .coordinates[1],
                              key: 'punto_finale',
                            }),
                            color: { code: '#f44336', label: 'warn' },
                          },
                        ]
                      : [
                          {
                            key: 'punto_finale',
                            label:
                              this._translateService.instant('Punto finale'),
                            punto: new BehaviorSubject<{
                              latitudine: number | null;
                              longitudine: number | null;
                              key: string;
                            }>({
                              latitudine: null,
                              longitudine: null,
                              key: 'punto_finale',
                            }),
                            color: { code: '#f44336', label: 'warn' },
                          },
                        ]),
                  ],
                },
              },
              ...{
                localizzazione: {
                  municipalita: intervento_straordinario.municipalita,
                  quartiere: intervento_straordinario.quartiere,
                  toponimo: intervento_straordinario.toponimo,
                  posizionamento_toponimo_punto_iniziale: Object.assign(
                    {},
                    intervento_straordinario.posizionamento_toponimo_punto_iniziale
                  ),
                  posizionamento_toponimo_punto_finale: Object.assign(
                    {},
                    intervento_straordinario.posizionamento_toponimo_punto_finale
                  ),
                },
              },
              ...{
                intervento: {
                  terminato:
                    intervento_straordinario.data_fine_lavori != null
                      ? true
                      : false,
                  data_inserimento: intervento_straordinario.data_inserimento,
                  data_inizio_lavori:
                    intervento_straordinario.data_inizio_lavori,
                  data_fine_lavori: intervento_straordinario.data_fine_lavori,
                  priorita: intervento_straordinario.priorita,
                  tipologia_intervento:
                    intervento_straordinario.tipologia_intervento,
                  lavori_effettuati: intervento_straordinario.lavori_effettuati,
                },
              },
            };
          })
        )
    );

    this._loaderService.stop();
  }
}
