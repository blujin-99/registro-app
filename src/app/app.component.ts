import { Component, OnInit, computed, effect } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { AppService } from './core/services/app.service';
import { LayoutService } from './core/services/layout.service';
import { MessagingService } from './core/services/messaging.service';
import { UserService } from './core/services/user.service';
import { AuthStatus } from './core/models';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public url = localStorage.getItem('url');

  public finishedAuthCheck = computed<boolean>(() => {
    if (this.userSrv.authStatus() === AuthStatus.checking) {
      return false;
    }
    return true;
  });

  public authStatusChangedEffect = effect(() => {
    switch (this.userSrv.authStatus()) {
      case AuthStatus.checking:
        return;
      case AuthStatus.authenticated:
        if (this.url) {
          this.router.navigateByUrl(this.url);
          // localStorage.removeItem('url');
        } else {
          this.router.navigateByUrl('/inicio');
        }
        return;
      case AuthStatus.notAuthenticated:
        this.userSrv.login();
        return;
    }
  });

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
