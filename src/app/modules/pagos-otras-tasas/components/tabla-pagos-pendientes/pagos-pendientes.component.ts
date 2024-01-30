import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TablaTasasService } from '../../services/tabla-tasas.service';
import { ITablaPagos } from '../../interfaces/pago-otras-tasas.interface';

@Component({
  selector: 'app-pago-pendiente',
  templateUrl: './pagos-pendientes.component.html',
  styleUrls: ['./pagos-pendientes.component.scss']
})
export class PagosPendientesComponent implements OnInit {
  
  constructor(private tablaSrv : TablaTasasService){}
  
  displayedColumns: string[] = ['noboleta','acto','monto','cantidad', 'total','pagar'];
  dataSource : MatTableDataSource<ITablaPagos> | undefined;


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
    }
  }

  ngOnInit(): void {
    this.tablaSrv.table$.subscribe(tabla => {
      //al subscribirse verifica si hay un dato en el array de las tablas
      if (tabla.length > 0) {
        //luego obtiene los pagos pendientes que no estan acreditado y ingrresados
        this.tablaSrv.getTablaPagosPendientes().subscribe(pendiente => {
          this.dataSource = new MatTableDataSource(pendiente);
          this.dataSource.paginator = this.paginator;
        })
      }
    });
  }
}
