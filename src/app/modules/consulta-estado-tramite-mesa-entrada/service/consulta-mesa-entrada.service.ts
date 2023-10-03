import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';
import { common } from 'src/environments/environment.common';

@Injectable({
  providedIn: 'root',
})
export class ConsultaMesaEntradaService {
  constructor(private http: HttpClient) {}

  private ConsultaTramite = new BehaviorSubject<any>(null);
  tramite$ = this.ConsultaTramite.asObservable();
  /** @function
   *  obtiene lo datos del formulario fecha, aforo, mesa y luego devuleve
   * un petición http de consulta mesa de mesa de entrada
   */

  setConsulta(fecha: any, aforo: any, mesa: any) {
    const consultaUrl = `${common.api.consulta}?fecha=${fecha}&aforo=${aforo}&mesa=${mesa}`;
    return this.http.get(consultaUrl);
  }

  /** @function
   *  SetResultadoTramite trae el resultado obtenido de la request y lo almacena
   * en una variable observable
   */

  setResultadoTramite(resultado: any): void {
    this.ConsultaTramite.next(resultado);
  }
}
