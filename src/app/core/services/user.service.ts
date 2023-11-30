import { Injectable, effect, signal } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUserCas } from '../models/user.interface';
import { environment } from 'src/environments/environment';
import { PeriodicTaskService } from './periodic-task.services';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private MJYDH_REFRESH: string = 'MJYDH_REFRESH';
  private userCas?: IUserCas | null;
  /**
   * @signal observa si el usuario esta logeado o no
   */
  public loggedIn$ = signal<boolean>(false);
  private url = environment.apiBase + environment.api.outhApi;
  private urlLogout = environment.authUrl + environment.auth.logoutUrl;
  private urlLogin =
    environment.authUrl +
    '/service-auth/oauth2.0/authorize?response_type=token&client_id=' +
    environment.auth.clientId +
    '&redirect_uri=' +
    environment.auth.redirectUri;

  constructor(
    private http: HttpClient,
    private location: Location,
    private periodic: PeriodicTaskService
  ) {
    sessionStorage.setItem(this.MJYDH_REFRESH, '0');
  }

  /**
   * Setea la información del usuario en el sessionStorage
   * y en la variable user
   * @param userData
   */
  setUserCas(userData: IUserCas): void {
    sessionStorage.setItem(
      environment.login.mjydh_cas,
      JSON.stringify(userData)
    );
  }

  /**
   * Si existe retorna los datos del usuario
   */
  getUserCas() {
    const userJSON = sessionStorage.getItem(environment.login.mjydh_cas);
    if (userJSON) {
      this.userCas = JSON.parse(userJSON);
      return this.userCas;
    } else {
      return false;
    }
  }
  /**
   * Arma el login para la aplicacion
   * Método de inicio
   */
  initAuth(): void {
    if (!sessionStorage.getItem(environment.login.mjydh_cas)) {
      const token: any = this.getAccessTokenFromUrl();
      if (token) {
        this.setToken(token);
        this.verifToken();
      }
    }
  }

  /**
   * Consulta al Backen por el toquen y setea las cerdenciales
   * @param code
   */
  private verifToken(): void {
    this.validateToken(this.getToken()).subscribe(
      (data: any) => {
        this.setUserCas(data.user.userCas);
        sessionStorage.setItem(environment.login.mjydh_jwt, data.token);
      },
      (error: any) => {
        this.logout();
      }
    );
  }

  /**
   * Retorna el Token devuelto por el CAS
   * @returns access token
   */
  private getAccessTokenFromUrl(): string | null {
    let value = decodeURIComponent(
      this.location.path(true).split('access_token')[1]
    )
      .slice(1)
      .split('&');
    if (value[0]) {
      return value[0];
    }
    return null;
  }
  /**
   * Funcion http para Verificar con el Backend que el Token sea válido
   * @param token
   * @returns
   */
  private validateToken(token: string | null) {
    const body = JSON.stringify({ access_token: token });
    return this.http.post(this.url, body);
  }

  /**
   * Cierra el login
   */
  public logout(): void {
    //this.borroCredenciales().subscribe((data) => console.log(data));
    localStorage.removeItem(environment.login.mjydh_token);
    sessionStorage.removeItem(environment.login.mjydh_cas);
    sessionStorage.removeItem(environment.login.mjydh_jwt);
    sessionStorage.setItem(this.MJYDH_REFRESH, '0');
    /**
     * Redirecciono al Inicio
     */
    window.location.href = environment.authUrl + environment.auth.logoutUrl;
  }

  /**
   * Setea Token del Cas
   * @param token
   */
  private setToken(token: string): void {
    localStorage.setItem(environment.login.mjydh_token, token);
  }
  /**
   * Retorna token del CAS
   * @returns
   */
  public getToken(): string | null {
    return localStorage.getItem(environment.login.mjydh_token);
  }

  /**
   * Dirige al Cas para logueo
   */
  public login(): void {
    if (this.getToken()) {
      this.verifToken();
    } else {
      window.location.replace(this.urlLogin);
    }
  }

  /**
   * Loguot con el CAS - Tiene PRoblemas
   * @returns
   */
  private borroCredenciales() {
    const headers = new HttpHeaders({
      Accept: '*/*',
      'X-Requested-With': 'XMLHttpRequest',
    });
    const options = { headers: headers };
    return this.http.get(this.urlLogout, options);
  }

  public getJWT() {
    return sessionStorage.getItem(environment.login.mjydh_jwt);
  }

  public refreshToken(): void {
    this.periodic.startPeriodicTask(environment.login.mjydh_refresh, () => {
      this.getToken() ? this.verifToken() : '';
    });
  }
}
