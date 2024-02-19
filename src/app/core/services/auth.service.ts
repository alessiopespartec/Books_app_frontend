import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

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
}
