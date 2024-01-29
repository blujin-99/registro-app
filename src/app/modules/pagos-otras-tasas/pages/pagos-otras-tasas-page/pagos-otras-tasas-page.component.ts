import { Component, OnInit } from '@angular/core';
import { PagosTasasService } from '../../services/pagos-tasas.service';


@Component({
  templateUrl: './pagos-otras-tasas-page.component.html',
  styleUrls: ['./pagos-otras-tasas-page.component.scss'],
  providers: [PagosTasasService],
})
export class PagosOtrasTasasPageComponent implements OnInit {

  constructor(private pagoSRV : PagosTasasService){}
  
  ngOnInit(): void {
    this.pagoSRV.getPagos().subscribe(response => {
      this.pagoSRV.setPagosResponse(response)
    })

    this.pagoSRV.getTablaPagos().subscribe(response => {
      response
    })
  }
}
