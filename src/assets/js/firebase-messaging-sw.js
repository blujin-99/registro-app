
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging/sw';
const firebaseApp = initializeApp(
   environment.firebaseConfig
)
const messaging = getMessaging(firebaseApp);


/*
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object


firebase.initializeApp(
   environment.firebase
);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
*/