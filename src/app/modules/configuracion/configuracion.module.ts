import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracionRoutingModule } from './config-routing.module';
import { ConfiguracionPageComponent } from './pages/configuracion-page/configuracion-page.component';
import { SideBarComponent } from 'src/app/core/layout/side-bar/side-bar.component';
import { BtnLinkComponent } from './components/btn-link/btn-link.component';

@NgModule({
  declarations: [ConfiguracionPageComponent, BtnLinkComponent],
  imports: [CommonModule, ConfiguracionRoutingModule, SideBarComponent],
  exports: [ConfiguracionRoutingModule, ConfiguracionPageComponent],
})
export class ConfiguracionModule {}
