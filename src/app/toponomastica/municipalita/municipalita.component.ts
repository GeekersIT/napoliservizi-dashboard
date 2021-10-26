import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, of } from 'rxjs';
import { ItemData } from 'src/app/_core/_formly/multiple-autocomplete-formly/multiple-autocomplete-formly.component';
import { MunicipalitaService } from 'src/app/_core/_services/municipalita.service';
import { QuartiereService } from 'src/app/_core/_services/quartiere.service';
import { MunicipalitaEditComponent } from './edit/edit.component';

@Component({
  selector: 'app-municipalita',
  templateUrl: './municipalita.component.html',
  styleUrls: ['./municipalita.component.scss']
})
export class MunicipalitaComponent implements OnInit {
  @ViewChild('optionTemplate') public optionTemplate!: TemplateRef<any>;

  dataSource: any;
  options: FormlyFormOptions = {};
  model: any = {};
  fields: FormlyFieldConfig[] = [];
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
      header: this._translatService.instant('Municipalità'),
      show: true,
      cell: (element: any) => `${element.nome}`
    },{
      columnDef: 'quartieri',
      header: this._translatService.instant('Quartieri'),
      show: true,
      cell: (element: any) => `${element.quartiere}`
    },{      
      columnDef: 'actions',
      show: true
    }];
    isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  constructor(
    private _municipalitaService: MunicipalitaService,
    private _quartiereService: QuartiereService,
    private _translatService: TranslateService,
    public dialog: MatDialog
  ) {
    this.dataSource = new BehaviorSubject<any>([]);
  }



  private async _init(){
    this.dataSource.next(await this._municipalitaService.getData());
    this.quartieri = await this._quartiereService.getOptions();
    this.fields = [
      {
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
    ];
    this.isLoading.next(false);
  }

  ngOnInit(){
    this._init()
  }

  async applyFilter() {
    const filterValue = this.model.quartiere.map((e:ItemData) => e.item.id);
    this.isLoading.next(true);
    this.dataSource.next(await this._municipalitaService.getDataByQuartiere(filterValue));
    this.isLoading.next(false);
  }

  async reset(event: boolean){
    if(event) {
      this.isLoading.next(true);
      this.dataSource.next(await this._municipalitaService.getData());
      this.isLoading.next(false);
    }
  }

  openDialog(row:any) {
    const dialogRef = this.dialog.open(MunicipalitaEditComponent, {
      data: row
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
