import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private keycloakService: KeycloakService) {}

  /*
  login(email: string, password: string): Observable<any> {
    if (email == 'admin@example.com' && password == 'password123') {
      localStorage.setItem('isLoggedIn', 'true');

      return of({
        success: true,
        token: 'randomToken123',
      });
    } else {
      return of({
        success: false,
        message: 'Invalid email or password',
      });
    }
  }
  */

  hasScope(requiredScope: string): boolean {
    const userScopes = this.getUserScopes();
    return userScopes.includes(requiredScope);
  }

  getUserScopes(): string[] {
    const tokenPayload = this.keycloakService.getKeycloakInstance().tokenParsed;
    return tokenPayload ? tokenPayload['scope'].split(' ') : [];
  }
}
