import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ErrorServidorService {

  private errorSubject = new BehaviorSubject<any>({})
  error$ = this.errorSubject.asObservable()

  setError(error: any,mensaje?: string, form? : boolean){
     const errorRequest = {error:error, message:mensaje,form:form}
     this.errorSubject.next(errorRequest)
  }

  setResponseError(value:any){
    this.errorSubject.next(null)
  }
}
