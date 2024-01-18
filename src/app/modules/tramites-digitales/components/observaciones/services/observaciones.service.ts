import { Injectable } from '@angular/core';
import { IObservaciones } from '../../../interfaces/observaciones';

@Injectable({
  providedIn: 'root',
})
export class ObservacionesService {
  datosObservaciones: IObservaciones = { observaciones: '' };
  observacionFormValid: boolean = false;

  constructor() {}

  // Método para establecer los datos de observaciones
  set observaciones(datos: IObservaciones) {
    this.datosObservaciones = datos;
  }

  // Método para obtener los datos de observaciones
  get observaciones(): IObservaciones {
    return this.datosObservaciones;
  }

  setObserValid(valid: boolean) {
    this.observacionFormValid = valid;
  }
}
