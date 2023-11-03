export interface ITipoTramiteServicio {
  id: number;
  nombre: string;
  abreviatura?: string;
  prefolio: boolean;
  urlBase?: string;
  new?: string;
  edit?: string;
  view?: string;
  erase?: string;
}

export interface ICategoriaTramite {
  id: number;
  nombre: string;
  abreviatura: string;
  tipoTramiteServicios: ITipoTramiteServicio[];
}
