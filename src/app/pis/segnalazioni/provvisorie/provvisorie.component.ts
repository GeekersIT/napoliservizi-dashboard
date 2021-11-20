import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateSegnalazioneGQL } from 'src/app/_core/_services/generated/graphql';

@Component({
  selector: 'app-segnalazioni-provvisorie',
  templateUrl: './provvisorie.component.html',
  styleUrls: ['./provvisorie.component.scss']
})
export class SegnalazioniProvvisorieComponent implements OnInit {

  constructor(
    private _updateSegnalazioneGQL: UpdateSegnalazioneGQL,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }


  new(){
    this._updateSegnalazioneGQL.mutate({
      segnalazione: {
        posizionamento_toponimo_punto_iniziale: {
          data: {}
        }
      }
    }).subscribe((result) => {
      this._router.navigate(['/','pis','segnalazioni','provvisorie','edit',result.data?.insert_segnalazione?.returning[0].id]);
    });

  }
}
