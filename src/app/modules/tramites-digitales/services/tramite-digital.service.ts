import { Injectable } from '@angular/core';
import { IModulo } from '../interfaces/modulo';
import { TipoTramite } from '../interfaces/tipo-tramite';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TramiteDigitalService {

  modulo1:IModulo;
  modulo2:IModulo;
  modulo3:IModulo;
  url : string ="";

  constructor(private http:HttpClient) {
    this.modulo1 = {id:1,pk:"dominio",nombre:"Dominio",abreviatura:"Dominio",descripcion:"Dominio"};
    this.modulo2 = {id:2,pk:"gravamenes",nombre:"Gravámenes",abreviatura:"Gravámenes",descripcion:"Gravámenes"};
    this.modulo3 = {id:3,pk:"inhibiciones",nombre:"Inhibiciones",abreviatura:"Inhibiciones",descripcion:"Inhibiciones"};
  }

  getTipoTramites():TipoTramite[]{
    return [
      {id:1,nombre:"Inscripción de declaratoria de herederos", descripcion:"Inscripción de las declaratorias de herederos dictadas en un proceso sucesorio y en tanto haya bienes inmuebles que compongan el acervo hereditario.", link:"declaratoria/inscripcion", linkName:"Inscripción", link1:"declaratoria/modificacion", link1Name:"Modificación"},
      {id:9,nombre:"Subsistencia de declaratoria de herederos", descripcion:"Subsistencia de las declaratorias de herederos dictadas en un proceso sucesorio y en tanto haya bienes inmuebles que compongan el acervo hereditario." ,link:"/subsistencia",linkName:"Ingresar" },
      {id:5,nombre:"Completo ", descripcion:"Subsistencia de dominio, gravámenes, medidas cautelares e inhibiciones (libre disposición de las personas).",modulos:[this.modulo1,this.modulo2,this.modulo3]},
      {id:2,nombre:"Parcial", descripcion:"Subsistencia de dominio (sólo titularidad), derechos y acciones, afectación de vivienda, ley Pierri y prehorizontalidad .", modulos:[this.modulo1]},
      {id:4,nombre:"Parcial Inhibiciones", descripcion:"Informa respecto de la libre disponibilidad de las personas.", link:"parcialInhibiciones", linkName:"Informe", modulos:[this.modulo3]},
      {id:6,nombre:"Parcial", descripcion:"Subsistencia de dominio, gravámenes y medidas cautelares.", modulos:[this.modulo1,this.modulo2]},
      {id:3,nombre:"Parcial Gravámenes", descripcion:"Subsistencia de gravámenes.",link:"/tramite/informe/3", linkName:"Informe", modulos:[this.modulo2]},
      {id:7,nombre:"General (Dom/Inh)", descripcion:"Modulos", modulos:[this.modulo1,this.modulo3]},
      {id:8,nombre:"General (Grav/Inh)", descripcion:"Modulos", modulos:[this.modulo2,this.modulo3]},
      {id:10,nombre:"Minuta Anulacion", descripcion:"Minuta Anulacion." ,link:"anulacion",linkName:"Anulación" },
    ]
  }

  addTramite(param:any){
    return this.http.post(this.url, param)
  }
  editTramite(idTramite:string, param:any){
    return this.http.put(this.url+idTramite,param)
  }

  deleteTramite(idTramite:string){
    return this.http.delete(this.url+idTramite)
  }

  searchTramite(idTramite:string){
    return this.http.get(this.url+idTramite)
  }


  
}
