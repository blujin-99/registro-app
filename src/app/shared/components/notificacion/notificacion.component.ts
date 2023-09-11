import { Component, DoCheck, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.scss']
})
export class NotificacionComponent implements DoCheck,OnInit {
  user : any
  notification:  boolean = false
  permissionRequested : boolean = false
  constructor(
    // private messaging: AngularFireMessaging,
    private userServ: UserService
  ) 
   {
     
   }

  ngOnInit(): void {

  }
  
   token : string = ''
  //  requestPermission() {
  //   this.messaging.requestToken.subscribe(
  //     (token) => {
  //       if (token) {
  //         this.token = token
  //         console.log('token de suscripción' + ' ' + token)
  //       } else {
  //         alert('Entendido, no volveremos a preguntar')
  //       }
  //     }
  //   )
  // }

  // deletetoken() {
  //   this.messaging.getToken.subscribe(
  //     (token) => {
  //       if(token){
  //          this.messaging.deleteToken(token)
  //          .subscribe(
  //           () => console.log('eliminaste la suscripción de notificaciones')
  //          )
  //       }else{
  //         console.log('no se encontro suscripción')
  //       }
  //     }
  //   )
  // }

  ngDoCheck(): void {
    this.user = this.userServ
    
    // if(this.user.user && !this.permissionRequested){
    //    this.requestPermission()
    //    this.permissionRequested = true
    // }


    if(this.user.user){
      this.notification = true
    }else{
      this.notification = false
    }
  }

}
