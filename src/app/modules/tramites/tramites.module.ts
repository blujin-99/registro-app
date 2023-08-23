import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TramitesPageComponent } from './pages/tramites-page/tramites-page.component';
import { TramiteRoutingModule } from './tramites-routing.module';
import { ChipFiltroComponent } from './components/chip-filtro/chip-filtro.component';
import { FiltrosBusquedaComponent } from './components/filtros-busqueda/filtros-busqueda.component';
import { BotonesTramiteComponent } from './components/botones-tramite/botones-tramite.component';
import { TablaPendientesComponent } from './components/tabla-pendientes/tabla-pendientes.component';
import { TablaEntregadoComponent } from './components/tabla-entregado/tabla-entregado.component';
import { TablaFinalizadoComponent } from './components/tabla-finalizado/tabla-finalizado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SideBarComponent } from 'src/app/core/layout/side-bar/side-bar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AlertCategoriaComponent } from 'src/app/shared/components/alert-categoria/alert-categoria.component';
import { MaterialModule } from '../material/material.module';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    TramitesPageComponent,
    ChipFiltroComponent,
    FiltrosBusquedaComponent,
    BotonesTramiteComponent,
    TablaPendientesComponent,
    TablaEntregadoComponent,
    TablaFinalizadoComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    TramiteRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SideBarComponent,
    MaterialModule,
    AlertCategoriaComponent,
    MatFormFieldModule,
  ],
  exports: [TramiteRoutingModule, TramitesPageComponent],
})
export class TramitesModule {}
