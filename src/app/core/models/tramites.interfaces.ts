export interface ICategoria {
  id: number;
  nombre: string;
}

export interface IEstadoTramite {
  id: number;
  descripcion: string;
  tipo: string;
}

export interface IEstadoTasas {
  id: number;
  descripcion: string;
  tipo: string;
}

export interface IJurisdiccion {
  id: number;
  nombre: string;
  tipo:  string;
}

export interface IEstadoExcedentes {
  id: number;
  descripcion: string;
  tipo: string;
}

export interface ITramiteServicio {
  id: number;
  nombre: string;
}
