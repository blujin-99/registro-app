import { Component, Input } from '@angular/core';

import { IOficina } from 'src/app/modules/pagos-otras-tasas/interfaces/pago-otras-tasas.interface';
import { ITipoTramite } from '../../interfaces/tipo-tramite';

@Component({
  selector: 'app-card-tipo-tramite',
  templateUrl: './card-tipo-tramite.component.html',
  styleUrls: ['./card-tipo-tramite.component.scss'],
})
export class CardTipoTramiteComponent {
  @Input({ required: true }) tipo!: ITipoTramite;
  @Input({ required: true }) oficina: any;
}
