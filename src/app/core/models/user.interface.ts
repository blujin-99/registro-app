export interface IUserCas {
  cuil: string;
  nombre: string;
  apellido: string;
  email: string;
  foto?: string;
}

export interface IUser {
  nombre: string;
  apellido: string;
  numero_documento: string;
  cuil: string;
  matricula: string;
}
