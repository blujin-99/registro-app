import { Component, OnInit, ViewChild, effect } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { OpcionesTramiteComponent } from 'src/app/shared/components/opciones-tramite/opciones-tramite.component';
import { AccionesService } from '../../services/acciones.service';
import { FiltrosService } from '../../services/filtros.service';

@Component({
  selector: 'app-tabla-entregado',
  templateUrl: './tabla-entregado.component.html',
  styleUrls: ['./tabla-entregado.component.scss'],
})
export class TablaEntregadoComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource();
  tabla: any;

  displayedColumns: string[] = [
    'tramite',
    'numeroFormulario',
    'jurisdiccion',
    'tasas',
    'excedentes',
  ];

  constructor(
    private filtroServ: FiltrosService,
    private _bottomSheet: MatBottomSheet,
    public accionesSrv: AccionesService
  ) {
    effect(() => {
      if (this.accionesSrv.pagoMultiple()) {
        this.displayedColumns = [
          'pagar',
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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // ngOnInit(): void {
  //   this.tableServ.getTableEntregado().subscribe({
  //     next: (resultado) => {

  //       this.filtroServ.setTabla(resultado);

  //       this.dataSource = new MatTableDataSource(resultado);
  //     }
  //   });
  //   /**
  //    * @var filtros$ observable solo de lectura que detecta los cambio del filtrado entonces
  //    *  updatedTablaFiltrada se llama cada vez que se alctualiza filtros$
  //    */
  //   this.filtroServ.filtros$.subscribe(() =>
  //     this.updatedTablaFiltrada()
  //   )

  // }

  /**
   * @function updatedTablaFiltrada toma los datos filtrados y retornando d de la tabla y los guarda
   * en @var tabla que seŕa el array que mostrará los datos de la tabla filtrados
   */
  private updatedTablaFiltrada(): void {
    this.tabla = this.filtroServ.getTablaFiltrada();
  }

  showPagoMobile() {}

  openBottomSheet(): void {
    this._bottomSheet.open(OpcionesTramiteComponent);
  }
}
