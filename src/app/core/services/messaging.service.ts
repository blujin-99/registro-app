import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  mensaje = new BehaviorSubject<any>(null);

  $count = new BehaviorSubject<number>(0)

  counter: string[] = []
  Watched: boolean = false;

  constructor(private AFMessaging: AngularFireMessaging) { }

  requestPermission() {
    this.AFMessaging.requestToken.subscribe((token) => {
      if (token) {
        console.log(token);
      }
    });
  }

  reciveMessaging() {
    this.AFMessaging.messages.subscribe((smRecived) => {
      this.mensaje.next(smRecived);
      let notificationData = {
        title: smRecived.notification?.title,
        body: smRecived.notification?.body,
        url: smRecived.data?.['url']
      }

      let notifications = JSON.parse(localStorage.getItem('notifications') || '[]');
      notifications.push(notificationData)

      localStorage.setItem('notifications', JSON.stringify(notifications))

      let storage = localStorage.getItem('notifications')

    

    });
  }

  checkNotification(){
    const count = localStorage.getItem('notifications')
    if (count) {
      const counter = JSON.parse(count)
      this.counter = Array.isArray(counter) ? counter : [];
    }

    return this.counter.length
  }
}
