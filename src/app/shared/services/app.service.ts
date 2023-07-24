import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  nombre = 'Ministerio de Gobierno, Justicia, Derechos Humanos';

  constructor(private http: HttpClient) {}

  getNombreMinisterio(): Observable<any> {
    return this.http.get(environment.app.nombre);
  }
}
