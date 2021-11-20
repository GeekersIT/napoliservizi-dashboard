import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateInterventoStraordinarioGQL } from 'src/app/_core/_services/generated/graphql';

@Component({
  selector: 'app-interventi-straordinari',
  templateUrl: './straordinari.component.html',
  styleUrls: ['./straordinari.component.scss']
})
export class InterventiStraordinariComponent implements OnInit {

  constructor(
    private _updateInterventoStraordinarioGQL: UpdateInterventoStraordinarioGQL,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }


  new(){
    this._updateInterventoStraordinarioGQL.mutate({
      intervento: {
        posizionamento_toponimo_punto_iniziale: {
          data: {}
        },
        posizionamento_toponimo_punto_finale: {
          data: {}
        },
      }
    }).subscribe((result) => {
      this._router.navigate(['/','pis','interventi','straordinari','edit',result.data?.insert_intervento_straordinario?.returning[0].id]);
    });

  }

}
