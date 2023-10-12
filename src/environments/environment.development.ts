/**
 * Importo Variables generales
 */
import { common } from "./environment.common";

//api
const baseAPI = 'http://10.1.46.32:8181/registropropiedad/public/api/';

//mjydh
const baseMJYDH = 'https://tasw.santafe.gob.ar/mjyddhh/mjydh-web/api/public/sistemas/regprop_public/';

//auth
const AuthURL = 'https://dsso.santafe.gob.ar';

export const environment = {
  env: 'develop',
  ...common,
  production: false,
  appBase: baseMJYDH,
  apiBase: baseAPI,
  authUrl: AuthURL,
  redirectUri: 'http://127.0.0.1:4200',
  auth: {
    ...common.auth,
    clientId: 'sso.santafe.gov.ar.5868506FJCKWEDG33',
    clientSecret: '173F5792303755A2GH'
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


