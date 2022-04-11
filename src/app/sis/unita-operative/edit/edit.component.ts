import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { filter, map } from 'rxjs/operators';
import { Dirty } from 'src/app/_core/_components/form/form.component';
import { UnitaOperativaObj } from 'src/app/_core/_models/sis/unita_operativa.interface';
import {
  Sis_Assegnazione_Unita_Operativa_Constraint,
  Sis_Assegnazione_Unita_Operativa_Update_Column,
  CiviciSelectGQL,
  ToponimoSelectGQL,
  Sis_Unita_Operativa_Insert_Input,
  UpdateUnitaOperativaGQL,
} from 'src/app/_core/_services/generated/graphql';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-squadre-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class UnitaOperativeEditComponent extends Dirty implements OnInit {
  options: FormlyFormOptions = {};
  form: FormGroup = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'nome',
      type: 'input',
      templateOptions: {
        required: true,
      },
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Nome'),
      },
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'autocomplete',
          key: 'toponimo',
          templateOptions: {
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
                  },
                })
                .valueChanges.pipe(
                  map((result) => result.data?.toponomastica_toponimo)
                ),
            parentReset: (field: FormlyFieldConfig) => {
              field.parent?.fieldGroup![1].formControl?.reset();
            },
          },
          expressionProperties: {
            'templateOptions.label': this._translateService.stream('Toponimo'),
          },
        },
        {
          key: 'civico', // CIVICO
          type: 'autocomplete',
          templateOptions: {
            displayWith: (element: any) => {
              return element != null
                ? typeof element === 'object'
                  ? element.civico1
                  : element
                : '';
            },
            filter: (term: any, limit: number, offset: number, parent?: any) =>
              this._civiciSelectGQL
                .watch({
                  limit,
                  offset,
                  fk_t_code: {
                    _ilike: parent ? '%;' + parent.codice + ';%' : '',
                  },
                  ...(term && typeof term === 'string' && term != ''
                    ? { civico1: { _ilike: '%' + term + '%' } }
                    : {}),
                })
                .valueChanges.pipe(map((result) => result.data?.gis_civico)),
          },
          hooks: {
            onInit: (field) => {
              field!.templateOptions!.parent =
                field?.parent?.fieldGroup![0].formControl;
            },
          },
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
      ],
    },
    {
      key: 'note',
      type: 'textarea',
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Note'),
      },
    },
    {
      key: 'membri',
      type: 'repeat',
      expressionProperties: {
        'templateOptions.addText':
          this._translateService.stream('Aggiungi Agente'),
      },
      validators: {
        assegnazioniDuplicate: {
          expression: (control: FormArray) => {
            control.controls.forEach((c: any) => {
              if (c.controls.membro) {
                if (c.controls.membro.value !== null)
                  c.controls.membro.setErrors(null);
              }
            });
            let array = control.value
              .filter(
                (q: any) =>
                  q !== undefined &&
                  q !== null &&
                  q.membro !== undefined &&
                  q.membro !== null
              )
              .map((q: any) => {
                return q.membro.id;
              });
            if (array.filter((a: any) => a === null).length > 0) {
              return true;
            }
            let ids = [];
            for (var i = 0; i < array.length; i++) {
              if (array.filter((a: any) => a == array[i]).length > 1)
                ids.push(i);
            }
            if (ids.length > 0) {
              ids.forEach((id) => {
                let fg: FormGroup = control.controls[id] as FormGroup;
                fg.controls.membro.setErrors({
                  duplicate: true,
                });
              });
              return false;
            }
            return true;
          },
        },
      },
      fieldArray: {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
          {
            className: 'flex-1',
            key: 'membro',
            type: 'autocomplete',
            templateOptions: {
              required: true,
              displayWith: (e: any) =>
                e
                  ? e.attributes.grado[0] +
                    ' ' +
                    e.firstName +
                    ' ' +
                    e.lastName +
                    ' - ' +
                    e.attributes.matricola[0]
                  : '',

              filter: (
                term: any,
                limit: number,
                offset: number,
                parent?: any
              ) =>
                this._http
                  .get<Array<any>>(
                    environment.keycloak.admin +
                      '/groups/eac82fab-2841-47f2-b60f-893146031715/members'
                  )
                  .pipe(
                    map((result) =>
                      result.filter(
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
                    )
                  ),
            },
            expressionProperties: {
              'templateOptions.label': this._translateService.stream('Agente'),
            },
            validation: {
              messages: {
                duplicate: (error: any, field: FormlyFieldConfig) =>
                  this._translateService.instant(
                    'Non ci possono essere agenti duplicati'
                  ),
              },
            },
          },
          {
            className: 'flex-1',
            key: 'caposquadra',
            type: 'toggle',
            defaultValue: false,
            templateOptions: {
              appearance: 'standard',
            },
            expressionProperties: {
              'templateOptions.label':
                this._translateService.stream('Capo squadra'),
              'templateOptions.disabled': (model: any, formState: any) => {
                let a = this.model.membri.filter(
                  (m: any) => m.caposquadra == true
                );
                if (model.membro === undefined) {
                  return true;
                } else {
                  return a.length > 0 && model.membro.id != a[0].membro.id;
                }
              },
            },
          },
        ],
      },
    },
  ];

  constructor(
    private _http: HttpClient,
    private _updateUnitaOperativaGQL: UpdateUnitaOperativaGQL,
    private _toponimoSelectGQL: ToponimoSelectGQL,
    private _civiciSelectGQL: CiviciSelectGQL,
    private _translateService: TranslateService,
    public dialogRef: MatDialogRef<UnitaOperativeEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UnitaOperativaObj
  ) {
    super();
    if (this.data)
      this.model = {
        ...this.model,
        nome: data.nome,
        toponimo: data.toponimo,
        civico: data.civico,
        note: data.note,
        membri: data.membri.map((data: any) => {
          return {
            id: data.id,
            inizio_validita: data.inizio_validita,
            caposquadra: data.caposquadra,
            membro: data.membro,
          };
        }),
      };
  }

  ngOnInit(): void {}

  save(event: any) {
    const oldMembri = this.data ? this.data.membri : [];
    const newMembri = this.model.membri ? this.model.membri : [];

    let d = oldMembri.filter(
      (x) =>
        !newMembri
          .map((m: any) => {
            return m.membro.id;
          })
          .includes(x.membro.id)
    );
    let n = newMembri.filter(
      (x: any) => !oldMembri.map((m) => m.membro.id).includes(x.membro.id)
    );
    let u = newMembri.filter((x: any) =>
      oldMembri
        .map((m) => m.membro.id + '-' + !m.caposquadra)
        .includes(x.membro.id + '-' + x.caposquadra)
    );

    let squadra: Sis_Unita_Operativa_Insert_Input = {
      nome: this.model.nome,
      ...(this.model.toponimo ? { toponimo: this.model.toponimo } : {}),
      ...(this.model.civico
        ? {
            civico:
              this.model.civico && typeof this.model.civico === 'object'
                ? this.model.civico.civico1
                : this.model.civico,
          }
        : {}),
      note: this.model.note,
    };

    squadra = this.data ? { ...squadra, ...{ id: this.data.id } } : squadra;

    const now = new Date();

    squadra =
      n.length > 0 || u.length > 0
        ? {
            ...squadra,
            ...{
              membri: {
                data: [
                  ...(squadra.membri?.data || []),
                  ...n.map((m: any) => {
                    return {
                      inizio_validita: now,
                      membro: m.membro,
                      username: m.membro.username,
                    };
                  }),
                  ...u.map((m: any) => {
                    return {
                      inizio_validita: now,
                      membro: m.membro,
                      username: m.membro.username,
                    };
                  }),
                ],
              },
            },
          }
        : squadra;

    squadra =
      d.length > 0 || u.length > 0
        ? {
            ...squadra,
            ...{
              membri: {
                on_conflict: {
                  constraint:
                    Sis_Assegnazione_Unita_Operativa_Constraint.AssegnazioneUnitaOperativaPkey,
                  update_columns: [
                    Sis_Assegnazione_Unita_Operativa_Update_Column.FineValidita,
                  ],
                },
                data: [
                  ...(squadra.membri?.data || []),
                  ...d.map((m: any) => {
                    return {
                      fine_validita: now,
                      id: m.id,
                      caposquadra: m.caposquadra,
                      membro: m.membro,
                      username: m.membro.username,
                      inizio_validita: m.inizio_validita,
                    };
                  }),
                  ...u.map((m: any) => {
                    return {
                      fine_validita: now,
                      id: m.id,
                      caposquadra: m.caposquadra,
                      membro: m.membro,
                      username: m.membro.username,
                      inizio_validita: m.inizio_validita,
                    };
                  }),
                ],
              },
            },
          }
        : squadra;

    console.log(squadra);

    this._updateUnitaOperativaGQL
      .mutate({
        objects: squadra,
      })
      .subscribe((d) => this.dialogRef.close(d));
  }
}
