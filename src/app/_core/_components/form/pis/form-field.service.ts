import { Injectable } from "@angular/core";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { TranslateService } from "@ngx-translate/core";
import { distinctUntilChanged, map, mergeMap, Observable, of, startWith } from "rxjs";
import { ForceSelectionMatch } from "src/app/_core/_formly/_validators/force-selection.match";
import { MunicipalitaSelectGQL, QuartiereSelectGQL, SpecificaPosizionamentoToponimoSelectGQL, TipologiaPosizionamentoToponimoSelectGQL, ToponimoSelectGQL } from "src/app/_core/_services/generated/graphql";

interface  LocalizzazioneNamedParameters {
  key?: string;
  clazz? : string;
  root?: string;
  required?: boolean;
  multiple?: boolean;
  groupLabel?:string;
}

@Injectable({
    providedIn: 'root',
   })
export class LocalizzazioneFormFieldService {
  
    constructor(
      private _translateService: TranslateService,
      private _municipalitaSelectGQL: MunicipalitaSelectGQL,
      private _quartiereSelectGQL: QuartiereSelectGQL,
      private _toponimoSelectGQL: ToponimoSelectGQL,
      private _specificaPosizionamentoToponimoSelectGQL: SpecificaPosizionamentoToponimoSelectGQL,
      private _tipologiaPosizionamentoToponimoSelectGQL: TipologiaPosizionamentoToponimoSelectGQL,
    ) { }
  
    getMunicipalita(params?: LocalizzazioneNamedParameters):FormlyFieldConfig{
      let field:FormlyFieldConfig = {
        className: params?.clazz||'',
        type: 'autocomplete',
        key: params?.key||'municipalita',
        templateOptions: {
          required: params?.required === undefined ? true : params?.required,
          multiple: params?.multiple === undefined ? false : params?.multiple,

          filter: (term:any) => term && typeof term === 'string' ? this._municipalitaSelectGQL.subscribe().pipe(map(result => result.data?.municipalita.filter(m => m.nome.toLocaleLowerCase().indexOf(term.toLowerCase()) >= 0))) : this._municipalitaSelectGQL.subscribe().pipe(map(result => result.data?.municipalita)),
        },
        validators: {
          validation: [ForceSelectionMatch],
        },
        expressionProperties: {
          'templateOptions.label': this._translateService.stream('Municipalità'),
        }
      };
      return field
    }

    getQuartieri(params?: LocalizzazioneNamedParameters):FormlyFieldConfig{
      let field:FormlyFieldConfig = {
        className:  params?.clazz||'',
        type: 'autocomplete',
        key: params?.key||'quartiere',
        templateOptions: {
          required: params?.required === undefined ? true : params?.required,
          multiple: params?.multiple === undefined ? false : params?.multiple,
          ...(params?.root ? {
            filter: (term:any) => of([]),
          } : {} ),
          ...(!params?.root ? {
          filter: (term:any) => term && typeof term === 'string' ? this._quartiereSelectGQL.subscribe().pipe(map(result => result.data?.quartiere.filter(q => q.nome.toLocaleLowerCase().indexOf(term.toLowerCase()) >= 0))) : this._quartiereSelectGQL.subscribe().pipe(map(result => result.data?.quartiere)),
          } : {} )
        },
        validators: {
          validation: [ForceSelectionMatch],
        },
        ...(params?.root ? {
          hooks: {
            onInit: (field) => {
              const municipalita = field!.form!.get(params?.root!);

              municipalita!.valueChanges.subscribe(municipalita => {

                console.log(municipalita);

                field!.templateOptions!.reset.next({});
                
                field!.templateOptions!.filter = (term:any) => term && typeof term === 'string' ?
                this._quartiereSelectGQL.subscribe({
                  where: {
                    municipalita: {
                      municipalita_id: {
                        _eq: municipalita.id
                      }
                    }
                  }
                }).pipe(map(result => result.data?.quartiere.filter(q => q.nome.toLocaleLowerCase().indexOf(term.toLowerCase()) >= 0))) :
                this._quartiereSelectGQL.subscribe({
                  where: {
                    municipalita: {
                      municipalita_id: {
                        _eq: municipalita.id
                      }
                    }
                  }
                }).pipe(map(result => result.data?.quartiere));
              });
              
              
            }
          },
        } :{}),
        expressionProperties: {
          'templateOptions.label': this._translateService.stream('Quartiere'),
        }
      };
      return field;
    }

