import { Injectable } from '@angular/core';
import { keycloakEnv } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string =
    keycloakEnv.baseUrl + '/admin/realms/' + keycloakEnv.realm + '/users';

  constructor(private http: HttpClient) {}

  getAllUsers() {
    console.log('Getting all users from ', this.url);
    return this.http.get(this.url);
  }

  getUserById(id: string | number) {
    console.log('Getting user from ', this.url + '/' + id);
    return this.http.get(this.url + '/' + id);
  }
}
