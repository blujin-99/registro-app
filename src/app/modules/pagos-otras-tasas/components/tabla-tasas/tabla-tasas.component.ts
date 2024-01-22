import { Component } from '@angular/core';
import { PagosTasasService } from '../../services/pagos-tasas.service';
import { switchMap } from 'rxjs';
import { IOtrosPago } from '../../interfaces/pago-otras-tasas.interface';

@Component({
  selector: 'app-tabla-tasas',
  templateUrl: './tabla-tasas.component.html',
  styleUrls: ['./tabla-tasas.component.scss'],
})
export class TablaTasasComponent {

  concepto : IOtrosPago[] | undefined  = []

  constructor(private pagosSrv : PagosTasasService){}

  ngOnInit(): void {

    this.pagosSrv.response$.subscribe(concepto => this.concepto = concepto?.otrosPagos)
  }
}