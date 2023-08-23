import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  signal,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TramitesService } from '../../services/tramites.service';
import { Observable, filter } from 'rxjs';
import { ITramiteServicio } from 'src/app/core/models/tramites.interfaces';
import { AlertCategoriaComponent } from 'src/app/shared/components/alert-categoria/alert-categoria.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TablaTramiteService } from '../../services/tabla-tramite.service';

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

  busqueda: FormControl = new FormControl()

  /**
   * Lista de filtros que selecciono el usuario
   */
  filters: any[] = [];

  /**
   * Bool para ocultar o mostrar la seccion de filtros
   */
  hideFilter: boolean = true;

  /**
   * @Signal Lista de tramite/servicios que muestra en el select
   * @type {Array}
   */
  tramiteServicio$: any = signal([{ id: 0, nombre: '' }]);

  @ViewChild('tramiteServicio') tramiteServicio!: ElementRef;

  resetForm = {
    busqueda: '',
    categoria: [''],
    estadoTramite: [''],
    jurisdiccion: [''],
    tramiteServicio: [''],
    estadoTasas: [''],
    estadoExcedentes: [''],
  };

  constructor(
    private fb: FormBuilder,
    public tramiteSrv: TramitesService,
    private tablaServ : TablaTramiteService,
    private _snackBar: MatSnackBar
  ) {}

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
    this.formFiltros.reset(this.resetForm);
  }

  /**
   * Se le agrega a los chips y cuando haces click sobre ellos los elimina
   *
   * @param filtro valor del objeto que selecciono en el select
   */
  removeFilter(filtro: string) {
    const index = this.filters.indexOf(filtro);

    if (index >= 0) {
      this.filters.splice(index, 1);
    }

    if (this.filters.length === 0) {
      this.formFiltros.reset(this.resetForm);
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
   * Lanza un alert cuando selecciona una categoria tramite
   * Para que seleccione un tramite / servicio
   */
  openSnackBar() {
    this._snackBar.openFromComponent(AlertCategoriaComponent, {
      duration: 5 * 1000,
      verticalPosition: 'top',
    });
  }

  /**
   * Se agrega al evento del select de categoria de tramite
   * Añade el valor de categoria al array de filtros
   * Resetea tramiteServicio
   * Se subscribe al servicio para filtrar por el id de la categoria
   * Guarda el array de la respuesta en tramiteServicio
   */
  setTramiteServicio() {
    this.openSnackBar();
    this.tramiteServicio.nativeElement.focus();

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

  onSubmit(): void {
    this.tablaServ.setFiltros(
      this.formFiltros.get('busqueda')?.value,
      this.formFiltros.get('categoria')?.value.nombre,
      this.formFiltros.get('estadoTramite')?.value.descripcion,
      this.formFiltros.get('jurisdiccion')?.value.nombre,
      this.formFiltros.get('estadoTasas')?.value.descripcion,
      this.formFiltros.get('estadoExcedentes')?.value.descripcion,
      this.formFiltros.get('tramiteServicio')?.value.nombre
    )
  }
  
  
}
