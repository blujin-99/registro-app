import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  mensaje = new BehaviorSubject<any>(null)

  constructor(private AFMessaging : AngularFireMessaging) { }

  requestPermission(){
    this.AFMessaging.requestToken.subscribe(
      (token) => {
        console.log(token)
      },
      (error)=>{
        console.log('No se ha obtenido la suscripcion ',error)
      }
    )
  }


  reciveMessaging(){
    this.AFMessaging.messages.subscribe((smRecived) =>{
      console.log('has recibido un mensaje del Ministerio', smRecived)
      this.mensaje.next(smRecived)
    })
  }
}
