import { AuthService } from './../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
})
export class UserDetailComponent implements OnInit {
  /*
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
  */

  id: string = '';
  data: any;

  constructor(private route: ActivatedRoute, private service: UserService) {}

  ngOnInit(): void {
    if (this.id == null) {
      console.log('ID cannot be null');
      return;
    }

    this.service.getUserById(this.id).subscribe({
      next: (res: {}) => {
        console.log('Data: ', res);
        this.data = res;
      },
      error: (err: {}) => {
        console.log('Error here: ', err);
      },
    });
  }
}
