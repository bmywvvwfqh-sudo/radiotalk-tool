const CACHE_NAME = 'radiotalk-cache-v5';
const ASSETS = [
  'index.html',
  'styles.css',
  'app.js',
  'manifest.json',
  'icon.png',
  'logo.png'
];

// Install Service Worker and Cache Static Files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Caching app shell');
        return cache.addAll(ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate Service Worker and Clean Old Caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          console.log('[Service Worker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    }).then(() => self.clients.claim())
  );
});

// Fetch Interceptor: Cache First for App Assets, Network First for Translation APIs
self.addEventListener('fetch', (event) => {
  // If the request is for our custom translation API, use Network Only / Network First
  if (event.request.url.includes('mymemory.translated.net')) {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return new Response(JSON.stringify({
            responseData: { translatedText: "Translation unavailable offline. 請檢查網路連線。" }
          }), { headers: { 'Content-Type': 'application/json' } });
        })
    );
    return;
  }

  // Otherwise, use Cache First strategy
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response; // Return cached asset
        }
        return fetch(event.request).then((fetchResponse) => {
          // Cache newly requested resources if they are local
          if (fetchResponse.status === 200 && fetchResponse.type === 'basic') {
            const responseToCache = fetchResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return fetchResponse;
        });
      })
  );
});
