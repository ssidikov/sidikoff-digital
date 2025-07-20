// polyfills/globals.js
// Server-side polyfills for browser globals

// Only run on server side
if (typeof window === 'undefined' && typeof globalThis !== 'undefined') {
  // Define self if it doesn't exist
  if (typeof globalThis.self === 'undefined') {
    globalThis.self = globalThis;
  }
}
