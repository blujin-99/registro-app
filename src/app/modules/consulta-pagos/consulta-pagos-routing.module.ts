import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaPagosPageComponent } from './pages/consulta-pagos-page/consulta-pagos-page.component';

const routes: Routes = [
  {
    path: '',
    children: [{ path: '', component: ConsultaPagosPageComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaPagosRoutingModule {}
