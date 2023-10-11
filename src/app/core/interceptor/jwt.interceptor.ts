import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  excludeDomains: string[] = environment.excludedDomains;
  excludeEndpoints: string[] = environment.excludedEndpoints;

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let token: string | null = localStorage.getItem('token');

    let request = req;
    if (
      !this.excludeDomains.some((domain) => req.url.includes(domain)) &&
      !this.excludeEndpoints.some((endpoint) => req.url.endsWith(endpoint))
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
