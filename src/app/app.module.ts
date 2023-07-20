import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './core/layout/side-bar/side-bar.component';
import { InicioPageComponent } from './modules/inicio/pages/inicio-page/inicio-page.component';
import { ConfigPageComponent } from './modules/config/config-page/config-page.component';
import { UserPageComponent } from './modules/user/user-page/user-page.component';
import { HeaderComponent } from './core/layout/header/header.component';

@NgModule({
  declarations: [AppComponent, InicioPageComponent, ConfigPageComponent, UserPageComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, SideBarComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
