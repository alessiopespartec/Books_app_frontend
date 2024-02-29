import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.css',
})
export class MyProfileComponent implements OnInit {
  userName: string = '';
  firstName: string = '';
  lastName: string = '';
  scopes: string[] = [];
  roles: string[] = [];

  constructor(
    public authService: AuthService,
    private keycloakService: KeycloakService
  ) {}

  async ngOnInit() {
    if (await this.keycloakService.isLoggedIn()) {
      const userDetails = await this.keycloakService.loadUserProfile();
      this.userName = userDetails.username ?? '';
      this.firstName = userDetails.firstName ?? '';
      this.lastName = userDetails.lastName ?? '';
      this.roles = this.keycloakService.getUserRoles() ?? [];
      this.scopes = this.authService.getUserScopes() ?? [];
    }
  }
}
