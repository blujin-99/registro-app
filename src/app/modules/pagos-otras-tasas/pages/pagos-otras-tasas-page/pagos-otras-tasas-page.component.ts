import { Component, OnInit } from '@angular/core';
import { PagosTasasService } from '../../services/pagos-tasas.service';
import { TablaTasasService } from '../../services/tabla-tasas.service';


@Component({
  templateUrl: './pagos-otras-tasas-page.component.html',
  styleUrls: ['./pagos-otras-tasas-page.component.scss'],
  providers: [PagosTasasService],
})
export class PagosOtrasTasasPageComponent implements OnInit {

  panelOpenState = false
  

  constructor(private pagoSRV : PagosTasasService, private tablaSrv : TablaTasasService){}
  
  ngOnInit(): void {
    this.pagoSRV.getPagos().subscribe(response => {
      this.pagoSRV.setPagosResponse(response)
    })

    this.tablaSrv.getTablaPagos().subscribe(response => {
      this.tablaSrv.setTablaTasas(response)
    })
  }
}
