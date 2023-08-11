import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatchinErrorService {

  constructor() { }
    
  private errorSubject = new BehaviorSubject <number | null>(null)
  error$ = this.errorSubject.asObservable();

  showError(errorStatus: any) {
    this.errorSubject.next(errorStatus);
  }

  clearError(){
    this.errorSubject.next(null)
  }
}
