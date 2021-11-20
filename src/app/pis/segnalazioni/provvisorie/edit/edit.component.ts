import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { BehaviorSubject, firstValueFrom, map, mergeMap } from 'rxjs';
import { ConfirmDialogComponent } from 'src/app/_core/_components/confirm-dialog/confirm-dialog.component';
import { marker } from 'src/app/_core/_formly/_components/mappa-formly/mappa-formly.component';
import { base64ListToFile, fileListToBase64 } from 'src/app/_core/_functions';
import { CiviciSelectGQL, ConnessioniGrafoSelectGQL, FormaDissesoSelectGQL, InterventoStraordinarioGQL, Intervento_Straordinario_Constraint, Intervento_Straordinario_Update_Column, MunicipalitaSelectGQL, Posizionamento_Toponimo_Constraint, Posizionamento_Toponimo_Update_Column, PrioritaSelectGQL, QuartiereSelectGQL, SegnalazioneSelectGQL, SezioneProtocolloSelectGQL, SostegniIpiSelectGQL, SpecificaPosizionamentoToponimoSelectGQL, TipologiaDissesoSelectGQL, TipologiaPosizionamentoToponimoSelectGQL, TitoloSelectGQL, ToponimoNomeSelectGQL, ToponimoSelectGQL, UpdateInterventoStraordinarioGQL, _Stato_Segnalazione_Enum } from 'src/app/_core/_services/generated/graphql';
import { Dirty } from 'src/app/_core/_components/form/form.component';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-segnalazioni-provvisorie-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class SegnalazioniProvvisorieEditComponent extends Dirty implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  id: number;
  allegati: Array<any> = [];
  saving: boolean = false;

  fields: FormlyFieldConfig[] = [{
    type: 'stepper',
    templateOptions:{
      orientation:'horizontal'
    },
    fieldGroup: [
    {        
        expressionProperties: {
          'templateOptions.label': this._translateService.stream('Localizzazione segnalazione'),
        },
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
                  field!.templateOptions!.parent = field?.parent?.fieldGroup?.find(f => f.key === 'municipalita')?.formControl;
                }
              },
              expressionProperties: {
                'templateOptions.label': this._translateService.stream('Quartiere'),
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
                  field!.templateOptions!.parent = field?.parent?.fieldGroup?.find(f => f.key === 'quartiere')?.formControl
                }
              },
              expressionProperties: {
                'templateOptions.label': this._translateService.stream('Toponimo'),
              }
            }]
          },{
            key: 'posizionamento_toponimo_punto_iniziale',
            hideExpression: (model: any, formState:any, field: FormlyFieldConfig | undefined) => field?.parent?.parent?.fieldGroup![0].fieldGroup![0].fieldGroup![2].formControl?.value == null,
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
              },
            },{
              fieldGroup: [{
                hideExpression: (model: any, formState:any) => !(model.tipologia && [1,2].includes(model.tipologia.id)),
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
                      field!.templateOptions!.parent = field?.parent?.parent?.parent?.parent?.fieldGroup![0].fieldGroup?.find(f => f.key == 'toponimo')?.formControl
                    }
                  },
                  hideExpression: (model: any, formState:any) => !(model.specifica && [1].includes(model.specifica.id)),
                  expressionProperties: {
                    'templateOptions.label': (model: any, formState: any) => this._translateService.instant('Civico'),
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
                      field!.templateOptions!.parent = field?.parent?.parent?.parent?.parent?.fieldGroup![0].fieldGroup?.find(f => f.key == 'toponimo')?.formControl
                    }
                  },
                  hideExpression: (model: any, formState:any) => !(model.specifica && [2].includes(model.specifica.id)),
                  expressionProperties: {
                    'templateOptions.label': (model: any, formState: any) => this._translateService.instant('Palo della luce'),
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
                  field!.templateOptions!.parent = field?.parent?.parent?.fieldGroup![0].fieldGroup?.find(f => f.key == 'toponimo')?.formControl
                }
              },
              hideExpression: (model: any, formState:any) => !(model.tipologia && [3,4].includes(model.tipologia.id)),
              expressionProperties: {
                'templateOptions.label': (model: any, formState: any) => this._translateService.instant('Incrocio'),
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
              },
            },{
              key: 'id',
              className: 'hidden',
              type: 'input',
              templateOptions: {
                required:true,
              },
            }]
          }
        ]
      },{
        expressionProperties: {
          'templateOptions.label': this._translateService.stream('Geo-localizzazione'),
        },
        fieldGroup: [{
          fieldGroupClassName: 'display-flex',
          key: 'punto_iniziale_geoloc',
          fieldGroup: [{
            className: 'flex-1',
            key: 'label_punto_iniziale',
            type: 'input',
            defaultValue: 'Punto iniziale',
            templateOptions: {
              disabled: true,
              _prefix: {
                icon: "place",
                color: "accent"
              }
            },
          },{
            key: 'latitudine',
            className: 'flex-6',
            type: 'input',
            templateOptions: {
              required: true,
            },
            expressionProperties: {
              'templateOptions.label': this._translateService.stream('Latitutidine'),
            }
          },{
            key: 'longitudine',
            className: 'flex-6',
            type: 'input',
            templateOptions: {
              required: true,
            },
            expressionProperties: {
              'templateOptions.label': this._translateService.stream('Longitudine'),
            }
          }]
        },{
          key: 'mappa',
          type: 'mappa',
          templateOptions: {
            markers: [
              { key: 'punto_iniziale', coord: new BehaviorSubject<{lat:number,lon:number,propagate:boolean}>({lat:0,lon:0,propagate:false}), color: '#005dc1' },
            ]
          },
          hooks: {
            onInit: (field) => {
              let punto_iniziale = field?.templateOptions!.markers.find((f:marker) => f.key == 'punto_iniziale');
              // CIVICO punto iniziale
              field?.parent?.parent?.fieldGroup![0].fieldGroup![1].fieldGroup![2].fieldGroup![0].fieldGroup![1].formControl!.valueChanges.subscribe(s => {
                if(s && typeof s != 'string'){
                  punto_iniziale.coord.next({
                    lat: s.geom.coordinates[0],
                    lon: s.geom.coordinates[1],
                    propagate: true
                  })
                }
              });
             
              // IPI punto iniziale
              field?.parent?.parent?.fieldGroup![0].fieldGroup![1].fieldGroup![2].fieldGroup![0].fieldGroup![2].formControl!.valueChanges.subscribe(s => {
                if(s && typeof s != 'string'){
                  punto_iniziale.coord.next({
                    lat: s.geom.coordinates[0][0],
                    lon: s.geom.coordinates[0][1],
                    propagate: true
                  })
                }
              });
             
              // CONNESSIONI punto iniziale
              field?.parent?.parent?.fieldGroup![0].fieldGroup![1].fieldGroup![3].formControl!.valueChanges.subscribe(s => {
                if(s && typeof s != 'string'){
                  punto_iniziale.coord.next({
                    lat: s.geom.coordinates[0],
                    lon: s.geom.coordinates[1],
                    propagate: true
                  })
                }
              });
             
              punto_iniziale.coord.subscribe((coord:any) => {                            
                if(coord.propagate === undefined || coord.propagate == true){
                  field?.parent?.fieldGroup![0].fieldGroup![1].formControl?.setValue(coord.lat);
                  field?.parent?.fieldGroup![0].fieldGroup![2].formControl?.setValue(coord.lon);
                }
              });
             
              field?.parent?.fieldGroup![0].fieldGroup![1].formControl?.valueChanges.subscribe((lat:any) => {
                let point = punto_iniziale.coord.value;
                if(!point.propagate){
                  point['lat'] = lat;
                  point['propagate'] = false;
                  punto_iniziale.coord.next(point);
                }
              });
              field?.parent?.fieldGroup![0].fieldGroup![2].formControl?.valueChanges.subscribe((lon:any) => {
                let point = punto_iniziale.coord.value;
                if(!point.propagate){
                  point['lon'] = lon;
                  point['propagate'] = false;
                  punto_iniziale.coord.next(point);
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
          required:true,
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
        },
      },{
        fieldGroupClassName: 'display-flex',
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
            'templateOptions.label': (model: any, formState:any) => this._translateService.instant('{prima_dimensione}', {prima_dimensione : model.forma ? model.forma.id : 0})
          },
        },{
          key: 'seconda_dimensione',
          hideExpression: (model: any, formState:any, field: FormlyFieldConfig | undefined) => [2,5].includes(field?.parent?.parent?.fieldGroup![1].formControl?.value.id),
          className: 'flex-1',
          type: 'input',
          templateOptions: {
            type:'number',
            required: true,
          },
          expressionProperties: {
            'templateOptions.label': (model: any, formState:any) => this._translateService.instant('{seconda_dimensione}', {seconda_dimensione : model.forma ? model.forma.id : 0})
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
            'templateOptions.label': (model: any, formState:any) => this._translateService.instant('{terza_dimensione}', {terza_dimensione : model.forma ? model.forma.id : 0})
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
          }
        }]
      },{
        key: 'note',
        type: 'textarea',
        expressionProperties: {
          'templateOptions.label': this._translateService.stream('Note'),
        },
      }],
    },{
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Area interessata'),
      },
      fieldGroup: [],
    },{
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Allegati'),
      },
      fieldGroup: [{
        key: 'allegati',
        type: 'file',
        templateOptions: {
          uploadUrl: '/upload'
        },
        expressionProperties: {
          'templateOptions.label': this._translateService.stream('Allegati'),
        },
      }],
    },{
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Segnalazione'),
      },
      fieldGroup: [{
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
        }
      },{
        key: 'richiesta_protezione_civile',
        type: 'toggle',
        templateOptions: {
          appearance: 'standard',
        },
        expressionProperties: {
          'templateOptions.label': this._translateService.stream('Richiesta intervento protezione civile'),
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
            }
          },{
            key: 'nome',
            className: 'flex-2',
            type: 'input',
            expressionProperties: {
              'templateOptions.label': this._translateService.stream('Nome'),
            }
          },{
            key: 'cognome',
            className: 'flex-2',
            type: 'input',
            expressionProperties: {
              'templateOptions.label': this._translateService.stream('Cognome'),
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
            }
          },{
            key: 'segnalazioni',
            className: 'flex-1',
            type: 'autocomplete',
            templateOptions: {
              multiple: true,
              displayWith: (e:any) => e && e.protocollo ? this._translateService.instant('Segnalazione n. protocollo {id} del {data}', {id:e.protocollo.numero, data: e.protocollo.data.toLocaleString("it-IT", {timeZone: "Europe/Rome",}) }) : '',
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
            }
          },
        ]
      }],
    },{
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Protocollo'),
      },
      fieldGroup: [{
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
        }
      },{
        key: 'destinatari',
        type: 'repeat',
        expressionProperties: {
          'templateOptions.addText': this._translateService.stream('Aggiungi Destinatario'),
        },
        fieldArray: {
          fieldGroup: [{
            key: 'id',
            className: '',
            type: 'input',
            templateOptions: {
              required:true,
            },
          },{
            
            key: 'interno_esterno',
            type: 'toggle',
            templateOptions: {
              appearance: 'standard',
            },
            expressionProperties: {
              'templateOptions.label': this._translateService.stream('Il destinatario è esterno?'),
            }
          },{
            key: 'interno',
            hideExpression: (model: any, formState:any) => model.interno_esterno,
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
            }
          },{
            key: 'esterno',
            hideExpression: (model: any, formState:any, field: FormlyFieldConfig | undefined) => field?.parent?.fieldGroup![1].formControl?.value == null || field?.parent?.fieldGroup![1].formControl?.value == false,
            fieldGroup: [{
              key: 'id',
              className: 'hidden',
              type: 'input',
              templateOptions: {
                required:true,
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
                }
              }]
            },{
              key: 'email',
              type: 'input',
              templateOptions: {
                required: true
              },
              expressionProperties: {
                'templateOptions.label': this._translateService.stream('Email'),
              }
            }]
          }]
        }
      }]
    }],
  }];

  async save(event:boolean) {
    // this.saving = true;
    // if(event) this._loaderService.start();
    // const allegati = await fileListToBase64(this.model.allegati);

    // let d = this.allegati.filter(x => !allegati.map((f:any) => f.file).includes(x.file));
    // let n = allegati.filter((x: any) => !this.allegati.map(f => f.file).includes(x.file));

    // let model = {
    //   ...this.model,
    //   ...(this.model.municipalita ? { municipalita_id:this.model.municipalita.id } : {}),
    //   ...(this.model.municipalita ? { municipalita_storica:this.model.municipalita.nome } : {}),

    //   ...(this.model.quartiere ? { quartiere_id:this.model.quartiere.id } : {}),
    //   ...(this.model.quartiere ? { quartiere_storico:this.model.quartiere.nome } : {}),

    //   ...(this.model.toponimo ? { toponimo_id:this.model.toponimo.id } : {}),
    //   ...(this.model.toponimo ? { toponimo_storico:(this.model.toponimo.dug ? this.model.toponimo.dug.nome+" ": "")+this.model.toponimo.nome } : {}),
    //   ...(n.length > 0 || d.length > 0 ? {
    //     allegati: {
    //       on_conflict: {
    //         constraint: Allegato_Constraint.AllegatoPkey,
    //         update_columns: [Allegato_Update_Column.Delete]
    //       },
    //       data: [...n, ...d.map(f => { return {id:f.id, delete: true, file: '', nome: '', tipo: ''}})]
    //     }
    //   } : {}),
    //   posizionamento_toponimo_punto_iniziale: {
    //     on_conflict: {
    //       constraint: Posizionamento_Toponimo_Constraint.PosizionamentoToponimoPkey,
    //       update_columns: [
    //         Posizionamento_Toponimo_Update_Column.Civico,
    //         Posizionamento_Toponimo_Update_Column.Ipi,
    //         Posizionamento_Toponimo_Update_Column.Km,
    //         Posizionamento_Toponimo_Update_Column.Connessione,
    //         Posizionamento_Toponimo_Update_Column.Note,
    //         Posizionamento_Toponimo_Update_Column.Geoloc,
    //         Posizionamento_Toponimo_Update_Column.TipologiaId,
    //         Posizionamento_Toponimo_Update_Column.SpecificaId
    //       ]
    //     },
    //     data: {
    //       ...this.model.posizionamento_toponimo_punto_iniziale,
    //       ...(this.model.posizionamento_toponimo_punto_iniziale.tipologia ? { tipologia_id: this.model.posizionamento_toponimo_punto_iniziale.tipologia.id } : {}),
    //       specifica_id: this.model.posizionamento_toponimo_punto_iniziale.specifica ? this.model.posizionamento_toponimo_punto_iniziale.specifica.id : null,
    //       civico: this.model.posizionamento_toponimo_punto_iniziale.civico && typeof this.model.posizionamento_toponimo_punto_iniziale.civico === 'object' ? this.model.posizionamento_toponimo_punto_iniziale.civico.civico1 : this.model.posizionamento_toponimo_punto_iniziale.civico,
    //       ipi: this.model.posizionamento_toponimo_punto_iniziale.ipi && typeof this.model.posizionamento_toponimo_punto_iniziale.ipi === 'object' ? this.model.posizionamento_toponimo_punto_iniziale.ipi.matricola : this.model.posizionamento_toponimo_punto_iniziale.ipi,
    //       connessione: this.model.posizionamento_toponimo_punto_iniziale.connessione && typeof this.model.posizionamento_toponimo_punto_iniziale.connessione === 'object' ? this.model.posizionamento_toponimo_punto_iniziale.connessione.nome : this.model.posizionamento_toponimo_punto_iniziale.connessione,
    //       geoloc: {
    //         type: 'Point',
    //         coordinates: [parseFloat(this.model.punto_iniziale_geoloc.latitudine||0),parseFloat(this.model.punto_iniziale_geoloc.longitudine||0)]
    //       }
    //     }
    //   },
    //   posizionamento_toponimo_punto_finale: {
    //     on_conflict: {
    //       constraint: Posizionamento_Toponimo_Constraint.PosizionamentoToponimoPkey,
    //       update_columns: [
    //         Posizionamento_Toponimo_Update_Column.Civico,
    //         Posizionamento_Toponimo_Update_Column.Ipi,
    //         Posizionamento_Toponimo_Update_Column.Km,
    //         Posizionamento_Toponimo_Update_Column.Connessione,
    //         Posizionamento_Toponimo_Update_Column.Note,
    //         Posizionamento_Toponimo_Update_Column.Geoloc,
    //         Posizionamento_Toponimo_Update_Column.TipologiaId,
    //         Posizionamento_Toponimo_Update_Column.SpecificaId
    //       ]
    //     },
    //     data: {
    //       ...this.model.posizionamento_toponimo_punto_finale,
    //       ...(this.model.posizionamento_toponimo_punto_iniziale.tipologia ? { tipologia_id: this.model.posizionamento_toponimo_punto_iniziale.tipologia.id } : {}),
    //       specifica_id: this.model.posizionamento_toponimo_punto_finale.specifica ? this.model.posizionamento_toponimo_punto_finale.specifica.id : null,
    //       civico: this.model.posizionamento_toponimo_punto_finale.civico && typeof this.model.posizionamento_toponimo_punto_finale.civico === 'object' ? this.model.posizionamento_toponimo_punto_finale.civico.civico1 : this.model.posizionamento_toponimo_punto_finale.civico,
    //       ipi: this.model.posizionamento_toponimo_punto_finale.ipi && typeof this.model.posizionamento_toponimo_punto_finale.ipi === 'object' ? this.model.posizionamento_toponimo_punto_finale.ipi.matricola : this.model.posizionamento_toponimo_punto_finale.ipi,
    //       connessione: this.model.posizionamento_toponimo_punto_finale.connessione && typeof this.model.posizionamento_toponimo_punto_finale.connessione === 'object' ? this.model.posizionamento_toponimo_punto_finale.connessione.nome : this.model.posizionamento_toponimo_punto_finale.connessione,
    //       geoloc: {
    //         type: 'Point',
    //         coordinates: [parseFloat(this.model.punto_finale_geoloc.latitudine||0),parseFloat(this.model.punto_finale_geoloc.longitudine||0)]
    //       }
    //     }
    //   },
    //   ...(this.model.priorita ? { priorita_id: this.model.priorita.id } : {})
    // };

    // delete model.__typename;
    // delete model.municipalita;
    // delete model.quartiere;
    // delete model.toponimo;
    // delete model.posizionamento_toponimo_punto_iniziale.data.__typename;
    // delete model.posizionamento_toponimo_punto_iniziale.data.tipologia;
    // delete model.posizionamento_toponimo_punto_iniziale.data.specifica;
    // delete model.punto_iniziale_geoloc;
    // delete model.posizionamento_toponimo_punto_finale.data.__typename;
    // delete model.posizionamento_toponimo_punto_finale.data.tipologia;
    // delete model.posizionamento_toponimo_punto_finale.data.specifica;
    // delete model.punto_finale_geoloc;
    // delete model.priorita;
    // if(n.length==0 && d.length==0) delete model.allegati;  

    // this._updateInterventoStraordinarioGQL.mutate({
    //   on_conflict: {
    //     constraint: Intervento_Straordinario_Constraint.InterventoStraordinarioPkey,
    //     update_columns: [
    //       Intervento_Straordinario_Update_Column.MunicipalitaId,
    //       Intervento_Straordinario_Update_Column.MunicipalitaStorica,
    //       Intervento_Straordinario_Update_Column.QuartiereId,
    //       Intervento_Straordinario_Update_Column.QuartiereStorico,
    //       Intervento_Straordinario_Update_Column.ToponimoId,
    //       Intervento_Straordinario_Update_Column.ToponimoStorico,
    //       Intervento_Straordinario_Update_Column.PuntoInizialePosizionamentoId,
    //       Intervento_Straordinario_Update_Column.PuntoFinalePosizionamentoId,
    //       Intervento_Straordinario_Update_Column.DataInserimento,
    //       Intervento_Straordinario_Update_Column.PrioritaId,
    //       Intervento_Straordinario_Update_Column.DataInizioLavori,
    //       Intervento_Straordinario_Update_Column.DataFineLavori,
    //       Intervento_Straordinario_Update_Column.TipologiaIntervento,
    //       Intervento_Straordinario_Update_Column.LavoriEffettuati,
    //       Intervento_Straordinario_Update_Column.StatoFineLavori
    //     ]
    //   },
    //   intervento: model
    // }).subscribe({
    //   next: (r) => { this.dirty = false; this.allegati = [...r.data?.insert_intervento_straordinario?.returning![0].allegati!] },
    //   error: (r) => {
    //     console.log(r);
    //     this._loaderService.stop();
    //     this.dialog.open(ConfirmDialogComponent, {
    //       data: {
    //         title: this._translateService.instant('Attenzione'),
    //         content: this._translateService.instant('Non è stato possibile completare la richiesta di salvataggio. Errore: '+r)
    //       }
    //     });
    //   },
    //   complete: () => { this.saving = false; if(event) this._loaderService.stop()}
    // })    
  }
  
  constructor(
    private _translateService: TranslateService,
    private _prioritaSelectGQL: PrioritaSelectGQL,
    private _formaDissestoGQL: FormaDissesoSelectGQL,
    private _tipologiaDissesoSelectGQL: TipologiaDissesoSelectGQL,
    private _sezioneProtocolloSelectGQL: SezioneProtocolloSelectGQL,
    private _titoloSelectGQL: TitoloSelectGQL,
    private _segnalazioneSelectGQL: SegnalazioneSelectGQL,

    private _municipalitaSelectGQL: MunicipalitaSelectGQL,
    private _quartiereSelectGQL: QuartiereSelectGQL,
    private _toponimoSelectGQL: ToponimoSelectGQL,

    private _toponimoNomeSelectGQL: ToponimoNomeSelectGQL,

    private _specificaPosizionamentoToponimoSelectGQL: SpecificaPosizionamentoToponimoSelectGQL,
    private _tipologiaPosizionamentoToponimoSelectGQL: TipologiaPosizionamentoToponimoSelectGQL,

    private _civiciSelectGQL: CiviciSelectGQL,
    private _sostegniIpiSelectGQL: SostegniIpiSelectGQL,
    private _connessioniGrafoSelectGQL: ConnessioniGrafoSelectGQL,

    private _route: ActivatedRoute,
    private _loaderService: NgxUiLoaderService,
    public dialog: MatDialog
  ) {
    super();
    this.id = parseInt(this._route.snapshot.paramMap.get('id')!);  

  }

  ngOnInit(): void {
    this._init()
  }

  private async _init(){
    this._loaderService.start();
    // this.model = await firstValueFrom(this._interventoStraordinarioGQL.watch({
    //   id: this.id
    // }).valueChanges.pipe(
    //   map(result => result.data?.intervento_straordinario.map(intervento => {
    //     this.allegati = [...intervento.allegati];

    //     console.log(intervento);

    //     return {
    //       ...intervento,
    //       ...{allegati: base64ListToFile(intervento.allegati) },
    //       ...{punto_iniziale_geoloc:( intervento.posizionamento_toponimo_punto_iniziale?.geoloc != null ? {latitudine:intervento.posizionamento_toponimo_punto_iniziale?.geoloc.coordinates[0], longitudine:intervento.posizionamento_toponimo_punto_iniziale?.geoloc.coordinates[1]} : {latitudine:0,longitudine:0})},
    //       ...{punto_finale_geoloc:( intervento.posizionamento_toponimo_punto_finale?.geoloc != null ? {latitudine:intervento.posizionamento_toponimo_punto_finale?.geoloc.coordinates[0], longitudine:intervento.posizionamento_toponimo_punto_finale?.geoloc.coordinates[1]} : {latitudine:0,longitudine:0})},
    //       ...{posizionamento_toponimo_punto_iniziale:Object.assign({},intervento.posizionamento_toponimo_punto_iniziale)},
    //       ...{posizionamento_toponimo_punto_finale:Object.assign({},intervento.posizionamento_toponimo_punto_finale)},
    //     }
    //   })[0]),
    // ));
    this._loaderService.stop();
  }
  
  change(event:boolean){
    this.dirty = event;
  }

}
