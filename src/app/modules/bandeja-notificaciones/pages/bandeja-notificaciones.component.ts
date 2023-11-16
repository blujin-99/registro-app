import { Component, OnInit } from '@angular/core';
import { MessagingService } from 'src/app/core/services/messaging.service';
import { Notification } from '../interfaces/notification.interface';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-bandeja-notificaciones',
  templateUrl: './bandeja-notificaciones.component.html',
  styleUrls: ['./bandeja-notificaciones.component.scss']
})
export class BandejaNotificacionesComponent implements OnInit {
  reciveMessage: Notification[] = [];
  private message = new BehaviorSubject<Notification[]>([]);
  message$ = this.message.asObservable();

  constructor(private messagingSrv: MessagingService) {}

  ngOnInit(): void {
    this.messagingSrv.reciveMessaging();

    const notifications = localStorage.getItem('notifications');
    if (notifications) {
      const notificationsArray = JSON.parse(notifications);
      this.reciveMessage = Array.isArray(notificationsArray) ? notificationsArray : [];
      this.message.next(this.reciveMessage);
    } else {
      this.reciveMessage = [];
    }
    
  }

  deleteNotification(id: number) {
    this.reciveMessage.splice(id, 1);
    this.message.next(this.reciveMessage);
    localStorage.setItem('notifications', JSON.stringify(this.reciveMessage));
  }
}
