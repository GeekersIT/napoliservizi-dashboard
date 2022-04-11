import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileUploadControl } from '@iplab/ngx-file-upload';
import { KeycloakService } from 'keycloak-angular';
import { BehaviorSubject, firstValueFrom, map } from 'rxjs';
import { b64toBlob, fileListToBase64 } from 'src/app/_core/_functions';
import {
  DiarioGQL,
  InsertDiarioGQL,
  InsertAllegatoDiarioGQL,
} from 'src/app/_core/_services/generated/graphql';

@Component({
  selector: 'app-diario-di-bordo',
  templateUrl: './diario-di-bordo.component.html',
  styleUrls: ['./diario-di-bordo.component.scss'],
})
export class DiarioDiBordoComponent implements OnInit {
  id: number;
  messaggi: any;
  messaggio = '';
  saving: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public fileUploadControl = new FileUploadControl();

  constructor(
    private _keycloakService: KeycloakService,
    private _diarioGQL: DiarioGQL,
    private _insertDiarioGQL: InsertDiarioGQL,
    private _insertAllegatoDiarioGQL: InsertAllegatoDiarioGQL,
    private _route: ActivatedRoute,
    private _http: HttpClient
  ) {
    this.id = parseInt(this._route.snapshot.paramMap.get('id')!);
  }

  ngOnInit(): void {
    this.messaggi = this._diarioGQL
      .subscribe({
        id: this.id,
      })
      .pipe(map((diario) => diario.data?.pis_diario));
  }

  async send() {
    if (this.messaggio != '') {
      this.saving.next(true);
      let user = await this._keycloakService.loadUserProfile();
      this._insertDiarioGQL
        .mutate({
          objects: {
            messaggio: this.messaggio,
            utente: user,
            segnalazione_id: this.id,
          },
        })
        .subscribe({
          complete: () => {
            this.messaggio = '';
            this.saving.next(false);
          },
        });
    }
  }

  async upload(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList![0]) {
      this.saving.next(true);
      const allegati = await fileListToBase64(fileList);
      let user = await this._keycloakService.loadUserProfile();
      this._insertAllegatoDiarioGQL
        .mutate({
          objects: {
            utente: user,
            segnalazione_id: this.id,
            allegato: {
              data: allegati[0],
            },
          },
        })
        .subscribe({
          complete: () => {
            this.messaggio = '';
            this.saving.next(false);
          },
        });
    }
  }

  async download(file: any) {
    // let blob = b64toBlob(file.file, file.tipo);
    // let url = window.URL.createObjectURL(blob);

    let res: any = await firstValueFrom(
      this._http.post('/storage/file/get', {
        bucket: 'segnalazione-' + this.id,
        name: 'diario/' + file,
      })
    );

    var fileLink = document.createElement('a');
    fileLink.href = res.url;
    fileLink.download = file;
    fileLink.click();
  }
}
