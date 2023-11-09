import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategoriaTramite } from 'src/app/core/models';
import { environment } from 'src/environments/environment';

@Injectable()
export class NewTramiteService {
  url = environment.apiBase;

  constructor(private http: HttpClient) {}

  getSRD(): Observable<ICategoriaTramite[]> {
    return this.http.get<ICategoriaTramite[]>(
      this.url + environment.api.newTramite
    );
  }

  
}
