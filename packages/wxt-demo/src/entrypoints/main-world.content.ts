export default defineContentScript({
  matches: ['*://*/*'],
  world: 'MAIN',
  permissions: ['storage'],
  exclude: ['firefox'],

  main() {
    console.log(`Hello from ${location.hostname}!`);
  },
});
