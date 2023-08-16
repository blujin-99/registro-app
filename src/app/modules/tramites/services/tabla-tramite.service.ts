import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tramites } from 'src/app/core/mocks/tramites.mock';

@Injectable({
  providedIn: 'root',
})
export class TablaTramiteService {
  constructor() {}

  getTablaPendientes(): Observable<any> {
    return of(Tramites.rows);
  }
}
