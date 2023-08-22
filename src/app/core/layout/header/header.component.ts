import {
  Component,
  DoCheck,
  Input,
  OnInit,
  effect,
  signal,
} from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/shared/services/app.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, DoCheck {
  /**
   * Espera el nombre del proyecto
   */
  @Input() titulo: string = '';

  /**
   * Recibe el nombre del ministerio por rest
   */
  @Input() ministerio!: Observable<string>; //'Ministerio de Gobierno, Justicia y Derechos Humanos';

  /**
   * boolean para controlar si muestra la foto de perfil
   * del usuario o no
   */
  showFoto = false;

  /**
   * Guardo la información del usuario
   */
  user: any;

  constructor(private appSrv: AppService, public userSrv: UserService) {}

  ngOnInit(): void {
    this.appSrv.getNombreMinisterio().subscribe({
      next: (res) => (this.ministerio = res.ministerio),
      error: (error) =>
        console.error(`Error al recuperar nombre del ministerio: ${error}`),
    });
  }

  //Cuando se logea, si el usuario tiene foto de perfil la muestra sino
  //utiliza el avatar por defecto
  ngDoCheck(): void {
    this.user = this.userSrv.getUser();

    if (this.user && this.user.foto) {
      this.showFoto = true;
    }
  }
}
