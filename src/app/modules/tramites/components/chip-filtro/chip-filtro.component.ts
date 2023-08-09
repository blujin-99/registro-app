import { Component, Input } from '@angular/core';

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
}
