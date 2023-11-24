import { common } from './environment.common';

const baseAPI = '/registropropiedad/api/';

const AuthURL = 'https://tsso.santafe.gob.ar';

const idCiudadanaURL = 'https://twww.santafe.gob.ar/';

const formURL = 'https://twww.santafe.gov.ar/tramites/formelectronico/auth/';


export const environment = {
  env: 'test',
  production: false,
  apiBase: baseAPI,
  authUrl: AuthURL,
  idCiudadanaURL: idCiudadanaURL,
  formURL: formURL,
  ...common,
  auth: {
    ...common.auth,
    clientId: 'mjydh-registropropiedad.sso.santafe.gov.ar.sdfg874',
    clientSecret: '16EE12B21EF960C2FEF417E0B06A2',
    redirectUri: 'https://twww.santafe.gob.ar/registropropiedad',
  },
  firebaseConfig: {
    apiKey: "AIzaSyBpbH_dIaBRXoufO5lZIU34doXiUQ3aOYg",
    authDomain: "registro-propiedad-santafe.firebaseapp.com",
    projectId: "registro-propiedad-santafe",
    storageBucket: "registro-propiedad-santafe.appspot.com",
    messagingSenderId: "446689370798",
    appId: "1:446689370798:web:692077ccda2a861d18c33f",
    measurementId: "G-DFC97LCPGB"
  },
  excludedEndpoints: [
    'www.santafe.gob.ar/estadotramiterg/consulta',
    'tasw.santafe.gov.ar/mjyddhh/mjydh-web/api/public/sistemas/regprop_public',
    AuthURL,
  ],
};
