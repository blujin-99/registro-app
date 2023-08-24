import { Injectable } from '@angular/core';
import { Filtros } from '../models/filtros';
import { Tabla } from '../models/tabla';

@Injectable({
  providedIn: 'root'
})
export class FiltrosService {

  constructor() { }

  filtrosRow : Filtros[] = []
  datosTabla : any[] = []
  tabla : any[] = []

  sendFiltros(filtros: any[]): void{
    this.filtrosRow = filtros
  }

  getFiltros(){
    return this.filtrosRow
  }

  setTabla(tablaValues : any[]){
    this.datosTabla = tablaValues
  }

  getTabla(){
    this.tabla = this.datosTabla

    return this.tabla
  }
}
