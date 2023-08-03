import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PagosService {
  constructor() {}

  getPagos(): Observable<any> {
    let pagos = [
      {
        tramite: '2020207615',
        acreditacion: '	26/08/2020',
        estado: 'FINALIZADO',
        concepto: 'TASA',
        urgencia: 'NORMAL',
        importe: 1000,
      },
      {
        tramite: '2020207615',
        acreditacion: '	26/08/2020',
        estado: 'FINALIZADO',
        concepto: 'TASA',
        urgencia: 'NORMAL',
        importe: 1000,
      },
      {
        tramite: '2020207615',
        acreditacion: '	26/08/2020',
        estado: 'FINALIZADO',
        concepto: 'TASA',
        urgencia: 'NORMAL',
        importe: 1000,
      },
      {
        tramite: '2020207615',
        acreditacion: '	26/08/2020',
        estado: 'PRESENTADO',
        concepto: 'TASA',
        urgencia: 'NORMAL',
        importe: 1000,
      },
      {
        tramite: '2020207615',
        acreditacion: '	26/08/2020',
        estado: 'FINALIZADO',
        concepto: 'TASA',
        urgencia: 'NORMAL',
        importe: 1000,
      },
      {
        tramite: '2020207615',
        acreditacion: '	26/08/2020',
        estado: 'RECIBIDO',
        concepto: 'TASA',
        urgencia: 'NORMAL',
        importe: 1000,
      },
      {
        tramite: '2020207615',
        acreditacion: '	26/08/2020',
        estado: 'FINALIZADO',
        concepto: 'TASA',
        urgencia: 'NORMAL',
        importe: 1000,
      },
      {
        tramite: '2020207615',
        acreditacion: '	26/08/2020',
        estado: 'RECIBIDO',
        concepto: 'TASA',
        urgencia: 'NORMAL',
        importe: 1000,
      },
      {
        tramite: '2020207615',
        acreditacion: '	26/08/2020',
        estado: 'FINALIZADO',
        concepto: 'TASA',
        urgencia: 'NORMAL',
        importe: 1000,
      },
      {
        tramite: '2020207615',
        acreditacion: '	26/08/2020',
        estado: 'PRESENTADO',
        concepto: 'TASA',
        urgencia: 'NORMAL',
        importe: 1000,
      },
    ];
    return of(pagos);
  }
}
