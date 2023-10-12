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

  datosTabla: any[] = [];

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

  /**
   * @function getTablaFiltrada() devuleve un array de los datos de la tabla
   * con la información filtrada
   */
getTablaFiltrada(): any[] {
  const filtrosRow = this.filtrosSubject.value;

  return this.datosTabla.filter((fila: any) => {
    return filtrosRow.every((filtro) => {
      return (
        fila.EstadoTasas.descripcion === filtro.descripcion ||
   
        fila.Jurisdiccion.nombre === filtro.nombre ||
  
        fila.EstadoTramite.descripcion === filtro.descripcion 
      );
    });
  });
}

  
  


}
