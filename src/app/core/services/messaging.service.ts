import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  mensaje = new BehaviorSubject<any>(null);

  notification = new BehaviorSubject<any[]>([])
  noti$: Observable<any[]> = this.notification.asObservable()
  private sendToken = environment.apiBase+environment.api.notificationUrl
  token : string = ''

  counter: string[] = []

  constructor(private AFMessaging: AngularFireMessaging, private http: HttpClient) { }

  requestPermission() {
    this.AFMessaging.requestToken
      .pipe(
        switchMap((token) => {
          if (token) {
            this.token = token;
            // Devuelve la solicitud HTTP como una nueva Observable
            console.log(token)
            return this.http.post(this.sendToken, { token });
          }
          // Si no hay token, simplemente devuelve un observable vacío
          return of(null);
        })
      )
      .subscribe(
        (response) => {
          // Maneja la respuesta del servidor si es necesario
          console.log('Respuesta del servidor:', response);
        },
        (error) => {
          // Maneja errores si la solicitud no se completa con éxito
          console.error('Error en la solicitud POST:', error);
        }
      );
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


  checkNotification() {
    /**
        * obtengo los datos de las notificaciones que se guardaron en el localStorage
        */
    const count = localStorage.getItem('notifications')
    if (count) {
      /**
      * lo convierto en formato JSON
      */
      const counter = JSON.parse(count)
      /**
     * verifico si viene un array de objetos, sino, lo convierte en un array con objetos
     */
      this.counter = Array.isArray(counter) ? counter : [];
      this.notification.next(Array.isArray(counter) ? counter : [])
    }
    /**
    * cuento cuantos elementos hay en el array y lo devuelvo
    */
    return this.counter.length
  }

  deleteItem(id: number){
    let storage = localStorage.getItem('notifications')
    if(storage){
      const dataStorage = JSON.parse(storage)
      dataStorage.splice(id,1)
      console.log(dataStorage)
      localStorage.setItem('notifications',JSON.stringify(dataStorage))
    }
  }
}
