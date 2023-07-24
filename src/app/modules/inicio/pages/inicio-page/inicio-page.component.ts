import { Component } from '@angular/core';

@Component({
  templateUrl: './inicio-page.component.html',
  styleUrls: ['./inicio-page.component.scss'],
})
export class InicioPageComponent {
  filters: boolean = true;
  hideFilter: boolean = false;

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
