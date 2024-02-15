import {
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