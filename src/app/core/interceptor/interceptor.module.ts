import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotFoundError } from './not-found.interceptor';
import { CatchingErrorComponent } from '../layout/catching-error/catching-error.component';
import { LoadingInterceptor } from './loading.interceptor';
import { LoadingComponent } from '../layout/loading/loading.component';
import { JwtInterceptor } from './jwt.interceptor';

@NgModule({
  declarations: [LoadingComponent, CatchingErrorComponent],
  imports: [CommonModule],
  exports: [LoadingComponent, CatchingErrorComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotFoundError,
      multi: true,
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: JwtInterceptor,
    //   multi: true,
    // },
  ],
})
export class InterceptorModule {}
