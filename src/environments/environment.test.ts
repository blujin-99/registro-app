import { common } from './environment.common';

const baseAPI = '/registropropiedad/api/';

const baseMJYDH =
  'https://tasw.santafe.gob.ar/mjyddhh/mjydh-web/api/public/sistemas/regprop_public';

const AuthURL = 'https://tsso.santafe.gob.ar';

const idCiudadanaURL = 'https://www.santafe.gob.ar/';

const formURL = 'https://twww.santafe.gov.ar/tramites/formelectronico/auth/';

export const environment = {
  env: 'test',
  ...common,
  production: false,
  appBase: baseMJYDH,
  apiBase: baseAPI,
  authUrl: AuthURL,
  idCiudadanaURL: idCiudadanaURL,
  formURL: formURL,
  auth: {
    ...common.auth,
    clientId: 'mjydh-registropropiedad.sso.santafe.gov.ar.sdfg874',
    clientSecret: '16EE12B21EF960C2FEF417E0B06A2',
    redirectUri: 'https://twww.santafe.gob.ar/registropropiedad',
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
