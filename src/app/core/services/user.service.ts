import { Injectable, computed, signal, effect } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser, IUserCas } from '../models/user.interface';
import { environment } from 'src/environments/environment';
import { PeriodicTaskService } from './periodic-task.services';
import { AuthStatus } from '../models';
import { Observable, catchError, map, of } from 'rxjs';
import { LoadingService } from './loading.service';
import { StorageService } from './storage.service';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
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
    private periodic: PeriodicTaskService,
    private loadingSrv: LoadingService,
    private storageSrv: StorageService,
    private router: Router
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
    this.storageSrv.userCas=userData
  }

  /**
   * Si existe retorna los datos del usuario
   */
  getUserCas() {
    if (this.storageSrv.userCas) {
      return this.storageSrv.userCas ;
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
      this.storageSrv.user=user
    }

    /**
   * Si existe retorna los datos del cuidadano
   */
  getUserFD() {
    if (this.storageSrv.user) {
      return this.storageSrv.user;
    } else {
      return false;
    }
  }

  /**
   * Arma el login para la aplicacion
   * Método de inicio
   */
  initAuth(): void {
    if (!this.storageSrv.userCas) {
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
        this.JWT(data.token)
        this.authStatus.set(AuthStatus.authenticated);
      }),
      catchError((error) => {
        console.log(error.error)
        this.storageSrv.clear()
        this.authStatus.set(AuthStatus.notAuthenticated);
        this.storageSrv.unauthorized=true
        return of(false);
      })
    );
  }

  /**
   * Consulta al Backen por el toquen y setea las cerdenciales
   * @param code
   */
  private verifToken(): void {
    this.validateToken(this.getToken()).subscribe(
    );
  }

  /**
   * Cierra el login
   */
  public logout(): void {
    this.storageSrv.clear()
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
    this.storageSrv.token= token
  }
  /**
   * Retorna token del CAS
   * @returns
   */
  public getToken(): string  {
    return this.storageSrv.token ;
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
    return this.storageSrv.JWT;
  }

  public JWT(value:string){
    this.storageSrv.JWT=value
  }

  public refreshToken(): void {
    this.periodic.startPeriodicTask(environment.login.mjydh_refresh, () => {
      this.loadingSrv.showModal=false
      this.getToken() ? this.verifToken() : ''
    });
  }

  get unauthorized():boolean{
    return this.storageSrv.unauthorized
  }
}
