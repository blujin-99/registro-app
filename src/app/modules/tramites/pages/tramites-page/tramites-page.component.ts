import { Component, OnInit } from '@angular/core';
import { TramitesService } from '../../services/tramites.service';
import { FiltrosService } from '../../services/filtros.service';

@Component({
  templateUrl: './tramites-page.component.html',
  styleUrls: ['./tramites-page.component.scss'],
})
export class TramitesPageComponent implements OnInit {
  cargando: boolean = true;
  constructor(private tramiteSrv: TramitesService, private filtroSrv: FiltrosService) {}
  ngOnInit(): void {
    this.tramiteSrv.getFiltros();
    //inicializo en el componente padre la subscripcion para traer los todos los datos de los tramites
    this.tramiteSrv.getTramites().subscribe(
      res => {
        this.filtroSrv.setTabla(res)
        this.filtroSrv.setTablasinFiltro(res)
      }
    )
    this.cargando = false;
  }
}
