import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from '../config/auth.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authConfig); // Cargo parámetros de configuración
    this.oauthService.setStorage(localStorage); // Almacena los tokens en el almacenamiento local
    //this.oauthService.tryLogin(); // Intenta realizar un inicio de sesión automático al cargar la aplicación
  }

  login() {
    // Redirige al servidor CAS para iniciar el flujo de autorización
    this.oauthService.initCodeFlow();
    this.oauthService.initImplicitFlow();
  }

  logout() {
    // Cierra la sesión actual y redirige al servidor CAS para cerrar la sesión allí también
    this.oauthService.logOut();
    
  }

  isLoggedIn(): boolean {
    // Verifica si el usuario está autenticado
    return this.oauthService.hasValidAccessToken();
  }

  getAccessToken(): string {
    // Obtiene el token de acceso actual
    return this.oauthService.getAccessToken();
  }
}
