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
   * TODO:convertir en array
   */
  filters: boolean = false;

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
    console.log(this.tramiteSrv.categorias);
  }

  /**
   * Limpia todos los filtros y oculta la seccion de limpiar filtros
   */
  clearFilters() {
    this.filters = !this.filters;
  }
}
