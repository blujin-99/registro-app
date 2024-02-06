import { Component, OnInit } from '@angular/core';
import { TramitesService } from 'src/app/shared/services/tramites.service';
import { TramitesService as TramitesSrv } from '../../services/tramites.service';
import { FiltrosService } from '../../services/filtros.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  templateUrl: './tramites-page.component.html',
  styleUrls: ['./tramites-page.component.scss'],
})
export class TramitesPageComponent implements OnInit {
  cargando: boolean = true;
  errorRestTable: any
  errorFiltros : any
  constructor(
    private tramitesService: TramitesService,
    private filtroSrv: FiltrosService,
    private tramitesSrv: TramitesSrv,
  ) {}
  ngOnInit(): void {
    this.tramitesSrv.updateFiltros();
    this.tramitesSrv.error$.subscribe(error => 
      this.errorFiltros = {error:error , mensaje:'Hubo un error al cargar de los filtros de búsqueda, intente más tarde'})
    //inicializo en el componente padre la subscripcion para traer los todos los datos de los tramites
    this.tramitesService.getTramites().subscribe(
      (res) => {
        this.filtroSrv.setTabla(res)
        this.filtroSrv.setTablasinFiltro(res)
      },
      (error: HttpErrorResponse) => {
        this.errorRestTable = {error:error , mensaje:'Hubo un error al cargar sus tramites, intente más tarde'}
      }
    )
    this.cargando = false;
  }
}
