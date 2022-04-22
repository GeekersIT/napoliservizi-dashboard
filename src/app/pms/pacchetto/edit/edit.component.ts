import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs/operators';
import {
  PacchettoMaterialiSelectGQL,
  UpdatePacchettoStradaleGQL,
} from 'src/app/_core/_services/generated/graphql';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  options: FormlyFormOptions = {};
  form: FormGroup = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'toponimo_id',
      className: 'hidden',
      type: 'input',
      templateOptions: {
        readonly: true,
      },
    },
    {
      key: 'note',
      type: 'textarea',
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Note'),
      },
    },
    {
      key: 'strati',
      type: 'repeat',
      expressionProperties: {
        'templateOptions.addText':
          this._translateService.stream('Aggiungi strato'),
      },
      fieldArray: {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
          {
            key: 'materiale',
            type: 'autocomplete',
            className: 'flex-1',
            templateOptions: {
              required: true,
              filter: (
                term: any,
                limit: number,
                offset: number,
                parent?: any
              ) =>
                this._pacchettoMaterialiSelectGQL
                  .watch({
                    limit: limit,
                    offset: offset,
                    ...(term && typeof term === 'string'
                      ? { nome: { _ilike: '%' + term + '%' } }
                      : {}),
                  })
                  .valueChanges.pipe(
                    map((result) => result.data?.pms__materiale)
                  ),
            },
            expressionProperties: {
              'templateOptions.label':
                this._translateService.stream('Materiale'),
            },
          },
          {
            key: 'spessore',
            className: 'flex-1',
            type: 'input',
            templateOptions: {
              required: true,
            },
            expressionProperties: {
              'templateOptions.label':
                this._translateService.stream('Spessore'),
            },
          },
          {
            key: 'note',
            className: 'flex-1',
            type: 'input',
            expressionProperties: {
              'templateOptions.label': this._translateService.stream('Note'),
            },
          },
        ],
      },
    },
  ];

  constructor(
    private _updatePacchettoStradale: UpdatePacchettoStradaleGQL,
    private _pacchettoMaterialiSelectGQL: PacchettoMaterialiSelectGQL,
    private _translateService: TranslateService,
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (this.data) {
      this.model = Object.assign(
        {},
        {
          toponimo_id: this.data.id,
          note:
            this.data.pacchetti.length > 0 ? this.data.pacchetti[0].note : null,
          strati:
            this.data.pacchetti.length > 0
              ? Object.assign([], this.data.pacchetti[0].strati)
              : [],
        }
      );
    }
  }

  ngOnInit(): void {}

  save() {
    this._updatePacchettoStradale
      .mutate({
        objects: {
          note: this.model.note,
          toponimo_id: this.model.toponimo_id,
          strati: {
            data: this.model.strati.map((strato: any) => {
              return {
                note: strato.note,
                spessore: strato.spessore,
                materiale_id: strato.materiale.id,
              };
            }),
          },
        },
      })
      .subscribe((d) => this.dialogRef.close(d));
  }
}
