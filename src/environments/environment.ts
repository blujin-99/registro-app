import { common } from './environment.common';

const baseAPI = 'http://10.1.46.32:8181/registropropiedad/public/api/';

const baseMJYDH =
  'https://tasw.santafe.gob.ar/mjyddhh/mjydh-web/api/public/sistemas/regprop_public';

const AuthURL = 'https://dsso.santafe.gob.ar';

const idCiudadanaURL = 'https://www.santafe.gob.ar/';

const formURL = 'http://10.1.46.32:5656/formelectronico/web/app_dev.php/';

export const environment = {
  env: 'prod',
  ...common,
  production: false,
  appBase: baseMJYDH,
  apiBase: baseAPI,
  authUrl: AuthURL,
  idCiudadanaURL: idCiudadanaURL,
  formURL: formURL,
  auth: {
    ...common.auth,
    clientId: 'sso.santafe.gov.ar.5868506FJCKWEDG33',
    clientSecret: '173F5792303755A2GH',
    redirectUri: 'http://127.0.0.1:4200',
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
    'tasw.santafe.gov.ar/mjyddhh/mjydh-web/api/public/sistemas/regprop_public',
    AuthURL,
  ],
};
