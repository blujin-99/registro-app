import { Injectable } from '@angular/core';
import { IPagosFiltros, IErrorObject } from '../interfaces/pago-otras-tasas.interface';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class PagosTasasFormService {

  private validOTC = new BehaviorSubject<boolean>(false)
  private validCantidad = new BehaviorSubject<boolean>(false)
  statusOTC$ = this.validOTC.asObservable()
  statusCantidad$ = this.validCantidad.asObservable()


  private valid = new BehaviorSubject<IErrorObject>({ validOTC: false, validCantidad: false })
  validForms$ = this.valid.asObservable()

  responseFiltrosObservable = new BehaviorSubject<IPagosFiltros | null>(null)
  responseFiltros$ = this.responseFiltrosObservable.asObservable()

  constructor(private http: HttpClient) { }

  setPagosFiltrosResponse(values: IPagosFiltros) {
    this.responseFiltrosObservable.next(values)
  }

  setValidOTC(form: boolean) {
    const currentValue = this.valid.value;
    this.valid.next({
      ...currentValue,
      validOTC: form
    });
  }

  setValidCantidad(form: boolean) {
    const currentValue = this.valid.value;
    this.valid.next({
      ...currentValue,
      validCantidad: form
    });
  }



  getInvalid(){
    const currentValue = this.valid.value
    let validOTC = currentValue.validOTC
    return validOTC
  }

}
