import { Injectable, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ErrorServidorService {

  
  private errorSubject = new BehaviorSubject<any[]>([])
  error$ = this.errorSubject.asObservable()
  errorRequest : any[] = []
  
  setError(error: any,mensaje?: string){
    this.errorRequest.push({error:error, message:mensaje})
     this.errorSubject.next(this.errorRequest)
  }

  setResponseError(id:number){
    this.errorRequest.splice(id,1)
    this.errorSubject.next(this.errorRequest)
  }
}
