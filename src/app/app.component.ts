import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    translate: TranslateService,
    private _keycloak: KeycloakService
  ) {
    translate.setDefaultLang('it');
    translate.use('it');
  }

  logout() {
    this._keycloak.logout();
  }
}
