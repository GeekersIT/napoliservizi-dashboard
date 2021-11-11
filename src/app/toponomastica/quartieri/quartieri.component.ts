import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { SubscriptionResult } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataSource } from 'src/app/_core/_components/table/data-source.model';
import { QuartiereObj } from 'src/app/_core/_models/quartiere.interface';
import { MunicipalitaSelectGQL, QuartieriGQL, QuartieriSubscription } from 'src/app/_core/_services/generated/graphql';
import { QuartieriEditComponent } from './edit/edit.component';

@Component({
  selector: 'app-quartieri',
  templateUrl: './quartieri.component.html',
  styleUrls: ['./quartieri.component.scss']
})
export class QuartieriComponent implements OnInit {
  source: any;
  dataSource: DataSource;

  form: FormGroup = new FormGroup({});
  options: FormlyFormOptions = {};
  model: any = {};
  fields: FormlyFieldConfig[] = [{
    key: 'municipalita',
    type: 'autocomplete',
    templateOptions: {
      multiple: true,
      filter: (term:any) => term && typeof term === 'string' ? this._municipalitaSelectGQL.subscribe().pipe(map(result => result.data?.municipalita.filter(q => q.nome.toLocaleLowerCase().indexOf(term.toLowerCase()) >= 0))) : this._municipalitaSelectGQL.subscribe().pipe(map(result => result.data?.municipalita)),
    },
    expressionProperties: {
      'templateOptions.label': this._translateService.stream('Municipalità'),
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
      cell: (element: QuartiereObj) => `${element.id}`
    },{
      columnDef: 'nome',
      header: this._translateService.instant('Quartiere'),
      show: true,
      cell: (element: QuartiereObj) => `${element.nome}`
    },{
      columnDef: 'municipalita',
      header: this._translateService.instant('Municipalità'),
      show: true,
      cell: (element: QuartiereObj) => `${element.municipalita.map(municipalita => municipalita.municipalita.nome).join(', ')}`
    }];

  constructor(
    private _quartieriGQL: QuartieriGQL,
    private _municipalitaSelectGQL: MunicipalitaSelectGQL,
    private _translateService: TranslateService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.dataSource = new DataSource();
  }

  private _map(element: QuartiereObj){
    const municipalita = element.municipalita.filter(municipalita => municipalita.fine_validita == null);
    const municipalita_vecchie = element.municipalita.filter(municipalita => municipalita.fine_validita != null);
    return {
      ...element, 
      ...{municipalita: municipalita},
      ...{municipalita_vecchie: municipalita_vecchie},
    }
  }


  ngOnInit(){
    this.dataSource.isLoading!.next(true);
    this.source = this._quartieriGQL.subscribe().subscribe((response:SubscriptionResult<QuartieriSubscription>) => {
      this.dataSource.source!.next(response.data?.quartiere.map(element => this._map(element)));
      this.dataSource.isLoading!.next(false);
    });
  }


  async applyFilter() {
    this.dataSource.isLoading!.next(true);
    this.source.unsubscribe();
    this.source = this._quartieriGQL.subscribe({
      where: {
        municipalita: {
          municipalita_id: {
            _in: this.model.municipalita.map((e: { id: any; }) => e.id)
          }
        }
      }
    }).subscribe((response:SubscriptionResult<QuartieriSubscription>) => {
      this.dataSource.source!.next(response.data?.quartiere.map(element => this._map(element)));
      this.dataSource.isLoading!.next(false);
    });
  }

  async reset(event: boolean){
    if(event) {
      this.dataSource.isLoading!.next(true);
      this.source.unsubscribe();
      this.source = this._quartieriGQL.subscribe().subscribe((response:SubscriptionResult<QuartieriSubscription>) => {
        this.dataSource.source!.next(response.data?.quartiere.map(element => this._map(element)));
        this.dataSource.isLoading!.next(false);
      });
    }
  }

  openDialog(row?:QuartiereObj) {
    const dialogRef = this.dialog.open(QuartieriEditComponent, {
      height: '50%',
      minHeight: '400px',
      width: '50%',
      data: row
    });
    dialogRef.afterClosed().subscribe((result) => {
      if(result.message){
        if(result.message.includes('Foreign key violation')){
          this._snackBar.open(this._translateService.instant('Non è possibile eliminare il quartiere perchè è parte di una municipalità o lo è stato in passato.'), this._translateService.instant('Ho capito!'));
        }
      }
    });
  }

}
