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

@Component({
  selector: 'app-tabla-pendientes',
  templateUrl: './tabla-pendientes.component.html',
  styleUrls: ['./tabla-pendientes.component.scss'],
})
export class TablaPendientesComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'tramite',
    'numeroFormulario',
    'jurisdiccion',
    'tasas',
    'excedentes',
  ];
  data: any;
  dataSource = new MatTableDataSource<any>();
  filtros: any;
  filterRow: any[] = []; //crear interface
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

  search: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.tramitesrv.getTramites().subscribe((res) => {
      this.filtrosService.setTabla(res);
      this.dataSource = new MatTableDataSource(this.filtrosService.getTablaFiltrada());
      this.dataSource.paginator = this.paginator;
    });

    this.filtrosService.filtros$.subscribe(() => {
      this.updatedTablaFiltrada();
      this.dataSource = new MatTableDataSource(this.filtrosService.getTablaFiltrada());
      this.dataSource.paginator = this.paginator;
    })
  }

  private updatedTablaFiltrada(): void {
    let tabla = this.filtrosService.getTablaFiltrada();
    console.log(tabla);
  }

  showPagoMobile() {}

  openBottomSheet(): void {
    this._bottomSheet.open(OpcionesTramiteComponent);
  }
}
