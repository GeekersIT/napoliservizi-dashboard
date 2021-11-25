import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { SubscriptionResult } from 'apollo-angular';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { map } from 'rxjs';
import { ConfirmDialogComponent } from 'src/app/_core/_components/confirm-dialog/confirm-dialog.component';
import { LocalizzazioneFormFieldService } from 'src/app/_core/_components/form/pis/form-field.service';
import { DataSource } from 'src/app/_core/_components/table/data-source.model';
import { SegnalazioneObj } from 'src/app/_core/_models/pis/segnalazione.interface';
import { DeleteSegnalazioneGQL, PrioritaSelectGQL, SegnalazioniGQL, SegnalazioniSubscription, UpdateSegnalazioneGQL, _Stato_Segnalazione_Enum } from 'src/app/_core/_services/generated/graphql';

@Component({
  selector: 'app-segnalazioni-provvisorie',
  templateUrl: './provvisorie.component.html',
  styleUrls: ['./provvisorie.component.scss']
})
export class SegnalazioniProvvisorieComponent implements OnInit {
  source: any;
  dataSource: DataSource;
  form: FormGroup = new FormGroup({});
  options: FormlyFormOptions = {};
  model: any = {};
  fields: FormlyFieldConfig[] = [{
    fieldGroupClassName: 'display-flex',
    fieldGroup: [{
      key: 'data',
      className: 'flex-1',
      type: 'daterangepicker',
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Data')
      },
    },{
      key: 'priorita',
      className: 'flex-1',
      type: 'autocomplete',
      templateOptions: {
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
    }]
  },{
    fieldGroupClassName: 'display-flex',
    fieldGroup: [
      this._localizzazioneFormFieldService.getMunicipalita({key:"municipalita",clazz:"flex-1", multiple: true, required:false}),
      this._localizzazioneFormFieldService.getQuartieri({key:"quartiere",clazz:"flex-1", multiple: true, required:false}),
      this._localizzazioneFormFieldService.getToponimi({key:"toponimo",clazz:"flex-1", multiple: true, required:false}),
    ]
  }];


  defaultSort = {
    column: "localizzazione",
    direction: "asc"
  };
  columns = [{
      columnDef: 'id',
      header: this._translateService.instant('ID'),
      show: true,
      cell: (element: SegnalazioneObj) => `${element.id}`
    },{
      columnDef: 'localizzazione',
      header: this._translateService.instant('Localizzazione'),
      show: true,
      cell: (element: SegnalazioneObj) => {
        let str = element.toponimo_storico ? ((element.toponimo_storico.dug!=null ? element.toponimo_storico.dug.nome+' ' : '')+(element.toponimo_storico ? element.toponimo_storico.nome : '')) : '';
        if(element.posizionamento_toponimo_punto_iniziale?.tipologia!=null){
          str = str+' '+element.posizionamento_toponimo_punto_iniziale.tipologia.nome;
          if(element.posizionamento_toponimo_punto_iniziale.specifica!=null){
            str = str+' '+element.posizionamento_toponimo_punto_iniziale.specifica.nome;
            if(element.posizionamento_toponimo_punto_iniziale.civico!=null) str = str+' '+element.posizionamento_toponimo_punto_iniziale.civico;
            if(element.posizionamento_toponimo_punto_iniziale.ipi!=null) str = str+' '+element.posizionamento_toponimo_punto_iniziale.ipi;
            if(element.posizionamento_toponimo_punto_iniziale.km!=null) str = str+' '+element.posizionamento_toponimo_punto_iniziale.km;
          }
          if(element.posizionamento_toponimo_punto_iniziale.connessione!=null) str = str+' '+element.posizionamento_toponimo_punto_iniziale.connessione;
        }
        return str;
      }
    },{
      columnDef: 'quartiere',
      header: this._translateService.instant('Quartiere'),
      show: true,
      cell: (element: SegnalazioneObj) => `${element.quartiere_storico ? element.quartiere_storico.nome: ''}`
    },{
      columnDef: 'municipalita',
      header: this._translateService.instant('Municipalita'),
      show: false,
      cell: (element: SegnalazioneObj) => `${element.municipalita_storica ? element.municipalita_storica.nome: ''}`
    },{
      columnDef: 'tipologia_dissesto',
      header: this._translateService.instant('Tipologia dissesto'),
      show: true,
      cell: (element: SegnalazioneObj) => `${element.dissesto?.tipologia ? element.dissesto.tipologia.nome: ''}`
    },{
      columnDef: 'priorita',
      header: this._translateService.instant('Priorità'),
      show: true,
      cell: (element: SegnalazioneObj) => `${element.priorita ? element.priorita.nome: ''}`
    },{
      columnDef: 'data',
      header: this._translateService.instant('Data segnalazione'),
      show: true,
      cell: (element: SegnalazioneObj) => `${element.data ? new Date(element.data).toLocaleDateString('it-IT', {timeZone: "Europe/Rome"}): ''}`
    },];
  
