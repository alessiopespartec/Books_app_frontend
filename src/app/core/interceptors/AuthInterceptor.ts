/*import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { environment } from '../../../environment/environment';

export const AuthInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  
  const username: string = environment.auth.username;
  const password: string = environment.auth.password;
  const basicAuthHeader = 'Basic ' + btoa(`${username}:${password}`);

  let modifiedReq = req.clone({
    setHeaders: {
      Authorization: basicAuthHeader,
    },
  });

  return next(modifiedReq);
};
*/

import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { KeycloakService } from 'keycloak-angular';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private keycloakService: KeycloakService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Converti la promessa getToken in un Observable
    return from(this.keycloakService.getToken()).pipe(
      switchMap((token) => {
        if (token) {
          const modifiedReq = req.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`,
            },
          });
          return next.handle(modifiedReq);
        } else {
          // Se non c'è un token, procedi con la richiesta originale
          return next.handle(req);
        }
      })
    );
  }
}

// TODO: Riportare l'AuthInterceptor a quello originale che mi ha inviato Lorenso e poi settarlo per l'auth token.
