import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';

export const authConfig: AuthConfig = {
  // Url of the Identity Provider
  loginUrl: environment.oauth2.accessTokenUrl,

  issuer: environment.oauth2.accessTokenUrl,
  /*  + '?response_type=code'
        + '&client_id=' + config.oauth2.clientId
        + '&redirect_uri=' + config.oauth2.redirectUri,
    */
  // URL of the SPA to redirect the user to after login
  // redirectUri: config.oauth2.redirectUri, // window.location.origin + '/index.html',
  redirectUri: environment.oauth2.redirectUri, // window.location.origin + '/index.html',

  // The SPA's id. The SPA is registered with this id at the auth-server
  clientId: environment.oauth2.clientId,

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: '', // 'openid profile email voucher',
  // scope: 'guilds connections identify',
  //scope: 'openid profile email offline_access api',
  strictDiscoveryDocumentValidation: false,
  responseType: 'token',
  logoutUrl: environment.oauth2.logoutUrl,
};
