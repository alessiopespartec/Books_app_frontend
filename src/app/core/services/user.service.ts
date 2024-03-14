import { Injectable } from '@angular/core';
import { keycloakEnv } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string =
    keycloakEnv.baseUrl + '/admin/realms/' + keycloakEnv.realm + '/users';

  private validRoles = ['Administrator', 'Reader', 'Editor'];

  constructor(private http: HttpClient) {}

  getAllUsers() {
    console.log('Getting all users from ', this.url);
    return this.http.get(this.url);
  }

  getUserById(id: string | number) {
    console.log('Getting user from ', this.url + '/' + id);
    return this.http.get(this.url + '/' + id);
  }

  getRoleById(id: string | number) {
    console.log(
      'Getting role for user with ID ' +
        id +
        ' from ' +
        this.url +
        '/' +
        id +
        '/role-mappings'
    );
    return this.http.get(this.url + '/' + id + '/role-mappings').pipe(
      map((roleMappings: any) => {
        // Filtra per ottenere solo i ruoli specifici
        const filteredRoles = roleMappings.realmMappings
          .filter((role: any) => this.validRoles.includes(role.name))
          .map((role: any) => role.name); // Trasforma in un array di stringhe con i nomi dei ruoli
        return filteredRoles.length > 0 ? filteredRoles : ['No specific role']; // Gestisce il caso in cui non ci sono corrispondenze
      })
    );
  }
}
