import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FiltrosService } from '../../services/filtros.service';

@Component({
  selector: 'app-chip-filtro',
  templateUrl: './chip-filtro.component.html',
  styleUrls: ['./chip-filtro.component.scss'],
})
export class ChipFiltroComponent {
  /**
   * Espera un objeto desde un array del componente padre
   * Muestra el nombre/descripcion del filtro
   */
  @Input({ required: true }) chipFiltro: any;
  @Output() deletedFilter : EventEmitter<any> = new EventEmitter()
  
   constructor( private filtroSrv : FiltrosService){ }


  deleteFilter(){
     this.deletedFilter.emit(this.chipFiltro)
  }
}
