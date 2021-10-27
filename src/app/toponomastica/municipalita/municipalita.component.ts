import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs/operators';
import { DataSource } from 'src/app/_core/_components/table/data-source.model';
import { MunicipalitaGQL, QuartiereSelectGQL } from 'src/app/_core/_services/generated/graphql';
import { MunicipalitaEditComponent } from './edit/edit.component';

@Component({
  selector: 'app-municipalita',
  templateUrl: './municipalita.component.html',
  styleUrls: ['./municipalita.component.scss']
})
export class MunicipalitaComponent implements OnInit {
  source: any;
  dataSource: DataSource;

  options: FormlyFormOptions = {};
  model: any = {};
  fields: FormlyFieldConfig[] = [{
    key: 'quartiere',
    type: 'autocomplete',
    templateOptions: {
      multiple: true,
      filter: (term:any) => term && typeof term === 'string' ? this._quartiereSelectGQL.watch().valueChanges.pipe(map(result => result.data.quartiere.filter(q => q.nome.toLocaleLowerCase().indexOf(term.toLowerCase()) >= 0))) : this._quartiereSelectGQL.watch().valueChanges.pipe(map(result => result.data.quartiere)),
    },
    expressionProperties: {
      'templateOptions.label': this._translatService.stream('Quartiere'),
    },
  }];

  columns = [{
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
    }];

  constructor(
    private _municipalitaGQL: MunicipalitaGQL,
    private _quartiereSelectGQL: QuartiereSelectGQL,
    private _translatService: TranslateService,
    public dialog: MatDialog
  ) {
    this.dataSource = new DataSource();
  }

  private _map(element:any){
    return {
      ...element, 
      ...{quartiere: element.pacchetti_quartiere.filter((q:any) => q.fine_validita == null).map((q:any) => q.quartieri.map((q:any) => q.quartiere.nome).join(', ')).join(', ')},
      ...{pacchetti_quartiere: element.pacchetti_quartiere.filter((q:any) => q.fine_validita == null).map((q:any) => { return {...q, nome: q.quartieri.map((q:any) => q.quartiere.nome).join(', ')}})[0]},
      ...{vecchi_pacchetti_quartiere: element.pacchetti_quartiere.filter((q:any) => q.fine_validita != null).map((q:any) => { return {...q,quartieri:q.quartieri.map((q:any) => q.quartiere.nome).join(', ')}})}
    }
  }

  ngOnInit(){
    this.dataSource.isLoading!.next(true);
    this.source = this._municipalitaGQL.subscribe().subscribe((data:any) => {
      this.dataSource.source!.next(data.data.municipalita.map((element:any) => this._map(element)));
      this.dataSource.isLoading!.next(false);
    });
  }

  async applyFilter() {
    this.dataSource.isLoading!.next(true);
    this.source.unsubscribe();
    this.source = this._municipalitaGQL.subscribe({quartieri_id:{_in: this.model.quartiere.map((e:any) => e.id)}}).subscribe((data:any) => {
      this.dataSource.source!.next(data.data.municipalita.map((element:any) => this._map(element)));
      this.dataSource.isLoading!.next(false);
    });
  }

  async reset(event: boolean){
    if(event) {
      this.dataSource.isLoading!.next(true);
      this.source.unsubscribe();
      this.source = this._municipalitaGQL.subscribe().subscribe((data:any) => {
        this.dataSource.source!.next(data.data.municipalita.map((element:any) => this._map(element)));
        this.dataSource.isLoading!.next(false);
      });
    }
  }

  openDialog(row:any) {
    const dialogRef = this.dialog.open(MunicipalitaEditComponent, {
      data: row
    });
    dialogRef.afterClosed().subscribe((result) => {
        console.log(result);
    });
  }


}
