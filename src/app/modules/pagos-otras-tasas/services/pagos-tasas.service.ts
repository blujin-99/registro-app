import { Injectable } from '@angular/core';

@Injectable()
export class PagosTasasService {
  oficina: any = [
    { id: 0, nombre: 'RAFAELA' },
    { id: 0, nombre: 'RECONQUISTA' },
    { id: 0, nombre: 'SANTA FE' },
    { id: 0, nombre: 'ROSARIO' },
    { id: 0, nombre: 'VENADO TUERTO' },
  ];

  getOficina(): void {}

  getTipoSolicitud() {}

  getConcepto() {}
}
