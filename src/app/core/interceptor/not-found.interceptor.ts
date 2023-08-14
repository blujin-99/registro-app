import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { CatchinErrorService } from '../services/catchin-error.service';
@Injectable()
export class NotFoundError implements HttpInterceptor {
  constructor(private catchErrorServ: CatchinErrorService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    let jwt = localStorage.getItem('jwt');
    if (jwt) {
        jwt = JSON.parse(jwt);
    }
    if (jwt) {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${jwt}`,
                'Access-Control-Allow-Origin': '*',
            },
        });
    }


    // const headers = new HttpHeaders({
    //   'token-usuario': 'AB5646dfftgRE333'
    // });

    // const requestClone = request.clone({
    //   headers
    // });

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.catchErrorServ.showError(error.status);
        return throwError(
          () => 'Ha ocurrido un error' + ' tipo: ' + ' ' + error.status
        );
      })
    );
  }
}
