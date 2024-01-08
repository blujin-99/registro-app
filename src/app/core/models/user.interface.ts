import { IProfesion } from './profesion.interface';

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
  numeroDocumento: string;
  cuil: string;
  matricula: string;
  profesion?: IProfesion;
}
