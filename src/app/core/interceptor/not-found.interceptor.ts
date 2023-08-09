import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { ConsultaMesaEntradaService } from 'src/app/shared/services/consulta-mesa-entrada.service';
@Injectable()
export class NotFoundError implements HttpInterceptor {

  constructor(private mesaEntradaService: ConsultaMesaEntradaService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const headers = new HttpHeaders({
      'token-usuario': 'AB5646dfftgRE333'
    });
  
    const requestClone = request.clone({
      headers
    });
    
    return next.handle(requestClone).pipe(
       catchError((error: HttpErrorResponse) => {
         this.mesaEntradaService.showError(error.status);
         return throwError(() => 'Ha ocurrido un error' + ' tipo: ' + error.status);
       })
    );
  }
}
