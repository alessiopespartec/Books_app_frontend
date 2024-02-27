import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
})
export class UserDetailComponent implements OnInit {
  userName: string = '';
  firstName: string = '';
  lastName: string = '';
  roles: string[] = [];

  constructor(private keycloakService: KeycloakService) {}

  async ngOnInit() {
    if (await this.keycloakService.isLoggedIn()) {
      const userDetails = await this.keycloakService.loadUserProfile();
      this.userName = userDetails.username ?? '';
      this.firstName = userDetails.firstName ?? '';
      this.lastName = userDetails.lastName ?? '';
      this.roles = this.keycloakService.getUserRoles() ?? [];
    }
  }
}
