import { Component , OnInit, ViewChild} from '@angular/core';
import { TablaTramiteService } from '../../services/tabla-tramite.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { OpcionesTramiteComponent } from 'src/app/shared/components/opciones-tramite/opciones-tramite.component';
import { AccionesService } from '../../services/acciones.service';

@Component({
  selector: 'app-tabla-finalizado',
  templateUrl: './tabla-finalizado.component.html',
  styleUrls: ['./tabla-finalizado.component.scss']
})
export class TablaFinalizadoComponent implements OnInit{

  displayedColumns: string[] = [
    'tramite',
    'fechaPresentacion',
    'numeroFormulario',
    'jurisdiccion',
    'tasas',
    'excedentes'
 
  ];

  dataSource = new MatTableDataSource();

  constructor(
    private tablaSrv: TablaTramiteService,
    private _bottomSheet: MatBottomSheet,
    public accionesSrv: AccionesService
  ) {}


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  showPagoMobile() {}

  openBottomSheet(): void {
    this._bottomSheet.open(OpcionesTramiteComponent);
  }

  ngOnInit(): void {
    this.tablaSrv.getTablaFinalizado().subscribe({
      next: (respuesta) => {
        this.dataSource = new MatTableDataSource(respuesta);
        console.log(this.dataSource)
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

}
