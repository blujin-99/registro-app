import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './core/layout/side-bar/side-bar.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterceptorModule } from './core/interceptor/interceptor.module';
import { provideOAuthClient } from 'angular-oauth2-oidc';
import { AvatarComponent } from './shared/components/avatar/avatar.component';

import { NotificacionComponent } from './shared/components/notificacion/notificacion.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { environment } from 'src/environments/environment.development';
import { MessagingService } from './core/services/messaging.service';
import { AsyncPipe } from '@angular/common';
import { MensajeComponent } from './core/layout/mensaje/mensaje.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, NotificacionComponent, MensajeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SideBarComponent,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    InterceptorModule,
    AvatarComponent,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireMessagingModule
  ],
  providers: [importProvidersFrom(HttpClientModule), provideOAuthClient(),MessagingService, AsyncPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
