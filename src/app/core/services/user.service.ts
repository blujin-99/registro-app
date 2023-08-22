import { Injectable, effect, signal } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  /**
   * objeto usuario
   */
  private user?: IUser;

  /**
   * @signal observa si el usuario esta logeado o no
   */
  public loggedIn$ = signal<boolean>(false);

  private url = 'http://10.1.46.32:8181/registropropiedad/public/login/oauth';

  constructor(private http: HttpClient, private location: Location) {}

  /**
   * Setea la información del usuario en el localStorage
   * y en la variable user
   * @param userData
   */
  setUser(userData: any): void {
    this.user = {
      nombre: userData.user.nombre,
      apellido: userData.user.apellido,
      documento: userData.user.numero_documento,
      cuil: userData.user.cuil,
      matricula: userData.user?.matricula,
      email: userData.cas?.email,
      foto: userData.cas?.foto,
    };

    localStorage.setItem('user', JSON.stringify(this.user));
  }

  /**
   * Si existe retorna los datos del usuario
   */
  getUser(): any {
    const userJSON = localStorage.getItem('user');

    if (userJSON) {
      this.user = JSON.parse(userJSON);

      return this.user;
    } else {
      return null;
    }
  }

  initAuth(): void {
    if (!localStorage.getItem('user')) {
      const code: any = this.getAccessTokenFromUrl();
      localStorage.setItem('access_token', code);
      this.validateToken(code).subscribe((data: any) => {
        this.setUser(data);
        localStorage.setItem('jwt', data.jwt);
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
