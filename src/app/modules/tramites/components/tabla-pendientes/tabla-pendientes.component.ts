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
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-tabla-pendientes',
  templateUrl: './tabla-pendientes.component.html',
  styleUrls: ['./tabla-pendientes.component.scss'],
})
export class TablaPendientesComponent {
  displayedColumns: string[] = [
    'tramite',
    'numeroFormulario',
    'jurisdiccion',
    'tasas',
    'excedentes',
  ];
  dataSource = new MatTableDataSource<any>();
  tabla: any;
  filtros: any;
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

  alert: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.filtrosService.filtros$.subscribe(() =>
      this.filtrosService.getPendiente().subscribe((data) => {
        this.dataSource = new MatTableDataSource(data);
        this.alert = data;
        this.dataSource.paginator = this.paginator;
      })
    );
  }

  showPagoMobile() {}

  openBottomSheet(tramite: ITramite): void {
    this.tramitesrv.getTramiteActions(tramite.codigo_tramite).subscribe({
      next: (actions) => {
        this._bottomSheet.open(OpcionesTramiteComponent, {
          data: actions,
        });
      },
    });
  }

}
