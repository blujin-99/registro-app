import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtros-busqueda',
  templateUrl: './filtros-busqueda.component.html',
  styleUrls: ['./filtros-busqueda.component.scss'],
})
export class FiltrosBusquedaComponent implements OnInit {
  /**
   * Lista de filtros que selecciono el usuario
   * TODO:convertir en array
   */
  filters: boolean = true;

  /**
   * Bool para ocultar o mostrar la seccion de filtros
   */
  hideFilter: boolean = false;

  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  /**
   * Muestra u oculta la busqueda de filtros
   */
  toogleHideFilter() {
    this.hideFilter = !this.hideFilter;
  }

  /**
   * Limpia todos los filtros y oculta la seccion de limpiar filtros
   */
  clearFilters() {
    this.filters = !this.filters;
  }
}
