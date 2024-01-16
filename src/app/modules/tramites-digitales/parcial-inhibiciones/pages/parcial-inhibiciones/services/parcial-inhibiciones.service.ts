import { Injectable } from '@angular/core';
import { ActoService } from '../../../../components/acto/services/acto.service';
import { ObservacionesService } from '../../../../components/observaciones/services/observaciones.service';
import { TramiteDigitalService } from 'src/app/modules/tramites-digitales/services/tramite-digital.service';

@Injectable({
  providedIn: 'root',
})
export class ParcialInhibicionesService {
  datosInhibicion: any = {};

  constructor(
    private actoService: ActoService,
    private observacionesService: ObservacionesService,
    private tramiteDigitalSrv: TramiteDigitalService
    )
    {}


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
    this.tramiteDigitalSrv.newTramite(this.datosInhibicion).subscribe(
      {
        next:data=>console.log(data),
        error:error=>console.log(error),
        complete:()=>console.log('completo')
      }
    )
  }



}
