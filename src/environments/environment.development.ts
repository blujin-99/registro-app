const baseURL: string =
  'http://10.1.46.32:5656/formelectronico/web/app_dev.php/API/v2/';
const baseURLApi: string =
  'http://10.1.46.32:5656/formelectronico/web/app_dev.php/API/';
const AuthURL = 'https://dsso.santafe.gob.ar';

const apiUrl = 'https://www.santafe.gob.ar/estadotramiterg/consulta';

export const ConsultaApiUrl = {
  api : apiUrl
}

export const environment = {
  production: false,
  baseURL: baseURL,
  tramites: baseURL + 'usuario/tramite', //Listado de tramite del Usuario - Listado de trámites del Usuario y la búsqueda va por get  sobre esta url
  estadoTasas: baseURL + 'EstadoTasas',
  estadoTramite: baseURL + 'EstadoTramite',
  estadoExcedentes: baseURL + 'EstadoExcedentes',
  categoria: baseURL + 'usuario/TipoCategoriaTramite',
  tramiteServicio: baseURL + 'usuario/TipoTramiteService',
  jurisdiccion: baseURLApi + 'getStatic/Jurisdiccion?orderby=nombre',
  app: {
    endPoint: 'http://localhost:8081/mjydh-web/public/api',
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
