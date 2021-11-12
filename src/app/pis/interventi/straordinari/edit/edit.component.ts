import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { distinctUntilChanged, map, mergeMap, of, startWith } from 'rxjs';
import { LocalizzazioneFormFieldService } from 'src/app/_core/_components/form/pis/form-field.service';
import { ForceSelectionMatch } from 'src/app/_core/_formly/_validators/force-selection.match';
import { MunicipalitaSelectGQL, PrioritaSelectGQL, QuartiereSelectGQL, SpecificaPosizionamentoToponimoSelectGQL, TipologiaPosizionamentoToponimoSelectGQL, ToponimoSelectGQL, ToponimoSelectSubscription } from 'src/app/_core/_services/generated/graphql';

@Component({
  selector: 'app-interventi-straordinari-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class InterventiStraordinariEditComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [{
    type: 'stepper',
    templateOptions:{
      orientation:'horizontal'
    },
    fieldGroup: [{        
        expressionProperties: {
          'templateOptions.label': this._translateService.stream('Localizzazione segnalazione'),
        },
        fieldGroup: [{
          fieldGroupClassName: 'display-flex',
          fieldGroup: [
            this._localizzazioneFormFieldService.getMunicipalita({key:'municipalita_id', clazz:'flex-1'}),
            this._localizzazioneFormFieldService.getQuartieri({key:'quartieri_id', clazz:'flex-1', root: 'municipalita_id' }),
          ]},
          this._localizzazioneFormFieldService.getToponimi({key:'toponimo_id', root: 'quartieri_id' }),
          this._localizzazioneFormFieldService.getPosizionamentoToponimo({key:'posizionamento_toponimo_punto_iniziale', groupLabel: this._translateService.instant('Punto iniziale')}),
          // this._localizzazioneFormFieldService.getPosizionamentoToponimo({key:'posizionamento_toponimo_punto_finale', groupLabel: this._translateService.instant('Punto finale')}),
        ]},
      {
        expressionProperties: {
          'templateOptions.label': this._translateService.stream('Geo-localizzazione'),
        },
        fieldGroup: [
         
        ],
      },
      {
        expressionProperties: {
          'templateOptions.label': this._translateService.stream('Allegati'),
        },
        fieldGroup: [
          
        ],
      },
      {
        expressionProperties: {
          'templateOptions.label': this._translateService.stream('Informazioni intervento'),
        },
        fieldGroup: [{
            key: 'data_inserimento',
            type: 'input',
            templateOptions: {
              type: 'date',
              required: true,
            },
            expressionProperties: {
              'templateOptions.label': this._translateService.stream('Data inserimento'),
            },
          },{
            key: 'priorita_id',
            type: 'autocomplete',
            templateOptions: {
              multiple: false,
              filter: (term:any) => term && typeof term === 'string' ? this._prioritaSelectGQL.subscribe().pipe(map(result => result.data?._priorita.filter(e => e.nome.toLocaleLowerCase().indexOf(term.toLowerCase()) >= 0))) : this._prioritaSelectGQL.subscribe().pipe(map(result => result.data?._priorita)),
            },
            expressionProperties: {
              'templateOptions.label': this._translateService.stream('Priorità'),
            },
          },{
            fieldGroupClassName: 'display-flex',
            fieldGroup: [{
              key: 'data_inizio_lavori',
              className: 'flex-1',
              type: 'input',
              templateOptions: {
                type: 'date',
                required: true,
              },
              expressionProperties: {
                'templateOptions.label': this._translateService.stream('Data inizio lavori'),
              },
            },{
              key: 'data_fine_lavori',
              className: 'flex-1',
              type: 'input',
              templateOptions: {
                type: 'date',
                required: true,
              },
              expressionProperties: {
                'templateOptions.label': this._translateService.stream('Data fine lavori'),
              },
            }],
          },{
            key: 'tipologia_intervento',
            type: 'textarea',
            templateOptions: {
              rows: 5,
              required: true,
            },
            expressionProperties: {
              'templateOptions.label': this._translateService.stream('Tipologia di intervento'),
            },
          },{
            key: 'lavori_effettuati',
            type: 'textarea',
            templateOptions: {
              rows: 5,
              required: true,            },
            expressionProperties: {
              'templateOptions.label': this._translateService.stream('Lavori effettuati'),
            },
          }],
      },
    ],
  }];

  save() {
    alert(JSON.stringify(this.model));
  }
  
  constructor(
    private _translateService: TranslateService,
    private _prioritaSelectGQL: PrioritaSelectGQL,
    private _localizzazioneFormFieldService: LocalizzazioneFormFieldService
  ) { }

  ngOnInit(): void {
  }


}
