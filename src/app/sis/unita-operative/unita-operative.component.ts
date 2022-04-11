import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { SubscriptionResult } from 'apollo-angular';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ConfirmDialogComponent } from 'src/app/_core/_components/confirm-dialog/confirm-dialog.component';
import { DataSource } from 'src/app/_core/_components/table/data-source.model';
import { UnitaOperativaObj } from 'src/app/_core/_models/sis/unita_operativa.interface';
import {
  DeleteUnitaOperativaGQL,
  UnitaOperativeGQL,
  UnitaOperativeSubscription,
} from 'src/app/_core/_services/generated/graphql';
import { UnitaOperativeEditComponent } from './edit/edit.component';

@Component({
  selector: 'app-unita-operative',
  templateUrl: './unita-operative.component.html',
  styleUrls: ['./unita-operative.component.scss'],
})
export class UnitaOperativeComponent implements OnInit {
  source: any;
  dataSource: DataSource;

  defaultSort = {
    column: 'nome',
    direction: 'asc',
  };
  columns = [
    {
      columnDef: 'id',
      header: this._translateService.instant('Codice Gruppo'),
      show: true,
      cell: (element: UnitaOperativaObj) => `${element.id}`,
    },
    {
      columnDef: 'nome',
      header: this._translateService.instant('Nome'),
      show: true,
      cell: (element: UnitaOperativaObj) => `${element.nome}`,
    },
    {
      columnDef: 'indirizzo',
      header: this._translateService.instant('Indirizzo'),
      show: true,
      cell: (element: UnitaOperativaObj) =>
        element.toponimo
          ? (element.toponimo.dug ? element.toponimo.dug.nome + ' ' : '') +
            element.toponimo.nome +
            (element.civico ? ', ' + element.civico : '')
          : '',
    },
    {
      columnDef: 'caposquadra',
      header: this._translateService.instant('Caposquadra'),
      show: true,
      cell: (element: UnitaOperativaObj) =>
        element.membri.length > 0
          ? `${element.membri[0].membro.firstName} ${element.membri[0].membro.lastName} - ${element.membri[0].membro.attributes.matricola[0]}`
          : '',
    },
  ];

  constructor(
    private _unitaOperativeGQL: UnitaOperativeGQL,
    private _translateService: TranslateService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _deleteUnitaOperativaGQL: DeleteUnitaOperativaGQL,
    private _loaderService: NgxUiLoaderService
  ) {
    this.dataSource = new DataSource();
  }

  private _map(element: UnitaOperativaObj) {
    const caposquadra = element.membri.filter(
      (membro) => membro.caposquadra == true && membro.fine_validita == null
    );
    const membri = element.membri.filter(
      (membro) => membro.caposquadra == false && membro.fine_validita == null
    );

    const caposquadra_vecchi = element.membri.filter(
      (membro) => membro.caposquadra == true && membro.fine_validita != null
    );
    const membri_vecchi = element.membri.filter(
      (membro) => membro.caposquadra == false && membro.fine_validita != null
    );

    return {
      ...element,
      ...{ membri: [...caposquadra, ...membri] },
      ...{
        membri_vecchi: [...membri_vecchi, ...caposquadra_vecchi].sort(
          (a, b) => +new Date(b.fine_validita) - +new Date(a.fine_validita)
        ),
      },
    };
  }

  ngOnInit() {
    this.dataSource.isLoading!.next(true);
    this.source = this._unitaOperativeGQL
      .subscribe()
      .subscribe((response: SubscriptionResult<UnitaOperativeSubscription>) => {
        this.dataSource.source!.next(
          response.data?.sis_unita_operativa.map((element) =>
            this._map(element)
          )
        );
        this.dataSource.isLoading!.next(false);
      });
  }

  openDialog(row?: UnitaOperativaObj) {
    this.dialog.open(UnitaOperativeEditComponent, {
      height: '50%',
      minHeight: '600px',
      width: '50%',
      data: row,
    });
  }

  delete(row: UnitaOperativaObj) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: this._translateService.instant('Attenzione'),
        content: this._translateService.instant(
          "Procedendo all'elemizione non sarà più possibile tornare indietro."
        ),
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._loaderService.start();
        this._deleteUnitaOperativaGQL.mutate({ id: row!.id }).subscribe({
          error: (e) => {
            this._loaderService.stop();
            if (e.message.includes('Foreign key violation')) {
              this._snackBar.open(
                this._translateService.instant(
                  "Non è possibile eliminare l'unità operativa perchè ha dei R.I.S. associati."
                ),
                this._translateService.instant('Ho capito!')
              );
            }
          },
          complete: () => this._loaderService.stop(),
        });
      }
    });
  }
}
