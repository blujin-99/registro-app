import { Component, OnInit } from '@angular/core';
import { PagosService } from '../../services/pagos.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  templateUrl: './consulta-pagos-page.component.html',
  styleUrls: ['./consulta-pagos-page.component.scss'],
})
export class ConsultaPagosPageComponent implements OnInit {
  displayedColumns: string[] = [
    'tramite',
    'acreditacion',
    'estado',
    'concepto',
    'urgencia',
    'importe',
  ];
  dataSource = new MatTableDataSource();

  constructor(private pagosSrv: PagosService) {}
  ngOnInit(): void {
    this.pagosSrv.getPagos().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
