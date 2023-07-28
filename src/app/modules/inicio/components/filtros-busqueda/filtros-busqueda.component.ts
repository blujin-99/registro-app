import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TramitesService } from '../../services/tramites.service';
import { Observable } from 'rxjs';
import { ITramiteServicio } from 'src/app/core/models/tramites.interfaces';

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
  hideFilter: boolean = true;

  /**
   * @Signal Lista de tramite/servicios que muestra en el select
   * @type {Array}
   */
  tramiteServicio$ = signal([{ id: 0, nombre: '' }]);

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
    this.formFiltros.reset({
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

  /**
   * Se agrega al evento del select de categoria de tramite
   * Añade el valor de categoria al array de filtros
   * Resetea tramiteServicio
   * Se subscribe al servicio para filtrar por el id de la categoria
   * Guarda el array de la respuesta en tramiteServicio
   */
  setTramiteServicio() {
    this.addFilter('categoria');
    this.tramiteServicio$.set([{ id: 0, nombre: '' }]);
    this.tramiteSrv
      .getTramiteServicio(this.formFiltros.get('categoria')?.value?.id)
      .subscribe({
        next: (res) => {
          this.tramiteServicio$.set(res);
        },
        error: (error) => {
          console.error(`Ocurrio un error al setear tramite/servicio ${error}`);
        },
      });
  }
}
