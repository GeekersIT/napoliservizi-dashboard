import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { firstValueFrom, map } from 'rxjs';
import { base64ListToFile, fileListToBase64 } from 'src/app/_core/_functions';
import { SegnalazioneObj } from 'src/app/_core/_models/pis/segnalazione.interface';
import { _Stato_Segnalazione_Enum, Segnalazione_Constraint, Segnalazione_Update_Column, GiorniTrascorsiSelectGQL, CiviciSelectGQL, ConnessioniGrafoSelectGQL, FormaDissesoSelectGQL, MunicipalitaSelectGQL, PrioritaSelectGQL, QuartiereSelectGQL, SegnalazioneGQL, SegnalazioneSelectGQL, SezioneProtocolloSelectGQL, SostegniIpiSelectGQL, SpecificaPosizionamentoToponimoSelectGQL, TipologiaDissesoSelectGQL, TipologiaPosizionamentoToponimoSelectGQL, TitoloSelectGQL, ToponimoNomeSelectGQL, ToponimoSelectGQL, UpdateSegnalazioneGQL, CondizioniTrafficoSelectGQL, MaterialeSelectGQL, Intervento_Constraint, Intervento_Update_Column, Attrezzature_Impiegate_Constraint, Attrezzature_Impiegate_Update_Column, Materiale_Dissesto_Constraint, Materiale_Dissesto_Update_Column, Segnaletica_Lasciata_Constraint, Segnaletica_Lasciata_Update_Column, Veicoli_Impiegati_Constraint, Veicoli_Impiegati_Update_Column} from 'src/app/_core/_services/generated/graphql';
import { SegnalazioneEdit } from '../../edit.abstract';

@Component({
  selector: 'app-segnalazioni-protocollate-completa',
  templateUrl: './completa.component.html',
  styleUrls: ['./completa.component.scss']
})
export class SegnalazioniProtocollateCompletaComponent extends SegnalazioneEdit implements OnInit {

  // internalStartData: any = {
  //   allegati: [],
  //   attrezzature_impiegate: [],
  //   materiali_dissesto: [],
  //   segnaletica_lasciata: [],
  //   veicoli: [],
  // }


