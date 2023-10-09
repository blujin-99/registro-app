//api
const baseAPI: string = 'https://twww.santafe.gob.ar/registropropiedad/api/';

//mjydh
const baseMJYDH: string =
  'https://twww.santafe.gov.ar/mjydh-web/api/public/sistemas/regprop_public/';

//auth
const AuthURL = 'https://dsso.santafe.gob.ar';

export const environment = {
  production: false,
  app: baseMJYDH,
  api: baseAPI,
  auth: AuthURL,
  redirectUri: 'http://127.0.0.1:4200/',
};

export const firebaseConfig = {
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
};
