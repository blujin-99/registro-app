import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IAPP } from 'src/app/core/models/app.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  sistema = '';
  ministerio = '';
  url = environment;

  constructor(private http: HttpClient) {}

  /**
   * Guarda el nombre del ministerio y lo setea en el localStorage
   * Si hay un error setea el nombre que guardo en el localStorage
   */
  getNombreMinisterio() {
    this.http.get(this.url.appBase).subscribe({
      next: (res: any) => {
        this.ministerio = res.app.Ministerio;
        localStorage.setItem('nombreMinisterio', this.ministerio);

        // this.sistema = res.app.nombre;
        // localStorage.setItem('nombreSistema', this.sistema);
        console.log(res);
      },
      error: (error) => {
        console.error(error);

        const nombreMinisterioLS = localStorage.getItem('nombreMinisterio');

        if (nombreMinisterioLS) {
          this.ministerio = nombreMinisterioLS;
        } else {
          nombreMinisterioLS;
        }
      },
    });
  }
}
