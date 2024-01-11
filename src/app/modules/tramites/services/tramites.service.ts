import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IAction,
  ICategoria,
  IEstadoExcedentes,
  IEstadoTasas,
  IEstadoTramite,
  IFiltros,
  IJurisdiccion,
  ITipoTramite,
  ITramite,
} from 'src/app/core/models/tramites.interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TramitesService {
  tramites!: ITramite[];
  categorias!: ITipoTramite[];
  estadoTramite!: IEstadoTramite[];
  estadoTasas!: IEstadoTasas[];
  jurisdicciones!: IJurisdiccion[];
  estadoExcedentes!: IEstadoExcedentes[];

  env = environment;

  constructor(private http: HttpClient) {}

  getFiltros() {
    this.http
      .get<IFiltros>(this.env.apiBase + this.env.api.tramitesFiltros)
      .subscribe({
        next: (res) => {
          this.categorias = res.tipoTramites;
          this.estadoTramite = res.estadoTramite;
          this.estadoTasas = res.estadoTasas;
          this.jurisdicciones = res.jurisdiccion;
          this.estadoExcedentes = res.estadoExcedente;
        },
      });
  }

  getTramites() {
    return this.http.get<ITramite[]>(this.env.apiBase + this.env.api.tramites);
  }

  getTramiteActions(id: number) {
    return this.http.get<IAction[]>(this.env.apiBase + this.env.api.actions.replace("{codigo}", id.toString()));
  }
}
