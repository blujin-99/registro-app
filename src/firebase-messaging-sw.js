importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');

firebase.initializeApp(
    {
        apiKey: "AIzaSyAFlI5Vv1NIJsrn2jiOlMyYEccoMfshxlk",
        authDomain: "formelectronicoapp.firebaseapp.com",
        projectId: "formelectronicoapp",
        storageBucket: "formelectronicoapp.appspot.com",
        messagingSenderId: "190875804950",
        appId: "1:190875804950:web:de50dbcfa2db0ac2851c37",
        measurementId: "G-FWSGR9NWED"
    }
)

const messaging = firebase.messaging()
