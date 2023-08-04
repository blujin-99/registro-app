import { NgModule } from '@angular/core';
import { ChipFiltroComponent } from './components/chip-filtro/chip-filtro.component';
import { FiltrosBusquedaComponent } from './components/filtros-busqueda/filtros-busqueda.component';
import { BotonesTramiteComponent } from './components/botones-tramite/botones-tramite.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { InicioRoutingModule } from './inicio-routing.module';
import { SideBarComponent } from 'src/app/core/layout/side-bar/side-bar.component';
import { MaterialModule } from '../material/material.module';
import { TablaPendientesComponent } from './components/tabla-pendientes/tabla-pendientes.component';
import { TablaEntregadoComponent } from './components/tabla-entregado/tabla-entregado.component';
import { TablaFinalizadoComponent } from './components/tabla-finalizado/tabla-finalizado.component';
import { AlertCategoriaComponent } from 'src/app/shared/components/alert-categoria/alert-categoria.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    ChipFiltroComponent,
    FiltrosBusquedaComponent,
    InicioPageComponent,
    BotonesTramiteComponent,
    TablaPendientesComponent,
    TablaEntregadoComponent,
    TablaFinalizadoComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InicioRoutingModule,
    SideBarComponent,
    MaterialModule,
    AlertCategoriaComponent,
    MatFormFieldModule,
  ],
  exports: [InicioPageComponent, InicioRoutingModule],
})
export class InicioModule {}
