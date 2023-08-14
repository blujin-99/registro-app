import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ConsultaApiUrl } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class ConsultaMesaEntradaService {
  
  constructor(private http : HttpClient){}

/** @function
 *  obtiene lo datos del formulario fecha, aforo, mesa y luego devuleve 
 * un petición http de consulta mesa de mesa de entrada
 */

  setConsulta(fecha: any, aforo: any, mesa: any) {
    const consultaUrl = `${ConsultaApiUrl.api}?fecha=${fecha}&aforo=${aforo}&mesa=${mesa}`;
    return this.http.get(consultaUrl)
  }


 
}
  

