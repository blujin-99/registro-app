import { CommonModule } from '@angular/common';
import { Component, DoCheck, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements DoCheck {
  /**
   * boolean para controlar si muestra la foto de perfil
   * del usuario o no
   */
  showFoto = false;

  /**
   * Guardo la información del usuario
   */
  user: any;
  constructor(private userSrv: UserService) {}
  //Cuando se logea, si el usuario tiene foto de perfil la muestra sino
  //utiliza el avatar por defecto
  ngDoCheck(): void {
    this.user = this.userSrv.getUser();

    if (this.user && this.user.foto) {
      this.showFoto = true;
    }
  }
}
