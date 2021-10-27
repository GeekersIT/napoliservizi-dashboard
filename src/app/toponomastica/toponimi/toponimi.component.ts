import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataSource } from 'src/app/_core/_components/table/data-source.model';
import { DugSelectGQL, MunicipalitaSelectGQL, QuartiereSelectGQL, TipologiaSelectGQL, ToponimiGQL } from 'src/app/_core/_services/generated/graphql';
import { ToponimiEditComponent } from './edit/edit.component';

@Component({
  selector: 'app-toponimi',
  templateUrl: './toponimi.component.html',
  styleUrls: ['./toponimi.component.scss']
})
export class ToponimiComponent implements OnInit {
  source: any;
  dataSource: DataSource;

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
          filter: (term:any) => term && typeof term === 'string' ? this._dugSelectGQL.watch().valueChanges.pipe(map(result => result.data.dug.filter(q => q.nome.toLocaleLowerCase().indexOf(term.toLowerCase()) >= 0))) : this._dugSelectGQL.watch().valueChanges.pipe(map(result => result.data.dug)),
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
          filter: (term:any) => term && typeof term === 'string' ? this._tipologiaSelectGQL.watch().valueChanges.pipe(map(result => result.data.tipologia.filter(q => q.nome.toLocaleLowerCase().indexOf(term.toLowerCase()) >= 0))) : this._tipologiaSelectGQL.watch().valueChanges.pipe(map(result => result.data.tipologia)),
        },
        expressionProperties: {
          'templateOptions.label': this._translateService.stream('Tipologia'),
        },
      },
    ],
  },{
    fieldGroupClassName: 'display-flex',
    fieldGroup: [{
      className: 'flex-1',
      key: 'municipalita',
      type: 'autocomplete',
      templateOptions: {
        multiple: true,
        filter: (term:any) => term && typeof term === 'string' ? this._municipalitaSelectGQL.watch().valueChanges.pipe(map(result => result.data.municipalita.filter(q => q.nome.toLocaleLowerCase().indexOf(term.toLowerCase()) >= 0))) : this._municipalitaSelectGQL.watch().valueChanges.pipe(map(result => result.data.municipalita)),
      },
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Municipalità'),
      },
    },
    {
      className: 'flex-1',
      key: 'quartiere',
      type: 'autocomplete',
      templateOptions: {
        multiple: true,
        filter: (term:any) => term && typeof term === 'string' ? this._quartiereSelectGQL.watch().valueChanges.pipe(map(result => result.data.quartiere.filter(q => q.nome.toLocaleLowerCase().indexOf(term.toLowerCase()) >= 0))) : this._quartiereSelectGQL.watch().valueChanges.pipe(map(result => result.data.quartiere)),
      },
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Quartiere'),
      },
    }]
  }];

  columns = [{
      columnDef: 'id',
      header: this._translateService.instant('ID'),
      show: false,
      cell: (element: any) => `${element.id}`
    },{
      columnDef: 'nome',
      header: this._translateService.instant('Toponimo'),
      show: true,
      cell: (element: any) => `${element.dug!=null ? element.dug.nome+' ' : ''}${element.nome}`
    },{
      columnDef: 'tipologia',
      header: this._translateService.instant('Tipologia'),
      show: true,
      cell: (element: any) => `${element.tipologia!=null ? element.tipologia.nome : ''}`
    },{
      columnDef: 'quartiere',
      header: this._translateService.instant('Quartiere'),
      show: true,
      cell: (element: any) => `${element.quartiere}`
    },{
      columnDef: 'municipalita',
      header: this._translateService.instant('Municipalita'),
      show: true,
      cell: (element: any) => `${element.municipalita}`
    }];

  constructor(
    private _municipalitaSelectGQL: MunicipalitaSelectGQL,
    private _quartiereSelectGQL: QuartiereSelectGQL,
    private _dugSelectGQL: DugSelectGQL,
    private _tipologiaSelectGQL: TipologiaSelectGQL,
    private _toponimiGQL: ToponimiGQL,
    private _translateService: TranslateService,
    public dialog: MatDialog
  ) {
    this.dataSource = new DataSource();
  }


  private _map(element:any){
    return {
      ...element, 
      ...{quartiere: element.quartiere.filter((q:any) => q.quartiere.fine_validita == null).map((q:any) => q.quartiere.quartiere.nome).join(', ')},
      ...{municipalita: [...new Set(element.quartiere.filter((q:any) => q.quartiere.fine_validita == null).map((q:any) => q.quartiere.quartiere.municipalita.length >0  ? q.quartiere.quartiere.municipalita[0].municipalita.municipalita.nome:''))].join(', ')},
      ...{quartieri: element.quartiere.filter((q:any) => q.quartiere.fine_validita == null)},
      ...{vecchi_quartieri: element.quartiere.filter((q:any) => q.quartiere.fine_validita != null)}
    }
  }


  ngOnInit(){
    console.log(this.dataSource);
    this.dataSource.isLoading!.next(true);
    this.source = this._toponimiGQL.subscribe().subscribe((data:any) => {
      this.dataSource.source!.next(data.data.toponimo.map((element:any) => this._map(element)));
      this.dataSource.isLoading!.next(false);
    });
  }

  async applyFilter() {
    this.dataSource.isLoading!.next(true);
    this.source.unsubscribe();
    this.source = this._toponimiGQL.subscribe({
      dug_id: this.model.dug ?  { _in: this.model.dug.map((e:any) => e.id )} : {},
      tipologia_id: this.model.tipologia ? { _in: this.model.tipologia.map((e:any) => e.id )}: {},
      quartieri_id: this.model.quartiere ? { _in: this.model.quartiere.map((e:any) => e.id )} : {},
      municipalita_id: this.model.municipalita ? { _in: this.model.municipalita.map((e:any) => e.id )} : {}
    }).subscribe((data:any) => {
      this.dataSource.source!.next(data.data.toponimo.map((element:any) => this._map(element)));
      this.dataSource.isLoading!.next(false);
    });
  }

  async reset(event: boolean){
    if(event) {
      this.dataSource.isLoading!.next(true);
      this.source.unsubscribe();
      this.source = this._toponimiGQL.subscribe().subscribe((data:any) => {
        this.dataSource.source!.next(data.data.toponimo.map((element:any) => this._map(element)));
        this.dataSource.isLoading!.next(false);
      });
    }
  }

  openDialog(row:any) {
    const dialogRef = this.dialog.open(ToponimiEditComponent, {
      data: row
    });
    dialogRef.afterClosed().subscribe((result) => {
        console.log(result);
    });
  }

}
