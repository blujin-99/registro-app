import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  mensaje = new BehaviorSubject<any>(null);
  locaNotificacion =
    environment.env + environment.app.key + environment.notificacion.nombre;
  notification = new BehaviorSubject<any[]>([]);
  noti$: Observable<any[]> = this.notification.asObservable();
  private sendToken = environment.apiBase + environment.api.notificationUrl;
  token?: string;
  counter: string[] = [];
  private app = initializeApp(environment.firebaseConfig);
  private messaging = getMessaging(this.app);
  constructor(private http: HttpClient, private userSrv: UserService, private storageSrv:StorageService) {}

  /**
   * Confirma Recibir Notificaciones
   */
  requestPermission() {
    /**
     * Registo el service worker
     */
    navigator.serviceWorker
      .register('assets/js/firebase-messaging-sw.js')
      .then((registration) => {
        // Realiza una verificación de tipos explícita
        let swRegistration = registration as ServiceWorkerRegistration;
        getToken(this.messaging, {
          serviceWorkerRegistration: swRegistration,
        }).then((token:any) => {
          this.registerToken(token);
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
    onMessage(this.messaging, (smRecived) => {
      
      let notificationData = {
        title: smRecived.notification?.title,
        body: smRecived.notification?.body,
        url: smRecived.data?.['url'],
      };
      this.saveNotification(notificationData)
    });

  }


   /**
   * Guarda notificación en local storage
   * @param notificacion
   */
  private saveNotification(notificacion: any) {
    let notifications = this.notificacionPush|| '[]';
    notifications.push(notificacion);
    this.notificacionPush=notifications
    this.noti$ = notifications;
  }
  checkNotification() {
    if (this.notificacionPush) {

      const counter = this.notificacionPush;

      this.counter = Array.isArray(counter) ? counter : [];
      this.notification.next(Array.isArray(counter) ? counter : []);
    }

    return this.counter.length;
  }

  deleteItem(id: number) {
    if (this.notificacionPush) {
      const dataStorage =this.notificacionPush;
      dataStorage.splice(id, 1);
      this.notificacionPush=dataStorage
    }
  }

  get notificacionPush(){
    return this.storageSrv.notificacionPush
    
  }
  set notificacionPush(notificaciones:any){
    this.storageSrv.notificacionPush = notificaciones
  }

}
