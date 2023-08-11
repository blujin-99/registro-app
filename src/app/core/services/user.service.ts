import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user?: IUser;

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
  getUser(): IUser | undefined {
    if (!this.user) {
      this.user = JSON.parse(localStorage.getItem('user') || '{}');
    }
    return this.user;
  }

  /**
   * Obtiene el token de acceso desde la url
   * y lo guarda en el localStorage
   *
   */
  initAuth(): void {
    const code: any = this.getAccessTokenFromUrl();
    localStorage.setItem('access_token', code);
    this.validateToken(code).subscribe((data: any) => {
      this.setUser(data);
      localStorage.setItem('jwt', data.jwt);
      console.log(data);
    });
  }

  /**
   *
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
