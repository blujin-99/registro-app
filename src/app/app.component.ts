import { Component, OnInit, computed, effect,ChangeDetectionStrategy } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { AppService } from './core/services/app.service';
import { LayoutService } from './core/services/layout.service';
import { MessagingService } from './core/services/messaging.service';
import { UserService } from './core/services/user.service';
import { AuthStatus } from './core/models';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from './core/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
      if (this.storageSrv.url) {
        this.router.navigateByUrl(this.storageSrv.url);
        this.storageSrv.remuvUrl()
      }
    } else if (this.userSrv.authStatus() === AuthStatus.notAuthenticated) {
      this.userSrv.login();
    }
  });

  constructor(
    public layoutSrv: LayoutService,
    public appSrv: AppService,
    private messagingSrv: MessagingService,
    private userSrv: UserService,
    private router: Router,
    private storageSrv: StorageService
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
