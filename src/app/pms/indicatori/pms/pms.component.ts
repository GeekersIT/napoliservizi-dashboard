import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { SubscriptionResult } from 'apollo-angular';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ConfirmDialogComponent } from 'src/app/_core/_components/confirm-dialog/confirm-dialog.component';
import { DataSource } from 'src/app/_core/_components/table/data-source.model';
import { IndicatoriObj } from 'src/app/_core/_models/pms/indicatori.interface';
import {
  DeleteFormulaGQL,
  IndicatoriGQL,
  IndicatoriSubscription,
} from 'src/app/_core/_services/generated/graphql';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-pms',
  templateUrl: './pms.component.html',
  styleUrls: ['./pms.component.scss'],
})
export class PmsComponent implements OnInit {
  source: any;
  dataSource: DataSource;

  defaultSort = {
    column: 'name',
    direction: 'asc',
  };
  columns = [
    {
      columnDef: 'id',
      header: this._translate.instant('ID'),
      show: false,
      cell: (element: IndicatoriObj) => `${element.id}`,
    },
    {
      columnDef: 'name',
      header: this._translate.instant('Nome'),
      show: true,
      cell: (element: IndicatoriObj) => `${element.name}`,
    },
    {
      columnDef: 'code',
      header: this._translate.instant('Codice'),
      show: true,
      cell: (element: IndicatoriObj) => `$${element.code}`,
    },
    {
      columnDef: 'tipologia_dissesto',
      header: this._translate.instant('Tipologia dissesto'),
      show: true,
      cell: (element: IndicatoriObj) => `${element.tipologia_dissesto?.nome}`,
    },
  ];

  constructor(
    private _translate: TranslateService,
    private _indicatori: IndicatoriGQL,
    private _snackBar: MatSnackBar,
    private _deleteFormulaGQL: DeleteFormulaGQL,
    private _loaderService: NgxUiLoaderService,
    public dialog: MatDialog
  ) {
    this.dataSource = new DataSource();
  }

  ngOnInit() {
    this.dataSource.isLoading!.next(true);
    this.source = this._init();
  }

  private _init() {
    return this._indicatori
      .subscribe()
      .subscribe((response: SubscriptionResult<IndicatoriSubscription>) => {
        this.dataSource.source!.next(response.data?.pms_formula);
        this.dataSource.isLoading!.next(false);
      });
  }
  openDialog(row?: IndicatoriObj) {
    this.dialog.open(EditComponent, {
      height: '95%',
      minHeight: '600px',
      width: '90%',
      data: row,
    });
  }

  delete(row?: IndicatoriObj) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: this._translate.instant('Attenzione'),
        content: this._translate.instant(
          "Procedendo all'elemizione non sarà più possibile tornare indietro."
        ),
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._loaderService.start();
        this._deleteFormulaGQL.mutate({ id: row!.id }).subscribe({
          error: (e) => {
            this._loaderService.stop();
            if (e.message.includes('Foreign key violation')) {
              this._snackBar.open(
                this._translate.instant(
                  'Non è possibile eliminare la formula perchè in uso.'
                ),
                this._translate.instant('Ho capito!')
              );
            }
          },
          complete: () => this._loaderService.stop(),
        });
      }
    });
  }
}
