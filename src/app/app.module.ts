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
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SideBarComponent,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    InterceptorModule,
  ],
  providers: [importProvidersFrom(HttpClientModule), provideOAuthClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
