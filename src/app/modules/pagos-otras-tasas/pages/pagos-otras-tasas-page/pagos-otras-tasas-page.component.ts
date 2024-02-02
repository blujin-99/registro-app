import { Component, OnInit } from '@angular/core';
import { PagosTasasService } from '../../services/pagos-tasas.service';
import { PagoOtrasTasasService } from 'src/app/shared/services/pagoOtrasTasas.service';
import { TablaTasasService } from '../../services/tabla-tasas.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorServidorService } from 'src/app/shared/components/error-servidor/error-servidor.service';


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
        private pagoTasasSrv : PagosTasasService,
        private errorServidorSrv: ErrorServidorService
        ){}
  
  ngOnInit(): void {
    this.pagoSRV.getPagos().subscribe(
      (response) => {
      this. pagoTasasSrv.setPagosResponse(response)
    },
    (error:HttpErrorResponse)=>{
      this.errorServidorSrv.setError(error,'No se pudo procesar la información de Nuevo Pago, Intente más tarde',false)
    }
    
    )

    this.pagoSRV.getOtrosPagos().subscribe(
      (response: any) => {
      this.tablaSrv.setTablaTasas(response)
      },
      (error:HttpErrorResponse) => {
      //   this.errorServidorSrv.setError(error,'Problemas de Servidor. La información de los pagos no está disponible, intente más tarde',false)
      }
    
    
    )
  }
}
