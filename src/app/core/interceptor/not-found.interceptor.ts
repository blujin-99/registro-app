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
import { UserService } from '../services/user.service';
@Injectable()
export class NotFoundError implements HttpInterceptor {
  constructor(private catchErrorServ: CatchinErrorService, private userService :UserService) {
  
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
            this.userService.logout()        
        }
        this.catchErrorServ.showError(error.status);
        return throwError(
          () => 'Ha ocurrido un error' + ' tipo: ' + ' ' + error.status
        );
      })
    );
  }
}