  constructor(
    private _localizzazioneFormFieldService: LocalizzazioneFormFieldService,
    private _updateSegnalazioneGQL: UpdateSegnalazioneGQL,
    private _prioritaSelectGQL: PrioritaSelectGQL,
    private _deleteSegnalazione: DeleteSegnalazioneGQL,
    private _segnalazioniGQL: SegnalazioniGQL,
    private _translateService: TranslateService,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _loaderService: NgxUiLoaderService,
    public dialog: MatDialog
  ) {
    this.dataSource = new DataSource();
  }

  // private _map(element: SegnalazioneObj){
  //   console.log(element);
  //   return element;
  
  //   // const assegnazioni = element.assegnazioni.filter((assegnazione) => assegnazione.fine_validita == null);
  //   // const assegnazioni_vecchie = element.assegnazioni.filter((assegnazione) => assegnazione.fine_validita != null);
  //   // return {
  //   //   ...element, 
  //   //   ...{assegnazioni: assegnazioni},
  //   //   ...{assegnazioni_vecchie: assegnazioni_vecchie}
  //   // }
  // }

  applyFilter(event:any) {
    this.dataSource.isLoading!.next(true);
    this.source.unsubscribe();

    this.source = this._segnalazioniGQL.subscribe({
      where: {
        ...(this.model.data ? (
          this.model.data.end == null ? { data: { _eq: this.model.data.start } } : {_and: [
            ...(this.model.data.start ? [{ data: { _gte: this.model.data.start } }] : [] ),
            ...(this.model.data.end ? [{ data: { _lte: this.model.data.end } }] : [] ),
          ] } 
        ) : {}),
        stato: { _eq: _Stato_Segnalazione_Enum.Bozza },
        quartiere_id: this.model.quartiere ? {
          _in: this.model.quartiere.map((e: { id: any; }) => e.id)
        } : {},
        municipalita_id: this.model.municipalita ? {
          _in: this.model.municipalita.map((e: { id: any; }) => e.id)
        } : {},
        toponimo_id: this.model.toponimo ? {
          _in: this.model.toponimo.map((e: { id: any; }) => e.id)
        } : {},
        priorita_id: this.model.priorita ? {
          _eq: this.model.priorita.id
        } : {}
      }
    }).subscribe((response:SubscriptionResult<SegnalazioniSubscription>) => {
      this.dataSource.source!.next(response.data?.segnalazione);
      this.dataSource.isLoading!.next(false);
    });
  }

  reset(event: boolean){
    if(event) {
      this.dataSource.isLoading!.next(true);
      this.source.unsubscribe();
      this.source = this._init();
    }
  }

  ngOnInit(){
    this.dataSource.isLoading!.next(true);
    this.source = this._init();
  }

// _map(e){

// }

  private _init(){
    return this._segnalazioniGQL.subscribe({
      where: {
        stato: { _eq: _Stato_Segnalazione_Enum.Bozza }
      }
    }).subscribe((response:SubscriptionResult<SegnalazioniSubscription>) => {
      // this.dataSource.source!.next(response.data?.segnalazione.map(element => this._map(element)));
      this.dataSource.source!.next(response.data?.segnalazione);
      this.dataSource.isLoading!.next(false);
    });
  }


  new(){
    this._updateSegnalazioneGQL.mutate({
      segnalazione: {
        data: new Date(),
        dissesto: {
          data: {}
        },
        intervento: {
          data: {}
        },
        protocollo: {
          data: {
            destinatari: {
              data: [
                {
                  e_esterno: false
                }
              ]
            }
          }
        },
        tecnico_referente: {
          data: {}
        },
        posizionamento_toponimo_punto_iniziale: {
          data: {}
        }
      }
    }).subscribe((result) => {
      this._router.navigate(['/','pis','segnalazioni','provvisorie','edit',result.data?.insert_segnalazione?.returning[0].id]);
    });

  }


  delete(row?:any){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: this._translateService.instant('Attenzione'),
        content: this._translateService.instant('Procedendo all\'elemizione non sarà più possibile tornare indietro.')
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this._loaderService.start();
        this._deleteSegnalazione.mutate({id:row!.id}).subscribe({
          error: (e) => {
            this._loaderService.stop();
            if(e.message.includes('Foreign key violation')){
              this._snackBar.open(this._translateService.instant('Non è possibile eliminare la segnalazione perchè è collegate ad altre segnalazioni.'), this._translateService.instant('Ho capito!'));
            }
          },
          complete: () => this._loaderService.stop()
        });
      }
    })
  }

}
