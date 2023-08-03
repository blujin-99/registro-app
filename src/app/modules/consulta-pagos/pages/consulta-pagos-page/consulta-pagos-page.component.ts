import { Component, OnInit } from '@angular/core';
import { PagosService } from '../../services/pagos.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './consulta-pagos-page.component.html',
  styleUrls: ['./consulta-pagos-page.component.scss'],
})
export class ConsultaPagosPageComponent implements OnInit {
  formBusqueda: FormGroup = new FormGroup({});

  displayedColumns: string[] = [
    'tramite',
    'acreditacion',
    'estado',
    'concepto',
    'urgencia',
    'importe',
  ];
  dataSource = new MatTableDataSource();

  constructor(private pagosSrv: PagosService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.formBusqueda = this.fb.group({
      desde: ['', Validators.required],
      hasta: ['', Validators.required],
    });

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
