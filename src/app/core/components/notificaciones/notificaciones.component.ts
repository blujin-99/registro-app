import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../services/layout.service';
import { BehaviorSubject } from 'rxjs';
import { MessagingService } from '../../services/messaging.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.scss'],
})
export class NotificacionesComponent implements OnInit {


  constructor(public layoutSrv: LayoutService, public messageSrv : MessagingService) {}

  ngOnInit(): void {
    this.layoutSrv.mobileSidebar();
  }



  showNotificaciones() {
    this.layoutSrv.toggleListItems();
  }
}
