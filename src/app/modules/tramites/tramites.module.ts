import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TramitesPageComponent } from './pages/tramites-page/tramites-page.component';
import { TramiteRoutingModule } from './tramites-routing.module';

@NgModule({
  declarations: [TramitesPageComponent],
  imports: [CommonModule, TramiteRoutingModule],
  exports: [TramiteRoutingModule, TramitesPageComponent],
})
export class TramitesModule {}
