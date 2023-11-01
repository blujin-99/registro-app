import {
  Component,
  DoCheck,
  Input,
  effect,
  signal,
  HostListener,
} from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';
import { UserService } from '../../services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements DoCheck {
  /**
   * Espera el nombre del proyecto
   */
  @Input() titulo: string = '';
  open = false;

  // Se guardan los datos del usuario
  user: any;

  // Controla si se muestra la foto de perfil del usuario o no
  showFoto: any;

  isDesktop: boolean = false;

  idCiudadana = environment.idCiudadanaURL + environment.cas.idciudadana;

  constructor(public appSrv: AppService, public userSrv: UserService) {
    this.isDesktop = window.innerWidth >= 768;
  }

  //Cuando se logea, si el usuario tiene foto de perfil la muestra sino
  //utiliza el avatar por defecto
  ngDoCheck(): void {
    this.user = this.userSrv.getUserCas();

    /**
     * Si el usuario esta logeado y tiene foto de perfil
     * muestra la foto sino muestra un avatar default
     */
    if (this.user.foto) {
      this.showFoto = true;
    }
  }

  /**
   * Redirecciona al oauth2
   */
  login() {
    this.userSrv.login();
  }

  /**
   * Limpia el localStorage
   * Y te redirecciona al inicio
   */
  logout() {
    this.userSrv.logout();
    // window.location.replace('http://localhost:4200/inicio');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktop = window.innerWidth >= 768;
  }

  openSidenav() {
    this.open = !this.open;
  }
}
