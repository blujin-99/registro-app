import { Component } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list-sidebar',
  templateUrl: './list-sidebar.component.html',
  styleUrls: ['./list-sidebar.component.scss'],
})
export class ListSidebarComponent {
  // Controla si muestra u oculta el sideBar
  sidebarOpen = false;

  // Se guardan los datos del usuario
  user: any;

  // Controla si se muestra la foto de perfil del usuario o no
  showFoto: any;

  constructor(public layoutSrv: LayoutService, public userSrv: UserService) {}

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
}
