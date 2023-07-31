import { Component } from '@angular/core';
import { AccionesService } from '../../services/acciones.service';

@Component({
  selector: 'app-botones-tramite',
  templateUrl: './botones-tramite.component.html',
  styleUrls: ['./botones-tramite.component.scss'],
})
export class BotonesTramiteComponent {
  constructor(public accionesSrv: AccionesService) {}

  /**
   * Cambia el estado del signal pagoMultiple() cuando hacen click sobre la etique li
   */
  showColumPagoMultiple() {
    this.accionesSrv.pagoMultiple.set(!this.accionesSrv.pagoMultiple());
  }
}
