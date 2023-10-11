import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';
import { common } from 'src/environments/environment.common';

@Injectable({
  providedIn: 'root',
})
export class ConsultaMesaEntradaService {
  constructor(private http: HttpClient) { }

  openModal: boolean = false;

  OpenModal() {
    this.openModal = true;
  }

  closeModal() {
    this.openModal = false;
  }

  showModal() {
    return this.openModal
  }


  private ConsultaTramite = new BehaviorSubject<any>(null);
  tramite$ = this.ConsultaTramite.asObservable();
  fecha: any
  aforo: any
  mesa: any
  /** @function
  * obtiene lo datos del formulario fecha, aforo, mesa y luego devuleve
  * un petición http de consulta mesa de mesa de entrada
  */

  setConsulta(fecha: any, aforo: any, mesa: any) {
    this.fecha = fecha
    this.aforo = aforo
    this.mesa = mesa
    this.getConsulta()
  }

  getConsulta() {
    const url = `${common.api.consulta}?fecha=${this.fecha}&aforo=${this.aforo}&mesa=${this.mesa}`
    return this.http.get(url).subscribe((data) => {
      this.ConsultaTramite.next(data)
    })
  }
}