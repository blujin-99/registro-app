import { Injectable, signal } from '@angular/core';
import { IPagos, IOficina, IOtrosPago, ITipoSolicitud, IErrorObject } from '../interfaces/pago-otras-tasas.interface';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class PagosTasasService {

  url = environment.apiBase + environment.api.pagosTasas
  oficina: IOficina | any = ''
  tipoSolicitud: ITipoSolicitud | any = ''
  concepto: IOtrosPago | any = ''
  private conceptObservable = new BehaviorSubject<IOtrosPago | undefined>(undefined)
  conceptoObs$ = this.conceptObservable.asObservable()
  cantidad: any

  private validOTC = new BehaviorSubject<boolean>(false)
  private validCantidad = new BehaviorSubject<boolean>(false)
  statusOTC$ = this.validOTC.asObservable()
  statusCantidad$ = this.validCantidad.asObservable()


  private valid = new BehaviorSubject<IErrorObject>({ validOTC: false, validCantidad: false })
  validForms$ = this.valid.asObservable()

  responseObservable = new BehaviorSubject<IPagos | null>(null)
  response$ = this.responseObservable.asObservable()

  constructor(private http: HttpClient) { }


  getPagos(): Observable<IPagos> {
    return this.http.get<IPagos>(this.url)
  }

  getTasaPagada() {
    const link = `${environment.apiBase}${environment.api.pagoBoleta}`
      .replace('{oficina}', this.oficina.id)
      .replace('{concepto}', this.concepto.id)
      .replace('{cantidad}', this.cantidad)
    return this.http.get(link)
  }

  getTablaPagos(){
    const link = environment.apiBase + environment.api.pagosTabla
    console.log(link)
    return this.http.get(link)
  }

  setPagosResponse(values: IPagos) {
    this.responseObservable.next(values)
  }

  setPagos(concepto: IOtrosPago, oficina: IOficina, tSolicitud: ITipoSolicitud): void {
    this.concepto = concepto
    this.oficina = oficina
    this.tipoSolicitud = tSolicitud
    this.conceptObservable.next(concepto)
  }

  setCantidadTotal(cantidad: any): void {
    this.cantidad = cantidad
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

  invalid(valid: boolean){
    
  }

  getInvalid(){
    const currentValue = this.valid.value
    let validOTC = currentValue.validOTC
    return validOTC
  }

}
