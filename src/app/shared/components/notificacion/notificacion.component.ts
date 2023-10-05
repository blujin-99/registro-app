import { Component, DoCheck, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { MessagingService } from 'src/app/core/services/messaging.service';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.scss'],
})
export class NotificacionComponent implements DoCheck, OnInit {
  user: any;
  notification: boolean = false;
  mensaje: boolean = false;
  constructor(
    private userServ: UserService,
    private messagingSrv: MessagingService
  ) {}

  ngOnInit(): void {
    /**
     * @function requestPermission solicita permiso al usuario para abilitar la suscripción de las
     * notificaciones
     */
    this.messagingSrv.requestPermission();
    /**
     * @function reciveMessaging cundo el usuario se suscribió a las notificaciones,
     * recibe la notificación
     */
    this.messagingSrv.reciveMessaging();

    /**
     * @var mensaje observable de lectura, verifica cuando llega una notificación y su mensaje
     */

    this.messagingSrv.mensaje.subscribe((datos) => {
      if (datos) {
        this.mensaje = true;
      }
    });
  }

  ngDoCheck(): void {
    this.user = this.userServ;

    if (this.user.user) {
      this.notification = true;
    } else {
      this.notification = false;
    }
  }
}
