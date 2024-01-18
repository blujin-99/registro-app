import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAction, IFiltros, ITramite } from 'src/app/core/models';
import { ITipoTramite } from 'src/app/modules/tramites-digitales/interfaces/tipo-tramite';
import { IParcialInhibiciones } from 'src/app/modules/tramites-digitales/interfaces/parcial-Inhibiciones';

@Injectable({
  providedIn: 'root',
})
export class TramitesService {
  env = environment;

  constructor(private http: HttpClient) {}

  /**
   * Retorna la lista de tipos de tramites de un usuario
   *
   * @returns Observable<IFiltros>
   */
  getFiltros(): Observable<IFiltros> {
    return this.http.get<IFiltros>(
      this.env.apiBase + this.env.api.tramitesFiltros
    );
  }

  /**
   * Retorna los tramites de un usuario
   *
   * @returns Observable<ITramite[]>
   */
  getTramites(): Observable<ITramite[]> {
    return this.http.get<ITramite[]>(this.env.apiBase + this.env.api.tramites);
  }

  /**
   * Retorna que acciones se puede ejecutar de un determintado tramite, para el usuario
   *
   * @param id ID de un trámite
   * @returns Observable<IAction[]>
   */
  getTramiteActions(id: number): Observable<IAction[]> {
    return this.http.get<IAction[]>(
      this.env.apiBase + this.env.api.actions.replace('{codigo}', id.toString())
    );
  }

  url: string = '';
  newTramite(param: any) {
    return this.http.post(this.env.apiBase + 'tramiteDigital', param);
  }
  editTramite(idTramite: string, param: any) {
    return this.http.put(
      this.env.apiBase + 'tramiteDigital/' + idTramite,
      param
    );
  }

  deleteTramite(idTramite: string) {
    return this.http.delete(this.env.apiBase + 'tramiteDigital/' + idTramite);
  }

  searchTramite(idTramite: string): Observable<IParcialInhibiciones | any> {
    return this.http.get(this.env.apiBase + 'test/tramiteDigital/' + idTramite);
  }

  getTipoTramites(): Observable<ITipoTramite[]> {
    return this.http.get<ITipoTramite[]>(
      this.env.apiBase + 'tramiteDigital/tipo/tramite'
    );
  }
}
