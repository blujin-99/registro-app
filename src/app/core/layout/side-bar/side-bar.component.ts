import { CommonModule } from '@angular/common';
import { Component, DoCheck } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AvatarComponent } from 'src/app/shared/components/avatar/avatar.component';

@Component({
  standalone: true,
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  imports: [RouterModule, CommonModule, AvatarComponent],
})
export class SideBarComponent implements DoCheck {
  // Controla si muestra u oculta el sideBar
  sidebarOpen = false;

  // Se guardan los datos del usuario
  user: any;

  // Controla si se muestra la foto de perfil del usuario o no
  showFoto: any;

  constructor(public userSrv: UserService) {}
  //Cuando se logea, si el usuario tiene foto de perfil la muestra sino
  //utiliza el avatar por defecto
  ngDoCheck(): void {
    this.user = this.userSrv.getUser();

    /**
     * Si el usuario esta logeado y tiene foto de perfil
     * muestra la foto sino muestra un avatar default
     */
    if (this.user && this.user.foto) {
      this.showFoto = true;
    }
  }

  /**
   * Redirecciona al oauth2
   */
  login() {
    window.location.replace(
      'https://dsso.santafe.gob.ar/service-auth/oauth2.0/authorize?response_type=token&client_id=sso.santafe.gov.ar.5868506FJCKWEDG33&redirect_uri=http://localhost:4200/login'
    );
  }

  /**
   * Limpia el localStorage
   * Y te redirecciona al inicio
   */
  logout() {
    localStorage.clear();

    window.location.replace('http://localhost:4200/inicio');
  }

  /**
   * Muestra u oculta el sidebar
   */
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
