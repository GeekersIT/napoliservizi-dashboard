import { E } from "@angular/cdk/keycodes";
import { Directive, Inject } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { FetchResult } from "@apollo/client";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { TranslateService } from "@ngx-translate/core";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { map, mergeMap, firstValueFrom, BehaviorSubject, of } from "rxjs";
import { ConfirmDialogComponent } from "src/app/_core/_components/confirm-dialog/confirm-dialog.component";
import { Dirty } from "src/app/_core/_components/form/form.component";
import { marker } from "src/app/_core/_formly/_components/mappa-formly/mappa-formly.component";
import { base64ListToFile, fileListToBase64 } from "src/app/_core/_functions";
import { _Stato_Segnalazione_Enum, PrioritaSelectGQL, FormaDissesoSelectGQL, TipologiaDissesoSelectGQL, SezioneProtocolloSelectGQL, TitoloSelectGQL, SegnalazioneSelectGQL, MunicipalitaSelectGQL, QuartiereSelectGQL, ToponimoSelectGQL, ToponimoNomeSelectGQL, SpecificaPosizionamentoToponimoSelectGQL, TipologiaPosizionamentoToponimoSelectGQL, CiviciSelectGQL, SostegniIpiSelectGQL, ConnessioniGrafoSelectGQL, Allegato_Constraint, Allegato_Update_Column, Dissesto_Constraint, Dissesto_Update_Column, Posizionamento_Toponimo_Constraint, Posizionamento_Toponimo_Update_Column, Protocollo_Constraint, Protocollo_Destinatario_Constraint, Protocollo_Destinatario_Esterno_Constraint, Protocollo_Destinatario_Esterno_Update_Column, Protocollo_Destinatario_Update_Column, Protocollo_Update_Column, Segnalazione_Collegata_Constraint, Segnalazione_Collegata_Update_Column, Tecnico_Referente_Constraint, Tecnico_Referente_Update_Column, SegnalazioneGQL, UpdateSegnalazioneGQL, UpdateSegnalazioneMutation, Exact, Segnalazione_Bool_Exp, CondizioniTrafficoSelectGQL, GiorniTrascorsiSelectGQL, MaterialeSelectGQL } from "src/app/_core/_services/generated/graphql";

@Directive()
export abstract class SegnalazioneEdit extends Dirty {
    disabled: any = {
      base: new BehaviorSubject<boolean>(false),
      complete: new BehaviorSubject<boolean>(true),
    }; 
    hide: any = {
      complete: new BehaviorSubject<boolean>(true),
    };

    form = new FormGroup({});
    model: any = {};
    options: FormlyFormOptions = {};
    id: number;
    
    startData: any = {
      allegati: [],
      protocollo: {
        destinatari : []
      },
      segnalazioni_collegate: [],
      intervento: {
        allegati: [],
        attrezzature_impiegate: [],
        materiali_dissesto: [],
        segnaletica_lasciata: [],
        veicoli: [],
      }
    }
    saving: boolean = false;
  
