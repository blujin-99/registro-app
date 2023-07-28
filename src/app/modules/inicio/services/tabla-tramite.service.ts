import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TablaTramiteService {
  constructor() {}

  getTablaPendientes(): Observable<any> {
    let pendientes = [
      {
        id: 0,
        tramite: 'CERT',
        numeroFormulario: 2023000902,
        jurisdiccion: 'ROSARIO',
        tasas: 'NO PAGADO',
        excedentes: 'NO CORRESPONDE',
      },
      {
        id: 1,
        tramite: 'CERT',
        numeroFormulario: 2023000903,
        jurisdiccion: 'ROSARIO',
        tasas: 'NO PAGADO',
        excedentes: 'NO CORRESPONDE',
      },
      {
        id: 2,
        tramite: 'CERT',
        numeroFormulario: 2023000904,
        jurisdiccion: 'ROSARIO',
        tasas: 'NO PAGADO',
        excedentes: 'NO CORRESPONDE',
      },
      {
        id: 3,
        tramite: 'CERT',
        numeroFormulario: 2023000905,
        jurisdiccion: 'ROSARIO',
        tasas: 'NO PAGADO',
        excedentes: 'NO CORRESPONDE',
      },
      {
        id: 4,
        tramite: 'CERT',
        numeroFormulario: 2023000906,
        jurisdiccion: 'ROSARIO',
        tasas: 'NO PAGADO',
        excedentes: 'NO CORRESPONDE',
      },
      {
        id: 5,
        tramite: 'CERT',
        numeroFormulario: 2023000907,
        jurisdiccion: 'ROSARIO',
        tasas: 'NO PAGADO',
        excedentes: 'NO CORRESPONDE',
      },
      {
        id: 6,
        tramite: 'CERT',
        numeroFormulario: 2023000908,
        jurisdiccion: 'ROSARIO',
        tasas: 'NO PAGADO',
        excedentes: 'NO CORRESPONDE',
      },
    ];
    return of(pendientes);
  }
}
