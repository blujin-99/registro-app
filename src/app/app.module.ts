import { NgModule, importProvidersFrom, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterceptorModule } from './core/interceptor/interceptor.module';
import { provideOAuthClient } from 'angular-oauth2-oidc';
import { AvatarComponent } from './shared/components/avatar/avatar.component';
import { MessagingService } from './core/services/messaging.service';
import { AsyncPipe } from '@angular/common';
import { UserService } from './core/services/user.service';
import { NotificacionesComponent } from './core/components/notificaciones/notificaciones.component';
import { ListSidebarComponent } from './core/components/list-sidebar/list-sidebar.component';
import { SidebarComponent } from './core/layout/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { AlertDevelopComponent } from './core/components/alert-develop/alert-develop.component';
import { OpcionesTramiteComponent } from './shared/components/opciones-tramite/opciones-tramite.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ValidatorErrorsComponent } from './shared/components/validator-errors/validator-errors.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotificacionesComponent,
    ListSidebarComponent,
    SidebarComponent,
    AlertDevelopComponent,
    OpcionesTramiteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    InterceptorModule,
    AvatarComponent,
    ValidatorErrorsComponent,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    
  ],
  exports:[
    ValidatorErrorsComponent,
  ],
  providers: [
    importProvidersFrom(HttpClientModule),
    provideOAuthClient(),
    MessagingService,
    AsyncPipe,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private userService: UserService) {
    //this.userService.refreshToken();
  }
}
