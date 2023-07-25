import { Component, OnInit } from '@angular/core';
import { TramitesService } from '../../services/tramites.service';

@Component({
  templateUrl: './inicio-page.component.html',
  styleUrls: ['./inicio-page.component.scss'],
  providers: [TramitesService],
})
export class InicioPageComponent implements OnInit {
  cargando: boolean = true;
  constructor(private tramiteSrv: TramitesService) {}
  ngOnInit(): void {
    this.tramiteSrv.getCategorias();
    this.tramiteSrv.getEstadoTramite();
    this.tramiteSrv.getEstadoTasas();
    this.tramiteSrv.getJurisdiccion();
    this.tramiteSrv.getEstadoExcedentes();
    //TODO: Mover getTramiteServicio a filtro component
    this.tramiteSrv.getTramiteServicio(3);

    this.cargando = false;
  }
}
