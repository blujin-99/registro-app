import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { getMessaging as getMensaje } from 'firebase/messaging/sw';


@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  mensaje = new BehaviorSubject<any>(null);
  locaNotificacion =
    environment.env + '_' + environment.pk + environment.notificacion.nombre;
  notification = new BehaviorSubject<any[]>([]);
  noti$: Observable<any[]> = this.notification.asObservable();
  private sendToken = environment.apiBase + environment.api.notificationUrl;
  token?: string;
  env = environment.firebaseConfig;
  counter: string[] = [];
  private app = initializeApp(environment.firebaseConfig);
  private messaging = getMessaging(this.app);
  constructor(private http: HttpClient, private userSrv: UserService) {}

  /**
   * Confirma Recibir Notificaciones
   */
  requestPermission() {
    navigator.serviceWorker.ready.then((data) => console.log(data, 'activo'));

    navigator.serviceWorker
      .register('/assets/firebase-messaging-sw.js')
      .then((registration) => {
        // Realiza una verificación de tipos explícita
        let swRegistration = registration as ServiceWorkerRegistration;
        getToken(this.messaging, {
          serviceWorkerRegistration: swRegistration,
        }).then((token) => {
          this.registerToken(token);
          console.log(getMensaje(this.app))
        });
        // Continúa con el uso de swRegistration
      })
      .catch((error) => {
        console.error('Error al obtener el ServiceWorkerRegistration:', error);
      });
  }

  /**
   * Registro token para notificaciones de Usuario Logueado
   * @param token Registra token en el sistema
   */
  registerToken(token: string) {
    if (this.userSrv.getJWT()) {
      this.http.post(this.sendToken, { token }).subscribe();
    }
  }

  reciveMessaging() {
    getMensaje(this.app)
    /* 
    onMessage(messageCongif, (smRecived) => {
      console.log(smRecived, "mensajes")
      let notificationData = {
        title: smRecived.notification?.title,
        body: smRecived.notification?.body,
        url: smRecived.data?.['url'],
      };
      this.saveNotification(notificationData)
      
    });*/
  }

  /**
   * Guarda notificación en local storage
   * @param notificacion
   */
  private saveNotification(notificacion: any) {
    /**
     * Recupero las notificaciones locales
     */
    let notifications = JSON.parse(
      localStorage.getItem(this.locaNotificacion) || '[]'
    );
    notifications.push(notificacion);
    /**
     *  Guarno notificaciones local storage
     */
    localStorage.setItem(this.locaNotificacion, JSON.stringify(notifications));
    this.noti$ = notifications;
  }
  checkNotification() {
    /**
     * obtengo los datos de las notificaciones que se guardaron en el localStorage
     */
    const count = localStorage.getItem('notifications');
    if (count) {
      /**
       * lo convierto en formato JSON
       */
      const counter = JSON.parse(count);
      /**
       * verifico si viene un array de objetos, sino, lo convierte en un array con objetos
       */
      this.counter = Array.isArray(counter) ? counter : [];
      this.notification.next(Array.isArray(counter) ? counter : []);
    }
    /**
     * cuento cuantos elementos hay en el array y lo devuelvo
     */
    return this.counter.length;
  }

  deleteItem(id: number) {
    let storage = localStorage.getItem('notifications');
    if (storage) {
      const dataStorage = JSON.parse(storage);
      dataStorage.splice(id, 1);
      localStorage.setItem('notifications', JSON.stringify(dataStorage));
    }
  }
}
