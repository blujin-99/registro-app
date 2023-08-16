import { Injectable } from '@angular/core';
import { Observable, finalize, of } from 'rxjs';
import { Tramites } from 'src/app/core/mocks/tramites.mock';

@Injectable({
  providedIn: 'root',
})
export class TablaTramiteService {
  constructor() {}

  getTablaPendientes(): Observable<any> {
    return of(Tramites.rows);
  }

  getTablaFinalizado() : Observable<any> {
    let finalizado = [
      {
        id: 1,
        tramite:'Fotocopia',
        fechaPresentacion:'2022-06-07',
        numeroFormulario:2022000052,
        jurisdiccion:'SANTA FE',
        tasas: 'ACREDITACION PENDIENTE',
        excedentes : 'NO CORRESPONDE'
      },
      {
        id: 2,
        tramite:'Fotocopia',
        fechaPresentacion:'2022-06-08',
        numeroFormulario:2022000053,
        jurisdiccion:'SANTA FE',
        tasas: 'ACREDITACION PENDIENTE',
        excedentes : 'NO CORRESPONDE'
      },
      {
        id: 3,
        tramite:'Fotocopia',
        fechaPresentacion:'2022-06-09',
        numeroFormulario:2022000054,
        jurisdiccion:'SANTA FE',
        tasas: 'ACREDITACION PENDIENTE',
        excedentes : 'NO CORRESPONDE'
      },
      {
        id: 4,
        tramite:'Fotocopia',
        fechaPresentacion:'2022-06-10',
        numeroFormulario:2022000055,
        jurisdiccion:'SANTA FE',
        tasas: 'ACREDITACION PENDIENTE',
        excedentes : 'NO CORRESPONDE'
      },
      {
        id: 5,
        tramite:'Fotocopia',
        fechaPresentacion:'2022-06-11',
        numeroFormulario:2022000056,
        jurisdiccion:'SANTA FE',
        tasas: 'ACREDITACION PENDIENTE',
        excedentes : 'NO CORRESPONDE'
      },
      {
        id: 6,
        tramite:'Fotocopia',
        fechaPresentacion:'2022-06-12',
        numeroFormulario:2022000057,
        jurisdiccion:'SANTA FE',
        tasas: 'ACREDITACION PENDIENTE',
        excedentes : 'NO CORRESPONDE'
      }
    ]
    return of(finalizado)
  }

  getTableEntregado() : Observable<any>{
    let entregado = [
      {
        id: 1,
        tramite:'BUSQ.PARTIDA',
        fechaPresentacion:'2023-07-18',
        numeroFormulario:2023000945,
        jurisdiccion:'SANTA FE',
        tasas: 'ACREDITACION PENDIENTE',
        excedentes : 'NO CORRESPONDE'
      },
      {
        id: 2,
        tramite:'	BUSQ.PROPIETARIO',
        fechaPresentacion:'2023-07-19',
        numeroFormulario:2023000946,
        jurisdiccion:'ROSARIO',
        tasas: 'ACREDITACION PENDIENTE',
        excedentes : 'NO CORRESPONDE'
      },
      {
        id: 3,
        tramite:'FOTOCOPIA',
        fechaPresentacion:'2023-07-20',
        numeroFormulario:2023000947,
        jurisdiccion:'SANTA FE',
        tasas: 'EXENTO',
        excedentes : 'NO CORRESPONDE'
      },
      {
        id: 4,
        tramite:'BUSQ.PARTIDA',
        fechaPresentacion:'2023-07-21',
        numeroFormulario:2023000948,
        jurisdiccion:'ROSARIO',
        tasas: 'ACREDITADO',
        excedentes : 'NO CORRESPONDE'
      },
      {
        id: 5,
        tramite:'CERT',
        fechaPresentacion:'2023-07-22',
        numeroFormulario:2023000949,
        jurisdiccion:'SANTA FE',
        tasas: 'NO PAGADO',
        excedentes : 'NO CORRESPONDE'
      },
      {
        id: 6,
        tramite:'CONSULTA',
        fechaPresentacion:'2023-07-23',
        numeroFormulario:2023000950,
        jurisdiccion:'ROSARIO',
        tasas: 'ACREDITADO',
        excedentes : 'NO CORRESPONDE'
      },
    ]

    return of(entregado)
  }
}
