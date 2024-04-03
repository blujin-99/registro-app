import { Injectable} from '@angular/core';
import { IPagosFiltros, IOficina, IOtrosPago, ITipoSolicitud, ITablaPagos } from 'src/app/modules/pagos-otras-tasas/interfaces/pago-otras-tasas.interface';
import { BehaviorSubject, Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class PagoOtrasTasasService {

  url = environment.apiBase + environment.api.pagosOpciones
  oficina: IOficina | any = ''
  tipoSolicitud: ITipoSolicitud | any = ''
  concepto: IOtrosPago | any = ''
  private conceptObservable = new BehaviorSubject<IOtrosPago | undefined>(undefined)
  conceptoObs$ = this.conceptObservable.asObservable()
  cantidad: any

  constructor(private http: HttpClient) { }

  setCantidadTotal(cantidad: any): void {
    this.cantidad = cantidad
  }

  setPagos(concepto: IOtrosPago, oficina: IOficina, tSolicitud: ITipoSolicitud): void {
    this.concepto = concepto
    this.oficina = oficina
    this.tipoSolicitud = tSolicitud
    this.conceptObservable.next(concepto)
  }

  //obtiene los nodos para concepto, oficina, tSolicitud para el formulario de único pago
  getFiltros(): Observable<IPagosFiltros> {
    return this.http.get<IPagosFiltros>(this.url)
  }

  // obtiene los datos necesarios una vez el usuario llena el formulario para un pago
  //y los manda por rest y obtiene la respuesta
  getOtrosPagos() {
    const link = `${environment.apiBase}${environment.api.pagoBoleta}`
      .replace('{oficina}', this.oficina.id)
      .replace('{concepto}', this.concepto.id)
      .replace('{cantidad}', this.cantidad)
    return this.http.get(link)
  }

  getTablaPagos() : Observable<ITablaPagos[]>{
    const link = environment.apiBase + environment.api.pagosOtrosPagos
    return this.http.get<ITablaPagos[]>(link)
  }
}
