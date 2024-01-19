import {
  Component,
  ViewChild,
  effect,
} from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AccionesService } from '../../services/acciones.service';
import { TramitesService } from '../../services/tramites.service';
import { FiltrosService } from '../../services/filtros.service';
import { ITramite } from 'src/app/core/models';

import {MatPaginatorIntl} from '@angular/material/paginator';
import { TramitePaginatorIntl } from 'src/app/shared/components/custom-paginator/tramite-paginator/tramite-paginator-intl';

@Component({
  selector: 'app-tabla-finalizado',
  templateUrl: './tabla-finalizado.component.html',
  styleUrls: ['./tabla-finalizado.component.scss'],
  providers: [{provide: MatPaginatorIntl, useClass: TramitePaginatorIntl}]
})
export class TablaFinalizadoComponent {
  displayedColumns: string[] = [
    'tramite',
    'numeroFormulario',
    'jurisdiccion',
    'tasas',
    'excedentes',
  ];

  constructor(
    public accionesSrv: AccionesService,
    private tramitesService: TramitesService,
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
  alert: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.filtrosService.filtros$.subscribe(() =>
      this.filtrosService.getEntregado().subscribe((data) => {
        this.dataSource = new MatTableDataSource(data);
        this.alert = data;
        this.dataSource.paginator = this.paginator;
      })
    );
  }

  showPagoMobile() {}

  openBottomSheet(tramite: ITramite): void {
    this.tramitesService.showOptions(tramite);
  }

}
