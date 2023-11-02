import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaEstadoTramiteMesaEntradaComponent } from './pages/consulta-estado-tramite-mesa-entrada.component';
import { ConsultaEstadoTramiteMesaEntradaRoutingModule } from './consulta-estado-tramite-mesa-entrada-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ModalMesaEntradaComponent } from './components/modal-mesa-entrada/modal-mesa-entrada.component';

@NgModule({
  declarations: [
    ConsultaEstadoTramiteMesaEntradaComponent,
    ModalMesaEntradaComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [
    ConsultaEstadoTramiteMesaEntradaComponent,
    ConsultaEstadoTramiteMesaEntradaRoutingModule,
  ],
})
export class ConsultaEstadoTramiteMesaEntradaModule {}