  fields: FormlyFieldConfig[] = [{
    type: 'stepper',
    templateOptions:{
      orientation:'horizontal',
      activeStep: 5
    },
    fieldGroup: [
      // ...[
  //       {  
  //       key: 'intervento',      
  //       expressionProperties: {
  //         'templateOptions.label': this._translateService.stream('Intervento'),
  //       },
  //       fieldGroup: [{
  //         key: 'id',
  //         className: 'hidden',
  //         type: 'input',
  //         templateOptions: {
  //           readonly:true,
  //         },
  //       },{
  //         fieldGroupClassName: 'display-flex',
  //         fieldGroup:[{
  //           key: 'data_inizio_lavori',
  //           className: 'flex-1',
  //           type: 'datepicker',
  //           templateOptions: {
  //             required: true,
  //           },
  //           expressionProperties: {
  //             'templateOptions.label': this._translateService.stream('Data inizio lavori'),
  //           },
  //         },{
  //           key: 'data_fine_lavori',
  //           className: 'flex-1',
  //           type: 'datepicker',
  //           templateOptions: {
  //             required: true,
  //           },
  //           expressionProperties: {
  //             'templateOptions.label': this._translateService.stream('Data fine lavori'),
  //           },
  //         }]
  //       },{
  //         key: 'tipologia',
  //         type: 'autocomplete',
  //         templateOptions: {
  //           disabled: true,
  //           required: true,
  //           displayWith: (e:any) => e ? e.intervento : '',
  //           filter: (term:any, limit:number, offset:number, parent?:any, ) => this._tipologiaDissesoSelectGQL.watch({
  //             limit: limit,
  //             offset: offset,
  //             ...(term && typeof term === 'string' ? { nome: { _ilike: "%"+term+"%" } } : {} )
  //           }).valueChanges.pipe(
  //             map(result => result.data?._tipologia_dissesto ) 
  //           ),
  //         },
  //         expressionProperties: {
  //           'templateOptions.label': this._translateService.stream('Tipologia di intervento'),
  //         },
  //       },{
  //         fieldGroupClassName: 'display-flex',
  //         fieldGroup:[{
  //           key: 'giorni_trascorsi',
  //           className: 'flex-1',
  //           type: 'autocomplete',
  //           templateOptions: {
  //             filter: (term:any, limit:number, offset:number, parent?:any, ) => this._giorniTrascorsiSelect.watch({
  //               limit: limit,
  //               offset: offset,
  //               ...(term && typeof term === 'string' ? { nome: { _ilike: "%"+term+"%" } } : {} )
  //             }).valueChanges.pipe(
  //               map(result => result.data?._giorni_trascorsi ) 
  //             ),
  //           },
  //           expressionProperties: {
  //             'templateOptions.label': this._translateService.stream('Giorni trascorsi dalla segnalazione'),
  //           },
  //         },{
  //           key: 'condizioni_traffico',
  //           className: 'flex-1',
  //           type: 'autocomplete',
  //           templateOptions: {
  //             filter: (term:any, limit:number, offset:number, parent?:any, ) => this._condizioniTrafficoSelect.watch({
  //               limit: limit,
  //               offset: offset,
  //               ...(term && typeof term === 'string' ? { nome: { _ilike: "%"+term+"%" } } : {} )
  //             }).valueChanges.pipe(
  //               map(result => result.data?._condizioni_traffico ) 
  //             ),
  //           },
  //           expressionProperties: {
  //             'templateOptions.label': this._translateService.stream('Condizioni del traffico'),
  //           },
  //         }]
  //       },{
  //         className: 'section-label',
  //         template: '<h3><b>'+this._translateService.instant('Veicoli utilizzati durante l\'intervento')+'</b></h3>',
  //       },{
  //         key: 'veicoli',
  //         type: 'repeat',
  //         expressionProperties: {
  //           'templateOptions.addText': this._translateService.stream('Aggiungi'),
  //         },
  //         fieldArray: {
  //           fieldGroup: [{
  //             key: 'id',
  //             className: 'hidden',
  //             type: 'input',
  //             templateOptions: {
  //               readonly:true,
  //             },
  //           },{
  //             key: 'targa',
  //             className: 'flex-2',
  //             type: 'input',
  //             templateOptions: {
  //               required: true
  //             },
  //             expressionProperties: {
  //               'templateOptions.label': this._translateService.stream('Targa'),
  //             }
  //           }]
  //         }
  //       },{
  //         key: 'note',
  //         type: 'textarea',
  //         expressionProperties: {
  //           'templateOptions.label': this._translateService.stream('Note'),
  //         },
  //       },{
  //         fieldGroupClassName: 'display-flex',
  //         fieldGroup:[{
  //           key: 'assistenza_pm',
  //           className: 'flex-1',
  //           type: 'toggle',
  //           templateOptions: {
  //             appearance: 'standard',
  //           },
  //           expressionProperties: {
  //             'templateOptions.label': this._translateService.stream('Assistenza polizia municipale e/o forze dell\'ordine durante l\'intervento'),
  //           }
  //         },{
  //           key: 'dissesto_difforme',
  //           className: 'flex-1',
  //           type: 'toggle',
  //           templateOptions: {
  //             appearance: 'standard',
  //           },
  //           expressionProperties: {
  //             'templateOptions.label': this._translateService.stream('Le caratteristiche del dissesto non sono conformi alla segnalazione ricevuta'),
  //           }
  //         }]
  //       },{
  //         key: 'difformita',
  //         type: 'textarea',
  //         templateOptions:{
  //           required: true
  //         },
  //         hideExpression: (model: any, formState:any) => !(model && model.dissesto_difforme),
  //         expressionProperties: {
  //           'templateOptions.label': this._translateService.stream('Descrivere la difformità'),
  //         },
  //       },{
  //         className: 'section-label',
  //         template: '<h3><b>'+this._translateService.instant('Attrezzatura utilizzata durante l\'intervento')+'</b></h3>',
  //       },{
  //         key: 'attrezzature_impiegate',
  //         type: 'repeat',
  //         expressionProperties: {
  //           'templateOptions.addText': this._translateService.stream('Aggiungi'),
  //         },
  //         fieldArray: {
  //           fieldGroup: [{
  //             key: 'id',
  //             className: 'hidden',
  //             type: 'input',
  //             templateOptions: {
  //               readonly:true,
  //             },
  //           },{
  //             fieldGroupClassName: 'display-flex',
  //             fieldGroup:[{
  //               key: 'nome',
  //               className: 'flex-2',
  //               type: 'input',
  //               templateOptions: {
  //                 required: true
  //               },
  //               expressionProperties: {
  //                 'templateOptions.label': this._translateService.stream('Nome'),
  //               }
  //             },{
  //               key: 'quantita',
  //               className: 'flex-1',
  //               type: 'input',
  //               templateOptions: {
  //                 type: 'number',
  //                 required: true,
  //               },
  //               expressionProperties: {
  //                 'templateOptions.label': this._translateService.stream('Quantità'),
  //               }
  //             }]
  //           }
            
  //         ]
  //       }
  //     },{
  //       className: 'section-label',
  //       template: '<h3><b>'+this._translateService.instant('Segnaletica lascita durante l\'intervento')+'</b></h3>',
  //     },{
  //       key: 'segnaletica_lasciata',
  //       type: 'repeat',
  //       expressionProperties: {
  //         'templateOptions.addText': this._translateService.stream('Aggiungi'),
  //       },
  //       fieldArray: {
  //         fieldGroup: [{
  //           key: 'id',
  //           className: 'hidden',
  //           type: 'input',
  //           templateOptions: {
  //             readonly:true,
  //           },
  //         },{
  //           fieldGroupClassName: 'display-flex',
  //           fieldGroup:[{
  //             key: 'nome',
  //             className: 'flex-2',
  //             type: 'input',
  //             templateOptions: {
  //               required: true
  //             },
  //             expressionProperties: {
  //               'templateOptions.label': this._translateService.stream('Nome'),
  //             }
  //           },{
  //             key: 'quantita',
  //             className: 'flex-1',
  //             type: 'input',
  //             templateOptions: {
  //               type: 'number',
  //               required: true,
  //             },
  //             expressionProperties: {
  //               'templateOptions.label': this._translateService.stream('Quantità'),
  //             }
  //           }]
  //         }
          
  //       ]
  //     }
  //   },{
  //     className: 'section-label',
  //     template: '<h3><b>'+this._translateService.instant('Materiale utilizzato durante l\'intervento')+'</b></h3>',
  //   },{
  //     key: 'materiali_dissesto',
  //     type: 'repeat',
  //     expressionProperties: {
  //       'templateOptions.addText': this._translateService.stream('Aggiungi'),
  //     },
  //     fieldArray: {
  //       fieldGroup: [{
  //         key: 'id',
  //         className: 'hidden',
  //         type: 'input',
  //         templateOptions: {
  //           readonly:true,
  //         },
  //       },{
  //         fieldGroupClassName: 'display-flex',
  //         fieldGroup:[{
  //           key: 'materiale',
  //           className: 'flex-2',
  //           type: 'autocomplete',
  //           templateOptions: {
  //             required: true,
  //             filter: (term:any, limit:number, offset:number, parent?:any, ) => this._materialeSelect.watch({
  //               limit: limit,
  //               offset: offset,
  //               ...(term && typeof term === 'string' ? { nome: { _ilike: "%"+term+"%" } } : {} )
  //             }).valueChanges.pipe(
  //               map(result => result.data?._materiale ) 
  //             ),
  //           },
  //           expressionProperties: {
  //             'templateOptions.label': this._translateService.stream('Nome'),
  //           },
  //         },{
  //           key: 'quantita',
  //           className: 'flex-1',
  //           type: 'input',
  //           templateOptions: {
  //             type: 'number',
  //             required: true,
  //           },
  //           expressionProperties: {
  //             'templateOptions.label': this._translateService.stream('Quantità'),
  //           }
  //         }]
  //       },{
  //         key: 'altro',
  //         type: 'input',
  //         templateOptions: {
  //           required: true
  //         },
  //         hideExpression: (model: any, formState:any) => !(model && model.materiale && model.materiale.id == 1),
  //         expressionProperties: {
  //           'templateOptions.label': this._translateService.stream('Specifica'),
  //         }
  //       },
        
  //     ]
  //   }
  // },{
  //   className: 'section-label',
  //   template: '<h3><b>'+this._translateService.instant('Allegati di chiusura')+'</b></h3>',
  // },{
  //   key: 'allegati',
  //   type: 'file',
  //   templateOptions: {
  //     uploadUrl: '/upload'
  //   },
  //   expressionProperties: {
  //     'templateOptions.label': this._translateService.stream('Allegati'),
  //   },
  // }]
  //     }],
      ...this.steps.filter(step => step.key != 'geolocalizzazione'),
    ],
  }];

