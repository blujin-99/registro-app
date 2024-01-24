import { Injectable, signal } from '@angular/core';
import { IPagos,IOficiona,IOtrosPago,ITipoSolicitud } from '../interfaces/pago-otras-tasas.interface';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class PagosTasasService {
  
  url  = environment.apiBase + environment.api.pagosTasas
  oficina : IOficiona | any = ''
  tipoSolicitud : ITipoSolicitud | any = ''
  concepto : IOtrosPago | any = ''
  private conceptObservable = new BehaviorSubject<IOtrosPago | undefined>(undefined)
  conceptoObs$ = this.conceptObservable.asObservable()
  total : any
  cantidad : any

  responseObservable = new BehaviorSubject<IPagos | null>(null)
  response$ = this.responseObservable.asObservable()

  constructor(private http: HttpClient){}

   
  getPagos(): Observable<IPagos>{
  return this.http.get<IPagos>(this.url)
  }

   setPagosResponse(values: IPagos){
     this.responseObservable.next(values)
   }

   setPagos(concepto : IOtrosPago, oficina : IOficiona, tSolicitud : ITipoSolicitud): void{
      this.concepto = concepto
      this.oficina = oficina
      this.tipoSolicitud = tSolicitud
      this.conceptObservable.next(concepto)
   }

   setCantidadTotal(total : any, cantidad :any):void{
     this.total = total
     this.cantidad = cantidad
   }

   validForms(){
    if(this.concepto || this.oficina || this.tipoSolicitud || this.total || this.cantidad){
       return true
    }else{
      return false
    }
   }
   
   getTasaPagada(){
     const link =`${environment.apiBase}${environment.api.pagoBoleta}`
     .replace('{oficina}', this.oficina.id)
     .replace('{concepto}', this.concepto.id)
     .replace('{cantidad}', this.cantidad)
     .replace('{total}', this.total)
     return this.http.get(link)
   }
}
