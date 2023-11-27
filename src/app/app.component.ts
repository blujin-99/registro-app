import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { AppService } from './core/services/app.service';
import { LayoutService } from './core/services/layout.service';
import { MessagingService } from './core/services/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    public layoutSrv: LayoutService,
    public appSrv: AppService,
    private messagingSrv : MessagingService
    ){}

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


    initFlowbite();
  }
}
