import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import {
  ICategoria,
  IEstadoExcedentes,
  IEstadoTramite,
  IJurisdiccion,
  ITramiteServicio,
} from 'src/app/core/models/tramites.interfaces';
import { common } from 'src/environments/environment.common';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class TramitesService {
  tramites: any;
  categorias: any;
  estadoTramite: any;
  estadoTasas: any;
  jurisdicciones: any;
  estadoExcedentes: any;

  url = environment.api;
  api = common.api;

  constructor(private http: HttpClient) {}

  getTramites() {
    this.http.get(this.url + this.api.tramite).subscribe({
      next: (res: any) => {
        this.tramites = res.tramites;
        this.categorias = res.tipoTramites;
        this.estadoTramite = res.estadoTramite;
        this.estadoTasas = res.estadoTasas;
        this.jurisdicciones = res.jurisdiccion;
        this.estadoExcedentes = res.estadoExcedente;
      },
    });
  }
}
