import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  ministerio = '';
  version = '';
  env='';
  url = environment.apiBase;

  constructor(private http: HttpClient, private storageSrv:StorageService) {
    this.getNombreMinisterio();
  }

  /**
   * Guarda el nombre del ministerio y lo setea en el localStorage
   * Si hay un error setea el nombre que guardo en el localStorage
   */
  getNombreMinisterio() {
    this.http.get(this.url).subscribe({
      next: (res: any) => {
        this.ministerio = res.Ministerio;
        this.storageSrv.ministerio=res.Ministerio
        this.version = res.Version;
        this.env = res.Enviroment;
      },
      error: (error) => {
        const nombreMinisterioLS = this.storageSrv.ministerio;

        if (nombreMinisterioLS) {
          this.ministerio = nombreMinisterioLS;
        } else {
          nombreMinisterioLS;
        }
      },
    });
  }
}
