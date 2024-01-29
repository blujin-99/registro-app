import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TablaTasasService } from '../../services/tabla-tasas.service';
import { ITablaPagos } from '../../interfaces/pago-otras-tasas.interface';

@Component({
  selector: 'app-ingresados',
  templateUrl: './ingresados.component.html',
  styleUrls: ['./ingresados.component.scss']
})
export class IngresadosComponent {
  constructor(private tablaSrv : TablaTasasService){}
  
  displayedColumns: string[] = ['noboleta','acto','fechaPago','fechaIngreso','descargar'];
  dataSource : MatTableDataSource<ITablaPagos> | undefined;


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
    }
  }

  ngOnInit(): void {
    this.tablaSrv.table$.subscribe(tabla => {
      if (tabla.length > 0) {
        this.tablaSrv.getTablaIngresados().subscribe(ingresados => {
          this.dataSource = new MatTableDataSource(ingresados);
          this.dataSource.paginator = this.paginator;
        })

      }
    });
  }
}
