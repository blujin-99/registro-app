import { Component, OnInit } from '@angular/core';
import { TablaTramiteService } from '../../services/tabla-tramite.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabla-pendientes',
  templateUrl: './tabla-pendientes.component.html',
  styleUrls: ['./tabla-pendientes.component.scss'],
})
export class TablaPendientesComponent implements OnInit {
  displayedColumns: string[] = [
    'TRAMITE',
    'NÚMERO DE FORMULARIO',
    'JURISDICCIÓN',
    'ESTADO TASAS',
    'ESTADO EXCEDENTES',
  ];
  dataSource = new MatTableDataSource();
  pendientes!: any;

  constructor(private tablaSrv: TablaTramiteService) {}
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