  // constructor(
  //   protected _translateService: TranslateService,
  //   protected _prioritaSelectGQL: PrioritaSelectGQL,
  //   protected _formaDissestoGQL: FormaDissesoSelectGQL,
  //   protected _tipologiaDissesoSelectGQL: TipologiaDissesoSelectGQL,
  //   protected _sezioneProtocolloSelectGQL: SezioneProtocolloSelectGQL,
  //   protected _titoloSelectGQL: TitoloSelectGQL,
  //   protected _segnalazioneSelectGQL: SegnalazioneSelectGQL,
  //   protected _segnalazioneGQL: SegnalazioneGQL,
  //   protected _municipalitaSelectGQL: MunicipalitaSelectGQL,
  //   protected _quartiereSelectGQL: QuartiereSelectGQL,
  //   protected _toponimoSelectGQL: ToponimoSelectGQL,
  //   protected _toponimoNomeSelectGQL: ToponimoNomeSelectGQL,
  //   protected _specificaPosizionamentoToponimoSelectGQL: SpecificaPosizionamentoToponimoSelectGQL,
  //   protected _tipologiaPosizionamentoToponimoSelectGQL: TipologiaPosizionamentoToponimoSelectGQL,
  //   protected _updateSegnalazioneGQL: UpdateSegnalazioneGQL,
  //   protected _civiciSelectGQL: CiviciSelectGQL,
  //   protected _sostegniIpiSelectGQL: SostegniIpiSelectGQL,
  //   protected _connessioniGrafoSelectGQL: ConnessioniGrafoSelectGQL,
  //   protected _route: ActivatedRoute,
  //   protected _router: Router,
  //   protected _loaderService: NgxUiLoaderService,
  //   protected _dialog: MatDialog,
  //   private _giorniTrascorsiSelect: GiorniTrascorsiSelectGQL,
  //   private _condizioniTrafficoSelect: CondizioniTrafficoSelectGQL,
  //   private _materialeSelect: MaterialeSelectGQL
  // ){
  //   super(
  //     _translateService,
  //     _prioritaSelectGQL,
  //     _formaDissestoGQL,
  //     _tipologiaDissesoSelectGQL,
  //     _sezioneProtocolloSelectGQL,
  //     _titoloSelectGQL,
  //     _segnalazioneSelectGQL,
  //     _segnalazioneGQL,
  //     _municipalitaSelectGQL,
  //     _quartiereSelectGQL,
  //     _toponimoSelectGQL,
  //     _toponimoNomeSelectGQL,
  //     _specificaPosizionamentoToponimoSelectGQL,
  //     _tipologiaPosizionamentoToponimoSelectGQL,
  //     _updateSegnalazioneGQL,
  //     _civiciSelectGQL,
  //     _sostegniIpiSelectGQL,
  //     _connessioniGrafoSelectGQL,
  //     _route,
  //     _router,
  //     _loaderService,
  //     _dialog
  //   );
  // }

