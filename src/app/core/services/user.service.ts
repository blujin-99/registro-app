import { Injectable, effect, signal } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { IUser, IUserCas } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  /**
   * objeto usuario
   */
  private user?: IUser;
  private userCas?: IUserCas;


  /**
   * @signal observa si el usuario esta logeado o no
   */
  public loggedIn$ = signal<boolean>(false);

  private url = 'http://localhost/registropropiedad/public/api/login/oauth';

  constructor(private http: HttpClient, private location: Location) {}

  /**
   * Setea la información del usuario en el localStorage
   * y en la variable user
   * @param userData
   */
  setUserCas(userData: IUserCas): void {
    this.userCas = {
      nombre: userData.nombre,
      apellido: userData.apellido,
      cuil: userData.cuil,
      email: userData.email,
      foto: userData.foto,
    };

    localStorage.setItem('userCas', JSON.stringify(this.userCas));
  }
  setUser(userFD: IUser): void {
    this.user = {
      nombre: userFD.nombre,
      apellido: userFD.apellido,
      numero_documento: userFD.numero_documento,
      cuil: userFD.cuil,
      matricula: userFD.matricula,
    };

    localStorage.setItem('user', JSON.stringify(this.user));
  }

  /**
   * Si existe retorna los datos del usuario
   */
  getUserCas(): any {
    const userJSON = localStorage.getItem('userCas');

    if (userJSON) {
      this.user = JSON.parse(userJSON);
      return this.user;
    } else {
      return null;
    }
  }
  getUser(): any {
    const userJSON = localStorage.getItem('user');

    if (userJSON) {
      this.user = JSON.parse(userJSON);
      return this.user
    } else {
      return null;
    }
  }

  initAuth(): void {
    if (!localStorage.getItem('user')) {
      const code: any = this.getAccessTokenFromUrl();
      this.validateToken(code).subscribe((data: any) => {
        console.log(data);
        this.setUserCas(data.user.userCas);
        this.setUser(data.user.userFD);
        localStorage.setItem('token', data.token);
      });
    }
  }

  /**
   * @returns access token
   */
  private getAccessTokenFromUrl(): string | null {
    const queryParams = this.location.path(true).split('#')[1];
    const params = new URLSearchParams(queryParams);
    return params.get('access_token');
  }

  private validateToken(params: any) {
    const body = JSON.stringify({ access_token: params });
    return this.http.post(this.url, body);
  }
}
