const CACHE_NAME = 'nutri-track-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://api.dicebear.com/7.x/initials/svg?seed=N&backgroundColor=000000&fontSize=70&fontWeight=700'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
