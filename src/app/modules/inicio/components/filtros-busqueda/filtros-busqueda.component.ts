import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TramitesService } from '../../services/tramites.service';

@Component({
  selector: 'app-filtros-busqueda',
  templateUrl: './filtros-busqueda.component.html',
  styleUrls: ['./filtros-busqueda.component.scss'],
})
export class FiltrosBusquedaComponent implements OnInit {
  /**
   * Form controls de Filtros de Búsqueda
   */
  formFiltros: FormGroup = new FormGroup({});

  /**
   * Lista de filtros que selecciono el usuario
   */
  filters: string[] = [];

  /**
   * Bool para ocultar o mostrar la seccion de filtros
   */
  hideFilter: boolean = false;

  constructor(private fb: FormBuilder, public tramiteSrv: TramitesService) {}

  ngOnInit(): void {
    this.formFiltros = this.fb.group({
      busqueda: [''],
      categoria: [''],
      estadoTramite: [''],
      jurisdiccion: [''],
      tramiteServicio: [''],
      estadoTasas: [''],
      estadoExcedentes: [''],
    });
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
  clearAllFilters() {
    this.filters = [];
  }

  /**
   * Se le agrega a los chips y cuando haces click sobre ellos los elimina
   * @param filtro valor del objeto que selecciono en el select
   */
  removeFilter(filtro: string) {
    const index = this.filters.indexOf(filtro);

    if (index >= 0) {
      this.filters.splice(index, 1);
    }
  }

  /**
   * Añade el valor seleccionado al array de filtros si este no exisitia en el array
   * @param campo formControlName del select del que obtiene el valor
   */
  addFilter(campo: string) {
    let valorCampo = this.formFiltros.get(campo)?.value;
    if (!this.filters.includes(valorCampo)) {
      this.filters.push(valorCampo);
    }
  }
}
