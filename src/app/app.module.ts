import { NgModule, importProvidersFrom } from '@angular/core';
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

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { environment } from 'src/environments/environment';
import { MessagingService } from './core/services/messaging.service';
import { AsyncPipe } from '@angular/common';
import { MensajeComponent } from './core/layout/mensaje/mensaje.component';
import { NotificacionComponent } from './shared/components/notificacion/notificacion.component';
import { UserService } from './core/services/user.service';
import { NotificacionesComponent } from './core/components/notificaciones/notificaciones.component';
import { ListSidebarComponent } from './core/components/list-sidebar/list-sidebar.component';
import { SidebarComponent } from './core/layout/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { AlertDevelopComponent } from './core/components/alert-develop/alert-develop.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MensajeComponent,
    NotificacionComponent,
    NotificacionesComponent,
    ListSidebarComponent,
    SidebarComponent,
    AlertDevelopComponent,
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
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireMessagingModule,
  ],
  providers: [
    importProvidersFrom(HttpClientModule),
    provideOAuthClient(),
    MessagingService,
    AsyncPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private userService: UserService) {
    this.userService.refreshToken();
  }
}
