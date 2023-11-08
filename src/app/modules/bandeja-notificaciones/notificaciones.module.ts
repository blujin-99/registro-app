import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandejaNotificacionesComponent } from './pages/bandeja-notificaciones.component';
import { NotificacionesRoutingModule } from './notificaciones-routing.module';



@NgModule({
  declarations: [BandejaNotificacionesComponent],
  imports: [
    CommonModule,
    NotificacionesRoutingModule
  ],
  exports:[BandejaNotificacionesComponent,NotificacionesRoutingModule]
})
export class NotificacionesModule { }
