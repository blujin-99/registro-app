import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Tramites } from 'src/app/core/mocks/tramites.mock';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TablaTramiteService {
  constructor(private http: HttpClient) {
    this.getTramites();
  }
  /**
   * @setFiltros si se obtienen los datos directamente del formulario sin la varible filter
   */

  // private filtrosTramite$ = new BehaviorSubject<any | undefined>(null)
  // filtros = this.filtrosTramite$.asObservable()

  // setFiltros(
  //   busqueda:string,
  //   categoria:string,
  //   estadoTramite:string,
  //   jurisdiccion:string,
  //   estadoTasas:string,
  //   estadoExcedentes:string,
  //   servicio:string)
  //   : void {
  //   let values = {
  //     busqueda: busqueda,
  //     categoria: categoria,
  //     estadoTramite:estadoTramite,
  //     jurisdiccion: jurisdiccion,
  //     estadoTasas: estadoTasas,
  //     estadoExcedentes: estadoExcedentes,
  //     servicio :servicio
  //   }
  //   this.filtrosTramite$.next(values)
  // }
  tramite = [];
  getTramites() {
    this.http
      .get<any>(`${environment.tramites}`)
      .pipe(
        catchError((error) => {
          console.error(`Ocurrió un error al recuperar los trámites`);
          return of([]);
        })
      )
      .subscribe({
        next: (res) => {
          this.tramite = res;
          return of(this.tramite);
        },
      });
  }

  getTablaPendientes(): Observable<any> {
    return of(this.tramite);
  }

  getTablaFinalizado(): Observable<any> {
    let finalizado = [
      {
        id: 1,
        tramite: 'Fotocopia',
        fechaPresentacion: '2022-06-07',
        numeroFormulario: 2022000052,
        jurisdiccion: 'SANTA FE',
        tasas: 'ACREDITACION PENDIENTE',
        excedentes: 'NO CORRESPONDE',
      },
      {
        id: 2,
        tramite: 'Fotocopia',
        fechaPresentacion: '2022-06-08',
        numeroFormulario: 2022000053,
        jurisdiccion: 'SANTA FE',
        tasas: 'ACREDITACION PENDIENTE',
        excedentes: 'NO CORRESPONDE',
      },
      {
        id: 3,
        tramite: 'Fotocopia',
        fechaPresentacion: '2022-06-09',
        numeroFormulario: 2022000054,
        jurisdiccion: 'SANTA FE',
        tasas: 'ACREDITACION PENDIENTE',
        excedentes: 'NO CORRESPONDE',
      },
      {
        id: 4,
        tramite: 'Fotocopia',
        fechaPresentacion: '2022-06-10',
        numeroFormulario: 2022000055,
        jurisdiccion: 'SANTA FE',
        tasas: 'ACREDITACION PENDIENTE',
        excedentes: 'NO CORRESPONDE',
      },
      {
        id: 5,
        tramite: 'Fotocopia',
        fechaPresentacion: '2022-06-11',
        numeroFormulario: 2022000056,
        jurisdiccion: 'SANTA FE',
        tasas: 'ACREDITACION PENDIENTE',
        excedentes: 'NO CORRESPONDE',
      },
      {
        id: 6,
        tramite: 'Fotocopia',
        fechaPresentacion: '2022-06-12',
        numeroFormulario: 2022000057,
        jurisdiccion: 'SANTA FE',
        tasas: 'ACREDITACION PENDIENTE',
        excedentes: 'NO CORRESPONDE',
      },
    ];
    return of(finalizado);
  }

  getTableEntregado(): Observable<any> {
    let entregado = [
      {
        tipo_categoria_tramite: '',
        tipo_tramite: '',
        abreviatura: 'DH MODIFICACION',
        fechaPresentacion: '2023-07-18',
        codigo_tramite: 'AVER2022000093	',
        jur: 'SANTA FE',
        tasas: 'ACREDITACION PENDIENTE',
        excedentes: 'NO CORRESPONDE',
        estado: 'ENTREGADO',
      },
      {
        tipo_categoria_tramite: '',
        tipo_tramite: '',
        abreviatura: 'DH INSCRIPCION',
        fechaPresentacion: '2022-06-15',
        codigo_tramite: '	AVER2022000041',
        jur: 'ROSARIO',
        tasas: 'NO PAGADO',
        excedentes: 'NO CORRESPONDE',
        estado: 'ENTREGADO',
      },
      {
        tipo_categoria_tramite: '',
        tipo_tramite: '',
        abreviatura: 'DH INSCRIPCION',
        fechaPresentacion: '2022-06-28',
        codigo_tramite: 'AVER2022000051',
        jur: 'SANTA FE',
        tasas: 'ACREDITACION PENDIENTE',
        excedentes: 'NO CORRESPONDE',
        estado: 'ENTREGADO',
      },
      {
        tipo_categoria_tramite: '',
        tipo_tramite: '',
        abreviatura: 'DH MODIFICACION',
        fechaPresentacion: '2022-10-24',
        codigo_tramite: 'AVER2022000092',
        jur: 'SANTA FE',
        tasas: 'ACREDITADO',
        excedentes: 'NO CORRESPONDE',
        estado: 'RECIBIDO 24/10/2022',
      },
      {
        tipo_categoria_tramite: '',
        tipo_tramite: '',
        abreviatura: 'EXTINCIÓN DE USUFRUCTO',
        fechaPresentacion: '2022-08-09',
        codigo_tramite: '2022000032',
        jur: 'SANTA FE',
        tasas: 'ACREDITADO',
        excedentes: 'NO CORRESPONDE',
        estado: 'RECIBIDO 09/08/2022',
      },
      {
        tipo_categoria_tramite: '',
        tipo_tramite: '',
        abreviatura: 'FOTOCOPIA',
        fechaPresentacion: '2021-11-09',
        codigo_tramite: '2021000417',
        jur: 'SANTA FE',
        tasas: 'ACREDITACION PENDIENTE',
        excedentes: 'ACREDITADO',
        estado: 'RECIBIDO 11/03/2022',
      },
      {
        tipo_categoria_tramite: '',
        tipo_tramite: '',
        abreviatura: 'CONSULTA',
        fechaPresentacion: '2021-10-13',
        codigo_tramite: '2021000382',
        jur: 'ROSARIO',
        tasas: 'ACREDITACION PENDIENTE',
        excedentes: 'EXENTO',
        estado: 'RECIBIDO 15/06/2022',
      },
      {
        tipo_categoria_tramite: '',
        tipo_tramite: '',
        abreviatura: 'BUSQ.PARTIDA',
        fechaPresentacion: '2021-06-07',
        codigo_tramite: '2021000285',
        jur: 'ROSARIO',
        tasas: 'EXENTO',
        excedentes: 'NO CORRESPONDE',
        estado: 'RECIBIDO 08/06/2021',
      },
      {
        tipo_categoria_tramite: '',
        tipo_tramite: '',
        abreviatura: 'BUSQ.PROPIETARIO',
        fechaPresentacion: '2023-07-18',
        codigo_tramite: '2021000284',
        jur: 'ROSARIO',
        tasas: 'ACREDITADO',
        excedentes: 'NO CORRESPONDE',
        estado: 'RECIBIDO 08/06/2021',
      },
      {
        tipo_categoria_tramite: '',
        tipo_tramite: '',
        abreviatura: 'BUSQ.PARTIDA',
        fechaPresentacion: '2023-07-18',
        codigo_tramite: '2023000945',
        jur: 'SANTA FE',
        tasas: 'ACREDITACION PENDIENTE',
        excedentes: 'NO CORRESPONDE',
        estado: 'OBSERVADO',
      },
      {
        tipo_categoria_tramite: '',
        tipo_tramite: '',
        abreviatura: 'BUSQ.PARTIDA',
        fechaPresentacion: '2023-07-18',
        codigo_tramite: '2023000945',
        jur: 'SANTA FE',
        tasas: 'ACREDITACION PENDIENTE',
        excedentes: 'NO CORRESPONDE',
        estado: 'OBSERVADO',
      },
    ];

    return of(entregado);
  }
}
