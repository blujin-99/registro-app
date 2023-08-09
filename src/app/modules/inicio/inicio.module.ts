import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { InicioRoutingModule } from './inicio-routing.module';
import { SideBarComponent } from 'src/app/core/layout/side-bar/side-bar.component';

@NgModule({
  declarations: [InicioPageComponent],
  imports: [CommonModule, InicioRoutingModule, SideBarComponent],
  exports: [InicioPageComponent, InicioRoutingModule],
})
export class InicioModule {}
