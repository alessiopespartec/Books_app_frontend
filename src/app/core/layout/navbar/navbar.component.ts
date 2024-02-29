import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  userName: string = '';
  firstName: string = '';
  isAdmin: boolean = false;

  constructor(private keycloakService: KeycloakService) {}

  async ngOnInit() {
    this.isLoggedIn = await this.keycloakService.isLoggedIn();

    if (this.isLoggedIn) {
      const userProfile = await this.keycloakService.loadUserProfile();
      console.log(userProfile);
      this.userName = userProfile.username ?? '';
      this.firstName = userProfile.firstName ?? '';
    }

    if (this.keycloakService.getUserRoles().includes('realm-admin')) {
      this.isAdmin = true;
    }
  }

  login() {
    this.keycloakService.login();
  }

  logout() {
    this.keycloakService.logout();
  }
}
