import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaPagosPageComponent } from './pages/consulta-pagos-page/consulta-pagos-page.component';
import { ConsultaPagosRoutingModule } from './consulta-pagos-routing.module';
import { SideBarComponent } from 'src/app/core/layout/side-bar/side-bar.component';

@NgModule({
  declarations: [ConsultaPagosPageComponent],
  imports: [CommonModule, ConsultaPagosRoutingModule, SideBarComponent],
  exports: [ConsultaPagosRoutingModule, ConsultaPagosPageComponent],
})
export class ConsultaPagosModule {}