    steps: FormlyFieldConfig[] = [
      
      
      
      {        
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Localizzazione segnalazione'),
      },
      key: 'localizzazione',
      fieldGroup: [{
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
          {
            className: 'flex-1',
            type: 'autocomplete',
            key: 'municipalita',
            templateOptions: {
              required: true,
              filter: (term:any, limit:number, offset:number, parent?:any, ) => this._municipalitaSelectGQL.watch({
                limit,
                offset,
                ...(term && typeof term === 'string' ? { nome: { _ilike: "%"+term+"%" } } : {} )
              }).valueChanges.pipe(
                map(result => result.data?.municipalita ) 
              ),
              parentReset: (field: FormlyFieldConfig) => {
                field.parent?.fieldGroup![1].formControl?.reset();
                field.parent?.fieldGroup![2].formControl?.reset();
              }
            },
            expressionProperties: {
              'templateOptions.label': this._translateService.stream('Municipalità'),
              'templateOptions.disabled': this.disabled.base
            }
          },{
            className: 'flex-1',
            type: 'autocomplete',
            key: 'quartiere',
            templateOptions: {
              required: true,
              filter: (term:any, limit:number, offset:number, parent?:any, ) => this._quartiereSelectGQL.watch({
                  limit,
                  offset,
                  where: {
                    ...(term && typeof term === 'string' ? { nome: { _ilike: "%"+term+"%" } } : {} ),
                    municipalita: {
                      municipalita_id: {
                        _eq: parent ? parent.id : 0
                      }
                    },
                  },
              }).valueChanges.pipe(
                map(result => result.data?.quartiere ) 
              ),
              parentReset: (field: FormlyFieldConfig) => {
                field.parent?.fieldGroup![2].formControl?.reset();
              }
            },
            hooks: {
              onInit: (field) => {
                field!.templateOptions!.parent = field?.parent?.fieldGroup![0].formControl;
              }
            },
            expressionProperties: {
              'templateOptions.label': this._translateService.stream('Quartiere'),
              'templateOptions.disabled': this.disabled.base
            },
          },{
            className: 'flex-1',
            type: 'autocomplete',
            key: 'toponimo',
            templateOptions: {
              required: true,
              displayWith: (e:any) => e ? (e.dug ? e.dug.nome+" " : "")+e.nome : '',
              filter: (term:any, limit:number, offset:number, parent?:any, ) => this._toponimoSelectGQL.watch({
                limit,
                offset,
                where: {
                  ...(term && typeof term === 'string' ? { nome: { _ilike: "%"+term+"%" } } : {} ),
                  assegnazioni: {
                    quartiere_id: {
                      _eq: parent ? parent.id : 0
                    }
                  },
                },
              }).valueChanges.pipe(
                map(result => result.data?.toponimo ) 
              ),
              parentReset: (field: FormlyFieldConfig) => {
                field.parent?.parent?.fieldGroup![1].fieldGroup![1].formControl?.reset();
                field.parent?.parent?.fieldGroup![1].fieldGroup![2].fieldGroup![0].fieldGroup![0].formControl?.reset();
                field.parent?.parent?.fieldGroup![1].fieldGroup![2].fieldGroup![0].fieldGroup![1].formControl?.reset();
                field.parent?.parent?.fieldGroup![1].fieldGroup![2].fieldGroup![0].fieldGroup![2].formControl?.reset();
                field.parent?.parent?.fieldGroup![1].fieldGroup![2].fieldGroup![0].fieldGroup![3].formControl?.reset();
                field.parent?.parent?.fieldGroup![1].fieldGroup![3].formControl?.reset();
              }
            },
            hooks: {
              onInit: (field) => {             
                field!.templateOptions!.parent = field?.parent?.fieldGroup![1].formControl
              }
            },
            expressionProperties: {
              'templateOptions.label': this._translateService.stream('Toponimo'),
              'templateOptions.disabled': this.disabled.base
            }
          }]
        },{
          key: 'posizionamento_toponimo_punto_iniziale',
          hideExpression: (model: any, formState:any, field: FormlyFieldConfig | undefined) => field?.parent?.fieldGroup![0].fieldGroup![2].formControl?.value == null,
          fieldGroup: [
            {
              className: 'section-label',
              template: '<h3><b>'+this._translateService.instant('Punto iniziale')+'</b></h3>',
            },{
            key: 'tipologia',
            type: 'autocomplete',
            templateOptions: {
              required:true,
              filter: (term:any, limit:number, offset:number, parent?:any, ) => this._tipologiaPosizionamentoToponimoSelectGQL.watch({
                limit,
                offset,
                ...(term && typeof term === 'string' ? { nome: { _ilike: "%"+term+"%" } } : {} )
              }).valueChanges.pipe(
                map(result => result.data?._tipologia_posizionamento_toponimo ) 
              ),
              parentReset: (field: FormlyFieldConfig) => {
                field.parent?.fieldGroup![2].fieldGroup![0].fieldGroup![0].formControl?.reset()
                field.parent?.fieldGroup![2].fieldGroup![0].fieldGroup![1].formControl?.reset()
                field.parent?.fieldGroup![2].fieldGroup![0].fieldGroup![2].formControl?.reset()
                field.parent?.fieldGroup![2].fieldGroup![0].fieldGroup![3].formControl?.reset()
                field.parent?.fieldGroup![3].formControl?.reset();
              }
            },
            expressionProperties: {
              'templateOptions.label': this._translateService.stream('Posizione'),
              'templateOptions.disabled': this.disabled.base
            },
          },{
            fieldGroup: [{
              hideExpression: (model: any, formState:any, field?: FormlyFieldConfig) => !(field?.parent?.parent?.fieldGroup![1].formControl?.value && [1,2].includes(field?.parent?.parent?.fieldGroup[1].formControl?.value.id)),
              fieldGroupClassName: 'display-flex',
              fieldGroup: [{
                className: 'flex-1',
                key: 'specifica',
                type: 'autocomplete',
                templateOptions: {
                  required:true,
                  filter: (term:any, limit:number, offset:number, parent?:any, ) => this._specificaPosizionamentoToponimoSelectGQL.watch({
                    limit,
                    offset,
                    ...(term && typeof term === 'string' ? { nome: { _ilike: "%"+term+"%" } } : {} )
                  }).valueChanges.pipe(
                    map(result => result.data?._specifica_posizionamento_toponimo ) 
                  ),
                  parentReset: (field: FormlyFieldConfig) => {
                    field.parent?.fieldGroup![1].formControl?.reset();
                    field.parent?.fieldGroup![2].formControl?.reset();
                    field.parent?.fieldGroup![3].formControl?.reset();
                  }
                },
                expressionProperties: {
                  'templateOptions.label': this._translateService.stream('Specificare'),
                  'templateOptions.disabled': this.disabled.base
                },
              },{
                key: 'civico', // CIVICO
                type: 'autocomplete',
                templateOptions: {
                  required:true,
                  displayWith: (element:any) => {
                    return element!= null ? (typeof element === 'object' ? element.civico1 : element) : ''},
                  filter: (term:any, limit:number, offset:number, parent?:any, ) => this._civiciSelectGQL.watch({
                    limit,
                    offset,
                    fk_t_code: {
                      _ilike: parent ? '%;'+parent.codice+';%' : ''
                    },
                    ...(term && typeof term === 'string' && term != '' ? { civico1: { _ilike: "%"+term+"%" } } : {} )
                  }).valueChanges.pipe(
                    map(result => result.data?.civico) 
                  )
                },
                hooks: {
                  onInit: (field) => {
                    field!.templateOptions!.parent = field?.parent?.parent?.parent?.parent?.fieldGroup![0].fieldGroup![2].formControl
                  }
                },
                hideExpression: (model: any, formState:any) => !(model.specifica && [1].includes(model.specifica.id)),
                expressionProperties: {
                  'templateOptions.label': (model: any, formState: any) => this._translateService.instant('Civico'),
                  'templateOptions.disabled': this.disabled.base
                },
                validators: {
                  forceSelection: {
                    expression: () => true,
                  }
                }
              },{
                key: 'ipi', // IPI
                type: 'autocomplete',
                templateOptions: {
                  required:true,
                  displayWith: (element:any) => {
                    return element!= null ? (typeof element === 'object' ? element.matricola : element) : ''},
                  filter: (term:any, limit:number, offset:number, parent?:any, ) => this._sostegniIpiSelectGQL.watch({
                    limit,
                    offset,
                    fk_t_code: {
                      _ilike: parent ? '%;'+parent.codice+';%' : ''
                    },
                    ...(term && typeof term === 'string' && term != '' ? { matricola: { _ilike: "%"+term+"%" } } : {} )
                  }).valueChanges.pipe(
                    map(result => result.data?.sostegno_ipi) 
                  )
                },
                hooks: {
                  onInit: (field) => {
                    field!.templateOptions!.parent = field?.parent?.parent?.parent?.parent?.fieldGroup![0].fieldGroup![2].formControl
                  }
                },
                hideExpression: (model: any, formState:any) => !(model.specifica && [2].includes(model.specifica.id)),
                expressionProperties: {
                  'templateOptions.label': (model: any, formState: any) => this._translateService.instant('Palo della luce'),
                  'templateOptions.disabled': this.disabled.base
                },
                validators: {
                  forceSelection: {
                    expression: () => true,
                  }
                }
              },{
                key: 'km', // KM
                type: 'input',
                templateOptions: {
                  required:true,
                },
                hideExpression: (model: any, formState:any) => !(model.specifica && [3].includes(model.specifica.id)),
                expressionProperties: {
                  'templateOptions.label': (model: any, formState: any) => this._translateService.instant('Km'),
                  'templateOptions.disabled': this.disabled.base
                },
              }]
            }]
          },{
            key: 'connessione', // CONNESSIONE
            type: 'autocomplete',
            templateOptions: {
              required:true,
              displayWith: (element:any) => {
                return element!= null ? (typeof element === 'object' ? element.nome : element) : ''},
              filter: (term:any, limit:number, offset:number, parent?:any, ) => this._connessioniGrafoSelectGQL.watch({
                limit,
                offset,
                fk_t_code: {
                  _ilike: parent ? '%;'+parent.codice+';%' : ''
                }
              }).valueChanges.pipe(
                mergeMap( async (result) => {
                  let ret = Array();
                  for(let i = 0; i< result.data!.connessione_grafo.length; i++){
                    let c = result.data!.connessione_grafo[i];
                    let _in = c.fk_t_code ? c.fk_t_code?.slice(1,-1).split(';;') : [];
                    ret.push({...c,...{nome: await firstValueFrom(this._toponimoNomeSelectGQL.watch({_in:_in}).valueChanges.pipe(map(toponimo => toponimo.data.toponimo.map(el => (el.dug?el.dug.nome+' ':'')+el.nome).join(', '))))}});
                  }
                  return ret
                }),
                map(data => term && typeof term === 'string' && term != '' ? data.filter(t => t.nome.toLowerCase().indexOf(term.toLocaleLowerCase()) > -1) : data)
              )
            },
            hooks: {
              onInit: (field) => {
                field!.templateOptions!.parent = field?.parent?.parent?.fieldGroup![0].fieldGroup![2].formControl
              }
            },
            hideExpression: (model: any, formState:any, field?: FormlyFieldConfig) => !(field?.parent?.fieldGroup![1].formControl?.value && [3,4].includes(field?.parent?.fieldGroup[1].formControl?.value.id)),
            expressionProperties: {
              'templateOptions.label': (model: any, formState: any) => this._translateService.instant('Incrocio'),
              'templateOptions.disabled': this.disabled.base
            },
            validators: {
              forceSelection: {
                expression: () => true,
              }
            }
          },{
            key: 'note',
            type: 'textarea',
            expressionProperties: {
              'templateOptions.label': this._translateService.stream('Note'),
              'templateOptions.disabled': this.disabled.base
            },
          },{
            key: 'id',
            className: 'hidden',
            type: 'input',
            templateOptions: {
              readonly:true,
            },
          }]
        }
      ]
    },{
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Geo-localizzazione'),
      },
      key: 'geolocalizzazione',
      fieldGroup: [{
        key: 'mappa',
        type: 'mappa',
        templateOptions: {
          lazyLoading: true
        },
        hooks: {
          onInit: (field) => {
            let punto_iniziale = field?.formControl?.value.find((f:marker) => f.key == 'punto_iniziale');
            // CIVICO punto iniziale
            field?.parent?.parent?.fieldGroup?.find(f => f.key == 'localizzazione')?.fieldGroup![1].fieldGroup![2].fieldGroup![0].fieldGroup![1].formControl!.valueChanges.subscribe(s => {

              if(s && typeof s != 'string' && punto_iniziale){
                punto_iniziale.punto.next({
                  latitudine: s.geom.coordinates[0],
                  longitudine: s.geom.coordinates[1]
                })
              }else if(punto_iniziale){
                punto_iniziale.punto.next({
                  latitudine: null,
                  longitudine: null
                })
              }
            });
            // IPI punto iniziale
            field?.parent?.parent?.fieldGroup?.find(f => f.key == 'localizzazione')?.fieldGroup![1].fieldGroup![2].fieldGroup![0].fieldGroup![2].formControl!.valueChanges.subscribe(s => {
              if(s && typeof s != 'string' && punto_iniziale){
                punto_iniziale.punto.next({
                  latitudine: s.geom.coordinates[0][0],
                  longitudine: s.geom.coordinates[0][1]
                })
              }else if(punto_iniziale){
                punto_iniziale.punto.next({
                  latitudine: null,
                  longitudine: null
                })
              }
            });
            // CONNESSIONI punto iniziale
            field?.parent?.parent?.fieldGroup?.find(f => f.key == 'localizzazione')?.fieldGroup![1].fieldGroup![3].formControl!.valueChanges.subscribe(s => {
              if(s && typeof s != 'string' && punto_iniziale){
                punto_iniziale.punto.next({
                  latitudine: s.geom.coordinates[0],
                  longitudine: s.geom.coordinates[1],
                  propagate: true
                })
              }else if(punto_iniziale){
                punto_iniziale.punto.next({
                  latitudine: null,
                  longitudine: null
                })
              }
            });            
          }
        },
      }    
      
    ],
  },{
    expressionProperties: {
      'templateOptions.label': this._translateService.stream('Dissesto'),
    },
    key: 'dissesto',
    fieldGroup: [{
      key: 'id',
      className: 'hidden',
      type: 'input',
      templateOptions: {
        readonly:true,
      },
    },{
      key: 'forma',
      type: 'autocomplete',
      templateOptions: {
        required: true,
        filter: (term:any, limit:number, offset:number, parent?:any, ) => this._formaDissestoGQL.watch({
          limit: limit,
          offset: offset,
          ...(term && typeof term === 'string' ? { nome: { _ilike: "%"+term+"%" } } : {} )
        }).valueChanges.pipe(
          map(result => result.data?._forma_dissesto ) 
        ),
      },
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Forma'),
        'templateOptions.disabled': this.disabled.base
      },
    },{
      fieldGroupClassName: 'display-flex space-evenly',
      hideExpression: (model: any, formState:any, field: FormlyFieldConfig | undefined) => field?.parent?.fieldGroup![1].formControl?.value == null,
      fieldGroup: [{
        key: 'prima_dimensione',
        className: 'flex-1',
        type: 'input',
        templateOptions: {
          type:'number',
          required: true,
        },
        expressionProperties: {
          'templateOptions.label': (model: any, formState:any) => this._translateService.instant('{prima_dimensione}', {prima_dimensione : model && model.forma ? model.forma.id : 0}),
          'templateOptions.disabled': this.disabled.base
        },
      },{
        key: 'seconda_dimensione',
        hideExpression: (model: any, formState:any, field: FormlyFieldConfig | undefined) => [2].includes(field?.parent?.parent?.fieldGroup![1].formControl?.value.id),
        className: 'flex-1',
        type: 'input',
        templateOptions: {
          type:'number',
          required: true,
        },
        expressionProperties: {
          'templateOptions.label': (model: any, formState:any) => this._translateService.instant('{seconda_dimensione}', {seconda_dimensione : model &&  model.forma ? model.forma.id : 0}),
          'templateOptions.disabled': this.disabled.base
        },
      },{
        key: 'terza_dimensione',
        hideExpression: (model: any, formState:any, field: FormlyFieldConfig | undefined) => [1,2,3,5].includes(field?.parent?.parent?.fieldGroup![1].formControl?.value.id),
        className: 'flex-1',
        type: 'input',
        templateOptions: {
          type:'number',
          required: true,
        },
        expressionProperties: {
          'templateOptions.label': (model: any, formState:any) => this._translateService.instant('{terza_dimensione}', {terza_dimensione : model &&  model.forma ? model.forma.id : 0}),
          'templateOptions.disabled': this.disabled.base
        },
      },{
        key: 'profondita',
        className: 'flex-1',
        type: 'input',
        templateOptions: {
          type:'number',
          required: true,
        },
        expressionProperties: {
          'templateOptions.label': this._translateService.stream('Profondità'),
          'templateOptions.disabled': this.disabled.base
        }
      }]
    },{
      fieldGroupClassName: 'display-flex',
      fieldGroup: [{
        key: 'tipologia',
        className: 'flex-4',
        type: 'autocomplete',
        templateOptions: {
          required: true,
          filter: (term:any, limit:number, offset:number, parent?:any, ) => this._tipologiaDissesoSelectGQL.watch({
            limit: limit,
            offset: offset,
            ...(term && typeof term === 'string' ? { nome: { _ilike: "%"+term+"%" } } : {} )
          }).valueChanges.pipe(
            map(result => result.data?._tipologia_dissesto ) 
          ),
        },
        expressionProperties: {
          'templateOptions.label': this._translateService.stream('Tipologia di dissesto'),
          'templateOptions.disabled': this.disabled.base
        },
      },{
        key: 'peso',
        className: 'flex-1',
        type: 'input',
        templateOptions: {
          type:'number',
          required: true,
        },
        expressionProperties: {
          'templateOptions.label': this._translateService.stream('Peso'),
          'templateOptions.disabled': this.disabled.base
        }
      }]
    },{
      key: 'note',
      type: 'textarea',
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Note'),
        'templateOptions.disabled': this.disabled.base
      },
    }],
  },
  // {
  //   expressionProperties: {
  //     'templateOptions.label': this._translateService.stream('Area interessata'),
  //   },
  //   fieldGroup: [],
  // },
  {
    expressionProperties: {
      'templateOptions.label': this._translateService.stream('Allegati'),
    },
    key:'allegati',
    fieldGroup: [{
      key: 'allegati',
      type: 'file',
      templateOptions: {
        uploadUrl: '/upload'
      },
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Allegati'),
        'templateOptions.disabled': this.disabled.base
      },
    }],
  },{
    expressionProperties: {
      'templateOptions.label': this._translateService.stream('Segnalazione'),
    },
    key:'segnalazione',
    fieldGroup: [{
      key: 'data',
      type: 'datepicker',
      templateOptions: {
        required: true,
      },
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Data segnalazione'),
        'templateOptions.disabled': this.disabled.base
      },
    },{
      key: 'priorita',
      type: 'autocomplete',
      templateOptions: {
        required: true,
        filter: (term:any, limit:number, offset:number, parent?:any, ) => this._prioritaSelectGQL.watch({
          limit: limit,
          offset: offset,
          ...(term && typeof term === 'string' ? { nome: { _ilike: "%"+term+"%" } } : {} )
        }).valueChanges.pipe(
          map(result => result.data?._priorita ) 
        ),
      },
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Priorità'),
        'templateOptions.disabled': this.disabled.base
      }
    },{
      key: 'richiesta_protezione_civile',
      type: 'toggle',
      templateOptions: {
        appearance: 'standard',
      },
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Richiesta intervento protezione civile'),
        'templateOptions.disabled': this.disabled.base
      }
    },{
      className: 'section-label',
      template: '<h3><b>'+this._translateService.instant('Tecnico referente')+'</b></h3>',
    },{
      fieldGroupClassName: 'display-flex',
      key: 'tecnico_referente',
      fieldGroup: [
        {
          key: 'titolo',
          className: 'flex-1',
          type: 'autocomplete',
          templateOptions: {
            filter: (term:any, limit:number, offset:number, parent?:any, ) => this._titoloSelectGQL.watch({
              limit: limit,
              offset: offset,
              ...(term && typeof term === 'string' ? { nome: { _ilike: "%"+term+"%" } } : {} )
            }).valueChanges.pipe(
              map(result => result.data?._titolo ) 
            ),
          },
          expressionProperties: {
            'templateOptions.label': this._translateService.stream('Titolo'),
            'templateOptions.disabled': this.disabled.base
          }
        },{
          key: 'nome',
          className: 'flex-2',
          type: 'input',
          expressionProperties: {
            'templateOptions.label': this._translateService.stream('Nome'),
            'templateOptions.disabled': this.disabled.base
          }
        },{
          key: 'cognome',
          className: 'flex-2',
          type: 'input',
          expressionProperties: {
            'templateOptions.label': this._translateService.stream('Cognome'),
            'templateOptions.disabled': this.disabled.base
          }
        }
      ]
    },{
      fieldGroupClassName: 'display-flex',
      key: 'segnalazioni_collegate',
      fieldGroup: [
        {
          key: 'presegnalazioni',
          className: 'flex-1',
          type: 'autocomplete',
          templateOptions: {
            multiple: true,
            displayWith: (e:any) => e ? this._translateService.instant('Pre segnalazione n. {id} del {data}', {id:e.id, data: new Date(e.created_at).toLocaleString("it-IT", {timeZone: "Europe/Rome",}) }) : '',
            filter: (term:any, limit:number, offset:number, parent?:any, ) => this._segnalazioneSelectGQL.watch({
              limit: limit,
              offset: offset,
              where: {
                stato: { _eq: _Stato_Segnalazione_Enum.Pre },
              }
            }).valueChanges.pipe(
              map(result => result.data?.segnalazione ) 
            ),
          },
          expressionProperties: {
            'templateOptions.label': this._translateService.stream('Pre segnalazioni'),
            'templateOptions.disabled': this.disabled.base
          }
        },{
          key: 'segnalazioni',
          className: 'flex-1',
          type: 'autocomplete',
          templateOptions: {
            multiple: true,
            displayWith: (e:any) => e && e.protocollo ? this._translateService.instant('Segnalazione n. protocollo {id} del {data}', {id:e.protocollo.numero, data: e.protocollo.data ? e.protocollo.data.toLocaleString("it-IT", {timeZone: "Europe/Rome",}) :'' }) : '',
            filter: (term:any, limit:number, offset:number, parent?:any, ) => this._segnalazioneSelectGQL.watch({
              limit: limit,
              offset: offset,
                where: {
                  _and: [
                    { stato: {_neq: _Stato_Segnalazione_Enum.Pre} },
                    { stato: {_neq: _Stato_Segnalazione_Enum.Bozza} },
                  ],
                  ...(term && typeof term === 'string' ? {
                  protocollo: {
                    numero: { _ilike: "%"+term+"%"}
                  }
                } : {} )
              }
            }).valueChanges.pipe(
              map(result => result.data?.segnalazione ) 
            ),
          },
          expressionProperties: {
            'templateOptions.label': this._translateService.stream('Segnalazioni'),
            'templateOptions.disabled': this.disabled.base
          }
        },
      ]
    }],
  },{
    key: 'protocollo',
    expressionProperties: {
      'templateOptions.label': this._translateService.stream('Protocollo'),
    },
    fieldGroup: [{
      key: 'id',
      className: 'hidden',
      type: 'input',
      templateOptions: {
        readonly:true,
      },
    },{
      fieldGroupClassName: 'display-flex',
      fieldGroup:[{
        key: 'numero',
        className: 'flex-1',
        type: 'input',
        templateOptions: {
          disabled: true
        },
        expressionProperties: {
          'templateOptions.label': this._translateService.stream('Numero'),
        }
      },{
        key: 'data',
        className: 'flex-1',
        type: 'datepicker',
        templateOptions: {
          disabled: true
        },
        expressionProperties: {
          'templateOptions.label': this._translateService.stream('Data'),
        }
      }]
    },{
      key: 'mittente',
      type: 'autocomplete',
      templateOptions: {
        required: true,
        displayWith: (e:any) => e ? e.codice+" - "+e.nome+(e.sigla!=null ? ' - '+e.sigla: '')  : '',
        filter: (term:any, limit:number, offset:number, parent?:any, ) => this._sezioneProtocolloSelectGQL.watch({
          limit: limit,
          offset: offset,
          ...(term && typeof term === 'string' ? { where: {
            _or: [
              { codice: { _ilike: "%"+term+"%"} },
              { nome: { _ilike: "%"+term+"%"} },
              { sigla: { _ilike: "%"+term+"%"} },
            ]
          } } : {} )
        }).valueChanges.pipe(
          map(result => result.data?._sezione_protocollo ) 
        ),
      },
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Mittente'),
        'templateOptions.disabled': this.disabled.base
      }
    },{
      key: 'destinatari',
      type: 'repeat',
      templateOptions: {
        requiredN: 1,
      },
      expressionProperties: {
        'templateOptions.addText': this._translateService.stream('Aggiungi Destinatario'),
        'templateOptions.disabled': this.disabled.base
      },
      fieldArray: {
        fieldGroup: [{
          key: 'id',
          className: 'hidden',
          type: 'input',
          templateOptions: {
            readonly:true,
          },
        },{
          
          key: 'e_esterno',
          type: 'toggle',
          defaultValue: false,
          templateOptions: {
            appearance: 'standard',
          },
          expressionProperties: {
            'templateOptions.label': this._translateService.stream('Il destinatario è esterno?'),
            'templateOptions.disabled': this.disabled.base
          }
        },{
          key: 'destinatario_interno',
          hideExpression: (model: any, formState:any) => model.e_esterno,
          type: 'autocomplete',
          templateOptions: {
            required: true,
            displayWith: (e:any) => e ? e.codice+" - "+e.nome+(e.sigla!=null ? ' - '+e.sigla: '')  : '',
            filter: (term:any, limit:number, offset:number, parent?:any, ) => this._sezioneProtocolloSelectGQL.watch({
              limit: limit,
              offset: offset,
              ...(term && typeof term === 'string' ? { where: {
                _or: [
                  { codice: { _ilike: "%"+term+"%"} },
                  { nome: { _ilike: "%"+term+"%"} },
                  { sigla: { _ilike: "%"+term+"%"} },
                ]
              } } : {} )
            }).valueChanges.pipe(
              map(result => result.data?._sezione_protocollo ) 
            ),
          },
          expressionProperties: {
            'templateOptions.label': this._translateService.stream('Destinatario'),
            'templateOptions.disabled': this.disabled.base
          }
        },{
          key: 'destinatario_esterno',
          hideExpression: (model: any, formState:any, field: FormlyFieldConfig | undefined) => field?.parent?.fieldGroup![1].formControl?.value == null || field?.parent?.fieldGroup![1].formControl?.value == false,
          fieldGroup: [{
            key: 'id',
            className: 'hidden',
            type: 'input',
            templateOptions: {
              readonly:true,
            },
          },{
            fieldGroupClassName: 'display-flex',
            fieldGroup: [{
              key: 'nome',
              className: 'flex-1',
              type: 'input',
              templateOptions: {
                required: true
              },
              expressionProperties: {
                'templateOptions.label': this._translateService.stream('Nome'),
                'templateOptions.disabled': this.disabled.base
              }
            },{
              key: 'cognome',
              className: 'flex-1',
              type: 'input',
              templateOptions: {
                required: true
              },
              expressionProperties: {
                'templateOptions.label': this._translateService.stream('Cognome'),
                'templateOptions.disabled': this.disabled.base
              }
            },{
              key: 'codice_fiscale',
              className: 'flex-1',
              type: 'input',
              templateOptions: {
                required: true
              },
              expressionProperties: {
                'templateOptions.label': this._translateService.stream('Codice fiscale'),
                'templateOptions.disabled': this.disabled.base
              }
            }]
          },{
            key: 'email',
            type: 'input',
            templateOptions: {
              type: 'email',
              required: true
            },
            expressionProperties: {
              'templateOptions.label': this._translateService.stream('Email'),
              'templateOptions.disabled': this.disabled.base
            }
          }]
        }]
      }
    }]
  },
  {  
    // hideExpression: (model: any, formState:any) => this.hide.complete,
    key: 'intervento',      
    expressionProperties: {
      'templateOptions.label': this._translateService.stream('Intervento'),
    },
    fieldGroup: [{
      key: 'id',
      className: 'hidden',
      type: 'input',
      templateOptions: {
        readonly:true,
      },
    },{
      fieldGroupClassName: 'display-flex',
      fieldGroup:[{
        key: 'data_inizio_lavori',
        className: 'flex-1',
        type: 'datepicker',
        templateOptions: {
          required: true,
        },
        expressionProperties: {
          'templateOptions.label': this._translateService.stream('Data inizio lavori'),
          'templateOptions.disabled': this.disabled.complete
        },
      },{
        key: 'data_fine_lavori',
        className: 'flex-1',
        type: 'datepicker',
        templateOptions: {
          required: true,
        },
        expressionProperties: {
          'templateOptions.label': this._translateService.stream('Data fine lavori'),
          'templateOptions.disabled': this.disabled.complete
        },
      }]
    },{
      key: 'tipologia',
      type: 'autocomplete',
      templateOptions: {
        disabled: true,
        required: true,
        displayWith: (e:any) => e ? e.intervento : '',
        filter: (term:any, limit:number, offset:number, parent?:any, ) => this._tipologiaDissesoSelectGQL.watch({
          limit: limit,
          offset: offset,
          ...(term && typeof term === 'string' ? { nome: { _ilike: "%"+term+"%" } } : {} )
        }).valueChanges.pipe(
          map(result => result.data?._tipologia_dissesto ) 
        ),
      },
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Tipologia di intervento'),
        'templateOptions.disabled': this.disabled.complete
      },
    },{
      fieldGroupClassName: 'display-flex',
      fieldGroup:[{
        key: 'giorni_trascorsi',
        className: 'flex-1',
        type: 'autocomplete',
        templateOptions: {
          filter: (term:any, limit:number, offset:number, parent?:any, ) => this._giorniTrascorsiSelect.watch({
            limit: limit,
            offset: offset,
            ...(term && typeof term === 'string' ? { nome: { _ilike: "%"+term+"%" } } : {} )
          }).valueChanges.pipe(
            map(result => result.data?._giorni_trascorsi ) 
          ),
        },
        expressionProperties: {
          'templateOptions.label': this._translateService.stream('Giorni trascorsi dalla segnalazione'),
          'templateOptions.disabled': this.disabled.complete
        },
      },{
        key: 'condizioni_traffico',
        className: 'flex-1',
        type: 'autocomplete',
        templateOptions: {
          filter: (term:any, limit:number, offset:number, parent?:any, ) => this._condizioniTrafficoSelect.watch({
            limit: limit,
            offset: offset,
            ...(term && typeof term === 'string' ? { nome: { _ilike: "%"+term+"%" } } : {} )
          }).valueChanges.pipe(
            map(result => result.data?._condizioni_traffico ) 
          ),
        },
        expressionProperties: {
          'templateOptions.label': this._translateService.stream('Condizioni del traffico'),
          'templateOptions.disabled': this.disabled.complete
        },
      }]
    },{
      className: 'section-label',
      template: '<h3><b>'+this._translateService.instant('Veicoli utilizzati durante l\'intervento')+'</b></h3>',
    },{
      key: 'veicoli',
      type: 'repeat',
      expressionProperties: {
        'templateOptions.addText': this._translateService.stream('Aggiungi'),
        'templateOptions.disabled': this.disabled.complete
      },
      fieldArray: {
        fieldGroup: [{
          key: 'id',
          className: 'hidden',
          type: 'input',
          templateOptions: {
            readonly:true,
          },
        },{
          key: 'targa',
          className: 'flex-2',
          type: 'input',
          templateOptions: {
            required: true
          },
          expressionProperties: {
            'templateOptions.label': this._translateService.stream('Targa'),
            'templateOptions.disabled': this.disabled.complete
          }
        }]
      }
    },{
      key: 'note',
      type: 'textarea',
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Note'),
        'templateOptions.disabled': this.disabled.complete
      },
    },{
      fieldGroupClassName: 'display-flex',
      fieldGroup:[{
        key: 'assistenza_pm',
        className: 'flex-1',
        type: 'toggle',
        templateOptions: {
          appearance: 'standard',
        },
        expressionProperties: {
          'templateOptions.label': this._translateService.stream('Assistenza polizia municipale e/o forze dell\'ordine durante l\'intervento'),
          'templateOptions.disabled': this.disabled.complete
        }
      },{
        key: 'dissesto_difforme',
        className: 'flex-1',
        type: 'toggle',
        templateOptions: {
          appearance: 'standard',
        },
        expressionProperties: {
          'templateOptions.label': this._translateService.stream('Le caratteristiche del dissesto non sono conformi alla segnalazione ricevuta'),
          'templateOptions.disabled': this.disabled.complete
        }
      }]
    },{
      key: 'difformita',
      type: 'textarea',
      templateOptions:{
        required: true
      },
      hideExpression: (model: any, formState:any) => !(model && model.dissesto_difforme),
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Descrivere la difformità'),
        'templateOptions.disabled': this.disabled.complete
      },
    },{
      className: 'section-label',
      template: '<h3><b>'+this._translateService.instant('Attrezzatura utilizzata durante l\'intervento')+'</b></h3>',
    },{
      key: 'attrezzature_impiegate',
      type: 'repeat',
      expressionProperties: {
        'templateOptions.addText': this._translateService.stream('Aggiungi'),
        'templateOptions.disabled': this.disabled.complete
      },
      fieldArray: {
        fieldGroup: [{
          key: 'id',
          className: 'hidden',
          type: 'input',
          templateOptions: {
            readonly:true,
          },
        },{
          fieldGroupClassName: 'display-flex',
          fieldGroup:[{
            key: 'nome',
            className: 'flex-2',
            type: 'input',
            templateOptions: {
              required: true
            },
            expressionProperties: {
              'templateOptions.label': this._translateService.stream('Nome'),
              'templateOptions.disabled': this.disabled.complete
            }
          },{
            key: 'quantita',
            className: 'flex-1',
            type: 'input',
            templateOptions: {
              type: 'number',
              required: true,
            },
            expressionProperties: {
              'templateOptions.label': this._translateService.stream('Quantità'),
              'templateOptions.disabled': this.disabled.complete
            }
          }]
        }
        
      ]
    }
  },{
    className: 'section-label',
    template: '<h3><b>'+this._translateService.instant('Segnaletica lascita durante l\'intervento')+'</b></h3>',
  },{
    key: 'segnaletica_lasciata',
    type: 'repeat',
    expressionProperties: {
      'templateOptions.addText': this._translateService.stream('Aggiungi'),
      'templateOptions.disabled': this.disabled.complete
    },
    fieldArray: {
      fieldGroup: [{
        key: 'id',
        className: 'hidden',
        type: 'input',
        templateOptions: {
          readonly:true,
        },
      },{
        fieldGroupClassName: 'display-flex',
        fieldGroup:[{
          key: 'nome',
          className: 'flex-2',
          type: 'input',
          templateOptions: {
            required: true
          },
          expressionProperties: {
            'templateOptions.label': this._translateService.stream('Nome'),
            'templateOptions.disabled': this.disabled.complete
          }
        },{
          key: 'quantita',
          className: 'flex-1',
          type: 'input',
          templateOptions: {
            type: 'number',
            required: true,
          },
          expressionProperties: {
            'templateOptions.label': this._translateService.stream('Quantità'),
            'templateOptions.disabled': this.disabled.complete
          }
        }]
      }
      
    ]
  }
},{
  className: 'section-label',
  template: '<h3><b>'+this._translateService.instant('Materiale utilizzato durante l\'intervento')+'</b></h3>',
},{
  key: 'materiali_dissesto',
  type: 'repeat',
  expressionProperties: {
    'templateOptions.addText': this._translateService.stream('Aggiungi'),
    'templateOptions.disabled': this.disabled.complete
  },
  fieldArray: {
    fieldGroup: [{
      key: 'id',
      className: 'hidden',
      type: 'input',
      templateOptions: {
        readonly:true,
      },
    },{
      fieldGroupClassName: 'display-flex',
      fieldGroup:[{
        key: 'materiale',
        className: 'flex-2',
        type: 'autocomplete',
        templateOptions: {
          required: true,
          filter: (term:any, limit:number, offset:number, parent?:any, ) => this._materialeSelect.watch({
            limit: limit,
            offset: offset,
            ...(term && typeof term === 'string' ? { nome: { _ilike: "%"+term+"%" } } : {} )
          }).valueChanges.pipe(
            map(result => result.data?._materiale ) 
          ),
        },
        expressionProperties: {
          'templateOptions.label': this._translateService.stream('Nome'),
          'templateOptions.disabled': this.disabled.complete
        },
      },{
        key: 'quantita',
        className: 'flex-1',
        type: 'input',
        templateOptions: {
          type: 'number',
          required: true,
        },
        expressionProperties: {
          'templateOptions.label': this._translateService.stream('Quantità'),
          'templateOptions.disabled': this.disabled.complete
        }
      }]
    },{
      key: 'altro',
      type: 'input',
      templateOptions: {
        required: true
      },
      hideExpression: (model: any, formState:any) => !(model && model.materiale && model.materiale.id == 1),
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Specifica'),
        'templateOptions.disabled': this.disabled.complete
      }
    },
    
    
  ]
}
},{
className: 'section-label',
template: '<h3><b>'+this._translateService.instant('Allegati di chiusura')+'</b></h3>',
},{
key: 'allegati',
type: 'file',
templateOptions: {
  uploadUrl: '/upload'
},
expressionProperties: {
  'templateOptions.label': this._translateService.stream('Allegati'),
  'templateOptions.disabled': this.disabled.complete
},
}]
  },
  {        
    expressionProperties: {
      'templateOptions.label': this._translateService.stream('Storico eventi'),
    },
    key: 'eventi',
    fieldGroup: [
      {
        expressionProperties: {
          'template': (model:any) => {
            let str = model?.map((evento:any) => {
              let s = "<b>"+evento.stato+"</b>: <i>"+new Date(evento.created_at).toLocaleString('it-IT', {timeZone: 'Europe/Rome'})+"</i><br />";
              switch(evento.stato){
                case _Stato_Segnalazione_Enum.Protocollazione:
                  s+=this._translateService.instant("N. {numero} del {data}", {numero: evento.protocollo.numero, data: new Date(evento.protocollo.data).toLocaleString('it-IT', {timeZone: 'Europe/Rome'})})
                  break;
                case _Stato_Segnalazione_Enum.Assegnata:
                  s+=this._translateService.instant("Alla squadra {nome} cone note: {note}", {nome:evento.squadra.nome, note: evento.note})
                  break;
                case _Stato_Segnalazione_Enum.Rimandata:
                case _Stato_Segnalazione_Enum.Sospesa:
                  s+=this._translateService.instant("Con motivazione: {note}", {note: evento.note})
                  break;
                case _Stato_Segnalazione_Enum.Risolta:
                  s+=this._translateService.instant("Da segnalazione protocollata con n.: {numero} del {data}", {numero: evento.risolutore.protocollo.numero, data: new Date(evento.risolutore.protocollo.data).toLocaleString('it-IT', {timeZone: 'Europe/Rome'})})
                  break;
              }
              return s;
            })
            return str?.join('<hr />');
          }
        },
      }
    ]
  }

];




      constructor(
        protected _translateService: TranslateService,
        protected _prioritaSelectGQL: PrioritaSelectGQL,
        protected _formaDissestoGQL: FormaDissesoSelectGQL,
        protected _tipologiaDissesoSelectGQL: TipologiaDissesoSelectGQL,
        protected _sezioneProtocolloSelectGQL: SezioneProtocolloSelectGQL,
        protected _titoloSelectGQL: TitoloSelectGQL,
        protected _segnalazioneSelectGQL: SegnalazioneSelectGQL,
        protected _segnalazioneGQL: SegnalazioneGQL,
        protected _municipalitaSelectGQL: MunicipalitaSelectGQL,
        protected _quartiereSelectGQL: QuartiereSelectGQL,
        protected _toponimoSelectGQL: ToponimoSelectGQL,
        protected _toponimoNomeSelectGQL: ToponimoNomeSelectGQL,
        protected _specificaPosizionamentoToponimoSelectGQL: SpecificaPosizionamentoToponimoSelectGQL,
        protected _tipologiaPosizionamentoToponimoSelectGQL: TipologiaPosizionamentoToponimoSelectGQL,
        protected _updateSegnalazioneGQL: UpdateSegnalazioneGQL,
        protected _civiciSelectGQL: CiviciSelectGQL,
        protected _sostegniIpiSelectGQL: SostegniIpiSelectGQL,
        protected _connessioniGrafoSelectGQL: ConnessioniGrafoSelectGQL,
        protected _route: ActivatedRoute,
        protected _router: Router,
        protected _loaderService: NgxUiLoaderService,
        protected _dialog: MatDialog,
        
        protected _giorniTrascorsiSelect: GiorniTrascorsiSelectGQL,
        protected _condizioniTrafficoSelect: CondizioniTrafficoSelectGQL,
        protected _materialeSelect: MaterialeSelectGQL
      ) {
        super();
        this.id = parseInt(this._route.snapshot.paramMap.get('id')!);
      }


      async baseSave(event:any) {
        this.saving = true;
        if(event.loading) this._loaderService.start();

        let p_d = this.startData.protocollo.destinatari.filter((x:any) => !this.model.protocollo.destinatari.map((d:any) => d.id).includes(x));
        let s_d = this.startData.segnalazioni_collegate.filter((x:any) => ![...this.model.segnalazione.segnalazioni_collegate.presegnalazioni.map((d:any) => d.id),...this.model.segnalazione.segnalazioni_collegate.segnalazioni.map((d:any) => d.id)].includes(x));

        const allegati = this.model.allegati.allegati ? await fileListToBase64(this.model.allegati.allegati) : [];
        let d = this.startData.allegati.filter((x:any) => !allegati.map((f:any) => f.file).includes(x.file));
        let n = allegati.filter((x: any) => !this.startData.allegati.map((f:any) => f.file).includes(x.file));
        let model = {
          id: this.model.id,
          eventi: {
            data: []
          },
          ...(event.type == 'def' ? {stato:_Stato_Segnalazione_Enum.Protocollazione} : {}),
          ...(this.model.localizzazione.municipalita ? { municipalita_id:this.model.localizzazione.municipalita.id } : {}),
          ...(this.model.localizzazione.municipalita ? { municipalita_storica:this.model.localizzazione.municipalita } : {}),
    
          ...(this.model.localizzazione.quartiere ? { quartiere_id:this.model.localizzazione.quartiere.id } : {}),
          ...(this.model.localizzazione.quartiere ? { quartiere_storico:this.model.localizzazione.quartiere } : {}),
    
          ...(this.model.localizzazione.toponimo ? { toponimo_id:this.model.localizzazione.toponimo.id } : {}),
          ...(this.model.localizzazione.toponimo ? { toponimo_storico:this.model.localizzazione.toponimo } : {}),
          ...(n.length > 0 || d.length > 0 ? {
            allegati: {
              on_conflict: {
                constraint: Allegato_Constraint.AllegatoPkey,
                update_columns: [Allegato_Update_Column.Delete]
              },
              data: [...n, ...d.map((f:any) => { return {id:f.id, delete: true, file: '', nome: '', tipo: ''}})]
            }
          } : {}),
          posizionamento_toponimo_punto_iniziale: {
            on_conflict: {
              constraint: Posizionamento_Toponimo_Constraint.PosizionamentoToponimoPkey,
              update_columns: [
                Posizionamento_Toponimo_Update_Column.Civico,
                Posizionamento_Toponimo_Update_Column.Ipi,
                Posizionamento_Toponimo_Update_Column.Km,
                Posizionamento_Toponimo_Update_Column.Connessione,
                Posizionamento_Toponimo_Update_Column.Note,
                Posizionamento_Toponimo_Update_Column.Geoloc,
                Posizionamento_Toponimo_Update_Column.TipologiaId,
                Posizionamento_Toponimo_Update_Column.SpecificaId
              ]
            },
            data: (this.model.localizzazione.posizionamento_toponimo_punto_iniziale ? {
              ...this.model.localizzazione.posizionamento_toponimo_punto_iniziale,
              ...(this.model.localizzazione.posizionamento_toponimo_punto_iniziale.tipologia ? { tipologia_id: this.model.localizzazione.posizionamento_toponimo_punto_iniziale.tipologia.id } : {}),
              specifica_id: this.model.localizzazione.posizionamento_toponimo_punto_iniziale.specifica ? this.model.localizzazione.posizionamento_toponimo_punto_iniziale.specifica.id : null,
              civico: this.model.localizzazione.posizionamento_toponimo_punto_iniziale.civico && typeof this.model.localizzazione.posizionamento_toponimo_punto_iniziale.civico === 'object' ? this.model.localizzazione.posizionamento_toponimo_punto_iniziale.civico.civico1 : this.model.localizzazione.posizionamento_toponimo_punto_iniziale.civico,
              ipi: this.model.localizzazione.posizionamento_toponimo_punto_iniziale.ipi && typeof this.model.localizzazione.posizionamento_toponimo_punto_iniziale.ipi === 'object' ? this.model.localizzazione.posizionamento_toponimo_punto_iniziale.ipi.matricola : this.model.localizzazione.posizionamento_toponimo_punto_iniziale.ipi,
              connessione: this.model.localizzazione.posizionamento_toponimo_punto_iniziale.connessione && typeof this.model.localizzazione.posizionamento_toponimo_punto_iniziale.connessione === 'object' ? this.model.localizzazione.posizionamento_toponimo_punto_iniziale.connessione.nome : this.model.localizzazione.posizionamento_toponimo_punto_iniziale.connessione,
              ...(this.model.geolocalizzazione.mappa![0].punto.value.latitudine && this.model.geolocalizzazione.mappa![0].punto.value.longitudine ? {geoloc: {
                type: 'Point',
                coordinates: [parseFloat(this.model.geolocalizzazione.mappa![0].punto.value.latitudine),parseFloat(this.model.geolocalizzazione.mappa![0].punto.value.longitudine)]
              }} : {} ),
            } : {})
          },
          dissesto: {
            on_conflict: {
              constraint: Dissesto_Constraint.DissestoPkey,
              update_columns: [
                Dissesto_Update_Column.FormaId,
                Dissesto_Update_Column.PrimaDimensione,
                Dissesto_Update_Column.SecondaDimensione,
                Dissesto_Update_Column.TerzaDimensione,
                Dissesto_Update_Column.Profondita,
                Dissesto_Update_Column.TipologiaDissestoId,
                Dissesto_Update_Column.Peso,
                Dissesto_Update_Column.Note
              ]
            },
            data: {
              ...this.model.dissesto,
              forma_id: this.model.dissesto.forma ? this.model.dissesto.forma.id : null,
              tipologia_dissesto_id: this.model.dissesto.tipologia ? this.model.dissesto.tipologia.id : null,
            }
          },
          ...(this.model.segnalazione.data ? { data: this.model.segnalazione.data } : {}),
          ...(this.model.segnalazione.priorita ? { priorita_id: this.model.segnalazione.priorita.id } : {}),
          ...(this.model.segnalazione.richiesta_protezione_civile ? { richiesta_protezione_civile: this.model.segnalazione.richiesta_protezione_civile } : {}),
          ...(this.model.segnalazione.tecnico_referente ? {
            tecnico_referente: {
              on_conflict: {
                constraint: Tecnico_Referente_Constraint.TecnicoReferentePkey,
                update_columns: [
                  Tecnico_Referente_Update_Column.Nome,
                  Tecnico_Referente_Update_Column.Cognome,
                  Tecnico_Referente_Update_Column.TitoloId
                ]
              },
              data: {
                ...this.model.segnalazione.tecnico_referente,
                titolo_id: this.model.segnalazione.tecnico_referente.titolo ? this.model.segnalazione.tecnico_referente.titolo.id : null,
              }
            }
          } : {}),
          protocollo: {
            on_conflict: {
              constraint: Protocollo_Constraint.ProtocolloPkey,
              update_columns: [
                Protocollo_Update_Column.MittenteId,
                Protocollo_Update_Column.Note
              ]
            },
            data : {
              ...this.model.protocollo,
              mittente_id: this.model.protocollo.mittente ? this.model.protocollo.mittente.id : null,
              destinatari: {
                on_conflict: {
                  constraint: Protocollo_Destinatario_Constraint.ProtocolloDestinatarioPkey,
                  update_columns: [
                    Protocollo_Destinatario_Update_Column.EsternoId,
                    Protocollo_Destinatario_Update_Column.InternoId,
                    Protocollo_Destinatario_Update_Column.Delete
                  ]
                },
                data: [
                  ...this.model.protocollo.destinatari.map((destinatario:any) => { 
                    return {
                  ...(destinatario.id ? { id: destinatario.id } : {} ),
                  ...(destinatario.e_esterno ? { e_esterno: destinatario.e_esterno } : {} ),
                  ...(destinatario.e_esterno == false ? {interno_id: destinatario.destinatario_interno ? destinatario.destinatario_interno.id : null } : {}), 
                  ...(destinatario.e_esterno == true ? {destinatario_esterno: {
                    on_conflict: {
                      constraint: Protocollo_Destinatario_Esterno_Constraint.ProtocolloDestinatarioEsternoPkey,
                      update_columns: [
                        Protocollo_Destinatario_Esterno_Update_Column.Nome,
                        Protocollo_Destinatario_Esterno_Update_Column.Cognome,
                        Protocollo_Destinatario_Esterno_Update_Column.Email,
                        Protocollo_Destinatario_Esterno_Update_Column.CodiceFiscale,
                      ]
                    },
                    data: (destinatario.destinatario_esterno ? {
                      ...(destinatario.destinatario_esterno.id ? { id: destinatario.destinatario_esterno.id } : {} ),
                      ...(destinatario.destinatario_esterno.nome ? { nome: destinatario.destinatario_esterno.nome } : {} ),
                      ...(destinatario.destinatario_esterno.cognome ? { cognome: destinatario.destinatario_esterno.cognome } : {} ),
                      ...(destinatario.destinatario_esterno.codice_fiscale ? { codice_fiscale: destinatario.destinatario_esterno.codice_fiscale } : {} ),
                      ...(destinatario.destinatario_esterno.email ? { email: destinatario.destinatario_esterno.email } : {} )
                    } : {})
                  } } : {}), 
                }}), ...p_d.map((d:any) => { return {id:d,delete:true}})]
                
              }
            }
          },
          segnalazioni_collegate: {
            on_conflict: {
              constraint: Segnalazione_Collegata_Constraint.SegnalazioneCollegataPkey,
              update_columns: [
                Segnalazione_Collegata_Update_Column.Delete,
                Segnalazione_Collegata_Update_Column.SegnalazioneCollegataId
              ]
            },
            data: [
              ...(this.model.segnalazione.segnalazioni_collegate.presegnalazioni ? this.model.segnalazione.segnalazioni_collegate.presegnalazioni.map((e:any) => { return {segnalazione_collegata_id: e.id }}) : []),
              ...(this.model.segnalazione.segnalazioni_collegate.segnalazioni ? this.model.segnalazione.segnalazioni_collegate.segnalazioni.map((e:any) => { return { segnalazione_collegata_id: e.id }}) : []),
              ...s_d.map((s:any) => { return { segnalazione_collegata_id:s, delete:true}})
            ]
          },
        };
    
        // delete model.__typename;
        // delete model.municipalita;
        // delete model.quartiere;
        // delete model.toponimo;
        delete model.posizionamento_toponimo_punto_iniziale.data.__typename;
        delete model.posizionamento_toponimo_punto_iniziale.data.tipologia;
        delete model.posizionamento_toponimo_punto_iniziale.data.specifica;
        // delete model.punto_iniziale_geoloc;
        delete model.dissesto.data.__typename;
        delete model.dissesto.data.forma;
        delete model.dissesto.data.tipologia;
    
    
        // delete model.priorita;
        delete model.tecnico_referente?.data.__typename;
        delete model.tecnico_referente?.data.titolo;
    
        delete model.protocollo.data.__typename;
        delete model.protocollo.data.mittente;
        // delete model.diario;
        if(n.length==0 && d.length==0) delete model.allegati;  
        return model;  
      }

  onSaveNext(result:FetchResult<UpdateSegnalazioneMutation, Record<string, any>, Record<string, any>>){ 
    this.dirty = false; 
    const ret = result.data?.insert_segnalazione?.returning![0]!;
    this.startData.allegati = [...ret.allegati!];
    this.startData.protocollo.destinatari = ret.protocollo?.destinatari.map((d:any) => d.id);
    this.startData.protocollo.segnalazioni_collegate = ret.segnalazioni_collegate.map((d:any) => d.segnalazione.id);
    this.model.protocollo.destinatari = ret.protocollo?.destinatari.map((e:any) => {
      return {
        id:e.id,
        destinatario_interno:e.destinatario_interno,
        ...(e.destinatario_esterno ? { 
          destinatario_esterno:{
            id: e.destinatario_esterno.id
          },
        } : {} ),
        e_esterno:e.e_esterno,

      }
    });
  }


  onSaveError(error:any) {
    this._loaderService.stop();
    this.saving = false; 
    this._dialog.open(ConfirmDialogComponent, {
      data: {
        title: this._translateService.instant('Attenzione'),
        content: this._translateService.instant('Non è stato possibile completare la richiesta di salvataggio. Errore: '+error)
      }
    });
  }

  
  async baseInit(where:Exact<{ where: Segnalazione_Bool_Exp; }>, mapInit?:any, repeatInit?:any){
    this._loaderService.start();
    this.model = await firstValueFrom(this._segnalazioneGQL.watch(where).valueChanges.pipe(
      map(
        result => {
          let segnalazione = result.data?.segnalazione[0];
          if(segnalazione===undefined) {
            this._loaderService.stop();
            this._router.navigate(['/','404']);
          }

          if(this.model.stato == _Stato_Segnalazione_Enum.Completata){
            this.startData.intervento.allegati = [...segnalazione.intervento?.allegati!];
          }

          this.startData.allegati = [...segnalazione.allegati];

          return {
            ...{id: segnalazione.id},
            ...{stato: segnalazione.stato},
            ...{eventi: segnalazione.eventi},
            intervento: {
              id: segnalazione.intervento!.id,
              data_inizio_lavori: segnalazione.intervento?.data_inizio_lavori,
              data_fine_lavori: segnalazione.intervento?.data_fine_lavori,
              tipologia: segnalazione.dissesto!.tipologia,
              giorni_trascorsi: segnalazione.intervento?.giorni_trascorsi,
              condizioni_traffico: segnalazione.intervento?.condizioni_traffico,
              veicoli: segnalazione.intervento?.veicoli_impiegati.map(e => Object.assign([],e)),
              note: segnalazione.intervento?.note,
              assistenza_pm: segnalazione.intervento?.assistenza_pm,
              dissesto_difforme: segnalazione.intervento?.dissesto_difforme,
              difformita: segnalazione.intervento?.difformita,
              attrezzature_impiegate: segnalazione.intervento?.attrezzature_impiegate.map(e => Object.assign([],e)),
              segnaletica_lasciata: segnalazione.intervento?.segnaletica_lasciata.map(e => Object.assign([],e)),
              materiali_dissesto: segnalazione.intervento?.materiali_dissesto.map(e => Object.assign([],e)),
              allegati: base64ListToFile(segnalazione.intervento?.allegati)
            },
            ...{allegati: { allegati: base64ListToFile(segnalazione.allegati) }},
            ...{
              geolocalizzazione:{ 
                mappa: [
                  ...(segnalazione.posizionamento_toponimo_punto_iniziale?.geoloc != null ? [{ 
                    key: 'punto_iniziale', 
                    label: this._translateService.instant('Punto iniziale'),
                    punto: new BehaviorSubject<{latitudine:number|null,longitudine:number|null,key:string}>(
                    {
                      latitudine:segnalazione.posizionamento_toponimo_punto_iniziale?.geoloc.coordinates[0], 
                      longitudine:segnalazione.posizionamento_toponimo_punto_iniziale?.geoloc.coordinates[1],
                      key: 'punto_iniziale'
                    }),
                    color: {code:'#005dc1',label:'accent'} 
                  }] : [{ 
                    key: 'punto_iniziale', 
                    label: this._translateService.instant('Punto iniziale'),
                    punto: new BehaviorSubject<{latitudine:number|null,longitudine:number|null,key:string}>(
                    {
                      latitudine:null, 
                      longitudine:null,
                      key: 'punto_iniziale'
                    }),
                    color: {code:'#005dc1',label:'accent'} 
                  }] ) 
                ]
              }
            },
            ...{localizzazione:{ municipalita: segnalazione.municipalita, quartiere: segnalazione.quartiere, toponimo: segnalazione.toponimo, posizionamento_toponimo_punto_iniziale:Object.assign({},segnalazione.posizionamento_toponimo_punto_iniziale)}},
            ...{dissesto:Object.assign({},segnalazione.dissesto)},
            ...{
              protocollo: {
                ...{id: segnalazione.protocollo!.id },
                ...{numero: segnalazione.protocollo!.numero },
                ...{data: segnalazione.protocollo!.data },
                ...{mittente: segnalazione.protocollo?.mittente },
                ...{
                  destinatari: segnalazione.protocollo!.destinatari.map(e => {
                    return {
                      id:e.id,
                      destinatario_interno: e.destinatario_interno,
                      destinatario_esterno: e.destinatario_esterno,
                      e_esterno: e.e_esterno
                    }
                  })
                }
              }
            },
            ...{tecnico_referente:Object.assign({},segnalazione.tecnico_referente)},
            ...{
              segnalazione: {
                tecnico_referente:Object.assign({},segnalazione.tecnico_referente),
                data: segnalazione.data,
                richiesta_protezione_civile: segnalazione.richiesta_protezione_civile,
                priorita: segnalazione.priorita,
                segnalazioni_collegate:{
                  presegnalazioni: segnalazione.segnalazioni_collegate.filter((e:any) => e.segnalazione.stato == _Stato_Segnalazione_Enum.Pre).map(e => e.segnalazione),
                  segnalazioni: segnalazione.segnalazioni_collegate.filter((e:any) => e.segnalazione.stato != _Stato_Segnalazione_Enum.Pre && e.segnalazione.stato !=  _Stato_Segnalazione_Enum.Bozza).map(e => e.segnalazione),
                }
              }
            },
            ...(mapInit ? {...mapInit(segnalazione)} : {})
          }
        }
      ),
    ));    

    if(this.model.stato == _Stato_Segnalazione_Enum.Completata){
      this.startData.intervento.attrezzature_impiegate = [...this.model.intervento?.attrezzature_impiegate!.map((e:any) => e.id)];
      this.startData.intervento.materiali_dissesto = [...this.model.intervento?.materiali_dissesto!.map((e:any) => e.id)];
      this.startData.intervento.segnaletica_lasciata = [...this.model.intervento?.segnaletica_lasciata!.map((e:any) => e.id)];
      this.startData.intervento.veicoli = [...this.model.intervento?.veicoli!.map((e:any) => e.id)];
    }
    this.startData.protocollo.destinatari = this.model.protocollo?.destinatari.map((d:any) => d.id);        
    this.startData.segnalazioni_collegate = [
      ...this.model.segnalazione.segnalazioni_collegate.presegnalazioni.map((d:any) => d.id),
      ...this.model.segnalazione.segnalazioni_collegate.segnalazioni.map((d:any) => d.id)
    ];
    if(repeatInit) repeatInit();
    this._loaderService.stop();


  }

}