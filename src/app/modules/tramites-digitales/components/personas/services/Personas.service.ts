import { Injectable } from "@angular/core";
import { IPersonaHumana } from "../../../interfaces/personaHumana";
import { IPJuridica } from "../../../interfaces/IPJuridica";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: "root",
})
export class PersonasService {

  apiUrl = environment.tipoDocumento
  editPersonaH:IPersonaHumana ={}as IPersonaHumana
  validPersonas:boolean=false;

  constructor(private http:HttpClient) {}

  private listaPersona: (IPersonaHumana | IPJuridica)[] = [];

  /**
   * Agrega al Array ListaPersona un array 
   * @param persona 
   */
  add(persona: IPersonaHumana | IPJuridica) {
    
    const index = this.listaPersona.findIndex(p => p === this.editPersonaH);
    if (index !== -1) {       
      this.listaPersona[index] = persona;
      this.editPersonaH = {} as IPersonaHumana;
    } else {
      this.listaPersona.push(persona);
    }
  }

  /**
   * Retorna la lista de Personas
   */
  get personas(): (IPersonaHumana | IPJuridica)[] {
    return this.listaPersona;
  }

  /**
   * Setea lista completa de Personas 
   */
  set personas(personas: (IPersonaHumana | IPJuridica)[]) {
    this.listaPersona = personas;
  }

  /**
   * Remueve del array el objeto persona 
   * @param persona 
   */
  remove(persona: IPersonaHumana | IPJuridica) {
    const index = this.listaPersona.indexOf(persona);
    if (index !== -1) {
      this.listaPersona.splice(index, 1);
    }
  }

  setPersona(persona: IPersonaHumana | IPJuridica, personaModificadad : IPersonaHumana | IPJuridica){
    

  }


  get tipoDocumento(): Observable<any> {
    return this.http.get(this.apiUrl);
  }


}
