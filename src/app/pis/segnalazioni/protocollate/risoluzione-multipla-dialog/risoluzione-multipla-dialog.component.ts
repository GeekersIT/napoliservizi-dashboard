import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DialogRole, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { map } from 'rxjs';
import { ConfirmDialogComponent } from 'src/app/_core/_components/confirm-dialog/confirm-dialog.component';
import { SegnalazioneObj } from 'src/app/_core/_models/pis/segnalazione.interface';
import { SegnalazioneSelectGQL, Segnalazione_Constraint, Segnalazione_Update_Column, UpdateSegnalazioneGQL, _Stato_Segnalazione_Enum } from 'src/app/_core/_services/generated/graphql';

@Component({
  selector: 'app-risoluzione-multipla-dialog',
  templateUrl: './risoluzione-multipla-dialog.component.html',
  styleUrls: ['./risoluzione-multipla-dialog.component.scss']
})
export class RisoluzioneMultiplaDialogComponent{
  form: FormGroup = new FormGroup({});
  options: FormlyFormOptions = {};
  model: any = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'segnalazione',
      className: 'flex-1',
      type: 'autocomplete',
      templateOptions: {
        required: true,
        displayWith: (e:any) => e && e.protocollo ? this._translateService.instant('Segnalazione n. protocollo {id} del {data}', {id:e.protocollo.numero, data: e.protocollo.data ? e.protocollo.data.toLocaleString("it-IT", {timeZone: "Europe/Rome",}) :'' }) : '',
        filter: (term:any, limit:number, offset:number, parent?:any, ) => this._segnalazioneSelectGQL.watch({
          limit: limit,
          offset: offset,
            where: {
              _and: [
                { id: { _nin: this.data.segnalazioni.map((e:any) => e.id) }},
                { stato: {_eq: _Stato_Segnalazione_Enum.Completata} },
              ],
              ...(term && typeof term === 'string' ? {
              protocollo: {
                numero: { _ilike: "%"+term+"%"}
              }
            } : {} )
          }
        }).valueChanges.pipe(
          map(result => result.data?.segnalazione ) 
        ),
      },
      expressionProperties: {
        'templateOptions.label': this._translateService.stream('Segnalazioni'),
      }
    },
  ];


  constructor(
    private _translateService: TranslateService,
    private _segnalazioneSelectGQL: SegnalazioneSelectGQL,
    private _updateSegnalazioneGQL: UpdateSegnalazioneGQL,
    private _loaderService: NgxUiLoaderService,
    public _dialog: MatDialog,
    public dialogRef: MatDialogRef<RisoluzioneMultiplaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  toLabel(element:any){
    let str = element.toponimo_storico ? ((element.toponimo_storico.dug!=null ? element.toponimo_storico.dug.nome+' ' : '')+(element.toponimo_storico ? element.toponimo_storico.nome : '')) : '';
    if(element.posizionamento_toponimo_punto_iniziale?.tipologia!=null){
      str = str+' '+element.posizionamento_toponimo_punto_iniziale.tipologia.nome;
      if(element.posizionamento_toponimo_punto_iniziale.specifica!=null){
        str = str+' '+element.posizionamento_toponimo_punto_iniziale.specifica.nome;
        if(element.posizionamento_toponimo_punto_iniziale.civico!=null) str = str+' '+element.posizionamento_toponimo_punto_iniziale.civico;
        if(element.posizionamento_toponimo_punto_iniziale.ipi!=null) str = str+' '+element.posizionamento_toponimo_punto_iniziale.ipi;
        if(element.posizionamento_toponimo_punto_iniziale.km!=null) str = str+' '+element.posizionamento_toponimo_punto_iniziale.km;
      }
      if(element.posizionamento_toponimo_punto_iniziale.connessione!=null) str = str+' '+element.posizionamento_toponimo_punto_iniziale.connessione;
    }
    return str;
  }

  onSubmit(){
    if(this.form.valid){
      this._loaderService.start();
      this.dialogRef.close()
      this._updateSegnalazioneGQL.mutate({
        on_conflict: {
          constraint: Segnalazione_Constraint.SegnalazionePkey,
          update_columns: [
            Segnalazione_Update_Column.Stato,
          ]
        },
        segnalazione: this.data.segnalazioni.map((segnalazione:SegnalazioneObj) => {
          return {
            id: segnalazione.id,
            stato: _Stato_Segnalazione_Enum.Risolta,
            eventi: {
              data: [
                {
                  created_at: new Date(),
                  stato: _Stato_Segnalazione_Enum.Risolta,
                  risoluzione_id: this.model.segnalazione.id
                }
              ]
            }

          }
        })
      }).subscribe({
        next: () => {},
        error: (error) => {
          this._loaderService.stop();
          this.dialogRef.close();
          this._dialog.open(ConfirmDialogComponent, {
            data: {
              title: this._translateService.instant('Attenzione'),
              content: this._translateService.instant('Non è stato possibile completare la richiesta di salvataggio. Errore: '+error)
            }
          });
        },
        complete: () => {this._loaderService.stop();}
      })  
    }
  }

}
