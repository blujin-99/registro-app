import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandejaNotificacionesComponent } from './pages/bandeja-notificaciones.component';


const routes : Routes = [
  {
    path: '',
    children:[
      {
        path:'', component: BandejaNotificacionesComponent
      }
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class NotificacionesRoutingModule { }
