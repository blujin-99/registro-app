import { common } from './environment.common';

const baseAPI = 'http://10.1.46.32:8181/registropropiedad/public/api/';

const AuthURL = 'https://dsso.santafe.gob.ar';

const idCiudadanaURL = 'https://www.santafe.gob.ar/';

const formURL = 'http://10.1.46.32:5656/formelectronico/web/app_dev.php/auth/';


export const environment = {
  env: 'prod',
  production: false,
  apiBase: baseAPI,
  authUrl: AuthURL,
  idCiudadanaURL: idCiudadanaURL,
  formURL: formURL,
  ...common,
  auth: {
    ...common.auth,
    clientId: 'sso.santafe.gov.ar.5868506FJCKWEDG33',
    clientSecret: '173F5792303755A2GH',
    redirectUri: 'http://127.0.0.1:4200',
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
