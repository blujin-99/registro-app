import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Tramites } from 'src/app/core/mocks/tramites.mock';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

import { BehaviorSubject } from 'rxjs';
import { common } from 'src/environments/environment.common';

@Injectable({
  providedIn: 'root',
})
export class TablaTramiteService {
  constructor(private http: HttpClient) {
    this.getTramites();
  }

  tramite = [];
  getTramites() {
    this.http
      .get<any>(environment.api + common.api.tramite)
      .pipe(
        catchError((error) => {
          console.error(`Ocurrió un error al recuperar los trámites`);
          return of([]);
        })
      )
      .subscribe({
        next: (res) => {
          this.tramite = res;
          return of(this.tramite);
        },
      });
  }

  getTablaPendientes(): Observable<any> {
    return this.http.get(environment.api + common.api.tramite);
  }

  getTablaFinalizado(): Observable<any> {
    return this.http.get(environment.api + common.api.tramite);
  }

  getTableEntregado(): Observable<any> {
    return this.http.get(environment.api + common.api.tramite);
  }
}
