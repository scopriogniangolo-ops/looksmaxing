const CACHE_NAME = 'looksmax-v1';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow('/index.html'));
});

self.addEventListener('message', e => {
  if (e.data.type === 'SCHEDULE_NOTIFICATION') {
    const { title, body, delay, icon } = e.data;
    setTimeout(() => {
      self.registration.showNotification(title, {
        body,
        icon: icon || '💎',
        badge: '💎',
        vibrate: [100, 50, 100],
        tag: 'looksmax-reminder',
        renotify: true,
        actions: [
          { action: 'open', title: 'Apri App' },
          { action: 'dismiss', title: 'Dopo' }
        ]
      });
    }, delay);
  }
});
