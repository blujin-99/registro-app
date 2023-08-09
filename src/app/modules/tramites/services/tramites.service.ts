import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import {
  ICategoria,
  IEstadoExcedentes,
  IEstadoTramite,
  IJurisdiccion,
  ITramiteServicio,
} from 'src/app/core/models/tramites.interfaces';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class TramitesService {
  categorias: ICategoria[] = [];
  estadoTramite: IEstadoTramite[] = [];
  estadoTasas: IEstadoTramite[] = [];
  jurisdicciones: IJurisdiccion[] = [];
  estadoExcedentes: IEstadoExcedentes[] = [];

  constructor(private http: HttpClient) {}

  /**
   * Obtiene una lista de todos los tipos de tramites habilitados
   */
  getCategorias() {
    this.http
      .get<ICategoria[]>(`${environment.categoria}`)
      .pipe(
        catchError((error) => {
          console.error(
            `Ocurrió un error al recuperar la lista de categorías ${error}`
          );

          return of([]);
        })
      )
      .subscribe({
        next: (res) => (this.categorias = res),
      });
  }

  /**
   * Obtiene una lista de los estados de los tramites
   */
  getEstadoTramite() {
    this.http
      .get<IEstadoTramite[]>(`${environment.estadoTramite}`)
      .pipe(
        catchError((error) => {
          console.error(
            `Ocurrió un error al recuperar la lista de categorías ${error}`
          );

          return of([]);
        })
      )
      .subscribe({
        next: (res) => (this.estadoTramite = res),
      });
  }

  /**
   * Obtiene una lista de los estados de las tasas
   */
  getEstadoTasas() {
    this.http
      .get<IEstadoTramite[]>(`${environment.estadoTasas}`)
      .pipe(
        catchError((error) => {
          console.error(
            `Ocurrió un error al recuperar la lista de categorías ${error}`
          );

          return of([]);
        })
      )
      .subscribe({
        next: (res) => (this.estadoTasas = res),
      });
  }

  /**
   * Obtiene una lista de los estados de las tasas
   */
  getJurisdiccion() {
    this.http
      .get<IJurisdiccion[]>(`${environment.jurisdiccion}`)
      .pipe(
        catchError((error) => {
          console.error(
            `Ocurrió un error al recuperar la lista de categorías ${error}`
          );

          return of([]);
        })
      )
      .subscribe({
        next: (res) => (this.jurisdicciones = res),
      });
  }

  /**
   * Obtiene una lista de los estados excedentes
   */
  getEstadoExcedentes() {
    this.http
      .get<IEstadoExcedentes[]>(`${environment.estadoExcedentes}`)
      .pipe(
        catchError((error) => {
          console.error(
            `Ocurrió un error al recuperar la lista de categorías ${error}`
          );

          return of([]);
        })
      )
      .subscribe({
        next: (res) => (this.estadoExcedentes = res),
      });
  }

  //TODO: Cambiar a observable

  /**
   * Obtiene una lista de los tramites / servicios disponibles apartir de lo que selecciono en categoria tramite
   * @param id de opcion de categoria tramite seleccionada
   */
  getTramiteServicio(id: number): Observable<ITramiteServicio[]> {
    return this.http.get<ITramiteServicio[]>(
      `${environment.tramiteServicio}/${id}`
    );
  }
}
