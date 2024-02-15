import {
  HttpErrorResponse,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const ErrorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  return next(req).pipe(
    catchError((error: any) => {
      let errorMsg!: string;

      if (error) {
        console.log('Error Interceptor here: ', error);
        errorMsg = `Error: ${error}`;
      }

      return throwError(() => error);
    })
  );
};

/*
ERROR INTERCEPTOR not implemented.
**********************************
If you want to please add to app.module.ts > providers

For example:
provideHttpClient(withInterceptors([ErrorInterceptor]))
*/