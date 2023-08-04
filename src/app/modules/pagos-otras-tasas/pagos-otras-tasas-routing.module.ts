import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagosOtrasTasasPageComponent } from './pages/pagos-otras-tasas-page/pagos-otras-tasas-page.component';

const routes: Routes = [
  {
    path: '',
    children: [{ path: '', component: PagosOtrasTasasPageComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagosOtrasTasasRoutingModule {}
