import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { KeycloakService } from 'keycloak-angular';
import { RolesService } from './_core/_services/roles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  utente: any;
  constructor(
    translate: TranslateService,
    private _keycloak: KeycloakService,
    public roles: RolesService
  ) {
    translate.setDefaultLang('it');
    translate.use('it');

    this._keycloak.loadUserProfile().then((utente) => (this.utente = utente));

    this.getToken();
  }
  async getToken() {
    let userToken = await this._keycloak.getToken();

    console.log(userToken);
  }

  // showMenu(lista:Array<string>){
  //   const roles = this._keycloak.getUserRoles();
  //   return lista.some((e) => roles.includes(e));
  // }

  logout() {
    this._keycloak.logout();
  }
}
