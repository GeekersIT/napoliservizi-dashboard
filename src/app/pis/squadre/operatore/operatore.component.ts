import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { SubscriptionResult } from 'apollo-angular';
import { ConfirmDialogComponent } from 'src/app/_core/_components/confirm-dialog/confirm-dialog.component';
import { DataSource } from 'src/app/_core/_components/table/data-source.model';
import { OperatorePisObj } from 'src/app/_core/_models/pis/squadra-pis.interface';
import { DeleteOperatorePisGQL, OperatoriPisGQL, OperatoriPisSubscription } from 'src/app/_core/_services/generated/graphql';
import { OperatoreEditComponent } from './edit/edit.component';

@Component({
  selector: 'app-operatore',
  templateUrl: './operatore.component.html',
  styleUrls: ['./operatore.component.scss']
})
export class OperatoreComponent implements OnInit {
  source: any;
  dataSource: DataSource;

  defaultSort = {
    column: "nome",
    direction: "asc"
  };
  columns = [{
      columnDef: 'id',
      header: this._translateService.instant('ID'),
      show: false,
      cell: (element: OperatorePisObj) => `${element.id}`
    },{
      columnDef: 'nome',
      header: this._translateService.instant('Nome'),
      show: true,
      cell: (element: OperatorePisObj) => `${element.nome}`
    },{
      columnDef: 'cognome',
      header: this._translateService.instant('Cognome'),
      show: true,
      cell: (element: OperatorePisObj) => `${element.cognome}`
    },{
      columnDef: 'matricola',
      header: this._translateService.instant('Matricola'),
      show: true,
      cell: (element: OperatorePisObj) => `${element.matricola}`
    }];

  constructor(
    private _operatoriPisGQL: OperatoriPisGQL,
    private _translateService: TranslateService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private _deleteOperatorePisGQL: DeleteOperatorePisGQL,
  ) {
    this.dataSource = new DataSource();
  }


  ngOnInit(){
    this.dataSource.isLoading!.next(true);
    this.source = this._operatoriPisGQL.subscribe().subscribe((response:SubscriptionResult<OperatoriPisSubscription>) => {
      this.dataSource.source!.next(response.data?.membro);
      this.dataSource.isLoading!.next(false);
    });
  }

  openDialog(row?:OperatorePisObj) {
    this.dialog.open(OperatoreEditComponent, {
      height: '50%',
      minHeight: '400px',
      width: '50%',
      data: row
    });
  }

  delete(row?:OperatorePisObj){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: this._translateService.instant('Attenzione'),
        content: this._translateService.instant('Procedendo all\'elemizione non sarà più possibile tornare indietro.')
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this._deleteOperatorePisGQL.mutate({id:row!.id}).subscribe({
          error: (e) => {
            if(e.message.includes('Foreign key violation')){
              this._snackBar.open(this._translateService.instant('Non è possibile eliminare l\'operatore perchè ha degli interventi associati.'), this._translateService.instant('Ho capito!'));
            }
          }
        });
      }
    })
  }

}
