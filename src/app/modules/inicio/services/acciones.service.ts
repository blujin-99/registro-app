import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccionesService {
  /**
   * @signal boolean para controlar si mostrar u ocultar la columna de checks
   */
  pagoMultiple = signal(false);
  constructor() {}
}
