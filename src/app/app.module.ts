import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './core/layout/side-bar/side-bar.component';
import { InicioPageComponent } from './modules/inicio/pages/inicio-page/inicio-page.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ChipFiltroComponent } from './modules/inicio/components/chip-filtro/chip-filtro.component';
import { FiltrosBusquedaComponent } from './modules/inicio/components/filtros-busqueda/filtros-busqueda.component';
import { BotonesTramiteComponent } from './modules/inicio/components/botones-tramite/botones-tramite.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioPageComponent,
    HeaderComponent,
    FooterComponent,
    ChipFiltroComponent,
    FiltrosBusquedaComponent,
    BotonesTramiteComponent,
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
