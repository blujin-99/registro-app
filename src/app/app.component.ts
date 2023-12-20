import { Component, OnInit, computed, effect } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { AppService } from './core/services/app.service';
import { LayoutService } from './core/services/layout.service';
import { MessagingService } from './core/services/messaging.service';
import { UserService } from './core/services/user.service';
import { AuthStatus } from './core/models';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public finishedAuthCheck = computed<boolean>(() => {
    if (this.userSrv.authStatus() === AuthStatus.checking) {
      return false;
    }
    return true;
  });

  public authStatusChangedEffect = effect(() => {
    if (this.userSrv.authStatus() === AuthStatus.authenticated) {
      if (this.URl) {
        this.router.navigateByUrl(this.URl);
        localStorage.removeItem('url');
      }
    } else if (this.userSrv.authStatus() === AuthStatus.notAuthenticated) {
      this.userSrv.login();
    }
  });

  get URl() {
    return localStorage.getItem('url');
  }

  constructor(
    public layoutSrv: LayoutService,
    public appSrv: AppService,
    private messagingSrv: MessagingService,
    private userSrv: UserService,
    private router: Router
  ) {}

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
