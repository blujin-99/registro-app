import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoTramitePageComponent } from './pages/nuevo-tramite-page/nuevo-tramite-page.component';
import { NuevoTramiteRoutingModule } from './nuevo-tramite-routing.module';
import { SideBarComponent } from 'src/app/core/layout/side-bar/side-bar.component';
import { MaterialModule } from '../material/material.module';
import { BtnIniciarTramiteComponent } from './components/btn-iniciar-tramite/btn-iniciar-tramite.component';

@NgModule({
  declarations: [NuevoTramitePageComponent, BtnIniciarTramiteComponent],
  imports: [CommonModule, SideBarComponent, MaterialModule],
  exports: [NuevoTramiteRoutingModule, NuevoTramitePageComponent],
})
export class NuevoTramiteModule {}