    getToponimi(params?: LocalizzazioneNamedParameters):FormlyFieldConfig{
      let field:FormlyFieldConfig = {
        className:  params?.clazz||'',
        type: 'autocomplete',
        key: params?.key||'toponimo',
        templateOptions: {
          required: params?.required === undefined ? true : params?.required,
          multiple: params?.multiple === undefined ? false : params?.multiple,
          displayWith: (e:any) => e ? (e.dug ? e.dug.nome+" " : "")+e.nome : '',
          filter: (term:any) => term && typeof term === 'string' ? this._toponimoSelectGQL.subscribe().pipe(map(result => result.data?.toponimo.filter(q => q.nome.toLocaleLowerCase().indexOf(term.toLowerCase()) >= 0))) : this._toponimoSelectGQL.subscribe().pipe(map(result => result.data?.toponimo)),
        },
        validators: {
          validation: [ForceSelectionMatch],
        },
        ...(params?.root ? {
          hooks: {
            onInit: (field) => {
              const quartiere = field!.form!.get(params?.root!);

              quartiere!.valueChanges.subscribe(quartiere => {
                field!.templateOptions!.reset.next({});
                field!.templateOptions!.filter = (term:any) => term && typeof term === 'string' ?
                this._toponimoSelectGQL.subscribe({
                  where: {
                    assegnazioni: {
                      quartiere_id: {
                        _eq: quartiere.id
                      }
                    }
                  }
                }).pipe(map(result => result.data?.toponimo.filter(q => q.nome.toLocaleLowerCase().indexOf(term.toLowerCase()) >= 0))) :
                this._toponimoSelectGQL.subscribe({
                  where: {
                    assegnazioni: {
                      quartiere_id: {
                        _eq: quartiere.id
                      }
                    }
                  }
                }).pipe(map(result => result.data?.toponimo));
              });
            }
          },
        } :{}),
        expressionProperties: {
          'templateOptions.label': this._translateService.stream('Toponimo'),
        }
      };
      return field;
    }

    getPosizionamentoToponimo(params?: LocalizzazioneNamedParameters):FormlyFieldConfig{
      let field:FormlyFieldConfig = {
        key: params?.key||'posizionamento_toponimo',
        fieldGroup: [
          {
            ...(params?.groupLabel ? {
              className: 'section-label',
              template: '<h3><b>'+params?.groupLabel+'</b></h3>',
            } : {})
          },
          {
          key: 'tipologia_id',
          type: 'autocomplete',
          templateOptions: {
            multiple: false,
            required:true,
            filter: (term:any) => term && typeof term === 'string' ? this._tipologiaPosizionamentoToponimoSelectGQL.subscribe().pipe(map(result => result.data?._tipologia_posizionamento_toponimo.filter(e => e.nome.toLocaleLowerCase().indexOf(term.toLowerCase()) >= 0))) : this._tipologiaPosizionamentoToponimoSelectGQL.subscribe().pipe(map(result => result.data?._tipologia_posizionamento_toponimo)),
          },
          expressionProperties: {
            'templateOptions.label': this._translateService.stream('Posizione'),
          },
        },{
          fieldGroup: [{
            hideExpression: (model: any, formState: any) => {
              return model.tipologia_id && [1,2].includes(model.tipologia_id.id) ? false : true;
            },
            fieldGroupClassName: 'display-flex',
            fieldGroup: [{
              className: 'flex-1',
              key: 'specifica_id',
              type: 'autocomplete',
              templateOptions: {
                multiple: false,
                required:true,
                filter: (term:any) => term && typeof term === 'string' ? this._specificaPosizionamentoToponimoSelectGQL.subscribe().pipe(map(result => result.data?._specifica_posizionamento_toponimo.filter(e => e.nome.toLocaleLowerCase().indexOf(term.toLowerCase()) >= 0))) : this._specificaPosizionamentoToponimoSelectGQL.subscribe().pipe(map(result => result.data?._specifica_posizionamento_toponimo)),
              },
              expressionProperties: {
                'templateOptions.label': this._translateService.stream('Specificare per punto iniziale'),
              },
            },{
              hideExpression: (model: any, formState: any) => {
                return model.specifica_id ? false : true;
              },
              key: 'valore',
              type: 'input',
              templateOptions: {
                required:true,
              },
              expressionProperties: {
                'templateOptions.label': (model: any, formState: any) => this._translateService.instant('{specifica}',{specifica:model.specifica_id?model.specifica_id.id:''})
              },
            }]
          }]
        },{
          hideExpression: (model: any, formState: any) => {
            return model.tipologia_id && [3,4].includes(model.tipologia_id.id) ? false : true;
          },
          key: 'valore',
          type: 'input',
          templateOptions: {
            required:true,
          },
          expressionProperties: {
            'templateOptions.label': this._translateService.stream('Incrocio'),
          },
        },{
          key: 'note',
          type: 'textarea',
          templateOptions: {
            rows: 5,
          },
          expressionProperties: {
            'templateOptions.label': this._translateService.stream('Note'),
          },
        },]
      };
      return field;
    }

}