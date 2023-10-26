import { Injectable, effect, signal } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser, IUserCas } from '../models/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  /**
   * objeto usuario
   */
  private user?: IUser;
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
    environment.redirectUri;

    private checklogin = false;
  constructor(private http: HttpClient, private location: Location) {}

  /**
   * Setea la información del usuario en el localStorage
   * y en la variable user
   * @param userData
   */
  setUserCas(userData: IUserCas): void {
    localStorage.setItem('MJYDH_CAS', JSON.stringify(userData));
  }

  /**
   * Si existe retorna los datos del usuario
   */
  getUserCas() {
    if(!this.checklogin){
      this.checklogin = true;
    };

    const userJSON = localStorage.getItem('MJYDH_CAS');

    if (userJSON) {
      this.userCas = JSON.parse(userJSON);
      return this.userCas;
    } else {
      return false;
    }
  }

  initAuth(): void {
    if (!localStorage.getItem('MJYDH_CAS')) {
      const code: any = this.getAccessTokenFromUrl();
      if (code) {
        this.validateToken(code).subscribe((data: any) => {
          this.setUserCas(data.user.userCas);
          localStorage.setItem('MJYDH_JWT', data.token);
        });
      }
    }
  }

  /**
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

  private validateToken(params: any) {
    const body = JSON.stringify({ access_token: params });
    return this.http.post(this.url, body);
  }

  public logout() {
    this.borroCredenciales().subscribe((data) => console.log(data));
    localStorage.removeItem('MJYDH_CAS');
    localStorage.removeItem('MJYDH_JWT');
    //window.location.href = this.urlLogout;
  }

  public login() {
    window.location.replace(this.urlLogin);
  }

  private borroCredenciales() {
    console.log(this.urlLogout);
    const headers = new HttpHeaders({
      Accept: '*/*',
      'X-Requested-With': 'XMLHttpRequest',
    });
    const options = { headers: headers };
    return this.http.get(this.urlLogout, options);
  }
}
