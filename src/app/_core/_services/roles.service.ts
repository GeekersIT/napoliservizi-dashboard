import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  constructor(private _keycloak: KeycloakService) {}

  show(lista: Array<string>) {
    const roles = this._keycloak.getUserRoles();
    return lista.some((e) => roles.includes(e));
  }
}
