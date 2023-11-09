importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp(
    {
        apiKey: "AIzaSyBpbH_dIaBRXoufO5lZIU34doXiUQ3aOYg",
        authDomain: "registro-propiedad-santafe.firebaseapp.com",
        projectId: "registro-propiedad-santafe",
        storageBucket: "registro-propiedad-santafe.appspot.com",
        messagingSenderId: "446689370798",
        appId: "1:446689370798:web:692077ccda2a861d18c33f",
        measurementId: "G-DFC97LCPGB"
          
    }
)

const messaging = firebase.messaging()
