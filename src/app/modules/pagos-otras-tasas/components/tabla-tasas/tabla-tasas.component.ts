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

  concepto : IOtrosPago | undefined  = undefined

  constructor(private pagosSrv : PagosTasasService){}

  ngOnInit(): void {

     this.concepto = this.pagosSrv.conceptoFilter()
    console.log(this.concepto)
  }
}