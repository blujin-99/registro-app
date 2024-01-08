import { Injectable } from '@angular/core';
import { Jurisdiccion } from '../interfaces/jurisdiccion.interface';

@Injectable({
  providedIn: 'root'
})
export class RpService {

  constructor() { }

  jurisdicciones():Jurisdiccion[]{
    return [
      {id:1, nombre:"Santa Fe", pk:'santafe'},
      {id:2, nombre:"Rosario", pk:'rosario'}
    ]
  }

  getJurisdiccion(pk:string):Jurisdiccion| undefined{
    return this.jurisdicciones().find(j => j.pk == pk);
  }

}
