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
import { InterventoStraordinaioObj } from 'src/app/_core/_models/pis/intervento_straordinario.intervace';
import { DeleteInterventoStraordinarioGQL, InterventiStraordinariGQL, InterventiStraordinariSubscription, InterventoStraordinarioGQL, PrioritaSelectGQL, UpdateInterventoStraordinarioGQL, _Stato_Segnalazione_Enum } from 'src/app/_core/_services/generated/graphql';

@Component({
  selector: 'app-interventi-straordinari',
  templateUrl: './straordinari.component.html',
  styleUrls: ['./straordinari.component.scss']
})
export class InterventiStraordinariComponent implements OnInit {
  source: any;
  dataSource: DataSource;
  form: FormGroup = new FormGroup({});
  options: FormlyFormOptions = {};
  model: any = {};
  fields: FormlyFieldConfig[] = [{
    fieldGroupClassName: 'display-flex',
    fieldGroup: [{
      key: 'data_inizio',
      className: 'flex-1',
      type: 'daterangepicker',
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Data inizio lavori')
      },
    },{
      key: 'data_fine',
      className: 'flex-1',
      type: 'daterangepicker',
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Data fine lavori')
      },
    }]
  },{
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
    cell: (element: InterventoStraordinaioObj) => `${element.id}`
  },{
    columnDef: 'localizzazione',
    header: this._translateService.instant('Localizzazione'),
    show: true,
    cell: (element: InterventoStraordinaioObj) => {
      let str = element.toponimo_storico ? ((element.toponimo_storico.dug!=null ? element.toponimo_storico.dug.nome+' ' : '')+(element.toponimo_storico ? element.toponimo_storico.nome : '')) : '';
      // if(element.posizionamento_toponimo_punto_iniziale?.tipologia!=null){
      //   str = str+' da '+element.posizionamento_toponimo_punto_iniziale.tipologia.nome;
      //   if(element.posizionamento_toponimo_punto_iniziale.specifica!=null){
      //     str = str+' '+element.posizionamento_toponimo_punto_iniziale.specifica.nome;
      //     if(element.posizionamento_toponimo_punto_iniziale.civico!=null) str = str+' '+element.posizionamento_toponimo_punto_iniziale.civico;
      //     if(element.posizionamento_toponimo_punto_iniziale.ipi!=null) str = str+' '+element.posizionamento_toponimo_punto_iniziale.ipi;
      //     if(element.posizionamento_toponimo_punto_iniziale.km!=null) str = str+' '+element.posizionamento_toponimo_punto_iniziale.km;
      //   }
      //   if(element.posizionamento_toponimo_punto_iniziale.connessione!=null) str = str+' '+element.posizionamento_toponimo_punto_iniziale.connessione;
      // }
      // if(element.posizionamento_toponimo_punto_finale?.tipologia!=null){
      //   str = str+' a '+element.posizionamento_toponimo_punto_finale.tipologia.nome;
      //   if(element.posizionamento_toponimo_punto_finale.specifica!=null){
      //     str = str+' '+element.posizionamento_toponimo_punto_finale.specifica.nome;
      //     if(element.posizionamento_toponimo_punto_finale.civico!=null) str = str+' '+element.posizionamento_toponimo_punto_finale.civico;
      //     if(element.posizionamento_toponimo_punto_finale.ipi!=null) str = str+' '+element.posizionamento_toponimo_punto_finale.ipi;
      //     if(element.posizionamento_toponimo_punto_finale.km!=null) str = str+' '+element.posizionamento_toponimo_punto_finale.km;
      //   }
      //   if(element.posizionamento_toponimo_punto_finale.connessione!=null) str = str+' '+element.posizionamento_toponimo_punto_finale.connessione;
      // }

      return str;
    }
  },{
    columnDef: 'quartiere',
    header: this._translateService.instant('Quartiere'),
    show: true,
    cell: (element: InterventoStraordinaioObj) => `${element.quartiere_storico ? element.quartiere_storico.nome: ''}`
  },{
    columnDef: 'municipalita',
    header: this._translateService.instant('Municipalita'),
    show: true,
    cell: (element: InterventoStraordinaioObj) => `${element.municipalita_storica ? element.municipalita_storica.nome: ''}`
  },{
    columnDef: 'data_lavori',
    header: this._translateService.instant('Data lavori'),
    show: true,
    cell: (element: InterventoStraordinaioObj) => `${element.data_inizio_lavori ? new Date(element.data_inizio_lavori).toLocaleDateString('it-IT', {timeZone: "Europe/Rome"}): ''} - ${element.data_fine_lavori ? new Date(element.data_fine_lavori).toLocaleDateString('it-IT', {timeZone: "Europe/Rome"}): ''}`
  },{
    columnDef: 'priorita',
    header: this._translateService.instant('Priorità'),
    show: true,
    cell: (element: InterventoStraordinaioObj) => `${element.priorita ? element.priorita.nome : ''}`
  },{
    columnDef: 'data_inserimento',
    header: this._translateService.instant('Data inserimento'),
    show: true,
    cell: (element: InterventoStraordinaioObj) => `${element.data_inserimento ? new Date(element.data_inserimento).toLocaleDateString('it-IT', {timeZone: "Europe/Rome"}): ''}`
  },{
    columnDef: 'stato',
    header: this._translateService.instant('Stato'),
    show: true,
    cell: (element: InterventoStraordinaioObj) => `${element.stato ? element.stato: ''}`
  },];

  constructor(
    private _localizzazioneFormFieldService: LocalizzazioneFormFieldService,
    private _updateInterventoStraordinarioGQL: UpdateInterventoStraordinarioGQL,
    private _prioritaSelectGQL: PrioritaSelectGQL,
    private _deleteInterventoStraordinarioGQL: DeleteInterventoStraordinarioGQL,
    private _interventiStraordinariGQL: InterventiStraordinariGQL,
    private _translateService: TranslateService,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _loaderService: NgxUiLoaderService,
    public dialog: MatDialog
  ) {
    this.dataSource = new DataSource();
  }

  applyFilter(event:any) {
    this.dataSource.isLoading!.next(true);
    this.source.unsubscribe();

    this.source = this._interventiStraordinariGQL.subscribe({
      where: {
        ...(this.model.data ? (
          this.model.data.end == null ? { data_inserimento: { _eq: this.model.data.start } } : {_and: [
            ...(this.model.data.start ? [{ data_inserimento: { _gte: this.model.data.start } }] : [] ),
            ...(this.model.data.end ? [{ data_inserimento: { _lte: this.model.data.end } }] : [] ),
          ] } 
        ) : {}),
        ...(this.model.data_inizio ? (
          this.model.data_inizio.end == null ? { data_inizio_lavori: { _eq: this.model.data_inizio.start } } : {_and: [
            ...(this.model.data_inizio.start ? [{ data_inizio_lavori: { _gte: this.model.data_inizio.start } }] : [] ),
            ...(this.model.data_inizio.end ? [{ data_inizio_lavori: { _lte: this.model.data_inizio.end } }] : [] ),
          ] } 
        ) : {}),
        ...(this.model.data_fine ? (
          this.model.data_fine.end == null ? { data_fine_lavori: { _eq: this.model.data_fine.start } } : {_and: [
            ...(this.model.data_fine.start ? [{ data_fine_lavori: { _gte: this.model.data_fine.start } }] : [] ),
            ...(this.model.data_fine.end ? [{ data_fine_lavori: { _lte: this.model.data_fine.end } }] : [] ),
          ] } 
        ) : {}),
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
    }).subscribe((response:SubscriptionResult<InterventiStraordinariSubscription>) => {
      this.dataSource.source!.next(response.data?.intervento_straordinario);
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

  private _init(){
    return this._interventiStraordinariGQL.subscribe().subscribe((response:SubscriptionResult<InterventiStraordinariSubscription>) => {
      // this.dataSource.source!.next(response.data?.intervento_straordinario.map(element => this._map(element)));
      this.dataSource.source!.next(response.data?.intervento_straordinario);
      this.dataSource.isLoading!.next(false);
    });
  }

  new(){
    this._updateInterventoStraordinarioGQL.mutate({
      intervento: {
        data_inserimento: new Date(),
        stato: _Stato_Segnalazione_Enum.Bozza,
        posizionamento_toponimo_punto_iniziale: {
          data: {}
        },
        posizionamento_toponimo_punto_finale: {
          data: {}
        },
      }
    }).subscribe((result) => {
      this._router.navigate(['/','pis','interventi','straordinari','edit',result.data?.insert_intervento_straordinario?.returning[0].id]);
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

        this._deleteInterventoStraordinarioGQL.mutate({id:row!.id}).subscribe({
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
