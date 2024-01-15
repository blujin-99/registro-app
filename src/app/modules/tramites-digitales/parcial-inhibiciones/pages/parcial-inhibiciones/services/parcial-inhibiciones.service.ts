import { Injectable } from '@angular/core';
import { ActoService } from '../../../../components/acto/services/acto.service';
import { ObservacionesService } from '../../../../components/observaciones/services/observaciones.service';

@Injectable({
  providedIn: 'root',
})
export class ParcialInhibicionesService {
  datosInhibicion: any = {};

  constructor(
    private actoService: ActoService,
    private observacionesService: ObservacionesService
  ) {}

  validInhibicion() {
    return this.actoService.actoFormValid && this.observacionesService.observacionFormValid;
  }

  saveInhibicion() {
    // Obtener datos del acto y observaciones
    const datosActo = this.actoService.acto;
    const datosObservaciones = this.observacionesService.observaciones;

    this.datosInhibicion = {
      ...datosActo,
      ...datosObservaciones,
    };
    console.log(this.datosInhibicion)
  }

}
