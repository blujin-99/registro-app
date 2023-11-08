import { Component } from '@angular/core';
import { MessagingService } from '../../services/messaging.service';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.scss'],
})
export class MensajeComponent {
  title: string = '';
  mensaje: string = '';
  link: string = '';

  constructor(private messageSrv: MessagingService) {}

  ngOnInit(): void {
    this.messageSrv.requestPermission;
    this.messageSrv.reciveMessaging;
    this.messageSrv.mensaje.subscribe((sms) => {
   
        this.title = sms.notification.title;
        this.mensaje = sms.notification.body;
        this.link = sms.data.url;
      
    });
  }


}
