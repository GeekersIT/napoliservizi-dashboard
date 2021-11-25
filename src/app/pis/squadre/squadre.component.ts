import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { SubscriptionResult } from 'apollo-angular';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ConfirmDialogComponent } from 'src/app/_core/_components/confirm-dialog/confirm-dialog.component';
import { DataSource } from 'src/app/_core/_components/table/data-source.model';
import { SquadraPisObj } from 'src/app/_core/_models/pis/squadra-pis.interface';
import { DeleteSquadraPisGQL, SquadrePisGQL, SquadrePisSubscription } from 'src/app/_core/_services/generated/graphql';
import { SquadraEditComponent } from './edit/edit.component';

@Component({
  selector: 'app-squadre',
  templateUrl: './squadre.component.html',
  styleUrls: ['./squadre.component.scss']
})
export class SquadreComponent implements OnInit {
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
      cell: (element: SquadraPisObj) => `${element.id}`
    },{
      columnDef: 'nome',
      header: this._translateService.instant('Nome'),
      show: true,
      cell: (element: SquadraPisObj) => `${element.nome}`
    },{
      columnDef: 'protezione_civile',
      header: this._translateService.instant('Protezione civile'),
      show: true,
      cell: (element: SquadraPisObj) => element.protezione_civile?this._translateService.instant('Si'):this._translateService.instant('No')
    },{
      columnDef: 'caposquadra',
      header: this._translateService.instant('Caposquadra'),
      show: true,
      cell: (element:SquadraPisObj) => element.membri.length>0 ? `${element.membri[0].membro.nome} ${element.membri[0].membro.cognome} - ${element.membri[0].membro.matricola}` :  ''
    }];

  constructor(
    private _squadrePisGQL: SquadrePisGQL,
    private _translateService: TranslateService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _deleteSquadraPisGQL: DeleteSquadraPisGQL,
    private _loaderService: NgxUiLoaderService,
  ) {
    this.dataSource = new DataSource();
  }

  private _map(element: SquadraPisObj){
    const caposquadra = element.membri.filter((membro) => membro.caposquadra == true && membro.fine_validita == null);
    const membri = element.membri.filter((membro) => membro.caposquadra == false && membro.fine_validita == null);

    const caposquadra_vecchi = element.membri.filter((membro) => membro.caposquadra == true && membro.fine_validita != null);
    const membri_vecchi = element.membri.filter((membro) => membro.caposquadra == false && membro.fine_validita != null);

    return {
      ...element,
      ...{membri: [...caposquadra, ...membri]},
      ...{membri_vecchi: [...membri_vecchi,...caposquadra_vecchi].sort((a,b) => +new Date(b.fine_validita)-+new Date(a.fine_validita))}
    }
  }

  ngOnInit(){
    this.dataSource.isLoading!.next(true);
    this.source = this._squadrePisGQL.subscribe().subscribe((response:SubscriptionResult<SquadrePisSubscription>) => {
      this.dataSource.source!.next(response.data?.squadra.map(element => this._map(element)));
      this.dataSource.isLoading!.next(false);
    });
  }

  openDialog(row?:SquadraPisObj) {
    this.dialog.open(SquadraEditComponent, {
      height: '50%',
      minHeight: '400px',
      width: '50%',
      data: row
    });
  }

  delete(row?:SquadraPisObj){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: this._translateService.instant('Attenzione'),
        content: this._translateService.instant('Procedendo all\'elemizione non sarà più possibile tornare indietro.')
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this._loaderService.start();
        this._deleteSquadraPisGQL.mutate({id:row!.id}).subscribe({
          error: (e) => {
            this._loaderService.stop();
            if(e.message.includes('Foreign key violation')){
              this._snackBar.open(this._translateService.instant('Non è possibile eliminare la squadra perchè ha degli interventi associati.'), this._translateService.instant('Ho capito!'));
            }
          },
          complete: () => this._loaderService.stop()
        });
      }
    })
  }

}
