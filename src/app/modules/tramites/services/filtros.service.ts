import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FiltrosService {
  constructor(private http: HttpClient) {}

  /**
   *  @observable filtrosSubjesct escucha constantemente los datos filtrados
   *  y guarda los datos como un array
   */

  private filtrosSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
    []
  );
  filtros$: Observable<any[]> = this.filtrosSubject.asObservable();

  busqueda: any;
  
  private datosTabla = new BehaviorSubject<any[]>([])
  tabla$ = this.datosTabla.asObservable()
  finalizado: any[] = [];
  entregado: any[] = [];
  pendiente: any[] = [];
  tablaSinFiltro: any[] = [];

  /**
   *
   * @fucntioon SendFiltros obtine los fltros y se guardan en una observable
   */
  sendFiltros(filtros: any[]): void {
    this.filtrosSubject.next(filtros);
  }

  /**
   * @fucntioon setTababla()  trae y guarda los datos de la tabla
   */
  setTabla(tablaValues: any[]) {
    this.datosTabla.next(tablaValues)
  }

  setTablasinFiltro(tabla: any[]): void {
    this.tablaSinFiltro = tabla;
  }

  /**
   * @function getTablaFiltrada() devuleve un array de los datos de la tabla
   * con la información filtrada
   */
  getTablaFiltrada(): any[] {
    const filtrosRow = this.filtrosSubject.value;
    //this.datosTabla se convirtió en observable la cual va a ser escuchada por los otros métodos
    return this.datosTabla.value.filter((fila: any) => {
      return filtrosRow.every((filtro) => {
        if (filtro.length != 0) {
          if (filtro.busqueda && filtro.busqueda.descripcion) {
            // Si hay un valor de búsqueda por número de tramite en los filtros, usarlo para buscar por los últimos dígitos
            return (
              fila.codigo_tramite.endsWith(filtro.busqueda.descripcion) ||
              fila.TipoTramiteServicio.nombre === filtro.nombre ||
              fila.EstadoTasas.descripcion === filtro.descripcion ||
              fila.EstadoExcedentes.descripcion === filtro.descripcion ||
              fila.Jurisdiccion.nombre === filtro.nombre ||
              fila.EstadoTramite.descripcion === filtro.descripcion
            );
          } else {
            // Si no hay valor de búsqueda de número de tramite, aplicar otros filtros
            return (
              fila.TipoTramiteServicio.nombre === filtro.nombre ||
              fila.EstadoTasas.descripcion === filtro.descripcion ||
              fila.EstadoExcedentes.descripcion === filtro.descripcion ||
              fila.Jurisdiccion.nombre === filtro.nombre ||
              fila.EstadoTramite.descripcion === filtro.descripcion
            );
          }
        } else {
          this.datosTabla.next(this.tablaSinFiltro)
        }
      });
    });
  }

  //convierto las tres tablas en observable de modo que escuchen cada cambio de los tramites
  //y se filtren los datos en las respectivas tablas

  getFinalizado(): Observable<any[]>{
    return this.tabla$.pipe(
      map(() => {
        const tablaFiltrada = this.getTablaFiltrada()
        return tablaFiltrada.filter((finalizado) =>{
          return (
            finalizado.EstadoTramite.descripcion === 'ENTREGADO'
          )
        })
      }
    ))
  }

  getPendiente(): Observable<any[]> {
    return this.tabla$.pipe(
      map(() => {
        const tablaFiltrada = this.getTablaFiltrada()
        return tablaFiltrada.filter((pendiente) =>{
          return (
            pendiente.EstadoTramite.descripcion === 'NO PRESENTADO' ||
            pendiente.EstadoTramite.descripcion === 'FINALIZADO CON EXCEDENTES' ||
            pendiente.EstadoTramite.descripcion === 'OBSERVADO'
          )
        })
      }
    ))
  }

  getEntregado(): Observable<any[]> {
    return this.tabla$.pipe(
      map(() => {
        const tablaFiltrada = this.getTablaFiltrada()
        return tablaFiltrada.filter((entregado) =>{
          return (   entregado.EstadoTramite.descripcion === 'RECIBIDO' ||
          entregado.EstadoTramite.descripcion === 'PRESENTADO' ||
          entregado.EstadoTramite.descripcion === 'FINALIZADO'
          )
        })
      }
    ))
  }
}
