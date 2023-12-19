import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserService } from '../services/user.service';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor (private userService : UserService){

  }
  includeEndpoints: string[] = environment.includedEndpoints;

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let jwt: string | null = this.userService.getJWT();
    let request = req;
    if (
      this.includeEndpoints.some((endpoint) => req.url.includes(endpoint))
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
