import { common } from "./environment.common";

export const environment = {
  env: 'testing',
  ...common,
  production: false,
  appBase: 'https://tasw.santafe.gob.ar/mjyddhh/mjydh-web/api/public/sistemas/regprop_public',
  apiBase: 'https://twww.santafe.gob.ar/registropropiedad/api/',
  authUrl: 'https://tsso.santafe.gov.ar',
  redirectUri: 'https://twww.santafe.gob.ar/registropropiedad',
  auth: {
    serviceAuthUrl: 'service-auth',
    authorizeUrl: 'service-auth/oauth2.0/authorize',
    accessTokenUrl: 'service-auth/oauth2.0/accessToken',
    profileUrl: 'service-auth/oauth2.0/profile',
    clientId: 'mjydh-registropropiedad.sso.santafe.gov.ar.sdfg874',
    clientSecret: '16EE12B21EF960C2FEF417E0B06A2',
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
  },

  excludedEndpoints:['www.santafe.gob.ar/estadotramiterg/consulta', 'tasw.santafe.gob.ar/mjyddhh/mjydh-web/api/public/sistemas/regprop_public'],

};

