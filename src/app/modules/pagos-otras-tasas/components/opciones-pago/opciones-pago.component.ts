import { Component } from '@angular/core';
import { PagosTasasService } from '../../services/pagos-tasas.service';

@Component({
  selector: 'app-opciones-pago',
  templateUrl: './opciones-pago.component.html',
  styleUrls: ['./opciones-pago.component.scss']
})
export class OpcionesPagoComponent {
  
  constructor(private pagosSrv : PagosTasasService){}


  submit() {
    this.pagosSrv.getTasaPagada().subscribe(
      data => console.log(data), // Maneja la respuesta exitosa
      error => console.error(error) // Maneja cualquier error
    );
  }
}
