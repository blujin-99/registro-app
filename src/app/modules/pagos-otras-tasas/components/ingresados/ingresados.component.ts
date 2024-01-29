import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-ingresados',
  templateUrl: './ingresados.component.html',
  styleUrls: ['./ingresados.component.scss']
})
export class IngresadosComponent {
  constructor(){}
  
  displayedColumns: string[] = ['info', 'nombre'];
  dataSource = new MatTableDataSource([{
    info: 'algo',
    name :'juana'
  },
  {
    info: 'algo',
    name :'pablo'
  },
  {
    info: 'algo',
    name :'pedro'
  }])

  alert: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
