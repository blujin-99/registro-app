import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  showModal:boolean = true;
  isLoading$ = new Subject<boolean>();

  show():void{
    if(this.showModal){
      this.isLoading$.next(true);
    }
  }

  close(): void{
    (this.showModal)?  this.isLoading$.next(false):this.showModal=true
  }
}
