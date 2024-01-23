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
  conceptoFilter : any = 1
  solicitudFilter : any = 1
  oficinaFilter = signal(this.oficina)
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
     this.conceptoFilter.set(concepto)
     this.solicitudFilter.set(tSolicitud)
     this.oficinaFilter.set(oficina)
   }


   getTasaPagada(){
     const link =`${environment.apiBase}${environment.api.pagoBoleta}`
     .replace('{oficina}', this.oficinaFilter()?.id)
     .replace('{concepto}', this.conceptoFilter().id)
     .replace('{cantidad}', this.conceptoFilter().max)
     .replace('{total}', this.conceptoFilter().max)
     return this.http.get(link)
   }
}
