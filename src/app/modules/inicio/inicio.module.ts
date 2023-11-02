import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { InicioRoutingModule } from './inicio-routing.module';

@NgModule({
  declarations: [InicioPageComponent],
  imports: [CommonModule, InicioRoutingModule],
  exports: [InicioPageComponent, InicioRoutingModule],
})
export class InicioModule {}
