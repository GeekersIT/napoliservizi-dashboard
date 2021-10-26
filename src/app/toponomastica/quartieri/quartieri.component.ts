import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { ItemData } from 'src/app/_core/_formly/multiple-autocomplete-formly/multiple-autocomplete-formly.component';
import { MunicipalitaService } from 'src/app/_core/_services/municipalita.service';
import { QuartiereService } from 'src/app/_core/_services/quartiere.service';

@Component({
  selector: 'app-quartieri',
  templateUrl: './quartieri.component.html',
  styleUrls: ['./quartieri.component.scss']
})
export class QuartieriComponent implements OnInit {

  dataSource: any;

  @ViewChild('optionTemplate') public optionTemplate!: TemplateRef<any>;
  options: FormlyFormOptions = {};
  model: any = {};
  fields: FormlyFieldConfig[] = [];
  municipalita:any=[];

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
      header: this._translatService.instant('Quartiere'),
      show: true,
      cell: (element: any) => `${element.nome}`
    },{
      columnDef: 'municipalita',
      header: this._translatService.instant('Municipalita'),
      show: true,
      cell: (element: any) => `${element.municipalita}`,
    },{      
      columnDef: 'actions',
      show: true
    }];
  isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  constructor(
    private _municipalitaService: MunicipalitaService,
    private _quartiereService: QuartiereService,
    private _translatService: TranslateService
  ) {
    this.dataSource = new BehaviorSubject<any>([]);
  }

  private async _init(){
    this.dataSource.next(await this._quartiereService.getData());

    this.municipalita = await this._municipalitaService.getOptions();
    this.fields = [
      {
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
    ];

    this.isLoading.next(false);
  }


  ngOnInit(){
    this._init()
  }


  async applyFilter() {
    const filterValue = this.model.municipalita.map((e:ItemData) => e.item.id);
    this.isLoading.next(true);
    this.dataSource.next(await this._quartiereService.getDataByMunicipalita(filterValue));
    this.isLoading.next(false);
  }

  async reset(event: boolean){
    if(event) {
      this.isLoading.next(true);
      this.dataSource.next(await this._quartiereService.getData());
      this.isLoading.next(false);
    }
  }

}
