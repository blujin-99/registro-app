import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaPagosPageComponent } from './pages/consulta-pagos-page/consulta-pagos-page.component';
import { ConsultaPagosRoutingModule } from './consulta-pagos-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ConsultaPagosPageComponent],
  imports: [
    CommonModule,
    ConsultaPagosRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [ConsultaPagosRoutingModule, ConsultaPagosPageComponent],
})
export class ConsultaPagosModule {}
