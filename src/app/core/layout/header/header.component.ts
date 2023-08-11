import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/shared/services/app.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  /**
   * Espera el nombre del proyecto
   */
  @Input() titulo: string = '';

  /**
   * Recibe el nombre del ministerio por rest
   */
  @Input() ministerio!: Observable<string>; //'Ministerio de Gobierno, Justicia y Derechos Humanos';

  showFoto: boolean = false;

  constructor(public appSrv: AppService, public userSrv: UserService) {}

  ngOnInit(): void {
    if (!this.userSrv.getUser() && !this.userSrv.getUser()?.foto) {
      this.showFoto = false;
    } else {
      this.showFoto = true;
    }

    this.appSrv.getNombreMinisterio().subscribe({
      next: (res) => (this.ministerio = res.ministerio),
      error: (error) =>
        console.error(`Error al recuperar nombre del ministerio: ${error}`),
    });
  }
}
