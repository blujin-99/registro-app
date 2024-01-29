import { Injectable } from '@angular/core';
import { IPersonaHumana } from '../../../interfaces/personaHumana';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonaHumanaService {

  apiUrl = environment.tipoDocumento

  datosPersonaHumana: IPersonaHumana = {
    nombre: '',
    apellido: '',
    tipoDocumento: {id:0, nombre:"", cod:0 },
  };
  phFormValid: boolean = false;

  constructor(private http: HttpClient) {}

  set personaHumana(datos: IPersonaHumana) {
    this.datosPersonaHumana = datos;
  }

  get personaHumana() {
    return this.datosPersonaHumana;
  }

  set personaHumanaValid(valid: boolean) {
    this.phFormValid = valid;
  }

  get personaHumanaValid() : boolean {
    return this.phFormValid;
  }

  get tipoDocumento(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

}
