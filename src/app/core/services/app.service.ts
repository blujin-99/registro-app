import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  ministerio = '';
  version = '';
  env='';
  url = environment;
  baseStorage: string = environment.env+environment.app.key

  constructor(private http: HttpClient) {
    this.getNombreMinisterio();
  }

  /**
   * Guarda el nombre del ministerio y lo setea en el localStorage
   * Si hay un error setea el nombre que guardo en el localStorage
   */
  getNombreMinisterio() {
    this.http.get(this.url.apiBase).subscribe({
      next: (res: any) => {
        this.ministerio = res.Ministerio;
        this.version = res.Version;
        this.env = res.Enviroment;
        localStorage.setItem(this.baseStorage+'nombreMinisterio', this.ministerio);
      },
      error: (error) => {
        const nombreMinisterioLS = localStorage.getItem(this.baseStorage+'nombreMinisterio');

        if (nombreMinisterioLS) {
          this.ministerio = nombreMinisterioLS;
        } else {
          nombreMinisterioLS;
        }
      },
    });
  }
}
