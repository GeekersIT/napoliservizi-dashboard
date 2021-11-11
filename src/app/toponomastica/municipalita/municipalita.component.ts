import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { SubscriptionResult } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { DataSource } from 'src/app/_core/_components/table/data-source.model';
import { MunicipalitaObj } from 'src/app/_core/_models/municipalita.interface';
import { MunicipalitaGQL, MunicipalitaSubscription, QuartiereSelectGQL } from 'src/app/_core/_services/generated/graphql';
import { MunicipalitaEditComponent } from './edit/edit.component';

@Component({
  selector: 'app-municipalita',
  templateUrl: './municipalita.component.html',
  styleUrls: ['./municipalita.component.scss']
})
export class MunicipalitaComponent implements OnInit {
  source: any;
  dataSource: DataSource;

  form: FormGroup = new FormGroup({});
  options: FormlyFormOptions = {};
  model: any = {};
  fields: FormlyFieldConfig[] = [{
    key: 'quartiere',
    type: 'autocomplete',
    templateOptions: {
      multiple: true,
      filter: (term:any) => term && typeof term === 'string' ? this._quartiereSelectGQL.subscribe().pipe(map(result => result.data?.quartiere.filter(q => q.nome.toLocaleLowerCase().indexOf(term.toLowerCase()) >= 0))) : this._quartiereSelectGQL.subscribe().pipe(map(result => result.data?.quartiere)),
    },
    expressionProperties: {
      'templateOptions.label': this._translateService.stream('Quartiere'),
    },
  }];
  defaultSort = {
    column: "nome",
    direction: "asc"
  };
  columns = [{
      columnDef: 'id',
      header: this._translateService.instant('ID'),
      show: false,
      cell: (element: MunicipalitaObj) => `${element.id}`
    },{
      columnDef: 'nome',
      header: this._translateService.instant('Municipalità'),
      show: true,
      cell: (element: MunicipalitaObj) => `${element.nome}`
    },{
      columnDef: 'quartieri',
      header: this._translateService.instant('Quartieri'),
      show: true,
      cell: (element: MunicipalitaObj) => `${element.quartieri.map(quartiere => quartiere.quartiere.nome).join(', ')}`
    }];

  constructor(
    private _municipalitaGQL: MunicipalitaGQL,
    private _quartiereSelectGQL: QuartiereSelectGQL,
    private _translateService: TranslateService,
    public dialog: MatDialog
  ) {
    this.dataSource = new DataSource();
  }

  private _map(element: MunicipalitaObj){
    const quartieri = element.quartieri.filter((quartiere) => quartiere.fine_validita == null);
    const quartieri_vecchi = element.quartieri.filter((quartiere) => quartiere.fine_validita != null);

    return {
      ...element,
      ...{quartieri: quartieri},
      ...{quartieri_vecchi: quartieri_vecchi}
    }
  }

  ngOnInit(){
    this.dataSource.isLoading!.next(true);
    this.source = this._municipalitaGQL.subscribe().subscribe((response:SubscriptionResult<MunicipalitaSubscription>) => {
      this.dataSource.source!.next(response.data?.municipalita.map(element => this._map(element)));
      this.dataSource.isLoading!.next(false);
    });
  }

  async applyFilter() {
    this.dataSource.isLoading!.next(true);
    this.source.unsubscribe();
    this.source = this._municipalitaGQL.subscribe({where:{
      quartieri: {
        quartiere_id: {
          _in: this.model.quartiere.map((e: { id: any; }) => e.id)
        }
      }
    }}).subscribe((response:SubscriptionResult<MunicipalitaSubscription>) => {
      this.dataSource.source!.next(response.data?.municipalita.map(element => this._map(element)));
      this.dataSource.isLoading!.next(false);
    });
  }

  async reset(event: boolean){
    if(event) {
      this.dataSource.isLoading!.next(true);
      this.source.unsubscribe();
      this.source = this._municipalitaGQL.subscribe().subscribe((response:SubscriptionResult<MunicipalitaSubscription>) => {
        this.dataSource.source!.next(response.data?.municipalita.map(element => this._map(element)));
        this.dataSource.isLoading!.next(false);
      });
    }
  }

  openDialog(row?:MunicipalitaObj) {
    const dialogRef = this.dialog.open(MunicipalitaEditComponent, {
      height: '50%',
      minHeight: '400px',
      width: '50%',
      data: row
    });
    dialogRef.afterClosed().subscribe((result) => {
        console.log(result);
    });
  }


}
