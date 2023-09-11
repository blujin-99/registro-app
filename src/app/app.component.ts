import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { MessagingService } from './core/services/messaging.service';
import { AppService } from './shared/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  mensajeRecibido : any
  constructor(private messageServ : MessagingService, public appSrv: AppService){

  }

  ngOnInit(): void {
    this.messageServ.requestPermission()
    this.messageServ.reciveMessaging()
    this.messageServ.mensaje.subscribe((datos) => {
      console.log(datos)
    })
  }
}
