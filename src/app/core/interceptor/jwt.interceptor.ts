import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  excludeEndpoints: string[] = environment.excludedEndpoints;

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let token: string | null = localStorage.getItem('token');

    let request = req;
    if (
      !this.excludeEndpoints.some((endpoint) => req.url.includes(endpoint))
    ) {
      if (token) {
        request = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*',
          },
        });
      }
    }

    return next.handle(request);
  }
}
