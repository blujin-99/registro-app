import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TramitesPageComponent } from './pages/tramites-page/tramites-page.component';
import { TramiteRoutingModule } from './tramites-routing.module';
import { ChipFiltroComponent } from './components/chip-filtro/chip-filtro.component';
import { FiltrosBusquedaComponent } from './components/filtros-busqueda/filtros-busqueda.component';
import { BotonesTramiteComponent } from './components/botones-tramite/botones-tramite.component';
import { TablaNoPresentadoComponent } from './components/tabla-no-presentado/tabla-no-presentado.component';
import { TablaPresentadoComponent } from './components/tabla-presentado/tabla-presentado.component';
import { TablaEntregadoComponent } from './components/tabla-entregado/tabla-entregado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { AlertCategoriaComponent } from 'src/app/shared/components/alert-categoria/alert-categoria.component';
import { MaterialModule } from '../material/material.module';
import { DisableEnableDirective } from 'src/app/shared/directives/disable-enable.directive';
import { ErrorServidorComponent } from 'src/app/shared/components/error-servidor/error-servidor.component';

@NgModule({
  declarations: [
    TramitesPageComponent,
    ChipFiltroComponent,
    FiltrosBusquedaComponent,
    BotonesTramiteComponent,
    TablaNoPresentadoComponent,
    TablaPresentadoComponent,
    TablaEntregadoComponent,
  ],
  imports: [
    CommonModule,
    TramiteRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    AlertCategoriaComponent,
    MatFormFieldModule,
    DisableEnableDirective,
    ErrorServidorComponent
  ],
  exports: [TramiteRoutingModule, TramitesPageComponent],
})
export class TramitesModule {}
