import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ErrorServidorService {

  private errorSubject = new BehaviorSubject<number>(0)
  error$ = this.errorSubject.asObservable()

  setError(error: any,mensaje?: string){
     this.errorSubject.next(error)
  }
}
