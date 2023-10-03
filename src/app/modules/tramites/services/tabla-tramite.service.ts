import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Tramites } from 'src/app/core/mocks/tramites.mock';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TablaTramiteService {
  constructor(private http: HttpClient) {
    this.getTramites();
  }
  /**
   * @setFiltros si se obtienen los datos directamente del formulario sin la varible filter
   */

  // private filtrosTramite$ = new BehaviorSubject<any | undefined>(null)
  // filtros = this.filtrosTramite$.asObservable()

  // setFiltros(
  //   busqueda:string,
  //   categoria:string,
  //   estadoTramite:string,
  //   jurisdiccion:string,
  //   estadoTasas:string,
  //   estadoExcedentes:string,
  //   servicio:string)
  //   : void {
  //   let values = {
  //     busqueda: busqueda,
  //     categoria: categoria,
  //     estadoTramite:estadoTramite,
  //     jurisdiccion: jurisdiccion,
  //     estadoTasas: estadoTasas,
  //     estadoExcedentes: estadoExcedentes,
  //     servicio :servicio
  //   }
  //   this.filtrosTramite$.next(values)
  // }
  tramite = [];
  getTramites() {
    this.http
      .get<any>(`${environment.tramites}`)
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
    return this.http.get(environment.tramites)
  }

  getTablaFinalizado(): Observable<any> {
    return this.http.get(environment.tramites)
   
  }

  getTableEntregado(): Observable<any> {
    return this.http.get(environment.tramites)
    
  }
}
