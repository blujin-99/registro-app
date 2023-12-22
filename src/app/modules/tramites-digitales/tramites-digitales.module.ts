import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Components
import { OficinaPresentacionComponent } from './pages/oficina-presentacion/oficina-presentacion.component';
import { TramitesDigitalesRoutingModule } from './tramites-digitales-routing.module';
import { TiposTramitesComponent } from './pages/tipos-tramites/tipos-tramites.component';
import { ParcialInhibicionesComponent } from './pages/parcial-inhibiciones/parcial-inhibiciones.component';



@NgModule({
  declarations: [OficinaPresentacionComponent, TiposTramitesComponent, ParcialInhibicionesComponent],
  imports: [CommonModule,RouterModule],
  exports:[TramitesDigitalesRoutingModule]
})
export class TramitesDigitalesModule { }
