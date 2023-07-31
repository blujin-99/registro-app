import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoTramitePageComponent } from './pages/nuevo-tramite-page/nuevo-tramite-page.component';
import { NuevoTramiteRoutingModule } from './nuevo-tramite-routing.module';

@NgModule({
  declarations: [NuevoTramitePageComponent],
  imports: [CommonModule],
  exports: [NuevoTramiteRoutingModule, NuevoTramitePageComponent],
})
export class NuevoTramiteModule {}
