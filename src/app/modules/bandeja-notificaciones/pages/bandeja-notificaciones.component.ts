import { Component } from '@angular/core';
import { MessagingService } from 'src/app/core/services/messaging.service';


@Component({
  selector: 'app-bandeja-notificaciones',
  templateUrl: './bandeja-notificaciones.component.html',
  styleUrls: ['./bandeja-notificaciones.component.scss']
})
export class BandejaNotificacionesComponent{
  constructor(public messageSrv: MessagingService){}
  reciveMessage: any[] = [];
  notificacion$ = this.messageSrv.noti$
  

  deleteNotification(id: number) {
    this.messageSrv.deleteItem(id)
  }
}
