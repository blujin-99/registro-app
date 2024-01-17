import { Injectable, Signal } from '@angular/core';
import { IActo } from '../../../interfaces/acto';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActoService {
  datosActo: IActo ={'naturaleza':""};
  actoFormValid: boolean = false;
  
  constructor() {}

  // Método para establecer los datos del acto

  

  set acto(datos: IActo) {
     if(datos.naturaleza.length>0){
        this.datosActo = datos;
        this.ActoValid=true
      }
    
  }

  // Método para obtener los datos del acto
  get acto()
  {
    return this.datosActo;
  }

  set ActoValid(valid: boolean) 
  {
    this.actoFormValid = valid;
  }

  get ActoValid():boolean 
  {
    return this.actoFormValid
  }
}
