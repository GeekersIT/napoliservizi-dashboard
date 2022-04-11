import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import {
  Pis__Stato_Segnalazione_Enum,
  Pis_Segnalazione_Constraint,
  Pis_Segnalazione_Update_Column,
} from 'src/app/_core/_services/generated/graphql';
import { SegnalazioneEdit } from '../../edit.abstract';

@Component({
  selector: 'app-segnalazioni-protocollate-sospendi',
  templateUrl: './sospendi.component.html',
  styleUrls: ['./sospendi.component.scss'],
})
export class SegnalazioniProtocollateSospendiComponent
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
            key: 'sospendi',
            expressionProperties: {
              'templateOptions.label':
                this._translateService.stream('Sospendi'),
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
                key: 'note',
                type: 'textarea',
                templateOptions: {
                  required: true,
                },
                expressionProperties: {
                  'templateOptions.label':
                    this._translateService.stream('Motivazione'),
                },
              },
            ],
          },
        ],
        ...this.steps.filter(
          (step) => step.key != 'intervento' && step.key != 'geolocalizzazione'
        ),
      ],
    },
  ];

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
    this._updateSegnalazioneGQL
      .mutate({
        on_conflict: {
          constraint: Pis_Segnalazione_Constraint.SegnalazionePkey,
          update_columns: [Pis_Segnalazione_Update_Column.Stato],
        },
        segnalazione: {
          id: this.id,
          stato: Pis__Stato_Segnalazione_Enum.Sospesa,
          eventi: {
            data: [
              {
                created_at: this.model.sospendi.data,
                note: this.model.sospendi.note,
                stato: Pis__Stato_Segnalazione_Enum.Sospesa,
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
