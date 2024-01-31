import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ITablaPagos } from '../interfaces/pago-otras-tasas.interface';
import { BehaviorSubject, Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TablaTasasService {

//---------------------------------------
  //TO DO 

  //TABLAS 
  //---------------------------------------
  // **PAGOS PENDIENTES PROPIEDADES

  // noboleta,acto, cantidad, monto, oficina:nombre, idJurisdiccion, boton pagar, noboleta

  // **ACREDITADOS PROPIEDADES
     
  // noboleta acto, fechaPago,codBarra, fechaAcreditado, monto, total


  // **iNGRRESADO

   // acto, adminIngreso, comprobante,fechaIngreso, , download PDF boton
//---------------------------------------

  private dataTable = new BehaviorSubject<ITablaPagos[]>([])
  table$ = this.dataTable.asObservable()
 
  constructor(private http : HttpClient) { }
  

  setTablaTasas(tabla: ITablaPagos[]){
    this.dataTable.next(tabla)
  }

  getTablaPagosPendientes(): Observable<ITablaPagos[]>{
    return this.dataTable.pipe(
      map(pagos => {
        return pagos.filter(pendientes => {
           return (pendientes.fechaAcreditado == null && pendientes.fechaIngreso == null)
        })
      })
    )
  }

  getTablaAcreditados(): Observable<ITablaPagos[]>{
    return this.dataTable.pipe(
      map(pagos => {
        return pagos.filter(acreditados => {
           return (acreditados.fechaAcreditado !== null)
        })
      })
    )
  }

  getTablaIngresados(): Observable<ITablaPagos[]>{
    return this.dataTable.pipe(
      map(pagos => {
        return pagos.filter(ingresados => {
           return (ingresados.fechaIngreso !== null && ingresados.ingresado !== null)
        })
      })
    )
  }
}
