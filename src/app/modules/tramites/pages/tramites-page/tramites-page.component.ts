import { Component, OnInit } from '@angular/core';
import { TramitesService } from 'src/app/shared/services/tramites.service';
import { TramitesService as TramitesSrv } from '../../services/tramites.service';
import { FiltrosService } from '../../services/filtros.service';

@Component({
  templateUrl: './tramites-page.component.html',
  styleUrls: ['./tramites-page.component.scss'],
})
export class TramitesPageComponent implements OnInit {
  cargando: boolean = true;
  constructor(private tramitesService: TramitesService, private filtroSrv: FiltrosService, private tramitesSrv: TramitesSrv) {}
  ngOnInit(): void {
    this.tramitesSrv.getFiltros();
    //inicializo en el componente padre la subscripcion para traer los todos los datos de los tramites
    this.tramitesService.getTramites().subscribe(
      res => {
        this.filtroSrv.setTabla(res)
        this.filtroSrv.setTablasinFiltro(res)
      }
    )
    this.cargando = false;
  }
}
