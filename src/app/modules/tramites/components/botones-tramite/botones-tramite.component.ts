import { Component } from '@angular/core';
import { AccionesService } from '../../services/acciones.service';

@Component({
  selector: 'app-botones-tramite',
  templateUrl: './botones-tramite.component.html',
  styleUrls: ['./botones-tramite.component.scss'],
})
export class BotonesTramiteComponent {
  constructor(public accionesSrv: AccionesService) {}

  showColumPagoMultiple() {
    this.accionesSrv.pagoMultiple.set(true);
  }

  hideColumPagoMultiple() {
    this.accionesSrv.pagoMultiple.set(false);
  }
}
