import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { SubscriptionResult } from 'apollo-angular';
import { KeycloakService } from 'keycloak-angular';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { map } from 'rxjs';
import { ConfirmDialogComponent } from 'src/app/_core/_components/confirm-dialog/confirm-dialog.component';
import { LocalizzazioneFormFieldService } from 'src/app/_core/_components/form/pis/form-field.service';
import { DataSource } from 'src/app/_core/_components/table/data-source.model';
import { RisObj } from 'src/app/_core/_models/sis/ris.interface';
import {
  DeleteRisGQL,
  RissGQL,
  RissSubscription,
  Sis_Ris_Constraint,
  TipologiaRisSelectGQL,
  UpdateRisGQL,
  Sis__Stato_Ris_Enum,
} from 'src/app/_core/_services/generated/graphql';

@Component({
  selector: 'app-ris-agenti',
  templateUrl: './agenti.component.html',
  styleUrls: ['./agenti.component.scss'],
})
export class RisAgentiComponent implements OnInit {
  source: any;
  dataSource: DataSource;
  form: FormGroup = new FormGroup({});
  options: FormlyFormOptions = {};
  model: any = {};
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          key: 'data',
          className: 'flex-1',
          type: 'daterangepicker',
          expressionProperties: {
            'templateOptions.label': this._translateService.stream('Data'),
          },
        },
        {
          key: 'tipologia',
          className: 'flex-1',
          type: 'autocomplete',
          templateOptions: {
            multiple: true,
            filter: (term: any, limit: number, offset: number, parent?: any) =>
              this._tipologiaRisSelectGQL
                .watch({
                  limit: limit,
                  offset: offset,
                  ...(term && typeof term === 'string'
                    ? { nome: { _ilike: '%' + term + '%' } }
                    : {}),
                })
                .valueChanges.pipe(
                  map((result) => result.data?.sis__tipologia_ris)
                ),
          },
          expressionProperties: {
            'templateOptions.label': this._translateService.stream('Tipologia'),
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        this._localizzazioneFormFieldService.getMunicipalita({
          key: 'municipalita',
          clazz: 'flex-1',
          multiple: true,
          required: false,
        }),
        this._localizzazioneFormFieldService.getQuartieri({
          key: 'quartiere',
          clazz: 'flex-1',
          multiple: true,
          required: false,
        }),
        this._localizzazioneFormFieldService.getToponimi({
          key: 'toponimo',
          clazz: 'flex-1',
          multiple: true,
          required: false,
        }),
      ],
    },
  ];

  defaultSort = {
    column: 'localizzazione',
    direction: 'asc',
  };
  columns = [
    {
      columnDef: 'id',
      header: this._translateService.instant('ID'),
      show: true,
      cell: (element: RisObj) => `${element.id}`,
    },
    {
      columnDef: 'stato',
      header: this._translateService.instant('Stato'),
      show: true,
      cell: (element: RisObj) => `${element.stato ? element.stato : ''}`,
    },
    {
      columnDef: 'unita_operativa',
      header: this._translateService.instant('Unità operativa'),
      show: true,
      cell: (element: RisObj) =>
        `${element.unita_operativa ? element.unita_operativa.nome : ''}`,
    },
    {
      columnDef: 'tipologia_ris',
      header: this._translateService.instant('Tipologia'),
      show: true,
      cell: (element: RisObj) =>
        `${
          element.tipologie_ris
            ? element.tipologie_ris.map((t) => t.tipologia.nome).join(', ')
            : ''
        }`,
    },
    {
      columnDef: 'localizzazione',
      header: this._translateService.instant('Localizzazione'),
      show: true,
      cell: (element: RisObj) => {
        let str = element.toponimo_storico
          ? (element.toponimo_storico.dug != null
              ? element.toponimo_storico.dug.nome + ' '
              : '') +
            (element.toponimo_storico ? element.toponimo_storico.nome : '')
          : '';
        if (element.posizionamento_toponimo?.tipologia != null) {
          str = str + ' ' + element.posizionamento_toponimo.tipologia.nome;
          if (element.posizionamento_toponimo.specifica != null) {
            str = str + ' ' + element.posizionamento_toponimo.specifica.nome;
            if (element.posizionamento_toponimo.civico != null)
              str = str + ' ' + element.posizionamento_toponimo.civico;
            if (element.posizionamento_toponimo.ipi != null)
              str = str + ' ' + element.posizionamento_toponimo.ipi;
            if (element.posizionamento_toponimo.km != null)
              str = str + ' ' + element.posizionamento_toponimo.km;
          }
          if (element.posizionamento_toponimo.connessione != null)
            str = str + ' ' + element.posizionamento_toponimo.connessione;
        }
        return str;
      },
    },
    {
      columnDef: 'quartiere',
      header: this._translateService.instant('Quartiere'),
      show: true,
      cell: (element: RisObj) =>
        `${element.quartiere_storico ? element.quartiere_storico.nome : ''}`,
    },
    {
      columnDef: 'municipalita',
      header: this._translateService.instant('Municipalita'),
      show: false,
      cell: (element: RisObj) =>
        `${
          element.municipalita_storica ? element.municipalita_storica.nome : ''
        }`,
    },
    {
      columnDef: 'data',
      header: this._translateService.instant('Data segnalazione'),
      show: true,
      cell: (element: RisObj) =>
        `${
          element.data
            ? new Date(element.data).toLocaleDateString('it-IT', {
                timeZone: 'Europe/Rome',
              })
            : ''
        }`,
    },
  ];

  constructor(
    private _localizzazioneFormFieldService: LocalizzazioneFormFieldService,
    private _tipologiaRisSelectGQL: TipologiaRisSelectGQL,
    private _updateRisGQL: UpdateRisGQL,
    private _deleteRis: DeleteRisGQL,
    private _rissGQL: RissGQL,
    private _translateService: TranslateService,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _loaderService: NgxUiLoaderService,
    private _keycloak: KeycloakService,
    public dialog: MatDialog
  ) {
    this.dataSource = new DataSource();
  }

  // private _map(element: RisObj){
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

  applyFilter(event: any) {
    this.dataSource.isLoading!.next(true);
    this.source.unsubscribe();

    this.source = this._rissGQL
      .subscribe({
        where: {
          ...(this.model.data
            ? this.model.data.end == null
              ? { data: { _eq: this.model.data.start } }
              : {
                  _and: [
                    ...(this.model.data.start
                      ? [{ data: { _gte: this.model.data.start } }]
                      : []),
                    ...(this.model.data.end
                      ? [{ data: { _lte: this.model.data.end } }]
                      : []),
                  ],
                }
            : {}),
          stato: { _eq: Sis__Stato_Ris_Enum.Compilazione },
          quartiere_id: this.model.quartiere
            ? {
                _in: this.model.quartiere.map((e: { id: any }) => e.id),
              }
            : {},
          municipalita_id: this.model.municipalita
            ? {
                _in: this.model.municipalita.map((e: { id: any }) => e.id),
              }
            : {},
          toponimo_id: this.model.toponimo
            ? {
                _in: this.model.toponimo.map((e: { id: any }) => e.id),
              }
            : {},
          tipologie_ris: this.model.tipologia
            ? {
                tipologia_ris_id: {
                  _in: this.model.tipologia.map((e: any) => e.id),
                },
              }
            : {},
        },
      })
      .subscribe((response: SubscriptionResult<RissSubscription>) => {
        this.dataSource.source!.next(response.data?.sis_ris);
        this.dataSource.isLoading!.next(false);
      });
  }

  reset(event: boolean) {
    if (event) {
      this.dataSource.isLoading!.next(true);
      this.source.unsubscribe();
      this.source = this._init();
    }
  }

  ngOnInit() {
    this.dataSource.isLoading!.next(true);
    this.source = this._init();
  }

  // _map(e){

  // }

  private _init() {
    return this._rissGQL
      .subscribe({
        where: {
          _or: [{ stato: { _eq: Sis__Stato_Ris_Enum.Compilazione } }],
        },
      })
      .subscribe((response: SubscriptionResult<RissSubscription>) => {
        // this.dataSource.source!.next(response.data?.ris.map(element => this._map(element)));
        this.dataSource.source!.next(response.data?.sis_ris);
        this.dataSource.isLoading!.next(false);
      });
  }

  new() {
    const user = this._keycloak.getUsername();

    this._updateRisGQL
      .mutate({
        on_conflict: { constraint: Sis_Ris_Constraint.RisPkey },
        ris: {
          stato: Sis__Stato_Ris_Enum.Compilazione,
          utente_inseritore: user,
          data: new Date(),
          protocollo: {
            data: {
              destinatari: {
                data: [
                  {
                    e_esterno: false,
                  },
                ],
              },
            },
          },
          posizionamento_toponimo: {
            data: {},
          },
        },
      })
      .subscribe((result) => {
        this._router.navigate([
          '/',
          'sis',
          'ris',
          'agenti',
          'edit',
          result.data?.custom_insert_ris?.ris.id,
        ]);
      });
  }

  delete(row?: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: this._translateService.instant('Attenzione'),
        content: this._translateService.instant(
          "Procedendo all'elemizione non sarà più possibile tornare indietro."
        ),
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._loaderService.start();
        this._deleteRis.mutate({ id: row!.id }).subscribe({
          error: (e) => {
            this._loaderService.stop();
            if (e.message.includes('Foreign key violation')) {
              this._snackBar.open(
                this._translateService.instant(
                  'Non è possibile eliminare il R.I.S. perchè è collegato ad altri R.I.S.'
                ),
                this._translateService.instant('Ho capito!')
              );
            }
          },
          complete: () => this._loaderService.stop(),
        });
      }
    });
  }
}
