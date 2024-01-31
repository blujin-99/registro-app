import { Component, OnInit } from '@angular/core';
import { PagosTasasService } from '../../services/pagos-tasas.service';
import { IErrorObject } from '../../interfaces/pago-otras-tasas.interface';
import { PagoOtrasTasasService } from 'src/app/shared/services/pagoOtrasTasas.service';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-opciones-pago',
  templateUrl: './opciones-pago.component.html',
  styleUrls: ['./opciones-pago.component.scss']
})
export class OpcionesPagoComponent implements OnInit {

  showError: IErrorObject = { validOTC: false, validCantidad: false }

  noSended: boolean = false

  constructor(
    private pagosSrv: PagosTasasService,
    private pagoTasas : PagoOtrasTasasService
    ) { }

  ngOnInit(): void {
    this.pagosSrv.validForms$.subscribe(values => {
      this.showError = values
    })
  }

  submit() {
    if (this.showError.validOTC && this.showError.validCantidad) {
      this.noSended = false
      this.pagoTasas.getOtrosPagos().subscribe(
        data => data,
        error => console.error(error)
      );
    } else {
      this.noSended = true
    }
  }

  close() {
    this.noSended = false
  }
}
