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
  filtros$: Observable<any[]> = this.filtrosSubject.asObservable();

  busqueda : any

  datosTabla: any[] = [];
  finalizado : any[] = [];
  entregado : any[] = [];
  pendiente: any []=[]
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
  }
  
  setTablasinFiltro(tabla : any[]):void{
     this.tablaSinFiltro = tabla
  }

 
  /**
   * @function getTablaFiltrada() devuleve un array de los datos de la tabla
   * con la información filtrada
   */
  getTablaFiltrada(): any[] {
    const filtrosRow = this.filtrosSubject.value;
  
    return (this.datosTabla.filter((fila: any) => {
            return filtrosRow.every((filtro) => {
              console.log(fila)
              if(filtro.length != 0){
                if (filtro.busqueda && filtro.busqueda.descripcion) {
            // Si hay un valor de búsqueda por número de tramite en los filtros, usarlo para buscar por los últimos dígitos 
                return fila.codigo_tramite.endsWith(filtro.busqueda.descripcion) ||
                  fila.TipoTramiteServicio.nombre === filtro.nombre ||
                  fila.EstadoTasas.descripcion === filtro.descripcion ||
                  fila.EstadoExcedentes.descripcion === filtro.descripcion ||
                  fila.Jurisdiccion.nombre === filtro.nombre ||
                  fila.EstadoTramite.descripcion === filtro.descripcion;
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
              }else{
                this.datosTabla = this.tablaSinFiltro
              }
         });
        }))
  }
  
  
  getFinalizado(): any[] {
    this.finalizado = this.getTablaFiltrada().filter(finalizado => {
      return finalizado.EstadoTramite.descripcion === 'ENTREGADO';
    });
  
    return this.finalizado;
  }

  getPendiente(): any[] {
    this.pendiente = this.getTablaFiltrada().filter(pendiente => {
      return pendiente.EstadoTramite.descripcion === 'NO PRESENTADO' || 
      pendiente.EstadoTramite.descripcion === 'FINALIZADO CON EXCEDENTES' ||
      pendiente.EstadoTramite.descripcion === 'OBSERVADO'
    })
    return this.pendiente
  }

  getEntregado(): any[]{
    this.entregado = this.getTablaFiltrada().filter(entregado =>{
      return entregado.EstadoTramite.descripcion === 'RECIBIDO' ||
      entregado.EstadoTramite.descripcion === 'PRESENTADO' ||
      entregado.EstadoTramite.descripcion === 'FINALIZADO'
    })
    return this.entregado
  }

}
