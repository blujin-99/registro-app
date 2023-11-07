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
  tipo: string;
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

export interface IAction {
  action: string;
  link: string;
}

export interface ITipoTramite {
  id: number;
  nombre: string;
  abreviatura: string;
  tipoTramiteServicios: ITramiteServicio;
}

export interface ITramite {
  fecha_inicio: string;
  fecha_presentacion: string;
  fecha_recepcion: string;
  codigo_tramite: number;
  aforo: string;
  aforoAnio: string;
  modulo: string;
  EstadoTramite: IEstadoTramite;
  Jurisdiccion: IJurisdiccion;
  EstadoExcedentes: IEstadoExcedentes;
  EstadoApi: any;
  EstadoTasas: IEstadoTasas;
  TipoTramiteServicio: ITramiteServicio;
  codigoOperacion: number;
}

export interface IFiltros {
  estadoExcedente: IEstadoExcedentes[];
  estadoTasas: IEstadoTasas[];
  estadoTramite: IEstadoTramite[];
  jurisdiccion: IJurisdiccion[];
  tipoTramites: ITipoTramite[];
}
