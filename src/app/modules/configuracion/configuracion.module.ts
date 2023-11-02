import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracionRoutingModule } from './config-routing.module';
import { ConfiguracionPageComponent } from './pages/configuracion-page/configuracion-page.component';
import { BtnLinkComponent } from './components/btn-link/btn-link.component';

@NgModule({
  declarations: [ConfiguracionPageComponent, BtnLinkComponent],
  imports: [CommonModule, ConfiguracionRoutingModule],
  exports: [ConfiguracionRoutingModule, ConfiguracionPageComponent],
})
export class ConfiguracionModule {}
