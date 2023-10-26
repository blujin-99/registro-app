import { common } from './environment.common';

const baseAPI = 'http://localhost:8081/registropropiedad/public/api/';

const baseMJYDH =
  'https://tasw.santafe.gob.ar/mjyddhh/mjydh-web/api/public/sistemas/regprop_public/';

const AuthURL = 'https://dsso.santafe.gob.ar';

export const environment = {
  env: 'develop',
  ...common,
  production: false,
  appBase: baseMJYDH,
  apiBase: baseAPI,
  authUrl: AuthURL,
  auth: {
    ...common.auth,
    clientId: 'sso.santafe.gov.ar.5868506FJCKWEDG33',
    clientSecret: '173F5792303755A2GH',
    redirectUri: 'http://localhost:4200',
  },
  firebaseConfig: {
    apiKey: 'AIzaSyAFlI5Vv1NIJsrn2jiOlMyYEccoMfshxlk',
    authDomain: 'formelectronicoapp.firebaseapp.com',
    projectId: 'formelectronicoapp',
    storageBucket: 'formelectronicoapp.appspot.com',
    messagingSenderId: '190875804950',
    appId: '1:190875804950:web:de50dbcfa2db0ac2851c37',
    measurementId: 'G-FWSGR9NWED',
  },
  excludedEndpoints: [
    'www.santafe.gob.ar/estadotramiterg/consulta',
    'tasw.santafe.gob.ar/mjyddhh/mjydh-web/api/public/sistemas/regprop_public',
    AuthURL,
  ],
};
