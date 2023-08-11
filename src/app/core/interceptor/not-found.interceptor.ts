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
import { CatchinErrorService } from './catchin-error.service';
@Injectable()
export class NotFoundError implements HttpInterceptor {
  constructor(private catchErrorServ: CatchinErrorService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
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
