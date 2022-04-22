import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs';
import { Dirty } from 'src/app/_core/_components/form/form.component';
import { IndicatoriObj } from 'src/app/_core/_models/pms/indicatori.interface';
import {
  TipologiaDissesoSelectGQL,
  UpdateFormulaGQL,
} from 'src/app/_core/_services/generated/graphql';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent extends Dirty implements OnInit {
  old: string = '';
  options: FormlyFormOptions = {};
  form: FormGroup = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = [
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
          key: 'name',
          className: 'flex-1 no-padding',
          type: 'input',
          templateOptions: {
            required: true,
          },
          expressionProperties: {
            'templateOptions.label': this._translate.stream('Nome'),
          },
        },
        {
          key: 'code',
          className: 'flex-2',
          type: 'input',
          templateOptions: {
            required: true,
          },
          validators: {
            formato: {
              expression: (c: any) => /^[a-zA-Z0-9_]+$/.test(c.value),
              message: (error: any, field: FormlyFieldConfig) =>
                this._translate.instant(
                  'Il codice può contenere solo lettere minuscole, maiuscole, numeri e il simbolo _.'
                ),
            },
          },
          asyncValidators: {
            code: {
              expression: (c: any) => {
                const formData = new FormData();
                formData.append('code', c.value);
                formData.append('old', this.old);
                formData.append('type', 'formula');
                return this._http
                  .post('/editor/codice/', formData)
                  .pipe(map((e: any) => e.status));
              },
              message: (error: any, field: FormlyFieldConfig) =>
                this._translate.instant(
                  'Il codice inserito è già presente nel sistema.'
                ),
            },
          },
          expressionProperties: {
            'templateOptions.label': this._translate.stream('Codice'),
          },
        },
      ],
    },
    {
      key: 'description',
      className: 'no-padding',
      type: 'textarea',
      expressionProperties: {
        'templateOptions.label': this._translate.stream('Descrizione'),
      },
    },
    {
      key: 'tipologia_dissesto',
      className: 'no-padding',
      type: 'autocomplete',
      templateOptions: {
        required: true,
        filter: (term: any, limit: number, offset: number, parent?: any) =>
          this._tipologiaDissesoSelectGQL
            .watch({
              limit: limit,
              offset: offset,
              ...(term && typeof term === 'string'
                ? { nome: { _ilike: '%' + term + '%' } }
                : {}),
            })
            .valueChanges.pipe(
              map((result) => result.data?.pis__tipologia_dissesto)
            ),
      },
      expressionProperties: {
        'templateOptions.label': this._translate.stream(
          'Tipologia di dissesto'
        ),
      },
    },
    {
      key: 'formula',
      fieldGroup: [
        {
          key: 'formula1',
          className: 'no-padding',
          type: 'formula',
          templateOptions: {
            required: true,
            ace: {
              mode: 'pmspoint',
            },
          },
          asyncValidators: {
            formula: {
              expression: (c: any) => {
                const formData = new FormData();
                formData.append('code', c.value);
                formData.append('type', 'puntuale');
                return this._http
                  .post('/editor/formula/', formData)
                  .pipe(map((e: any) => e.status));
              },
              message: (error: any, field: FormlyFieldConfig) => {
                return this._translate.instant(
                  'La formula non è scritta in modo corretto'
                );
              },
            },
          },
          expressionProperties: {
            'templateOptions.label': this._translate.stream(
              'Grado di serverità = 1'
            ),
          },
        },
        {
          key: 'formula2',
          className: 'no-padding',
          type: 'formula',
          templateOptions: {
            required: true,
            ace: {
              mode: 'pmspoint',
            },
          },
          asyncValidators: {
            formula: {
              expression: (c: any) => {
                const formData = new FormData();
                formData.append('code', c.value);
                formData.append('type', 'puntuale');
                return this._http
                  .post('/editor/formula/', formData)
                  .pipe(map((e: any) => e.status));
              },
              message: (error: any, field: FormlyFieldConfig) => {
                return this._translate.instant(
                  'La formula non è scritta in modo corretto'
                );
              },
            },
          },
          expressionProperties: {
            'templateOptions.label': this._translate.stream(
              'Grado di serverità = 2'
            ),
          },
        },
        {
          key: 'formula3',
          className: 'no-padding',
          type: 'formula',
          templateOptions: {
            required: true,
            ace: {
              mode: 'pmspoint',
            },
          },
          asyncValidators: {
            formula: {
              expression: (c: any) => {
                const formData = new FormData();
                formData.append('code', c.value);
                formData.append('type', 'puntuale');
                return this._http
                  .post('/editor/formula/', formData)
                  .pipe(map((e: any) => e.status));
              },
              message: (error: any, field: FormlyFieldConfig) => {
                return this._translate.instant(
                  'La formula non è scritta in modo corretto'
                );
              },
            },
          },
          expressionProperties: {
            'templateOptions.label': this._translate.stream(
              'Grado di serverità = 3'
            ),
          },
        },
      ],
    },
  ];

  constructor(
    private _http: HttpClient,
    private _tipologiaDissesoSelectGQL: TipologiaDissesoSelectGQL,
    private _updateFormulaGQL: UpdateFormulaGQL,
    private _translate: TranslateService,
    public dialogRef: MatDialogRef<EditComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: IndicatoriObj
  ) {
    super();
    if (this.data) {
      const formule = JSON.parse(data.formula!);
      this.old = data.code ? data.code : '';
      this.model = {
        ...this.model,
        id: data.id,
        name: data.name,
        code: data.code,
        tipologia_dissesto: data.tipologia_dissesto,
        description: data.description,
        formula: {
          formula1: formule['formula1'],
          formula2: formule['formula2'],
          formula3: formule['formula3'],
        },
      };
    }
  }

  ngOnInit(): void {}

  save(event: any) {
    this._updateFormulaGQL
      .mutate({
        formula: {
          id: this.model.id,
          code: this.model.code,
          puntuale: true,
          description: this.model.description,
          name: this.model.name,
          tipologia_dissesto_pavimentazione_id:
            this.model.tipologia_dissesto.id,
          formula: JSON.stringify(this.model.formula),
        },
      })
      .subscribe((d) => this.dialogRef.close(d));
  }
}
