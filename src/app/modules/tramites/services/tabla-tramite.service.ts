import { Injectable } from '@angular/core';
import { Observable, finalize, of } from 'rxjs';
import { Tramites } from 'src/app/core/mocks/tramites.mock';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TablaTramiteService {
  constructor() {}
  
  private filtrosTramite$ = new BehaviorSubject<any | undefined>(null)
  filtros = this.filtrosTramite$.asObservable()
  
  setFiltros(
    busqueda:string,
    categoria:string,
    estadoTramite:string,
    jurisdiccion:string,
    estadoTasas:string,
    estadoExcedentes:string,
    servicio:string) 
    : void {
    let values = {
      busqueda: busqueda,
      categoria: categoria,
      estadoTramite:estadoTramite,
      jurisdiccion: jurisdiccion,
      estadoTasas: estadoTasas,
      estadoExcedentes: estadoExcedentes,
      servicio :servicio
    }
    this.filtrosTramite$.next(values)
  }

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
        tipo_categoria_tramite: '',
        tipo_tramite:'',
        abreviatura:'BUSQ.PARTIDA',
        fechaPresentacion:'2023-07-18',
        numeroFormulario:2023000945,
        codigo_tramite: '2023000945',
        jur:'SANTA FE',
        tasas: 'ACREDITACION PENDIENTE',
        excedentes: 'NO CORRESPONDE',
        estado:'ENTRAGADO'
      },
      {
        tipo_categoria_tramite: '',
        tipo_tramite:'',
        abreviatura:'BUSQ.PARTIDA',
        fechaPresentacion:'2023-07-18',
        numeroFormulario:2023000945,
        codigo_tramite: '2023000945',
        jur:'SANTA FE',
        tasas: 'ACREDITACION PENDIENTE',
        excedentes: 'NO CORRESPONDE',
        estado:'ENTRAGADO'
      },
      {
        tipo_categoria_tramite: '',
        tipo_tramite:'',
        abreviatura:'BUSQ.PARTIDA',
        fechaPresentacion:'2023-07-18',
        numeroFormulario:2023000945,
        codigo_tramite: '2023000945',
        jur:'SANTA FE',
        tasas: 'ACREDITACION PENDIENTE',
        excedentes: 'NO CORRESPONDE',
        estado:'ENTRAGADO'
      },
      {
        tipo_categoria_tramite: '',
        tipo_tramite:'',
        abreviatura:'BUSQ.PARTIDA',
        fechaPresentacion:'2023-07-18',
        numeroFormulario:2023000945,
        codigo_tramite: '2023000945',
        jur:'SANTA FE',
        tasas: 'ACREDITACION PENDIENTE',
        excedentes: 'NO CORRESPONDE',
        estado:'ENTRAGADO'
      },
      {
        tipo_categoria_tramite: '',
        tipo_tramite:'',
        abreviatura:'BUSQ.PARTIDA',
        fechaPresentacion:'2023-07-18',
        numeroFormulario:2023000945,
        codigo_tramite: '2023000945',
        jur:'SANTA FE',
        tasas: 'ACREDITACION PENDIENTE',
        excedentes: 'NO CORRESPONDE',
        estado:'ENTRAGADO'
      },
      {
        tipo_categoria_tramite: '',
        tipo_tramite:'',
        abreviatura:'BUSQ.PARTIDA',
        fechaPresentacion:'2023-07-18',
        numeroFormulario:2023000945,
        codigo_tramite: '2023000945',
        jur:'SANTA FE',
        tasas: 'ACREDITACION PENDIENTE',
        excedentes: 'NO CORRESPONDE',
        estado:'ENTRAGADO'
      },
      {
        tipo_categoria_tramite: '',
        tipo_tramite:'',
        abreviatura:'BUSQ.PARTIDA',
        fechaPresentacion:'2023-07-18',
        numeroFormulario:2023000945,
        codigo_tramite: '2023000945',
        jur:'SANTA FE',
        tasas: 'ACREDITACION PENDIENTE',
        excedentes: 'NO CORRESPONDE',
        estado:'ENTRAGADO'
      },
      {
        tipo_categoria_tramite: '',
        tipo_tramite:'',
        abreviatura:'BUSQ.PARTIDA',
        fechaPresentacion:'2023-07-18',
        numeroFormulario:2023000945,
        codigo_tramite: '2023000945',
        jur:'SANTA FE',
        tasas: 'ACREDITACION PENDIENTE',
        excedentes: 'NO CORRESPONDE',
        estado:'ENTRAGADO'
      },
      {
        tipo_categoria_tramite: '',
        tipo_tramite:'',
        abreviatura:'BUSQ.PARTIDA',
        fechaPresentacion:'2023-07-18',
        numeroFormulario:2023000945,
        codigo_tramite: '2023000945',
        jur:'SANTA FE',
        tasas: 'ACREDITACION PENDIENTE',
        excedentes: 'NO CORRESPONDE',
        estado:'ENTRAGADO'
      },
      {
        tipo_categoria_tramite: '',
        tipo_tramite:'',
        abreviatura:'BUSQ.PARTIDA',
        fechaPresentacion:'2023-07-18',
        numeroFormulario:2023000945,
        codigo_tramite: '2023000945',
        jur:'SANTA FE',
        tasas: 'ACREDITACION PENDIENTE',
        excedentes: 'NO CORRESPONDE',
        estado:'ENTRAGADO'
      },
      {
        tipo_categoria_tramite: '',
        tipo_tramite:'',
        abreviatura:'BUSQ.PARTIDA',
        fechaPresentacion:'2023-07-18',
        numeroFormulario:2023000945,
        codigo_tramite: '2023000945',
        jur:'SANTA FE',
        tasas: 'ACREDITACION PENDIENTE',
        excedentes: 'NO CORRESPONDE',
        estado:'ENTRAGADO'
      },
    ]

    return of(entregado)
  }
}
