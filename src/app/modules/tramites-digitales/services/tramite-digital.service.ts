import { Injectable } from '@angular/core';
import { IModulo } from '../interfaces/modulo';
import { ITipoTramite } from '../interfaces/tipo-tramite';
import { HttpClient } from '@angular/common/http';
import { TramitesService } from 'src/app/shared/services/tramites.service';
import { Observable } from 'rxjs';
import { IParcialInhibiciones } from '../interfaces/parcial-Inhibiciones';

@Injectable({
  providedIn: 'root',
})
export class TramiteDigitalService {
  modulo1: IModulo;
  modulo2: IModulo;
  modulo3: IModulo;
  url: string = '';
  tipoTramite?: ITipoTramite;

  constructor(private http: HttpClient, private tramiteSrv: TramitesService) {
    this.modulo1 = {
      id: 1,
      pk: 'dominio',
      nombre: 'Dominio',
      abreviatura: 'Dominio',
      descripcion: 'Dominio',
    };
    this.modulo2 = {
      id: 2,
      pk: 'gravamenes',
      nombre: 'Gravámenes',
      abreviatura: 'Gravámenes',
      descripcion: 'Gravámenes',
    };
    this.modulo3 = {
      id: 3,
      pk: 'inhibiciones',
      nombre: 'Inhibiciones',
      abreviatura: 'Inhibiciones',
      descripcion: 'Inhibiciones',
    };
  }

  getTipoTramite(tramitepk: string): void {
    let tiposTramite: any;
    this.tramiteSrv.getTipoTramites().subscribe({
      next: (res) => {
        tiposTramite = res;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        this.tipoTramite = tiposTramite.find(
          (tramite: ITipoTramite) => tramite.pk === tramitepk
        );

        console.log(this.tipoTramite);
      },
    });
  }

  getTipoTramites(): Observable<ITipoTramite[]> {
    return this.tramiteSrv.getTipoTramites();
  }

  newTramite(param: any) {
    return this.tramiteSrv.newTramite(param);
  }
  editTramite(idTramite: string, param: any) {
    return this.tramiteSrv.editTramite(idTramite, param);
  }

  deleteTramite(idTramite: string) {
    return this.tramiteSrv.deleteTramite(idTramite);
  }

  searchTramite(idTramite: string): Observable<any> {
    return this.tramiteSrv.searchTramite(idTramite);
  }
}
