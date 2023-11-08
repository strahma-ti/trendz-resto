import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute, Route } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

// Do precaching
precacheAndRoute(self.__WB_MANIFEST);

const restaurantApi = new Route(
  ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev'),
  new StaleWhileRevalidate({
    cacheName: 'restaurant-api',
  }),
);

const restaurantImageApi = new Route(
  ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/images/medium/<pictureId>'),
  new StaleWhileRevalidate({
    cacheName: 'restaurant-image-api',
  }),
);

registerRoute(restaurantApi);
registerRoute(restaurantImageApi);

self.addEventListener('install', () => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
});

self.addEventListener('push', (event) => {
  console.log('Service Worker: Pushed');

  const notificationData = {
    title: 'Push Notification',
    options: {
      body: 'This is a push notification',
      icon: '/icon128x128.png',
      image: '/icons/icon512x512.png',
    },
  };

  const showNotification = self.registration.showNotification(
    notificationData.title,
    notificationData.options,
  );

  event.waitUntil(showNotification);
});
