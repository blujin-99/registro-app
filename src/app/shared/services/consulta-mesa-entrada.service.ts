import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaMesaEntradaService {
  
  constructor(private http : HttpClient){}
  
  private errorSubject = new BehaviorSubject <string | null>(null)
  error$ = this.errorSubject.asObservable();

  getHttp() {
    return this.http.get('http:/example-api.com/data')
  }

  showError(errorStatus: any) {
    this.errorSubject.next(errorStatus);
  }

  clearErro(){
    this.errorSubject.next(null)
  }
}
