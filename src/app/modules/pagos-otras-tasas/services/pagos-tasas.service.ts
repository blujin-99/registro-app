import { Injectable } from '@angular/core';
import { IPagos,IOficiona,IOtrosPago,ITipoSolicitud } from '../interfaces/pago-otras-tasas.interface';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class PagosTasasService {
  
  url  = environment.apiPagosBase
  oficina : IOficiona[] = []
  tipoSolicitud : ITipoSolicitud[] = []
  concepto : IOtrosPago[] = []
  responseObservable = new BehaviorSubject<IPagos | null>(null)
  response$ = this.responseObservable.asObservable()

  constructor(private http: HttpClient){}

   
  getPagos(): Observable<IPagos>{
  return this.http.get<IPagos>(this.url)
  }

   setPagosResponse(values: IPagos){
     this.responseObservable.next(values)
   }

}
