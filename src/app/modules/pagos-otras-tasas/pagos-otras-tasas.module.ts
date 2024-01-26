import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagosOtrasTasasPageComponent } from './pages/pagos-otras-tasas-page/pagos-otras-tasas-page.component';
import { PagosOtrasTasasRoutingModule } from './pagos-otras-tasas-routing.module';
import { FormTasasComponent } from './components/form-tasas/form-tasas.component';
import { TablaTasasComponent } from './components/tabla-tasas/tabla-tasas.component';
import { OpcionesPagoComponent } from './components/opciones-pago/opciones-pago.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidatorErrorsComponent } from 'src/app/shared/components/validator-errors/validator-errors.component';
import { NgOptimizedImage } from '@angular/common'
@NgModule({
  declarations: [
    PagosOtrasTasasPageComponent,
    FormTasasComponent,
    TablaTasasComponent,
    OpcionesPagoComponent,
  ],
  imports: [
    CommonModule,
     PagosOtrasTasasRoutingModule,
     ReactiveFormsModule,
     ValidatorErrorsComponent,
     NgOptimizedImage
    ],
  exports: [PagosOtrasTasasRoutingModule, PagosOtrasTasasPageComponent],
})
export class PagosOtrasTasasModule {}
