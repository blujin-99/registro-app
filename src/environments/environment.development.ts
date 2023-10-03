const baseURL: string =
  'http://localhost/registropropiedad/public/api/';
const baseURLApi: string =
  'http://10.1.46.32:5656/formelectronico/web/app_dev.php/API/';
const AuthURL = 'https://dsso.santafe.gob.ar';

const apiUrl = 'https://www.santafe.gob.ar/estadotramiterg/consulta';

export const ConsultaApiUrl = {
  api : apiUrl
}


import { common, commonEndPoint } from './environment.common';

commonEndPoint.base  = 'https://app.santafe.gob.ar/fdadmin/api/';


export const environment = {
  production: false,
  ...common,
  baseURL: baseURL,
  tramites: baseURL + 'tramites', //Listado de tramite del Usuario - Listado de trámites del Usuario y la búsqueda va por get  sobre esta url
  estadoTasas: baseURL + 'usuario/general/estadoTasas',
  estadoTramite: baseURL + 'usuario/general/estadoTramite',
  estadoExcedentes: baseURL + 'usuario/general/estadoExcedentes',
  categoria: baseURL + 'usuario/general/tipocategoriatramite',
  tramiteServicio: baseURL + 'usuario/general/tipocategoriatramite/{id}/tipoTramiteServicio',
  jurisdiccion: baseURL + 'general/jurisdiccion',
  app: {
    endPoint: 'https://twww.santafe.gob.ar/mjydh-web/api',
    ministerio: "Ministerio de Gobierno, Justicia y Derechos Humanos",
    secretaria: 'Registro General de la Propiedad',
    nombre: 'Registro General de la Propiedad'
  },

  oauth2: {
    serviceAuthUrl: AuthURL + '/service-auth',
    authorizeUrl: AuthURL + '/service-auth/oauth2.0/accessToken',
    accessTokenUrl: AuthURL + '/service-auth/oauth2.0/accessToken',
    profileUrl: AuthURL + '/service-auth/oauth2.0/profile',
    clientId: 'sso.santafe.gov.ar.5868506FJCKWEDG33',
    clientSecret: '173F5792303755A2GH',
    redirectUri: 'http://127.0.0.1:4200/login',
    logoutUrl: AuthURL + '/logout',
  },
};


export const firebaseConfig = {
  production: false,
  firebase:{
    apiKey: "AIzaSyAFlI5Vv1NIJsrn2jiOlMyYEccoMfshxlk",
    authDomain: "formelectronicoapp.firebaseapp.com",
    projectId: "formelectronicoapp",
    storageBucket: "formelectronicoapp.appspot.com",
    messagingSenderId: "190875804950",
    appId: "1:190875804950:web:de50dbcfa2db0ac2851c37",
    measurementId: "G-FWSGR9NWED"
  }
};
