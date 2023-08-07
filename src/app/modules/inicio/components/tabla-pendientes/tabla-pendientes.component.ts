import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  effect,
} from '@angular/core';
import { TablaTramiteService } from '../../services/tabla-tramite.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { OpcionesTramiteComponent } from 'src/app/shared/components/opciones-tramite/opciones-tramite.component';
import { AccionesService } from '../../services/acciones.service';

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
  dataSource = new MatTableDataSource();
  pendientes!: any;

  constructor(
    private tablaSrv: TablaTramiteService,
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

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.tablaSrv.getTablaPendientes().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  showPagoMobile() {}

  openBottomSheet(): void {
    this._bottomSheet.open(OpcionesTramiteComponent);
  }
}
