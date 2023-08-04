import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagosOtrasTasasPageComponent } from './pages/pagos-otras-tasas-page/pagos-otras-tasas-page.component';
import { SideBarComponent } from 'src/app/core/layout/side-bar/side-bar.component';
import { PagosOtrasTasasRoutingModule } from './pagos-otras-tasas-routing.module';

@NgModule({
  declarations: [PagosOtrasTasasPageComponent],
  imports: [CommonModule, SideBarComponent, PagosOtrasTasasRoutingModule],
  exports: [PagosOtrasTasasRoutingModule, PagosOtrasTasasPageComponent],
})
export class PagosOtrasTasasModule {}
