import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaMesaEntradaService {
  
  constructor(private http : HttpClient){}

  getHttp() {
    return this.http.get('https://www.santafe.gob.ar/estadotramiterg/consulta')
  }
}