  ngOnInit(): void {
    this.disabled.base.next(true);
    this.disabled.complete.next(false);
    this.hide.complete.next(false);
    this.baseInit({
      where: {
        _and: [
          { id: { _eq: this.id } },
          { stato: { _neq: _Stato_Segnalazione_Enum.Bozza } },
          { stato: { _neq: _Stato_Segnalazione_Enum.Pre } }
        ]
      }
    }, 
    // (segnalazione:SegnalazioneObj) => {
    //   let intervento = segnalazione.intervento!;

    //   this.internalStartData.allegati = [...intervento?.allegati!];

    //   return{
    //     intervento: {
    //       id: intervento.id,
    //       data_inizio_lavori: intervento.data_inizio_lavori,
    //       data_fine_lavori: intervento.data_fine_lavori,
    //       tipologia: segnalazione.dissesto!.tipologia,
    //       giorni_trascorsi: intervento.giorni_trascorsi,
    //       condizioni_traffico: intervento.condizioni_traffico,
    //       veicoli: intervento.veicoli_impiegati.map(e => Object.assign([],e)),
    //       note: intervento.note,
    //       assistenza_pm: intervento.assistenza_pm,
    //       dissesto_difforme: intervento.dissesto_difforme,
    //       difformita: intervento.difformita,
    //       attrezzature_impiegate: intervento.attrezzature_impiegate.map(e => Object.assign([],e)),
    //       segnaletica_lasciata: intervento.segnaletica_lasciata.map(e => Object.assign([],e)),
    //       materiali_dissesto: intervento.materiali_dissesto.map(e => Object.assign([],e)),
    //       allegati: base64ListToFile(intervento.allegati)
    //     }
    //   }
    // },() => {
    //   this.internalStartData.attrezzature_impiegate = [...this.model.intervento?.attrezzature_impiegate!.map((e:any) => e.id)];
    //   this.internalStartData.materiali_dissesto = [...this.model.intervento?.materiali_dissesto!.map((e:any) => e.id)];
    //   this.internalStartData.segnaletica_lasciata = [...this.model.intervento?.segnaletica_lasciata!.map((e:any) => e.id)];
    //   this.internalStartData.veicoli = [...this.model.intervento?.veicoli!.map((e:any) => e.id)];
    // }
    );
  }

