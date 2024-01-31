import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TablaTasasService } from '../../services/tabla-tasas.service';
import { ITablaPagos } from '../../interfaces/pago-otras-tasas.interface';

@Component({
  selector: 'app-acreditados',
  templateUrl: './acreditados.component.html',
  styleUrls: ['./acreditados.component.scss']
})
export class AcreditadosComponent {

  constructor(private tablaSrv : TablaTasasService){}
  
  displayedColumns: string[] = ['noboleta','acto','fechaPago','fechaAcreditado','descargar'];
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
        this.tablaSrv.getTablaAcreditados().subscribe(acreditados => {
          this.dataSource = new MatTableDataSource(acreditados);
          this.dataSource.paginator = this.paginator;
        })
      }
    });
  }
}
