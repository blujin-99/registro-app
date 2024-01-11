import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
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
  ITramiteServicio,
} from 'src/app/core/models/tramites.interfaces';
import { LoadingService } from 'src/app/core/services/loading.service';
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

  actions: IAction[] = [];
  actionsLoading = false;

  constructor(private http: HttpClient, private loadingSrv:LoadingService) {}

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
    this.actionsLoading = true;
    this.http
      .get<IAction[]>(`${this.env.apiBase}tramites/${id}/action`)
      .subscribe({
        next: (res) => {
          this.actions = res;
          this.actionsLoading = false;
          this.loadingSrv.close(); // Cerrar el modal después de cargar las acciones
        },
      });
  }
}
