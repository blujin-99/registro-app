export interface IPersonaHumana {
  nombre: string;
  apellido: string;
  tipoDocumento: ITipoDocumento;
}

export interface ITipoDocumento{
  cod: number,
  id: number,
  nombre: string
}