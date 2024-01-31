import { Component, OnInit } from '@angular/core';
import { PagosTasasService } from '../../services/pagos-tasas.service';
import { PagoOtrasTasasService } from 'src/app/shared/services/pagoOtrasTasas.service';
import { TablaTasasService } from '../../services/tabla-tasas.service';


@Component({
  selector:'app-pagos-otras-tasas',
  templateUrl: './pagos-otras-tasas-page.component.html',
  styleUrls: ['./pagos-otras-tasas-page.component.scss'],

})
export class PagosOtrasTasasPageComponent implements OnInit {

  panelOpenState = false
  

  constructor(
        private pagoSRV : PagoOtrasTasasService,
        private tablaSrv : TablaTasasService,
        private pagoTasasSrv : PagosTasasService
        ){}
  
  ngOnInit(): void {
    this.pagoSRV.getPagos().subscribe(response => {
      this. pagoTasasSrv.setPagosResponse(response)
    })

    this.pagoSRV.getOtrosPagos().subscribe((response: any) => {
      this.tablaSrv.setTablaTasas(response)
    })
  }
}
