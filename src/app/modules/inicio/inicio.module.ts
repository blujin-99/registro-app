import { NgModule } from '@angular/core';
import { ChipFiltroComponent } from './components/chip-filtro/chip-filtro.component';
import { FiltrosBusquedaComponent } from './components/filtros-busqueda/filtros-busqueda.component';
import { BotonesTramiteComponent } from './components/botones-tramite/botones-tramite.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { InicioRoutingModule } from './inicio-routing.module';
import { SideBarComponent } from 'src/app/core/layout/side-bar/side-bar.component';

@NgModule({
  declarations: [
    ChipFiltroComponent,
    FiltrosBusquedaComponent,
    InicioPageComponent,
    BotonesTramiteComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InicioRoutingModule,
    SideBarComponent,
  ],
  exports: [InicioPageComponent, InicioRoutingModule],
})
export class InicioModule {}
