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
  IndicatoriPerformanceGQL,
  UpdateIndicatoreGlobaleGQL,
} from 'src/app/_core/_services/generated/graphql';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent extends Dirty implements OnInit {
  old: string = '';
  variabili;
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
                formData.append('type', 'globale');
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
      key: 'formula',
      fieldGroup: [
        {
          key: 'formula',
          className: 'no-padding',
          type: 'formula',
          templateOptions: {
            required: true,
            ace: {
              mode: 'pmsglobal',
            },
          },
          asyncValidators: {
            formula: {
              expression: (c: any) => {
                const formData = new FormData();
                formData.append('code', c.value);
                return this._http
                  .post('/editor/globale/', formData)
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
            'templateOptions.label': this._translate.stream('Formula = '),
          },
        },
      ],
    },
  ];

  constructor(
    private _http: HttpClient,
    private _updateIndicatoreGlobaleGQL: UpdateIndicatoreGlobaleGQL,
    private _indicatoriPerformanceGQL: IndicatoriPerformanceGQL,
    private _translate: TranslateService,
    public dialogRef: MatDialogRef<EditComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: IndicatoriObj
  ) {
    super();
    this.variabili = _indicatoriPerformanceGQL.subscribe().pipe(
      map((e) =>
        e.data?.pms_indice_performance.map((f) => {
          return { code: f.code, description: f.description };
        })
      )
    );
    if (this.data) {
      const formule = JSON.parse(data.formula!);
      this.old = data.code ? data.code : '';
      this.model = {
        ...this.model,
        id: data.id,
        name: data.name,
        code: data.code,
        description: data.description,
        formula: {
          formula: formule['formula'],
        },
      };
    }
  }

  ngOnInit(): void {}

  save(event: any) {
    this._updateIndicatoreGlobaleGQL
      .mutate({
        globale: {
          id: this.model.id,
          code: this.model.code,
          description: this.model.description,
          name: this.model.name,
          formula: JSON.stringify(this.model.formula),
        },
      })
      .subscribe((d) => this.dialogRef.close(d));
  }
}
