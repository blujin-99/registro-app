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
    let jwt: string | null = localStorage.getItem('MJYDH_JWT');

    let request = req;
    if (
      !this.excludeEndpoints.some((endpoint) => req.url.includes(endpoint))
    ) {
      if (jwt) {
        request = req.clone({
          setHeaders: {
            Authorization: `Bearer ${jwt}`,
            'Access-Control-Allow-Origin': '*',
          },
        });
      }
    }

    return next.handle(request);
  }
}
