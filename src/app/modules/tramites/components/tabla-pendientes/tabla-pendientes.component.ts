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
  data :any
  dataSource = new MatTableDataSource()
  filtros: any;
  filterRow : any[] = [] //crear interface
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

  search : any
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    
    this.tablaSrv.getTablaPendientes().subscribe({
      next: (res) => {
        this.data = res;
        console.log(this.data);
    
        this.tablaSrv.filtros.subscribe(
          filtro => {
            if (filtro) {
              this.filterRow = this.data.filter((data: {
                tipo_categoria_tramite: string;
                tipo_tramite:string;
                codigo_tramite: string;
                jur: string;
                tasas: string;
                excedentes: string;
                estado: string
              }) =>
                (!filtro.categoria || data.tipo_categoria_tramite.includes(filtro.categoria)) &&
                (!filtro.servicio || data.tipo_tramite.includes(filtro.servicio)) &&
                (!filtro.busqueda || data.codigo_tramite.includes(filtro.busqueda)) &&
                (!filtro.jurisdiccion || data.jur.includes(filtro.jurisdiccion)) &&
                (!filtro.estadoTasas || data.tasas.includes(filtro.estadoTasas)) &&
                (!filtro.estadoExcedentes || data.excedentes.includes(filtro.estadoExcedentes)) &&
                (!filtro.estadoTramite || data.estado.includes(filtro.estadoTramite))
              );
              if (this.paginator) {
                this.paginator.firstPage();
              }
              this.dataSource = new MatTableDataSource(this.filterRow);
            }
       
            if(this.filterRow.length === 0 && !filtro){
              this.filterRow = this.data
              this.dataSource = new MatTableDataSource(this.filterRow)
            }
          }
        );
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
