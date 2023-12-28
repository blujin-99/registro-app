/*

import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging/sw';
const firebaseApp = initializeApp(
   environment.firebaseConfig
)
const messaging = getMessaging(firebaseApp);

*/

importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object


firebase.initializeApp(
   {
    apiKey: 'AIzaSyBpbH_dIaBRXoufO5lZIU34doXiUQ3aOYg',
    authDomain: 'registro-propiedad-santafe.firebaseapp.com',
    projectId: 'registro-propiedad-santafe',
    storageBucket: 'registro-propiedad-santafe.appspot.com',
    messagingSenderId: '446689370798',
    appId: '1:446689370798:web:692077ccda2a861d18c33f',
    measurementId: 'G-DFC97LCPGB',
   }
);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.onBackgroundMessage();

 
