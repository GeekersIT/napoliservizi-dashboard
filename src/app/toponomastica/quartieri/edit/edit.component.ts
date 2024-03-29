import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalizzazioneFormFieldService } from 'src/app/_core/_components/form/pis/form-field.service';
import { MunicipalitaSelectObj } from 'src/app/_core/_models/toponomastica/municipalita.interface';
import { QuartiereObj } from 'src/app/_core/_models/toponomastica/quartiere.interface';
import {
  Toponomastica_Assegnazione_Quartiere_Constraint,
  Toponomastica_Assegnazione_Quartiere_Update_Column,
  Toponomastica_Quartiere_Insert_Input,
  UpdateQuartiereGQL,
} from 'src/app/_core/_services/generated/graphql';

@Component({
  selector: 'app-quartieri-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class QuartieriEditComponent implements OnInit {
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
      key: 'municipalita',
      type: 'repeat',
      expressionProperties: {
        'templateOptions.addText': this._translateService.stream(
          'Aggiungi municipalità'
        ),
      },
      validators: {
        municipalitaDuplicate: {
          expression: (control: FormArray) => {
            let array = control.value
              .filter((q: any) => q !== undefined && q !== null)
              .map((q: any) => q.id);
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
                control.controls[id].setErrors({
                  duplicate: true,
                });
              });
              return false;
            }
            return true;
          },
        },
      },
      fieldArray: this._localizzazioneFormFieldService.getMunicipalita(),
      // {
      //   type: 'autocomplete',
      //   templateOptions: {
      //     required:true,

      //     filter: (term:any) => term && typeof term === 'string' ? this._municipalitaSelectGQL.subscribe().pipe(map(result => result.data?.municipalita.filter(m => m.nome.toLocaleLowerCase().indexOf(term.toLowerCase()) >= 0))) : this._municipalitaSelectGQL.subscribe().pipe(map(result => result.data?.municipalita)),
      //   },
      //   expressionProperties: {
      //     'templateOptions.label': this._translateService.stream('Municipalità'),
      //   },
      //   validation: {
      //     messages: {
      //       duplicate: (error:any, field: FormlyFieldConfig) => this._translateService.instant('Non ci possono essere municipalità duplicati')
      //     }
      //   }
      // }
    },
  ];

  constructor(
    private _localizzazioneFormFieldService: LocalizzazioneFormFieldService,
    private _updateQuartiereGQL: UpdateQuartiereGQL,
    private _translateService: TranslateService,
    public dialogRef: MatDialogRef<QuartieriEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: QuartiereObj
  ) {
    if (this.data)
      this.model = {
        ...this.model,
        nome: data.nome,
        municipalita: data.municipalita.map((data) => {
          return {
            id: data.municipalita.id,
            nome: data.municipalita.nome,
          };
        }),
      };
  }

  ngOnInit(): void {}

  save() {
    const oldMunicipaita = this.data ? this.data.municipalita : [];
    const newMunicipalita = this.model.municipalita
      ? this.model.municipalita.map((q: MunicipalitaSelectObj) => q.id)
      : [];

    let d = oldMunicipaita.filter(
      (x) => !newMunicipalita.includes(x.municipalita.id)
    );
    let n = newMunicipalita.filter(
      (x: any) => !oldMunicipaita.map((q) => q.municipalita.id).includes(x)
    );

    let quartiere: Toponomastica_Quartiere_Insert_Input = {
      nome: this.model.nome,
    };
    quartiere = this.data
      ? { ...quartiere, ...{ id: this.data.id } }
      : quartiere;

    // const now = new Date().toLocaleString("it-IT", {timeZone: "Europe/Rome"});

    const now = new Date();
    quartiere =
      n.length > 0
        ? {
            ...quartiere,
            ...{
              municipalita: {
                data: [
                  ...(quartiere.municipalita?.data || []),
                  ...n.map((q: number) => {
                    return { inizio_validita: now, municipalita_id: q };
                  }),
                ],
              },
            },
          }
        : quartiere;

    quartiere =
      n.length > 0
        ? {
            ...quartiere,
            ...{
              municipalita: {
                on_conflict: {
                  constraint:
                    Toponomastica_Assegnazione_Quartiere_Constraint.AssegnazioneQuartierePkey,
                  update_columns: [
                    Toponomastica_Assegnazione_Quartiere_Update_Column.FineValidita,
                  ],
                },
                data: [
                  ...(quartiere.municipalita?.data || []),
                  ...d.map((q: any) => {
                    return {
                      fine_validita: now,
                      id: q.id,
                      municipalita_id: q.municipalita.id,
                      inizio_validita: q.inizio_validita,
                    };
                  }),
                ],
              },
            },
          }
        : quartiere;

    this._updateQuartiereGQL.mutate({ quartiere }).subscribe((d) => {
      this.dialogRef.close(d);
    });
  }
}
