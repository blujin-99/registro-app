import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/shared/services/app.service';

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

  constructor(public appSrv: AppService) {}

  ngOnInit(): void {
    this.appSrv.getNombreMinisterio().subscribe({
      next: (res) => (this.ministerio = res.ministerio),
      error: (error) =>
        console.error('Error al recuperar nombre del ministerio'),
    });
  }
}
