import { Injectable, computed, signal, effect } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser, IUserCas } from '../models/user.interface';
import { environment } from 'src/environments/environment';
import { PeriodicTaskService } from './periodic-task.services';
import { AuthStatus } from '../models';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private MJYDH_REFRESH: string = 'MJYDH_REFRESH';
  private userCas?: IUserCas | null;
  private user?: IUser | null;
  private baseStorage: string = environment.env+environment.app.key
  public currentUrl = '';

  public authStatus = signal<AuthStatus>(AuthStatus.checking);

  private url = environment.apiBase + environment.api.outhApi;
  private urlLogout = environment.authUrl + environment.auth.logoutUrl;
  public urlLogin =
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
    effect(
      () => {
        this.authStatus();
      },
      {
        allowSignalWrites: true,
      }
    );
  }

  /**
   * Setea la información del usuario en el sessionStorage
   * y en la variable user
   * @param userData
   */
  setUserCas(userData: IUserCas): void {
    sessionStorage.setItem(
      this.baseStorage+environment.login.mjydh_cas,
      JSON.stringify(userData)
    );
  }

  /**
   * Si existe retorna los datos del usuario
   */
  getUserCas() {
    const userJSON = sessionStorage.getItem(this.baseStorage+environment.login.mjydh_cas);
    if (userJSON) {
      this.userCas = JSON.parse(userJSON);
      return this.userCas;
    } else {
      return false;
    }
  }

    /**
   * Setea la información del cuidadano
   * y en la variable user
   * @param user
   */
    setUserFD(user: IUser): void {
      sessionStorage.setItem(
        this.baseStorage+"_user",
        JSON.stringify(user)
      );
    }

    /**
   * Si existe retorna los datos del cuidadano
   */
  getUserFD() {
    const userJSON = sessionStorage.getItem(this.baseStorage+"_user");
    if (userJSON) {
      this.user = JSON.parse(userJSON);
      return this.user;
    } else {
      return false;
    }
  }

  /**
   * Arma el login para la aplicacion
   * Método de inicio
   */
  initAuth(): void {
    if (!sessionStorage.getItem(this.baseStorage+environment.login.mjydh_cas)) {
      const token: any = this.getAccessTokenFromUrl();
      if (token) {
        this.setToken(token);
        this.verifToken();
      }
    }
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
    return this.http.post(this.url, body).pipe(
      map((data: any) => {
        this.setUserCas(data.user.userCas);
        this.setUserFD(data.user.userFD);
        this.setToken(data.token)
        this.authStatus.set(AuthStatus.authenticated);
      }),
      catchError(() => {
        this.clearStorage()
        this.authStatus.set(AuthStatus.notAuthenticated);
        return of(false);
      })
    );
  }

  /**
   * Consulta al Backen por el toquen y setea las cerdenciales
   * @param code
   */
  private verifToken(): void {
    this.validateToken(this.getToken()).subscribe();
  }

  /**
   * Cierra el login
   */
  public logout(): void {
   this.clearStorage();    
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
    localStorage.setItem(this.baseStorage+environment.login.mjydh_token, token);
  }
  /**
   * Retorna token del CAS
   * @returns
   */
  public getToken(): string | null {
    return localStorage.getItem(this.baseStorage+environment.login.mjydh_token);
  }

  /**
   * Dirige al Cas para logueo
   */
  public login(): void {
    if (this.getToken()) {
      this.verifToken();
      this.authStatus.set(AuthStatus.authenticated);
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
    return localStorage.getItem(this.baseStorage+environment.login.mjydh_jwt);
  }

  public refreshToken(): void {
    this.periodic.startPeriodicTask(environment.login.mjydh_refresh, () => {
      this.getToken() ? this.verifToken() : '';
    });
  }

  private clearStorage(){
    sessionStorage.removeItem(this.baseStorage+environment.login.mjydh_cas);
    localStorage.removeItem(this.baseStorage+ environment.notificacion.nombre)
    localStorage.removeItem(this.baseStorage+environment.login.mjydh_jwt);    
    localStorage.removeItem(this.baseStorage+environment.login.mjydh_token);
    localStorage.removeItem(this.baseStorage+'url');
  }
    
  
}
