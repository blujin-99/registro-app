import { common } from './environment.common';

const baseAPI = '/api/';

const baseMJYDH =
  'https://tasw.santafe.gob.ar/mjyddhh/mjydh-web/api/public/sistemas/regprop_public/';

const AuthURL = 'https://tsso.santafe.gob.ar';

export const environment = {
  env: 'testing',
  ...common,
  production: false,
  appBase: baseMJYDH,
  apiBase: baseAPI,
  authUrl: AuthURL,
  redirectUri: 'https://twww.santafe.gob.ar/registropropiedad',
  auth: {
    ...common.auth,
    clientId: 'mjydh-registropropiedad.sso.santafe.gov.ar.sdfg874',
    clientSecret: '16EE12B21EF960C2FEF417E0B06A2',
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
