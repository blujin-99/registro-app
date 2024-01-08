import { Injectable } from '@angular/core';
import { IObservaciones } from '../../../interfaces/observaciones';

@Injectable({
  providedIn: 'root'
})
export class ObservacionesService {
  datosObservaciones!: IObservaciones;
  observacionFormValid: boolean = false;

  constructor() { }

    // Método para establecer los datos de observaciones
    set observaciones(datos: any) {
      this.datosObservaciones = datos;
    }

    // Método para obtener los datos de observaciones
    get observaciones() {
      return this.datosObservaciones;
    }

    setObserValid(valid: boolean) {
      this.observacionFormValid = valid;
    }
}
