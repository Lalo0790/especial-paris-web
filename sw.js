const C='ep-v1',A=['./','index.html','manifest.json','img/hero.jpg','img/chabacano.jpg','img/granada.jpg','img/turron.jpg','img/canela.jpg','img/calabaza.jpg','img/icon-192.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
