// ============================================
// SERVICE WORKER — Firebase Cloud Messaging
// Allio Notifications PWA
// ============================================

importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyB3fZqFl45iipkoqAtXBRwJFtj2-Q3jupw",
  authDomain: "dedji-notifications.firebaseapp.com",
  projectId: "dedji-notifications",
  storageBucket: "dedji-notifications.firebasestorage.app",
  messagingSenderId: "996934218923",
  appId: "1:996934218923:web:9b532ef9efa1f03ec4b3ee"
});

const messaging = firebase.messaging();

// Notification reçue quand l'app est en arrière-plan
messaging.onBackgroundMessage(function(payload) {
  console.log('Notification reçue en arrière-plan:', payload);

  const notificationTitle = payload.notification.title || '🛒 Nouvelle commande';
  const notificationOptions = {
    body: payload.notification.body || 'Une nouvelle commande vient d\'arriver !',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    vibrate: [200, 100, 200, 100, 200],
    tag: 'allio-commande',
    requireInteraction: true, // La notification reste jusqu'à ce qu'on la ferme
    actions: [
      {
        action: 'open',
        title: '📋 Voir la commande'
      },
      {
        action: 'close',
        title: 'Fermer'
      }
    ]
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Clic sur la notification
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  if (event.action === 'open' || !event.action) {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
