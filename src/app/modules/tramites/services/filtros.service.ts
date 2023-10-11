import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
    /**
     * @var filtrosRow [id , descripcion o nombre, tipo] obtiene los datos de la observable
     * y almacena los datos de los filtros
     *
     */
    const filtrosRow = this.filtrosSubject.value;

    /**
     * @returns datosTabla devuleve los datos de la tabla filtrados
     */

    return this.datosTabla.filter((data: any) => {
      /**
       * @function every funcion predefinida que permite
       *  verificar que todas las condiciones sean verdadesras, si lo son devuleve true
       */
      return filtrosRow.every((filtro) => {
        /**
         * @returns si todas las condiciones se cumplen incluedes evalua si los datos de data(tabla)
         * son verdadderos, permite mostrar el dato que sea igual al dato filtrado y lo retorna,
         *  si no encunetra datos que sean iguales al filtro, devuelve flase
         */
        
        
        if (filtro.tipo === 'estadoTramite' && filtro) {
          console.log(data.EstadoTramite, 'data');
          console.log(filtro);
          return data.EstadoTramite.descripcion && data.EstadoTramite.descripcion.includes(filtro);
        }
        if (filtro.tipo === 'estadoTasa' && filtro) {
          return data.EstadoTasas && data.EstadoTasas.includes(filtro);
        }
        if (filtro.tipo === 'jurisdiccion' && filtro) {
          return data.jurjurisdiccion && data.jurjurisdiccion.includes(filtro);
        }
        if (filtro.tipo === 'estadoExcedentes' && filtro) {
          return (
            data.EstadoExcedentes && data.excedentes.includes(filtro)
          );
        }
        return false;
      });
    });
  }
}
