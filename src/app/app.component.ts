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

  public menu = [
    {
      label: this._translate.instant('G.I.S.'),
      show: this.roles.show(['gis-mappa', 'gis-gestione-livelli']),
      click: () => {},
      subMenu: [
        {
          label: this._translate.instant('Mappa'),
          show: this.roles.show(['gis-mappa']),
          routerLink: '/gis/mappa',
          click: () => {},
          subMenu: null,
        },
        {
          label: this._translate.instant('Gestione livelli'),
          show: this.roles.show(['gis-gestione-livelli']),
          routerLink: '/gis/livelli',
          click: () => {},
          subMenu: null,
        },
      ],
    },
    {
      label: this._translate.instant('Toponomastica'),
      show: this.roles.show([
        'toponomastica-gestione-toponimi',
        'toponomastica-gestione-municipalita',
        'toponomastica-gestione-quartieri',
      ]),
      click: () => {},
      subMenu: [
        {
          label: this._translate.instant('Gestione municipalità'),
          show: this.roles.show(['toponomastica-gestione-municipalita']),
          routerLink: '/toponomastica/municipalita',
          click: () => {},
          subMenu: null,
        },
        {
          label: this._translate.instant('Gestione quartieri'),
          show: this.roles.show(['toponomastica-gestione-quartieri']),
          routerLink: '/toponomastica/quartieri',
          click: () => {},
          subMenu: null,
        },
        {
          label: this._translate.instant('Gestione toponimi'),
          show: this.roles.show(['toponomastica-gestione-toponimi']),
          routerLink: '/toponomastica/toponimi',
          click: () => {},
          subMenu: null,
        },
      ],
    },
    {
      label: this._translate.instant('P.I.S.'),
      show: this.roles.show([
        'pis-gestione-interventi',
        'pis-gestione-segnalazioni',
        'pis-gestione-squadre',
        'pis-ufficio',
      ]),
      click: () => {},
      subMenu: [
        {
          label: this._translate.instant('Interventi straordinari'),
          show: this.roles.show(['pis-gestione-interventi']),
          routerLink: '/pis/interventi/straordinari',
          click: () => {},
          subMenu: null,
        },
        {
          label: this._translate.instant('Gestione squadre'),
          show: this.roles.show(['pis-gestione-squadre']),
          routerLink: '/pis/squadre',
          click: () => {},
          subMenu: null,
        },
        {
          label: this._translate.instant('Segnalazioni provvisorie'),
          show: this.roles.show(['pis-gestione-segnalazioni']),
          routerLink: '/pis/segnalazioni/provvisorie',
          click: () => {},
          subMenu: null,
        },
        {
          label: this._translate.instant('Segnalazioni protocollate'),
          show: this.roles.show(['pis-gestione-segnalazioni']),
          routerLink: '/pis/segnalazioni/protocollate',
          click: () => {},
          subMenu: null,
        },
      ],
    },
    {
      label: this._translate.instant('S.I.S.'),
      show: this.roles.show([
        'sis-gestione-incidenti',
        'sis-gestione-unita-operative',
      ]),
      click: () => {},
      subMenu: [
        {
          label: this._translate.instant('R.I.S.'),
          show: this.roles.show(['sis-gestione-incidenti']),
          routerLink: '/sis/ris/agenti',
          click: () => {},
          subMenu: null,
        },
        {
          label: this._translate.instant('R.I.S. provvisori'),
          show: this.roles.show(['sis-gestione-incidenti']),
          routerLink: '/sis/ris/provvisori',
          click: () => {},
          subMenu: null,
        },
        {
          label: this._translate.instant('R.I.S. protocollati'),
          show: this.roles.show(['sis-gestione-incidenti']),
          routerLink: '/sis/ris/protocollati',
          click: () => {},
          subMenu: null,
        },
        {
          label: this._translate.instant('Unità operative'),
          show: this.roles.show(['sis-gestione-unita-operative']),
          routerLink: '/sis/unita/operative',
          click: () => {},
          subMenu: null,
        },
      ],
    },
    {
      label: this._translate.instant('P.M.S.'),
      show: this.roles.show([
        'pms-gestione-indicatori',
        'pms-pacchetto-stradale',
      ]),
      click: () => {},
      subMenu: [
        {
          label: this._translate.instant('Gestione indicatori'),
          show: this.roles.show(['pms-gestione-indicatori']),
          routerLink: '',
          click: () => {},
          subMenu: [
            {
              label: this._translate.instant('Indicatori puntuali'),
              show: true,
              routerLink: '/pms/indicatori/puntuali',
              click: () => {},
            },
            {
              label: this._translate.instant('Indicatori P.M.S.'),
              show: true,
              routerLink: '/pms/indicatori/pms',
              click: () => {},
            },
            {
              label: this._translate.instant('Indicatori di performance'),
              show: true,
              routerLink: '/pms/indicatori/performance',
              click: () => {},
            },
            {
              label: this._translate.instant('Indicatori globali P.M.S.'),
              show: true,
              routerLink: '/pms/indicatori/globali',
              click: () => {},
            },
          ],
        },
        {
          label: this._translate.instant('Pacchetto stradale'),
          show: this.roles.show(['pms-pacchetto-stradale']),
          routerLink: '/pms/pacchetto/stradale',
          click: () => {},
          subMenu: null,
        },
      ],
    },
    // {
    //   label: this._translate.instant('P.S.S.U.'),
    //   show: this.roles.show(['pssu-report']),
    //   routerLink: '',
    //   click: () => {},
    //   subMenu: null,
    // },
    {
      label: this._translate.instant('Agcos'),
      show: this.roles.show(['agcos-report']),
      routerLink: '/agcos',
      click: () => {},
      subMenu: null,
    },
    {
      avatar: true,
      show: true,
      click: () => {},
      subMenu: [
        {
          label: this._translate.instant('Profilo'),
          show: true,
          routerLink: '',
          click: () => {},
          subMenu: null,
        },
        {
          label: this._translate.instant('Esci'),
          show: true,
          routerLink: '',
          click: () => this.logout(),
          subMenu: null,
        },
      ],
    },
  ];

  constructor(
    private _translate: TranslateService,
    private _keycloak: KeycloakService,
    public roles: RolesService
  ) {
    _translate.setDefaultLang('it');
    _translate.use('it');

    this._keycloak.loadUserProfile().then((utente) => (this.utente = utente));

    this.getToken();
  }
  async getToken() {
    let userToken = await this._keycloak.getToken();

    // console.log(userToken);
  }

  // showMenu(lista:Array<string>){
  //   const roles = this._keycloak.getUserRoles();
  //   return lista.some((e) => roles.includes(e));
  // }

  logout() {
    this._keycloak.logout();
  }
}
