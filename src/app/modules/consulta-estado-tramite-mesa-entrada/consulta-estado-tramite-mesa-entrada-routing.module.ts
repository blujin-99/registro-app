import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaEstadoTramiteMesaEntradaComponent } from './pages/consulta-estado-tramite-mesa-entrada.component';
const routes: Routes = [
    {
      path: '',
      children: [
        { path: '', component: ConsultaEstadoTramiteMesaEntradaComponent },
        {
          path: '**',
          redirectTo: 'consuta/mesa-entrada',
        },
      ],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ConsultaEstadoTramiteMesaEntradaRoutingModule {}