/**
 * Importo Variables generales
 */
import { common } from "./environment.common";

//api
const baseAPI = 'https://twww.santafe.gob.ar/registropropiedad/api/';

//mjydh
const baseMJYDH = 'https://twww.santafe.gov.ar/mjydh-web/api/public/sistemas/regprop_public/';

//auth
const AuthURL = 'https://dsso.santafe.gob.ar';

export const environment = {
  env: 'testing',
  ...common,
  production: false,
  appBase: baseMJYDH,
  apiBase: baseAPI,
  authUrl: AuthURL,
  redirectUri: 'http://127.0.0.1:4200/',
  excludedDomains:['www.santafe.gob.ar'],
  excludedEndpoints:['estadotramiterg/consulta'],
  auth: {
    serviceAuthUrl: 'service-auth',
    authorizeUrl: 'service-auth/oauth2.0/authorize',
    accessTokenUrl: 'service-auth/oauth2.0/accessToken',
    profileUrl: 'service-auth/oauth2.0/profile',
    clientId: 'sso.santafe.gov.ar.5868506FJCKWEDG33',
    clientSecret: '173F5792303755A2GH',
    redirectUri: 'login',
    logoutUrl: 'logout',
  },
  firebaseConfig: {
    production: false,
    firebase: {
      apiKey: 'AIzaSyAFlI5Vv1NIJsrn2jiOlMyYEccoMfshxlk',
      authDomain: 'formelectronicoapp.firebaseapp.com',
      projectId: 'formelectronicoapp',
      storageBucket: 'formelectronicoapp.appspot.com',
      messagingSenderId: '190875804950',
      appId: '1:190875804950:web:de50dbcfa2db0ac2851c37',
      measurementId: 'G-FWSGR9NWED',
    },
  }
};

