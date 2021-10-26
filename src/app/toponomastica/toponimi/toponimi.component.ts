import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { ItemData } from 'src/app/_core/_formly/multiple-autocomplete-formly/multiple-autocomplete-formly.component';
import { MunicipalitaService } from 'src/app/_core/_services/municipalita.service';
import { QuartiereService } from 'src/app/_core/_services/quartiere.service';
import { ToponimoService } from 'src/app/_core/_services/toponimo.service';

@Component({
  selector: 'app-toponimi',
  templateUrl: './toponimi.component.html',
  styleUrls: ['./toponimi.component.scss']
})
export class ToponimiComponent implements OnInit {
  dataSource: any;

  @ViewChild('optionTemplate') public optionTemplate!: TemplateRef<any>;
  options: FormlyFormOptions = {};
  model: any = {};
  fields: FormlyFieldConfig[] = [];
  municipalita:any=[];
  quartieri:any=[];

  columns = [
    {      
      columnDef: 'expands',
      show: true
    },
    {
      columnDef: 'id',
      header: this._translatService.instant('ID'),
      show: false,
      cell: (element: any) => `${element.id}`
    },{
      columnDef: 'nome',
      header: this._translatService.instant('Toponimo'),
      show: true,
      cell: (element: any) => `${element.dug!=null ? element.dug.nome+' ' : ''}${element.nome}`
    },{
      columnDef: 'tipologia',
      header: this._translatService.instant('Tipologia'),
      show: true,
      cell: (element: any) => `${element.tipologia!=null ? element.tipologia.nome : ''}`
    },{
      columnDef: 'quartiere',
      header: this._translatService.instant('Quartiere'),
      show: true,
      cell: (element: any) => `${element.quartiere}`
    },{
      columnDef: 'municipalita',
      header: this._translatService.instant('Municipalita'),
      show: true,
      cell: (element: any) => `${element.municipalita}`
    },{      
      columnDef: 'actions',
      show: true
    }];
    isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  constructor(
    private _toponimoService: ToponimoService,
    private _municipalitaService: MunicipalitaService,
    private _quartiereService: QuartiereService,
    private _translatService: TranslateService
  ) {
    this.dataSource = new BehaviorSubject<any>([]);
  }

  private async _init(){
    this.dataSource.next(await this._toponimoService.getData());

    this.municipalita = await this._municipalitaService.getOptions();
    this.quartieri = await this._quartiereService.getOptions();
    this.fields = [
      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
          {
            className: 'flex-1',
            key: 'municipalita',
            type: 'multiple-autocomplete',
            templateOptions: {
              appearance: 'outline',
              data: this.municipalita.map((o:any) => new ItemData(o,false)),
              filter: (option: ItemData, filter: string) => option.item.nome.toLowerCase().indexOf(filter.toLowerCase()) >= 0,
              optionTemplate: this.optionTemplate,
            },
            expressionProperties: {
              'templateOptions.label': this._translatService.stream('Municipalità'),
            },
          },
          {
            className: 'flex-1',
            key: 'quartiere',
            type: 'multiple-autocomplete',
            templateOptions: {
              appearance: 'outline',
              data: this.quartieri.map((o:any) => new ItemData(o,false)),
              filter: (option: ItemData, filter: string) => option.item.nome.toLowerCase().indexOf(filter.toLowerCase()) >= 0,
              optionTemplate: this.optionTemplate,
            },
            expressionProperties: {
              'templateOptions.label': this._translatService.stream('Quartiere'),
            },
          },
        ]
      }
    ];

    this.isLoading.next(false);
  }

  ngOnInit(){
    this._init()
  }

  async applyFilter() {
    this.isLoading.next(true);

    if(this.model.municipalita && this.model.quartiere){
      const filterValue1 = this.model.municipalita.map((e:ItemData) => e.item.id);
      const filterValue2 = this.model.quartiere.map((e:ItemData) => e.item.id);

      this.dataSource.next(await this._toponimoService.getDataByMunicipalita(filterValue1, (await this._toponimoService.getDataByQuartiere(filterValue2))));

    }else if(this.model.municipalita){
      const filterValue = this.model.municipalita.map((e:ItemData) => e.item.id);
      this.dataSource.next(await this._toponimoService.getDataByMunicipalita(filterValue));
    }else if(this.model.quartiere){
      const filterValue = this.model.quartiere.map((e:ItemData) => e.item.id);
      this.dataSource.next(await this._toponimoService.getDataByQuartiere(filterValue));
    }
    this.isLoading.next(false);
  }

  async reset(event: boolean){
    if(event) {
      this.isLoading.next(true);
      this.dataSource.next(await this._toponimoService.getData());
      this.isLoading.next(false);
    }
  }

}
