import { IModulo } from "./modulo";

export interface ITipoTramite {
  id:number,
  nombre: string;
  descripcion: string;
  link?: string;
  linkName?: string;
  link1?: string;
  link1Name?: string;
  modulos?: IModulo[]
}
