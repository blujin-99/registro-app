import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IAPP } from 'src/app/core/models/app.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  nombre: any;
  ministerio: any;
  ministerioCorto: any;

  constructor(private http: HttpClient) {
    this.init();
  }

  /**
   * Actualiza app desde el /mjydh-web/
   *
   */
  init() {
    this.http.get<any>(environment.appBase).subscribe({
      next: (res) => {
        this.nombre = res.nombre; //'Registro General de la Propiedad'
        this.ministerio = res.app.Ministerio; // 'Ministerio de Gobierno, Justicia y Derechos Humanos'
        this.ministerioCorto = res.app.MinisterioCorto; // 'MJ y DDHH'
      },
      error: (error) => {
        this.nombre =  environment.app.secretaria;
        this.ministerio = environment.app.ministerio ;
        this.ministerioCorto = environment.app.ministerioCorto;
        if (environment.env !='produccion') {
          console.error(error);
        }
      },
    });
  }
}
