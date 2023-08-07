import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './core/layout/side-bar/side-bar.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from './core/layout/loading/loading.component';
import { LoadingInterceptor } from './core/insterceptor/loading.interceptor';
import { CatchingErrorComponent } from './core/layout/catching-error/catching-error.component';
import { NotFoundError } from './core/insterceptor/not-found.interceptor';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, LoadingComponent, CatchingErrorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SideBarComponent,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [
    NotFoundError,
    {
    provide: HTTP_INTERCEPTORS, useClass:LoadingInterceptor, multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
