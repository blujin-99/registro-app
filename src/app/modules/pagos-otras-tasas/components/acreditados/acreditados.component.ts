import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-acreditados',
  templateUrl: './acreditados.component.html',
  styleUrls: ['./acreditados.component.scss']
})
export class AcreditadosComponent {
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
