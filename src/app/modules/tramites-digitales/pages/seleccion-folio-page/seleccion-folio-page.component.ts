import { Component, OnInit } from '@angular/core';
import { TramiteDigitalService } from '../../services/tramite-digital.service';
import { ITipoTramite } from '../../interfaces/tipo-tramite';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seleccion-folio-page',
  templateUrl: './seleccion-folio-page.component.html',
  styleUrls: ['./seleccion-folio-page.component.scss'],
})
export class SeleccionFolioPageComponent implements OnInit {
  tramite?: string;

  constructor(
    public tramiteSrv: TramiteDigitalService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    let tipoTramite = this.route.snapshot.paramMap.get('tipoTramite');

    if (tipoTramite) this.tramiteSrv.getTipoTramite(tipoTramite);
  }
}
