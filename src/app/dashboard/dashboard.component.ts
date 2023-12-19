import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private readonly keycloak: KeycloakService) {}

  public async ngOnInit() {
    var userProfile = await this.keycloak.loadUserProfile();

    // console.log(this.keycloak.getUserRoles());
  }
}
