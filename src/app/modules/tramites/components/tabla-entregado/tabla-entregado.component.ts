import { Component , OnInit, ViewChild, effect} from '@angular/core';
import { TablaTramiteService } from '../../services/tabla-tramite.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { OpcionesTramiteComponent } from 'src/app/shared/components/opciones-tramite/opciones-tramite.component';
import { AccionesService } from '../../services/acciones.service';

@Component({
  selector: 'app-tabla-entregado',
  templateUrl: './tabla-entregado.component.html',
  styleUrls: ['./tabla-entregado.component.scss']
})
export class TablaEntregadoComponent implements OnInit{

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource()
  
  displayedColumns : string[] = [    
  'tramite',
  'numeroFormulario',
  'jurisdiccion',
  'tasas',
  'excedentes',
]

  constructor(
    private tableServ: TablaTramiteService,
    private _bottomSheet: MatBottomSheet,
    public accionesSrv: AccionesService){
    
      effect(() => {

        if(this.accionesSrv.pagoMultiple()){
          this.displayedColumns =[
            'pagar',
            'tramite',
            'numeroFormulario',
            'jurisdiccion',
            'tasas',
            'excedentes',
          ]
        }else{
          this.displayedColumns =[
            'tramite',
            'numeroFormulario',
            'jurisdiccion',
            'tasas',
            'excedentes',
          ]
        }
      })
    }

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }

    ngOnInit(): void {
      this.tableServ.getTableEntregado().subscribe({
         next:(resultado) => {
           this.dataSource = new MatTableDataSource(resultado)
         }
      })
    }

    showPagoMobile() {}

    openBottomSheet(): void {
      this._bottomSheet.open(OpcionesTramiteComponent);
    }
}
