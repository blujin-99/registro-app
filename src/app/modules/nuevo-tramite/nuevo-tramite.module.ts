import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoTramitePageComponent } from './pages/nuevo-tramite-page/nuevo-tramite-page.component';
import { NuevoTramiteRoutingModule } from './nuevo-tramite-routing.module';
import { MaterialModule } from '../material/material.module';
import { BtnIniciarTramiteComponent } from './components/btn-iniciar-tramite/btn-iniciar-tramite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorModalComponent } from './components/error-modal/error-modal.component';
import { discardPeriodicTasks } from '@angular/core/testing';
import { DisableEnableDirective } from 'src/app/shared/directives/disable-enable.directive';

@NgModule({
  declarations: [
    NuevoTramitePageComponent, 
    BtnIniciarTramiteComponent, 
    ErrorModalComponent,

  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule,DisableEnableDirective],
  exports: [NuevoTramiteRoutingModule, NuevoTramitePageComponent],
})
export class NuevoTramiteModule {}
