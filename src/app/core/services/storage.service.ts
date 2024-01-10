import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUser, IUserCas } from '../models/user.interface';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  baseStorage: string = environment.env + environment.app.key;
  constructor() {}

  /**
   * Metodo Session Storage
   * @param key
   * @param value
   * @param isArray
   */
  private setSS(key: string, value: any, isArray: boolean) {
    if (isArray) {
      value = JSON.stringify(value);
    }
    sessionStorage.setItem(key, value);
  }

  private getSS(key: string, isArray: boolean) {
    let data = sessionStorage.getItem(key) ?? '';
    if (isArray) {
      if (data) {
        return JSON.parse(data);
      }
      return;
    }
    return data;
  }
  private setLS(key: string, value: any, isArray: boolean) {
    if (isArray) {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  }

  private getLS(key: string, isArray: boolean) {
    let data = localStorage.getItem(key) ?? '';
    if (isArray) {
      if (data) {
        return JSON.parse(data);
      }
      return;
    }
    return data;
  }

  /**
   * Metodos Get y Set
   */
  get userCas() {
    return this.getSS(this.baseStorage + environment.login.mjydh_cas,true);
  }

  set userCas(user) {
    this.setSS(this.baseStorage + environment.login.mjydh_cas,user, true)
  }

  /**
   *  USER
   */
  get user() {
    return this.getSS(this.baseStorage + '_user',true);
  }

  set user(user) {
    this.setSS(this.baseStorage + '_user', JSON.stringify(user), true);
  }

  /**
   * TOKEN CAS
   */
  get token(): string {
    return this.getLS(this.baseStorage + environment.login.mjydh_token, false);
  }
  set token(token: string) {
    this.setLS(
      this.baseStorage + environment.login.mjydh_token,
      token, false
    );
  }


  /**
   * JWT
   */
  
  get JWT() {
    return this.getLS(this.baseStorage + environment.login.mjydh_jwt, false);
  }

  set JWT(value: string) {
    this.setLS(this.baseStorage + environment.login.mjydh_jwt, value, false);
  }
  
  /**
   * Notificaciones
   */

  get notificacionPush() {
    return this.getLS(this.baseStorage + environment.notificacion.nombre, true);
  }

  set notificacionPush(value: any) {
    this.setLS( this.baseStorage + environment.notificacion.nombre,value, true)
  }

  /**
   * URL
   */

  get url(): string {
    return this.getLS(this.baseStorage + 'url', false) ;
  }

  set url(value: string) {
    this.setLS(this.baseStorage + 'url', value, false);
  }

  public remuvUrl(): void {
    localStorage.removeItem(this.baseStorage + 'url');
  }

  /**
   * isExpand
   */
  get isExpand(): boolean {
    return this.getLS(this.baseStorage + 'isExpand', true) ;
  }

  set isExpand(value: boolean) {
    this.setLS(this.baseStorage + 'isExpand', value, true);
  }

  /**
   *  Ministerio info app
   */
  get ministerio(){
    return this.getLS(this.baseStorage+"ministerio", false)
  }

  set ministerio(value:string){
    this.setLS(this.baseStorage+"ministerio",value, false)
  }

  /**
   * Borrado Storage 
   */
  public clear() {
    /**
     * Var Session
     */
    sessionStorage.removeItem(this.baseStorage + environment.login.mjydh_cas);
    sessionStorage.removeItem(this.baseStorage + '_user');

    /**
     * Var Local
     */
    localStorage.removeItem(this.baseStorage + environment.login.mjydh_token);
    localStorage.removeItem(this.baseStorage + environment.login.mjydh_jwt);
    localStorage.removeItem(this.baseStorage + environment.notificacion.nombre);
    localStorage.removeItem(this.baseStorage + 'url');
  }
}
