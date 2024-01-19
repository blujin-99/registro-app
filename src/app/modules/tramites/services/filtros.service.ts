import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
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

  busqueda: any;

  tabla : any

  private datosTabla = new BehaviorSubject<any[]>([])
  tabla$ = this.datosTabla.asObservable()

  
  finalizado: any[] = [];
 
  pendiente: any[] = [];
  tablaSinFiltro: any[] = [];

  TipoTramiteServicio : string[] = []
  EstadoTasa : string[] = []
  EstadoExcedentes : string[] = []
  Jurisdiccion : string[]  = []
  EstadoTramite : string[] = []
  numeroTramite : string[] = []


  /**
   *
   * @fucntioon SendFiltros obtine los fltros y se guardan en una observable
   */
  sendFiltros(filtros: any[]): void {
    //observable con el fin de detectar cambios al añadir o sacar valores del filtro
    this.setFiltros(filtros)
  }

  setFiltros(filtros: any[]) {
    this.filtros$.pipe(
      map(() => ({
        TipoTramiteServicio: filtros.filter(tipoTramite => tipoTramite.tipo === 'tramiteServicio').map(tramiteServicio => tramiteServicio.nombre),
        Jurisdiccion: filtros.filter(juris => juris.tipo === 'jurisdiccion').map(juris => juris.nombre),
        EstadoTasa: filtros.filter(Etasas => Etasas.tipo === 'estadoTasas').map(Etasas => Etasas.descripcion),
        EstadoExcedentes: filtros.filter(Eexcedentes => Eexcedentes.tipo === 'estadoExcedentes').map(Eexcedentes => Eexcedentes.descripcion),
        EstadoTramite: filtros.filter(Etramites => Etramites.tipo === 'estadoTramite').map(Etramite => Etramite.descripcion),
        numeroTramite: filtros.filter(numTramite => numTramite.busqueda && numTramite.busqueda.tipo === 'busqueda').map(numTramite => numTramite.busqueda.descripcion),
      }))
    ).subscribe(updatedFilters => {
      // cuando se acutualizan los filtros
      this.TipoTramiteServicio = updatedFilters.TipoTramiteServicio;
      this.Jurisdiccion = updatedFilters.Jurisdiccion;
      this.EstadoTasa = updatedFilters.EstadoTasa;
      this.EstadoExcedentes = updatedFilters.EstadoExcedentes;
      this.EstadoTramite = updatedFilters.EstadoTramite;
      this.numeroTramite = updatedFilters.numeroTramite;
  
    });
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
  getTablaFiltrada(): Observable<any[]>{
    return this.tabla = this.datosTabla.pipe(
      map(tabla =>
        tabla.filter(fila =>
          (this.TipoTramiteServicio.length === 0 || this.TipoTramiteServicio.some(Tservicios => fila.TipoTramiteServicio.nombre === Tservicios))&&
          (this.Jurisdiccion.length === 0 || this.Jurisdiccion.some(juris => fila.Jurisdiccion.nombre === juris))&&
          (this.EstadoTasa.length === 0 || this.EstadoTasa.some(tasas => fila.EstadoTasas.descripcion === tasas))&&
          (this.EstadoExcedentes.length === 0 || this.EstadoExcedentes.some(excedentes => fila.EstadoExcedentes.descripcion === excedentes))&&
          (this.EstadoTramite.length === 0 || this.EstadoTramite.some(tramite => fila.EstadoTramite.descripcion === tramite))
        )
      )
      
    );
  }
  
  
  // convierto las tres tablas en observable de modo que escuchen cada cambio de los tramites
  // y se filtren los datos en las respectivas tablas

    getEntregado(): Observable<any[]> {
      return this.getTablaFiltrada().pipe(
        map(tablaFiltrada => tablaFiltrada.filter(entregado =>
          (entregado.EstadoTramite.descripcion === 'ENTREGADO') &&
          (this.numeroTramite.length === 0 || this.numeroTramite.some( numero => entregado.aforo !== null && entregado.aforo.startsWith(numero)))
        ))
      );
    }

    getNoPresentado(): Observable<any[]> {
      return this.getTablaFiltrada().pipe(
        map(tablaFiltrada => tablaFiltrada.filter(pendiente =>
         (pendiente.EstadoTramite.descripcion === 'NO PRESENTADO' ||
          pendiente.EstadoTramite.descripcion === 'FINALIZADO CON EXCEDENTES' ||
          pendiente.EstadoTramite.descripcion === 'OBSERVADO')&&
          (this.numeroTramite.length === 0 || this.numeroTramite.some(numero => pendiente.codigo_tramite.endsWith(numero)))
        ))
      );
    }

    getPresentado(): Observable<any[]> {
      return this.getTablaFiltrada().pipe(
        map(tablaFiltrada => tablaFiltrada.filter(presentado =>
         (presentado.EstadoTramite.descripcion === 'RECIBIDO' ||
          presentado.EstadoTramite.descripcion === 'PRESENTADO' ||
          presentado.EstadoTramite.descripcion === 'FINALIZADO')&&
          (this.numeroTramite.length === 0 || this.numeroTramite.some(numero => presentado.aforo !== null && presentado.aforo.startsWith(numero)))
        ))
      );
    }

  }
