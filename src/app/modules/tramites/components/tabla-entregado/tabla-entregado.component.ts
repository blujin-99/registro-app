import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  effect,
} from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { OpcionesTramiteComponent } from 'src/app/shared/components/opciones-tramite/opciones-tramite.component';
import { AccionesService } from '../../services/acciones.service';
import { TramitesService } from '../../services/tramites.service';
import { FiltrosService } from '../../services/filtros.service';
import { ITramite } from 'src/app/core/models';
@Component({
  selector: 'app-tabla-entregado',
  templateUrl: './tabla-entregado.component.html',
  styleUrls: ['./tabla-entregado.component.scss'],
})
export class TablaEntregadoComponent {
  displayedColumns: string[] = [
    'tramite',
    'numeroFormulario',
    'jurisdiccion',
    'tasas',
    'excedentes',
  ];


  constructor(
    private _bottomSheet: MatBottomSheet,
    public accionesSrv: AccionesService,
    private tramitesrv: TramitesService,
    private filtrosService: FiltrosService
  ) {
    effect(() => {
      if (this.accionesSrv.pagoMultiple()) {
        this.displayedColumns = [
          'tramite',
          'numeroFormulario',
          'jurisdiccion',
          'tasas',
          'excedentes',
        ];
      } else {
        this.displayedColumns = [
          'tramite',
          'numeroFormulario',
          'jurisdiccion',
          'tasas',
          'excedentes',
        ];
      }
    });
  }


  dataSource = new MatTableDataSource();
  tabla: any;
  filtros: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.tramitesrv.getTramites().subscribe((res) => {
      this.tabla = res;
      this.filtrosService.setTabla(this.tabla);
      this.filtrosService.setTablasinFiltro(this.tabla);
      this.actualizarDataSource();
    });
  
    this.filtrosService.filtros$.subscribe(() => {
      this.actualizarDataSource();
    });
  }
  
  private actualizarDataSource(): void {
    this.dataSource = new MatTableDataSource(this.filtrosService.getEntregado());
    this.dataSource.paginator = this.paginator;
  }

  showPagoMobile() {}

  openBottomSheet(tramite: ITramite): void {
    this.tramitesrv.getTramiteActions(tramite.codigo_tramite);
    this._bottomSheet.open(OpcionesTramiteComponent);
  }
}
