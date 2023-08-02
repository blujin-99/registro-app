import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaPagosPageComponent } from './pages/consulta-pagos-page/consulta-pagos-page.component';
import { ConsultaPagosRoutingModule } from './consulta-pagos-routing.module';

@NgModule({
  declarations: [ConsultaPagosPageComponent],
  imports: [CommonModule, ConsultaPagosRoutingModule],
  exports: [ConsultaPagosRoutingModule, ConsultaPagosPageComponent],
})
export class ConsultaPagosModule {}
