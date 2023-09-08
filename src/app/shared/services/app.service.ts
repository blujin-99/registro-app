import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { IAPP } from 'src/app/core/models/app.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  app: IAPP = {
    Ministerio: environment.app.ministerio,
    Secretaria: environment.app.secretaria,
    Nombre: environment.app.nombre
  };

  constructor(private http: HttpClient) {
    this.init();
  }

  init() {
    if (!this.app.Version) {
      this.http.get<IAPP>(environment.app.endPoint).subscribe({
        next: (res) => (this.app = res)
      });
    }
  }
}
