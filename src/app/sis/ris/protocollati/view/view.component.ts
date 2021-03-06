import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Sis__Stato_Ris_Enum } from 'src/app/_core/_services/generated/graphql';
import { RisEdit } from '../../edit.abstract';

@Component({
  selector: 'app-segnalazioni-protocollate-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class RisProtocollatiViewComponent extends RisEdit implements OnInit {
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
          { stato: { _neq: Sis__Stato_Ris_Enum.Bozza } },
          { stato: { _neq: Sis__Stato_Ris_Enum.Inviato } },
          { stato: { _neq: Sis__Stato_Ris_Enum.Compilazione } },
        ],
      },
    });
  }
  async save(event: any) {}
}
