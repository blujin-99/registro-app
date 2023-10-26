import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PeriodicTaskService {
  constructor() {}

  startPeriodicTask(intervalInMilliseconds: number, task: () => void): void {
    timer(0, intervalInMilliseconds)
      .pipe(
        switchMap(() => {
          task();
          return new Observable<void>((observer) => {
            observer.complete();
          });
        })
      )
      .subscribe();
  }
}
