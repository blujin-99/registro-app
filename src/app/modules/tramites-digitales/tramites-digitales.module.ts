import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

//Components
import { OficinaPresentacionComponent } from './pages/oficina-presentacion/oficina-presentacion.component';
import { TramitesDigitalesRoutingModule } from './tramites-digitales-routing.module';
import { TiposTramitesComponent } from './pages/tipos-tramites/tipos-tramites.component';
import { ParcialInhibicionesComponent } from './parcial-inhibiciones/pages/parcial-inhibiciones/parcial-inhibiciones.component';
import { ActoComponent } from './components/acto/acto.component';
import { ObservacionesComponent } from './components/observaciones/observaciones.component';
import { BadgeComponent } from './components/badge/badge.component';
import { ErrorModalComponent } from '../nuevo-tramite/components/error-modal/error-modal.component';
import { ValidatorErrorsComponent } from 'src/app/shared/components/validator-errors/validator-errors.component';
import { PersonaHumanaComponent } from './components/persona-humana/persona-humana.component';

@NgModule({
  declarations: [
    OficinaPresentacionComponent,
    TiposTramitesComponent,
    ParcialInhibicionesComponent,
    ActoComponent,
    ObservacionesComponent,
    BadgeComponent,
    PersonaHumanaComponent,
    
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, MaterialModule,ValidatorErrorsComponent],
  exports: [TramitesDigitalesRoutingModule],
})
export class TramitesDigitalesModule {}
