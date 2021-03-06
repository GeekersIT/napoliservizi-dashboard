import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import {
  Pis__Stato_Segnalazione_Enum,
  Pis_Segnalazione_Constraint,
  Pis_Segnalazione_Update_Column,
} from 'src/app/_core/_services/generated/graphql';
import { SegnalazioneEdit } from '../../edit.abstract';

@Component({
  selector: 'app-segnalazioni-protocollate-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class SegnalazioniProtocollateViewComponent
  extends SegnalazioneEdit
  implements OnInit
{
  fields: FormlyFieldConfig[] = [
    {
      type: 'stepper',
      templateOptions: {
        orientation: 'horizontal',
      },
      fieldGroup: [...this.steps],
    },
  ];

  ngOnInit(): void {
    this.disabled.base.next(true);
    this.hide.complete.next(false);
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
  async save(event: any) {}
}
