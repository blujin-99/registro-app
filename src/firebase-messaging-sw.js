importScripts('https://www.gstatic.com/firebasejs/10.6.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.6.0/firebase-messaging-compat.js');

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

self.addEventListener('push', function(event) {
  const payload = event.data.json(); //obtengo el json de las notificaciones por medio del evento push

  //en options guardo el json a mostrar cuando la notificación estén en segundo plano
  const options = { 
    body: payload.notification?.body, 
    data: {
      url: payload.data?.['url'] 
    },
  };

  console.log(options);

  event.waitUntil(

    self.registration.showNotification(payload.notification?.title , options)
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();

  const urlToOpen = event.notification.data.url;

  event.waitUntil(
    clients.matchAll({ type: 'window' }).then(clientsArr => {
      // Si hay una ventana abierta, enfócala
      for (const client of clientsArr) {
        if ('focus' in client) {
          return client.focus();
        }
      }

      // Si no hay ventana abierta, abre una nueva ventana con la URL especificada
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});

