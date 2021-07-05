// eslint-disable-next-line no-undef
self.addEventListener('install', (event) => {
  console.log('INSTALL', event);
});

// eslint-disable-next-line no-undef
self.addEventListener('activate', (event) => {
  console.log('ACTIVATE', event);
});

// eslint-disable-next-line no-undef
 self.addEventListener('fetch', (event) => {
  console.log('FETCH', event);
});
