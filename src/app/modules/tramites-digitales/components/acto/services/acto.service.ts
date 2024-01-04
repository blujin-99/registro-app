import { Injectable } from '@angular/core';
import { IActo } from '../../../interfaces/acto';

@Injectable({
  providedIn: 'root',
})
export class ActoService {
  datosActo!: IActo;
  actoFormValid: boolean = false;

  constructor() {}

  // Método para establecer los datos del acto
  set acto(datos: any) {
    this.datosActo = datos;
  }

  // Método para obtener los datos del acto
  get acto() {
    return this.datosActo;
  }

  setActoValid(valid: boolean) {
    this.actoFormValid = valid;
  }
}
