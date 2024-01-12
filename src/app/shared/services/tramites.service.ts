import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAction, ITramite } from 'src/app/core/models';



@Injectable({
  providedIn: 'root'
})
export class TramitesService {
  env = environment;

  constructor(private http: HttpClient) {}

  getTramites() {
    return this.http.get<ITramite[]>(this.env.apiBase + this.env.api.tramites);
  }

  getTramiteActions(id: number) : Observable<IAction[]> {
    return this.http.get<IAction[]>(this.env.apiBase + this.env.api.actions.replace("{codigo}", id.toString()));
  }

}
