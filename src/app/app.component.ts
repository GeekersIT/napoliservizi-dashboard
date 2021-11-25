import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  utente: any;
  constructor(
    translate: TranslateService,
    private _keycloak: KeycloakService
  ) {
    translate.setDefaultLang('it');
    translate.use('it');

    this._keycloak.loadUserProfile().then(utente => this.utente = utente);

    this.getToken()
  }
  async getToken(){
    let userToken = await this._keycloak.getToken();

    console.log(userToken);
  }

  logout() {
    this._keycloak.logout();
  }
}
