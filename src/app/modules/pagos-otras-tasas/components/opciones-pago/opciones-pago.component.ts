import { Component } from '@angular/core';
import { PagosTasasService } from '../../services/pagos-tasas.service';

@Component({
  selector: 'app-opciones-pago',
  templateUrl: './opciones-pago.component.html',
  styleUrls: ['./opciones-pago.component.scss']
})
export class OpcionesPagoComponent {
  
  constructor(private pagosSrv : PagosTasasService){}
  
  valid : boolean = true

  submit() {
     this.valid = this.pagosSrv.validForms()
    if(this.valid){
      this.pagosSrv.getTasaPagada().subscribe(
        data => data,
        error => console.error(error)
      );
    }
  }
}
