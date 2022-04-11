import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SubscriptionResult } from 'apollo-angular';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { firstValueFrom, map } from 'rxjs';
import { DataSource } from 'src/app/_core/_components/table/data-source.model';
import { AgcosObj } from 'src/app/_core/_models/agcos/agcos.interface';
import {
  AgcosGQL,
  AgcosImportGQL,
  AgcosSubscription,
} from 'src/app/_core/_services/generated/graphql';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrls: ['./elenco.component.scss'],
})
export class ElencoComponent implements OnInit {
  lastImport: any;
  source: any;
  dataSource: DataSource;

  defaultSort = {
    column: 'data_sinistro',
    direction: 'desc',
  };
  columns = [
    {
      columnDef: 'id',
      header: this._translateService.instant('ID'),
      show: false,
      cell: (element: any) => `${element.id}`,
    },
    {
      columnDef: 'data_sinistro',
      header: this._translateService.instant('Data sinistro'),
      show: true,
      cell: (element: any) => `${element.data_sinistro}`,
    },
    {
      columnDef: 'stato',
      header: this._translateService.instant('Stato'),
      show: true,
      cell: (element: any) => `${element.stato}`,
    },
    {
      columnDef: 'localizzazione',
      header: this._translateService.instant('Localizzazione'),
      show: true,
      cell: (element: any) => `${element.localizzazione}`,
    },
    {
      columnDef: 'municipalita',
      header: this._translateService.instant('Municipalita'),
      show: false,
      cell: (element: any) => `${element.municipalita}`,
    },
    {
      columnDef: 'quartiere',
      header: this._translateService.instant('Quartiere'),
      show: false,
      cell: (element: any) => `${element.quartiere}`,
    },
    {
      columnDef: 'indicazione_approssimativa',
      header: this._translateService.instant('Indicazione approssimativa'),
      show: false,
      cell: (element: AgcosObj) => `${element.indicazione_approssimativa}`,
    },
    {
      columnDef: 'elemento',
      header: this._translateService.instant('Elemento'),
      show: true,
      cell: (element: AgcosObj) => `${element.elemento}`,
    },
    {
      columnDef: 'coordinate',
      header: this._translateService.instant('Coordinate'),
      show: false,
      cell: (element: any) => `${element.coordinate}`,
    },
    {
      columnDef: 'esito_sentenza',
      header: this._translateService.instant('Esito sentenza'),
      show: false,
      cell: (element: AgcosObj) => `${element.esito_sentenza}`,
    },
    {
      columnDef: 'costi_sostenuti',
      header: this._translateService.instant('Costi sostenuti'),
      show: false,
      cell: (element: AgcosObj) => `${element.costi_sostenuti}`,
    },
    {
      columnDef: 'causa',
      header: this._translateService.instant('Causa'),
      show: true,
      cell: (element: AgcosObj) => `${element.causa}`,
    },
    {
      columnDef: 'scarsa_illuminazione_pubblica',
      header: this._translateService.instant('Scarsa illuminazione pubblica'),
      show: true,
      cell: (element: AgcosObj) => `${element.scarsa_illuminazione_pubblica}`,
    },
    {
      columnDef: 'scarsa_illuminazione_naturale',
      header: this._translateService.instant('Scarsa illuminazione naturale'),
      show: true,
      cell: (element: AgcosObj) => `${element.scarsa_illuminazione_naturale}`,
    },
    {
      columnDef: 'presenza_foglie',
      header: this._translateService.instant('Presenza foglie'),
      show: true,
      cell: (element: AgcosObj) => `${element.presenza_foglie}`,
    },
    {
      columnDef: 'presenza_acqua',
      header: this._translateService.instant('Presenza acqua'),
      show: true,
      cell: (element: AgcosObj) => `${element.presenza_acqua}`,
    },
    {
      columnDef: 'danno_persone',
      header: this._translateService.instant('Danno persone'),
      show: true,
      cell: (element: AgcosObj) => `${element.danno_persone}`,
    },
    {
      columnDef: 'danno_cose',
      header: this._translateService.instant('Danno cose'),
      show: true,
      cell: (element: AgcosObj) => `${element.danno_cose}`,
    },
    {
      columnDef: 'altro',
      header: this._translateService.instant('Altro'),
      show: true,
      cell: (element: AgcosObj) => `${element.altro}`,
    },
  ];

