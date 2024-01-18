import { Injectable } from '@angular/core';
import { ActoService } from '../../../../components/acto/services/acto.service';
import { ObservacionesService } from '../../../../components/observaciones/services/observaciones.service';
import { TramiteDigitalService } from 'src/app/modules/tramites-digitales/services/tramite-digital.service';
import { IParcialInhibiciones } from 'src/app/modules/tramites-digitales/interfaces/parcial-Inhibiciones';
@Injectable({
  providedIn: 'root',
})
export class ParcialInhibicionesService {
  datosInhibicion: IParcialInhibiciones = {
    actos: this.actoService.acto,
    observaciones: { observaciones: '' },
  };
  constructor(
    private actoService: ActoService,
    private observacionesService: ObservacionesService,
    private tramiteDigitalSrv: TramiteDigitalService
  ) {}

  validInhibicion() {
    return (
      this.actoService.actoFormValid &&
      this.observacionesService.observacionFormValid
    );
  }

  saveInhibicion() {
    // Obtener datos del acto y observaciones

    this.datosInhibicion = {
      actos: this.actoService.acto,
      observaciones: this.observacionesService.observaciones,
    };
    this.tramiteDigitalSrv.newTramite(this.datosInhibicion).subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log('completo'),
    });
  }

  getTramiteInhibiciones(idTramite: string) {
    return this.tramiteDigitalSrv.searchTramite(idTramite);
  }
}
