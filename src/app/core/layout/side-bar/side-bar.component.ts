import { CommonModule } from '@angular/common';
import { Component, DoCheck } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AvatarComponent } from 'src/app/shared/components/avatar/avatar.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogLogeoComponent } from 'src/app/shared/components/dialog-logeo/dialog-logeo.component';

@Component({
  standalone: true,
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  imports: [
    RouterModule,
    CommonModule,
    AvatarComponent,
    MaterialModule,
    MatDialogModule,
  ],
})
export class SideBarComponent implements DoCheck {
  // Controla si muestra u oculta el sideBar
  sidebarOpen = false;

  // Se guardan los datos del usuario
  user: any;

  // Controla si se muestra la foto de perfil del usuario o no
  showFoto: any;

  constructor(
    public userSrv: UserService,
    public dialog: MatDialog,
    private router: Router
  ) {}
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

  /**
   * Si no esta logeado abre un modal para que inicie sesion
   * @param ruta a la que quiere acceder
   */
  openDialog(ruta: string): void {
    if (this.user) {
      this.router.navigateByUrl(ruta);
    } else {
      this.dialog.open(DialogLogeoComponent, {
        width: '380px',
        enterAnimationDuration: '0ms',
        exitAnimationDuration: '0ms',
      });
    }
  }
}