  constructor(
    private _translateService: TranslateService,
    private _agcosGQL: AgcosGQL,
    private _agcosImportGQL: AgcosImportGQL,
    private _http: HttpClient,
    private _loader: NgxUiLoaderService
  ) {
    this.dataSource = new DataSource();
  }

  private _map(element: AgcosObj) {
    var stato = '';
    if (
      element.esiste_risarcimento != false &&
      element.esiste_risarcimento == true &&
      element.esiste_citazione == false &&
      element.esiste_sentenza == false
    )
      stato = this._translateService.instant('Risarcimento');

    if (element.esiste_citazione == true && element.esiste_sentenza == false)
      stato = this._translateService.instant('Citazione');

    if (element.esiste_sentenza == true)
      stato = this._translateService.instant('Sentenza');

    var localizzazione = element.toponimo
      ? (element.toponimo.dug != null ? element.toponimo.dug.nome + ' ' : '') +
        (element.toponimo ? element.toponimo.nome : '')
      : '';
    if (element.civico != null)
      localizzazione = localizzazione + ', ' + element.civico;

    return {
      id: element.id,
      stato: stato,
      localizzazione: localizzazione,
      municipalita:
        element.toponimo?.assegnazioni &&
        element.toponimo?.assegnazioni[0] &&
        element.toponimo?.assegnazioni[0].municipalita
          ? element.toponimo?.assegnazioni[0].municipalita.nome
          : '',
      quartiere:
        element.toponimo?.assegnazioni &&
        element.toponimo?.assegnazioni[0] &&
        element.toponimo?.assegnazioni[0].quartiere
          ? element.toponimo?.assegnazioni[0].quartiere.nome
          : '',
      indicazione_approssimativa: element.indicazione_approssimativa,
      coordinate: `${element.latitudine}; ${element.longitudine}`,
      data_sinistro: `${
        element.data_sinistro
          ? new Date(element.data_sinistro).toLocaleDateString('it-IT', {
              timeZone: 'Europe/Rome',
            }) +
            ', ' +
            new Date(element.data_sinistro).toLocaleTimeString('it-IT', {
              timeZone: 'Europe/Rome',
            })
          : ''
      }`,
      esito_sentenza:
        element.esito_sentenza != 'null' ? element.esito_sentenza : '',
      costi_sostenuti:
        element.costi_sostenuti != 'null' ? element.costi_sostenuti : '',
      elemento: element.elemento != 'null' ? element.elemento : '',
      causa: element.causa,
      altro: element.altro != 'null' ? element.altro : '',
      scarsa_illuminazione_pubblica:
        element.scarsa_illuminazione_pubblica == true
          ? this._translateService.instant('Si')
          : this._translateService.instant('No'),
      scarsa_illuminazione_naturale:
        element.scarsa_illuminazione_naturale == true
          ? this._translateService.instant('Si')
          : this._translateService.instant('No'),
      presenza_foglie:
        element.presenza_foglie == true
          ? this._translateService.instant('Si')
          : this._translateService.instant('No'),
      presenza_acqua:
        element.presenza_acqua == true
          ? this._translateService.instant('Si')
          : this._translateService.instant('No'),
      danno_persone:
        element.danno_persone == true
          ? this._translateService.instant('Si')
          : this._translateService.instant('No'),
      danno_cose:
        element.danno_cose == true
          ? this._translateService.instant('Si')
          : this._translateService.instant('No'),
    };
  }

  ngOnInit() {
    this.dataSource.isLoading!.next(true);
    this.lastImport = this._agcosImportGQL
      .subscribe()
      .pipe(map((data) => data.data?.agcos_import[0].updated_at));

    this.source = this._agcosGQL
      .subscribe()
      .subscribe((response: SubscriptionResult<AgcosSubscription>) => {
        this.dataSource.source!.next(
          response.data?.agcos_agcos.map((element) => this._map(element))
        );
        this.dataSource.isLoading!.next(false);
      });
  }

  async update() {
    this._loader.start();
    await firstValueFrom(this._http.get('/agcos/update'));
    this._loader.stop();
  }
}
