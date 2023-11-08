import { Component } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { MessagingService } from 'src/app/core/services/messaging.service';
import { Notification } from '../interfaces/notification.interface';
@Component({
  selector: 'app-bandeja-notificaciones',
  templateUrl: './bandeja-notificaciones.component.html',
  styleUrls: ['./bandeja-notificaciones.component.scss']
})
export class BandejaNotificacionesComponent {
  user: any;
  notification: boolean = false;
  mensaje: boolean = false;
  reciveMessage : Notification[] = []

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

    const notifications= localStorage.getItem('notifications');
    if (notifications) {
      try {
        // Intenta parsear la cadena para convertirla en un array de objetos.
        const notificationsArray = JSON.parse(notifications);
        this.reciveMessage = Array.isArray(notificationsArray) ? notificationsArray : [];
      } catch (e) {
        // Si hay un error al parsear, probablemente la cadena no es JSON válido,
        // entonces se maneja el error o se asigna un array vacío.
        this.reciveMessage = [];
      }
    } else {
      // Si es null, usar un array vacío.
      this.reciveMessage = [];
    }
  }

  deleteNotification(id : number){
    this.reciveMessage.splice(id,1)
    let storage = localStorage.setItem('notifications', JSON.stringify(this.reciveMessage))
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
