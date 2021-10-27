import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataSource } from 'src/app/_core/_components/table/data-source.model';
import { MunicipalitaSelectGQL, QuartieriGQL } from 'src/app/_core/_services/generated/graphql';
import { QuartieriEditComponent } from './edit/edit.component';

@Component({
  selector: 'app-quartieri',
  templateUrl: './quartieri.component.html',
  styleUrls: ['./quartieri.component.scss']
})
export class QuartieriComponent implements OnInit {
  source: any;
  dataSource: DataSource;

  options: FormlyFormOptions = {};
  model: any = {};
  fields: FormlyFieldConfig[] = [{
    key: 'municipalita',
    type: 'autocomplete',
    templateOptions: {
      multiple: true,
      filter: (term:any) => term && typeof term === 'string' ? this._municipalitaSelectGQL.watch().valueChanges.pipe(map(result => result.data.municipalita.filter(q => q.nome.toLocaleLowerCase().indexOf(term.toLowerCase()) >= 0))) : this._municipalitaSelectGQL.watch().valueChanges.pipe(map(result => result.data.municipalita)),
    },
    expressionProperties: {
      'templateOptions.label': this._translatService.stream('Municipalità'),
    },
  }];
  columns = [{
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
      header: this._translatService.instant('Municipalità'),
      show: true,
      cell: (element: any) => `${element.municipalita}`,
    }];

  constructor(
    private _quartieriGQL: QuartieriGQL,
    private _municipalitaSelectGQL: MunicipalitaSelectGQL,
    private _translatService: TranslateService,
    public dialog: MatDialog
  ) {
    this.dataSource = new DataSource();
  }

  private _map(element:any){
    return {
      ...element, 
      ...{municipalita: element.municipalita.filter((q:any) => q.municipalita.fine_validita == null).map((q:any) => q.municipalita.municipalita.nome).join(', ')},
      ...{municipalita_attuale: element.municipalita.filter((q:any) => q.municipalita.fine_validita == null)},
      ...{vecchie_municipalita: element.municipalita.filter((q:any) => q.municipalita.fine_validita != null)}
    }
  }


  ngOnInit(){
    this.dataSource.isLoading!.next(true);
    this.source = this._quartieriGQL.subscribe().subscribe((data:any) => {
      this.dataSource.source!.next(data.data.quartiere.map((element:any) => this._map(element)));
      this.dataSource.isLoading!.next(false);
    });
  }


  async applyFilter() {
    this.dataSource.isLoading!.next(true);
    this.source.unsubscribe();
    this.source = this._quartieriGQL.subscribe({municipalita_id:{_in: this.model.municipalita.map((e:any) => e.id)}}).subscribe((data:any) => {
      this.dataSource.source!.next(data.data.quartiere.map((element:any) => this._map(element)));
      this.dataSource.isLoading!.next(false);
    });
  }

  async reset(event: boolean){
    if(event) {
      this.dataSource.isLoading!.next(true);
      this.source.unsubscribe();
      this.source = this._quartieriGQL.subscribe().subscribe((data:any) => {
        this.dataSource.source!.next(data.data.quartiere.map((element:any) => this._map(element)));
        this.dataSource.isLoading!.next(false);
      });
    }
  }

  openDialog(row:any) {
    const dialogRef = this.dialog.open(QuartieriEditComponent, {
      data: row
    });
    dialogRef.afterClosed().subscribe((result) => {
        console.log(result);
    });
  }

}
