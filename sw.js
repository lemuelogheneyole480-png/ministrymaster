const VERSION = 'v1.1'; // Change this (e.g., v1.2) every time you update your code
const CACHE_NAME = `ministry-${VERSION}`;
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.png'
];

// Install and Cache
self.addEventListener('install', (e) => {
  self.skipWaiting(); // Forces the new service worker to become active immediately
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Clean up old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});