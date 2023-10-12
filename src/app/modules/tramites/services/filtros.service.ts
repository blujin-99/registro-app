import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FiltrosService {
  constructor(private http: HttpClient) { }

  /**
   *  @observable filtrosSubjesct escucha constantemente los datos filtrados
   *  y guarda los datos como un array
   */

  private filtrosSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
    []
  );
  filtros$: Observable<string[]> = this.filtrosSubject.asObservable();

  busqueda : any

  datosTabla: any[] = [];
  tablaSinFiltro: any []=[]

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
    this.datosTabla = tablaValues;
    this.tablaSinFiltro = tablaValues
  }

  getTabla(){
    return this.tablaSinFiltro
  }
  /**
   * @function getTablaFiltrada() devuleve un array de los datos de la tabla
   * con la información filtrada
   */
  getTablaFiltrada(): any[] {
    const filtrosRow = this.filtrosSubject.value;
    console.log(filtrosRow);
  
    return this.datosTabla.filter((fila: any) => {
      return filtrosRow.every((filtro) => {
        if(filtro.length != 0){
          if (filtro.busqueda && filtro.busqueda.descripcion) {
            // Si hay un valor de búsqueda en los filtros, usarlo para buscar por los primeros dígitos del número de trámite
            return fila.codigo_tramite.endsWith(filtro.busqueda.descripcion) ||
              fila.TipoTramiteServicio.nombre === filtro.nombre ||
              fila.EstadoTasas.descripcion === filtro.descripcion ||
              fila.EstadoExcedentes.descripcion === filtro.descripcion ||
              fila.Jurisdiccion.nombre === filtro.nombre ||
              fila.EstadoTramite.descripcion === filtro.descripcion;
          } else {
            // Si no hay valor de búsqueda, aplicar otros filtros
            return (
              fila.TipoTramiteServicio.nombre === filtro.nombre ||
              fila.EstadoTasas.descripcion === filtro.descripcion ||
              fila.EstadoExcedentes.descripcion === filtro.descripcion ||
              fila.Jurisdiccion.nombre === filtro.nombre ||
              fila.EstadoTramite.descripcion === filtro.descripcion
            );
          }
        }else{
          this.getTabla()
        }
     
      });
    });
  }
  

  
  


}
