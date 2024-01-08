export interface Mesa {
  ok: boolean,
  presentado: string,
  tramite: string,
  fechaingreso: string,
  tipodocumento: string,
  tipoentrada: string,
  salida: boolean,
  fechasalida: string,
  tiposalida: string,
  casillero: string
}

export interface Consulta {
  fecha : string,
  aforo : string,
  mesa: string
}
