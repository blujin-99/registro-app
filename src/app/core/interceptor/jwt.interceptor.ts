import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // const token: any = localStorage.getItem('jwt');

    // let request = req;

    // if (token) {
    //   request = req.clone({
    //     setHeaders: {
    //       authorization: `Bearer ${token}`,
    //       'Access-Control-Allow-Origin': '*',
    //     },
    //   });
    // }

    return next.handle(req);
  }
}
