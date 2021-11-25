import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs/operators';
import { ConfirmDialogComponent } from 'src/app/_core/_components/confirm-dialog/confirm-dialog.component';
import { LocalizzazioneFormFieldService } from 'src/app/_core/_components/form/pis/form-field.service';
import { DataSource } from 'src/app/_core/_components/table/data-source.model';
import { ToponimoObj } from 'src/app/_core/_models/toponomastica/toponimo.interface';
import { DeleteToponimoGQL, DugSelectGQL, TipologiaSelectGQL, ToponimiGQL, ToponimiSubscription } from 'src/app/_core/_services/generated/graphql';
import { ToponimiEditComponent } from './edit/edit.component';
import { SubscriptionResult } from 'apollo-angular';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-toponimi',
  templateUrl: './toponimi.component.html',
  styleUrls: ['./toponimi.component.scss']
})
export class ToponimiComponent implements OnInit {
  source: any;
  dataSource: DataSource;
  form: FormGroup = new FormGroup({});
  options: FormlyFormOptions = {};
  model: any = {};
  fields: FormlyFieldConfig[] = [{
    fieldGroupClassName: 'display-flex',
    fieldGroup: [{
        className: 'flex-1',
        key: 'dug',
        type: 'autocomplete',
        templateOptions: {
          multiple: true,
          filter: (term:any, limit:number, offset:number, parent?:any, ) => this._dugSelectGQL.watch({
            limit: limit,
            offset: offset,
            ...(term && typeof term === 'string' ? { nome: { _ilike: "%"+term+"%" } } : {} )
          }).valueChanges.pipe(
            map(result => result.data?.dug ) 
          ),
        },
        expressionProperties: {
          'templateOptions.label': this._translateService.stream('DUG'),
        },
      },
      {
        className: 'flex-1',
        key: 'tipologia',
        type: 'autocomplete',
        templateOptions: {
          multiple: true,
          filter: (term:any, limit:number, offset:number, parent?:any, ) => this._tipologiaSelectGQL.watch({
            limit: limit,
            offset: offset,
            ...(term && typeof term === 'string' ? { nome: { _ilike: "%"+term+"%" } } : {} )
          }).valueChanges.pipe(
            map(result => result.data?.tipologia ) 
          ),
        },
        expressionProperties: {
          'templateOptions.label': this._translateService.stream('Tipologia'),
        },
      },
    ],
  },{
    fieldGroupClassName: 'display-flex',
    fieldGroup: [
      this._localizzazioneFormFieldService.getMunicipalita({key:"municipalita",clazz:"flex-1", multiple: true, required:false}),
      this._localizzazioneFormFieldService.getQuartieri({key:"quartiere",clazz:"flex-1", multiple: true, required:false}),
    ]
  }];
  defaultSort = {
    column: "nome",
    direction: "asc"
  };
  columns = [{
      columnDef: 'id',
      header: this._translateService.instant('ID'),
      show: false,
      cell: (element: ToponimoObj) => `${element.id}`
    },{
      columnDef: 'nome',
      header: this._translateService.instant('Toponimo'),
      show: true,
      cell: (element: ToponimoObj) => `${element.dug!=null ? element.dug.nome+' ' : ''}${element.nome}`
    },{
      columnDef: 'tipologia',
      header: this._translateService.instant('Tipologia'),
      show: true,
      cell: (element: ToponimoObj) => `${element.tipologia!=null ? element.tipologia.nome : ''}`
    },{
      columnDef: 'quartiere',
      header: this._translateService.instant('Quartiere'),
      show: true,
      cell: (element: ToponimoObj) => `${[...new Set(element.assegnazioni.map(assegnazione => assegnazione.quartiere.nome))].join(', ')}`
    },{
      columnDef: 'municipalita',
      header: this._translateService.instant('Municipalita'),
      show: true,
      cell: (element: ToponimoObj) => `${[...new Set(element.assegnazioni.map(assegnazione => assegnazione.municipalita.nome))].join(', ')}`
    }];

  constructor(
    private _localizzazioneFormFieldService: LocalizzazioneFormFieldService,
    private _deleteToponimoGQL: DeleteToponimoGQL,
    private _dugSelectGQL: DugSelectGQL,
    private _tipologiaSelectGQL: TipologiaSelectGQL,
    private _toponimiGQL: ToponimiGQL,
    private _translateService: TranslateService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private _loaderService: NgxUiLoaderService,
  ) {
    this.dataSource = new DataSource();
  }


  private _map(element: ToponimoObj){
    const assegnazioni = element.assegnazioni.filter((assegnazione) => assegnazione.fine_validita == null);
    const assegnazioni_vecchie = element.assegnazioni.filter((assegnazione) => assegnazione.fine_validita != null);
    return {
      ...element, 
      ...{assegnazioni: assegnazioni},
      ...{assegnazioni_vecchie: assegnazioni_vecchie}
    }
  }


  ngOnInit(){
    this.dataSource.isLoading!.next(true);
    this.source = this._toponimiGQL.subscribe().subscribe((response:SubscriptionResult<ToponimiSubscription>) => {
      this.dataSource.source!.next(response.data?.toponimo.map(element => this._map(element)));
      this.dataSource.isLoading!.next(false);
    });
  }

  async applyFilter() {
    this.dataSource.isLoading!.next(true);
    this.source.unsubscribe();

    this.source = this._toponimiGQL.subscribe({
      where: {
        dug_id: this.model.dug ?  { _in: this.model.dug.map((e:any) => e.id )} : {},
        tipologia_id: this.model.tipologia ? { _in: this.model.tipologia.map((e:any) => e.id )}: {},
        assegnazioni: {
          quartiere_id: this.model.quartiere ? {
            _in: this.model.quartiere.map((e: { id: any; }) => e.id)
          } : {},
          municipalita_id: this.model.municipalita ? {
            _in: this.model.municipalita.map((e: { id: any; }) => e.id)
          } : {}
        }
      }
    }).subscribe((data:any) => {
      this.dataSource.source!.next(data.data.toponimo.map((element:any) => this._map(element)));
      this.dataSource.isLoading!.next(false);
    });
  }

  async reset(event: boolean){
    if(event) {
      this.dataSource.isLoading!.next(true);
      this.source.unsubscribe();
      this.source = this._toponimiGQL.subscribe().subscribe((response:SubscriptionResult<ToponimiSubscription>) => {
        this.dataSource.source!.next(response.data?.toponimo.map(element => this._map(element)));
        this.dataSource.isLoading!.next(false);
      });
    }
  }


  openDialog(row?:ToponimoObj) {
    this.dialog.open(ToponimiEditComponent, {
      height: '50%',
      minHeight: '400px',
      width: '50%',
      data: row
    });
  }

  delete(row?:ToponimoObj){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: this._translateService.instant('Attenzione'),
        content: this._translateService.instant('Procedendo all\'elemizione non sarà più possibile tornare indietro.')
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this._loaderService.start();
        this._deleteToponimoGQL.mutate({id:row!.id}).subscribe({
          error: (e) => {
            this._loaderService.stop();
            if(e.message.includes('Foreign key violation')){
              this._snackBar.open(this._translateService.instant('Non è possibile eliminare il toponimo perchè è parte di un quartiere o lo è stato in passato.'), this._translateService.instant('Ho capito!'));
            }
          },
          complete: () => this._loaderService.stop()
        });
      }
    })
  }

}