  async save(event:any){
    this.saving = true;
    if(event.loading) this._loaderService.start();

    let att_d = this.startData.intervento.attrezzature_impiegate.filter((x:any) => !this.model.intervento.attrezzature_impiegate.map((d:any) => d.id).includes(x));
    let mat_d = this.startData.intervento.materiali_dissesto.filter((x:any) => !this.model.intervento.materiali_dissesto.map((d:any) => d.id).includes(x));
    let seg_d = this.startData.intervento.segnaletica_lasciata.filter((x:any) => !this.model.intervento.segnaletica_lasciata.map((d:any) => d.id).includes(x));
    let vei_d = this.startData.intervento.veicoli.filter((x:any) => !this.model.intervento.veicoli.map((d:any) => d.id).includes(x));

    const allegati = this.model.intervento.allegati ? await fileListToBase64(this.model.intervento.allegati) : [];
    let d = this.startData.intervento.allegati.filter((x:any) => !allegati.map((f:any) => f.nome).includes(x.name));
    let n = allegati.filter((x: any) => !this.startData.intervento.allegati.map((f:any) => f.name).includes(x.nome));

    this._updateSegnalazioneGQL.mutate({
      on_conflict: {
        constraint: Segnalazione_Constraint.SegnalazionePkey,
        update_columns: [
          Segnalazione_Update_Column.Stato,
        ]
      },
      segnalazione: {
        id: this.id,
        ...(event.type == 'def' ? {stato:_Stato_Segnalazione_Enum.Completata} : {stato: this.model.stato}),
        intervento: {
          on_conflict: {
            constraint: Intervento_Constraint.InterventoPkey,
            update_columns: [
              Intervento_Update_Column.AssistenzaPm,
              Intervento_Update_Column.CondizioniTrafficoId,
              Intervento_Update_Column.DataFineLavori,
              Intervento_Update_Column.DataInizioLavori,
              Intervento_Update_Column.Difformita,
              Intervento_Update_Column.DissestoDifforme,
              Intervento_Update_Column.GiorniTrascorsiId,
              Intervento_Update_Column.Note
            ]
          },
          data:{
            id: this.model.intervento.id,
            ...(n.length > 0 || d.length > 0 ? {
              allegati: {
                data: [...n, ...d.map((f:any) => { return {id:f.id, delete: true, file: '', nome: f.name, tipo: ''}})]

              }
            } : {}),
            ...(this.model.intervento.assistenza_pm ? { assistenza_pm:this.model.intervento.assistenza_pm } : {}),
            ...(this.model.intervento.condizioni_traffico ? { condizioni_traffico_id: this.model.intervento.condizioni_traffico.id } : {}),
            ...(this.model.intervento.data_fine_lavori ? { data_fine_lavori:this.model.intervento.data_fine_lavori } : {}),
            ...(this.model.intervento.data_inizio_lavori ? { data_inizio_lavori:this.model.intervento.data_inizio_lavori } : {}),
            ...(this.model.intervento.difformita ? { difformita:this.model.intervento.difformita } : {}),
            ...(this.model.intervento.dissesto_difforme ? { dissesto_difforme:this.model.intervento.dissesto_difforme } : {}),
            ...(this.model.intervento.giorni_trascorsi ? { giorni_trascorsi_id: this.model.intervento.giorni_trascorsi.id } : {}),
            ...(this.model.intervento.note ? { note:this.model.intervento.note } : {}),
            attrezzature_impiegate: {
              on_conflict: {
                constraint: Attrezzature_Impiegate_Constraint.AttrezzatureImpiegatePkey,
                update_columns: [
                  Attrezzature_Impiegate_Update_Column.Nome,
                  Attrezzature_Impiegate_Update_Column.Quantita,
                  Attrezzature_Impiegate_Update_Column.Delete
                ]
              },
              data:[
                ...(this.model.intervento.attrezzature_impiegate ? this.model.intervento.attrezzature_impiegate.map((attrezzatura:any) => {
                  return {
                    ...(attrezzatura.id ? { id: attrezzatura.id } : {} ),
                    ...(attrezzatura.nome ? { nome: attrezzatura.nome } : {} ),
                    ...(attrezzatura.quantita ? { quantita: attrezzatura.quantita } : {} ),
                  } 
                }): []),
                ...att_d.map((d:any) => { return {id:d,delete:true}})
              ]
            },
            materiali_dissesto: {
              on_conflict: {
                constraint: Materiale_Dissesto_Constraint.MaterialeDissestoPkey,
                update_columns: [
                  Materiale_Dissesto_Update_Column.MaterialeId,
                  Materiale_Dissesto_Update_Column.Altro,
                  Materiale_Dissesto_Update_Column.Quantita,
                  Materiale_Dissesto_Update_Column.Delete
                ]
              },
              data:[
                ...(this.model.intervento.materiali_dissesto ? this.model.intervento.materiali_dissesto.map((materiale:any) => {
                  return {
                    ...(materiale.id ? { id: materiale.id } : {} ),
                    ...(materiale.materiale ? { materiale_id: materiale.materiale.id } : {} ),
                    ...(materiale.altro ? { altro: materiale.altro } : {} ),
                    ...(materiale.quantita ? { quantita: materiale.quantita } : {} ),
                  } 
                }):[]),
                ...mat_d.map((d:any) => { return {id:d,delete:true}})
              ]
            },
            segnaletica_lasciata: {
              on_conflict: {
                constraint: Segnaletica_Lasciata_Constraint.SegnaleticaLasciataPkey,
                update_columns: [
                  Segnaletica_Lasciata_Update_Column.Nome,
                  Segnaletica_Lasciata_Update_Column.Quantita,
                  Segnaletica_Lasciata_Update_Column.Delete
                ]
              },
              data:[
                ...(this.model.intervento.segnaletica_lasciata ? this.model.intervento.segnaletica_lasciata.map((segnaletica:any) => {
                  return {
                    ...(segnaletica.id ? { id: segnaletica.id } : {} ),
                    ...(segnaletica.nome ? { nome: segnaletica.nome } : {} ),
                    ...(segnaletica.quantita ? { quantita: segnaletica.quantita } : {} ),
                  } 
                }):[]),
                ...seg_d.map((d:any) => { return {id:d,delete:true}})
              ]
            },
            veicoli_impiegati: {
              on_conflict: {
                constraint: Veicoli_Impiegati_Constraint.VeicoliImpiegatiPkey,
                update_columns: [
                  Veicoli_Impiegati_Update_Column.Targa,
                  Veicoli_Impiegati_Update_Column.Delete
                ]
              },
              data:[
                ...(this.model.intervento.veicoli?this.model.intervento.veicoli.map((veicolo:any) => {
                  return {
                    ...(veicolo.id ? { id: veicolo.id } : {} ),
                    ...(veicolo.targa ? { targa: veicolo.targa } : {} ),
                  } 
                }):[]),
                ...vei_d.map((d:any) => { return {id:d,delete:true}})
              ]
            },
          }
        },
        ...(event.type == 'def' ? {
          eventi: {
            data: [
              {
                stato: _Stato_Segnalazione_Enum.Completata
              }
            ]
          }
        } : {} )
      }
    }).subscribe({
      next: async (result) => {
        this.dirty = false; 
        // const ret = result.data?.insert_segnalazione?.returning![0]!;
        const ret:any = result.data?.custom_insert_segnalazione?.segnalazione;


        let bucket:any = await firstValueFrom(this._http.post('/storage/bucket/list', { bucket: 'segnalazione-'+ret.id }));
        this.startData.allegati = bucket.allegati.filter((el:any) => el.name.indexOf('intervento')==0);

        // this.startData.intervento.allegati = [...ret.intervento?.allegati!];
        this.startData.intervento.attrezzature_impiegate = [...ret.intervento?.attrezzature_impiegate.map((e:any) => e.id)!];
        this.startData.intervento.materiali_dissesto = [...ret.intervento?.materiali_dissesto.map((e:any) => e.id)!];
        this.startData.intervento.segnaletica_lasciata = [...ret.intervento?.segnaletica_lasciata.map((e:any) => e.id)!];
        this.startData.intervento.veicoli = [...ret.intervento?.veicoli_impiegati.map((e:any) => e.id)!];
      },
      error: (e) => this.onSaveError(e),
      complete: () => { this.dirty = false; this.saving = false; if(event.loading) this._loaderService.stop(); if(event.type == 'def') this._router.navigate(['/','pis','segnalazioni','protocollate'])}
    })  
  }


}
