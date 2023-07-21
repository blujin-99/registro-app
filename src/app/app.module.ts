import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './core/layout/side-bar/side-bar.component';
import { InicioPageComponent } from './modules/inicio/pages/inicio-page/inicio-page.component';
import { ConfigPageComponent } from './modules/config/config-page/config-page.component';
import { UserPageComponent } from './modules/user/user-page/user-page.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InicioPageComponent,
    ConfigPageComponent,
    UserPageComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SideBarComponent,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
