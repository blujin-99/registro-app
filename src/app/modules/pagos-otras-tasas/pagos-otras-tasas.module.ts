import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagosOtrasTasasPageComponent } from './pages/pagos-otras-tasas-page/pagos-otras-tasas-page.component';
import { SideBarComponent } from 'src/app/core/layout/side-bar/side-bar.component';
import { PagosOtrasTasasRoutingModule } from './pagos-otras-tasas-routing.module';
import { FormTasasComponent } from './components/form-tasas/form-tasas.component';
import { TablaTasasComponent } from './components/tabla-tasas/tabla-tasas.component';
import { OpcionesPagoComponent } from './components/opciones-pago/opciones-pago.component';

@NgModule({
  declarations: [PagosOtrasTasasPageComponent, FormTasasComponent, TablaTasasComponent, OpcionesPagoComponent],
  imports: [CommonModule, SideBarComponent, PagosOtrasTasasRoutingModule],
  exports: [PagosOtrasTasasRoutingModule, PagosOtrasTasasPageComponent],
})
export class PagosOtrasTasasModule {}
