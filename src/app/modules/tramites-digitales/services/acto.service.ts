import { Injectable, Signal } from '@angular/core';
import { IActo } from '../interfaces/acto';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActoService {
  datosActo: IActo = { naturaleza: '' };
  actoFormValid: boolean = false;

  constructor() {}

  // Método para establecer los datos del acto

  set acto(datos: IActo) {
    this.datosActo = datos;
  }

  // Método para obtener los datos del acto
  get acto() {
    return this.datosActo;
  }

  set actoValid(valid: boolean) {
    this.actoFormValid = valid;
  }

  get actoValid(): boolean {
    return this.actoFormValid;
  }
}
