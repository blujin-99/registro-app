import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IEstadoExcedentes,
  IEstadoTasas,
  IEstadoTramite,
  IFiltros,
  IJurisdiccion,
  ITipoTramite,
  ITramite,
} from 'src/app/core/models/tramites.interfaces';

import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { OpcionesTramiteComponent } from 'src/app/shared/components/opciones-tramite/opciones-tramite.component';
import { environment } from 'src/environments/environment';
import { TramitesService as TramitesSrv } from 'src/app/shared/services/tramites.service';
import { BehaviorSubject } from 'rxjs';

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
  private errorSubject = new BehaviorSubject<any>(null)
  error$ = this.errorSubject.asObservable()
  env = environment;
  
  constructor(
    private http: HttpClient,
    private tramitesSrv:TramitesSrv,
    private _bottomSheet: MatBottomSheet,
    ) {}

  updateFiltros() {
    this.tramitesSrv.getFiltros()
      .subscribe({
        next: (res) => {
          this.categorias = res.tipoTramites;
          this.estadoTramite = res.estadoTramite;
          this.estadoTasas = res.estadoTasas;
          this.jurisdicciones = res.jurisdiccion;
          this.estadoExcedentes = res.estadoExcedente;
        },
        error: (error: HttpErrorResponse) => {
          let errorRest = {error:error, mensaje:'No se pudo enocntrar los datos de Filtro Búsqueda, intente más tarde' }
          this.errorSubject.next(errorRest)
        }
      });
  }

  showOptions(tramite: ITramite){
    this.tramitesSrv.getTramiteActions(tramite.codigo_tramite).subscribe({
      next: (actions) => {
        this._bottomSheet.open(OpcionesTramiteComponent, {
          data: actions,
        })
      }
    });
  }
}
