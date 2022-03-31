import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import jwtDecode from 'jwt-decode';
import { KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';

const AUTH_API =
  '/auth/realms/' + environment.keycloak.realm + '/protocol/openid-connect';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  }),
};

@Component({
  selector: 'app-accertatori',
  templateUrl: './accertatori.component.html',
  styleUrls: ['./accertatori.component.scss'],
})
export class AccertatoriComponent {
  user: any = {};
  agenti: any = [];

  constructor(
    private _keycloak: KeycloakService,
    public dialogRef: MatDialogRef<AccertatoriComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    _keycloak.loadUserProfile().then((user: any) => {
      this.user = user;
      this.agenti.push({
        username: user.username,
        agente: {
          nome: user.firstName,
          cognome: user.lastName,
          grado: user.attributes.grado[0],
          matricola: user.attributes.matricola[0],
        },
      });
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  add() {
    const addRef = this.dialog.open(AddDialog);

    addRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result != '' && result != undefined && result != null)
        this.agenti.push(result);
    });
  }

  remove(index: number) {
    this.agenti.splice(index, 1);
  }
}

@Component({
  selector: 'add-dialog',
  templateUrl: 'add.dialog.html',
})
export class AddDialog {
  error = null;
  model: any = {};

  form = new FormGroup({});

  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'username',
      type: 'input',
      templateOptions: {
        required: true,
      },
      expressionProperties: {
        'templateOptions.label': this._translate.stream('Nome utente'),
      },
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        required: true,
      },

      expressionProperties: {
        'templateOptions.label': this._translate.stream('Password'),
      },
    },
  ];

  constructor(
    private _translate: TranslateService,
    public dialogRef: MatDialogRef<AddDialog>,
    private _http: HttpClient
  ) {}

  login() {
    const body = new HttpParams()
      .set('username', this.model.username)
      .set('password', this.model.password)
      .set('client_id', 'dashboard-client')
      .set('grant_type', 'password');
    this._http
      .post(AUTH_API + '/token', body.toString(), httpOptions)
      .subscribe(
        (result: any) => {
          console.log(result);

          let jwt: any = jwtDecode(result.access_token);
          console.log(jwt);
          this.dialogRef.close({
            username: jwt.preferred_username,
            agente: {
              nome: jwt.given_name,
              cognome: jwt.family_name,
              grado: jwt.grado,
              matricola: jwt.matricola,
            },
          });
        },
        (error: any) => {
          this.error = error.error.error_description;
        }
      );
  }
}
