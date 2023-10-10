import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import {
  ICategoria,
  IEstadoExcedentes,
  IEstadoTasas,
  IEstadoTramite,
  IFiltros,
  IJurisdiccion,
  ITipoTramite,
  ITramite,
  ITramiteServicio,
} from 'src/app/core/models/tramites.interfaces';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class TramitesService {
  tramites!:  ITramite[];
  categorias!: ITipoTramite[];
  estadoTramite!: IEstadoTramite[];
  estadoTasas!: IEstadoTasas[];
  jurisdicciones!: IJurisdiccion[];
  estadoExcedentes!: IEstadoExcedentes[];

  constructor(private http: HttpClient) {}

  getFiltros() {
    this.http
      .get<IFiltros>(environment.apiBase + environment.api.tramitesFiltros)
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
    return this.http.get<ITramite[]>(environment.apiBase + environment.api.tramites);
  }

}
