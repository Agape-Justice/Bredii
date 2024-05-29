// service-worker.js
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('static').then(function(cache) {
      return cache.addAll([
   
        'index.html',
        'style.css',
        'main.js'
        // Add more files to cache as needed
      ]);
    })
  );io
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
