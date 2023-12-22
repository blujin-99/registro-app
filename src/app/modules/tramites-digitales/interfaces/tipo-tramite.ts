import { Modulo } from "./modulo";

export interface TipoTramite {
  id:number,
  nombre: string;
  descripcion: string;
  link?: string;
  linkName?: string;
  link1?: string;
  link1Name?: string;
  modulos?: Modulo[]
}
