// lib/globals.ts
// Server-side polyfills for browser globals

if (typeof globalThis !== 'undefined') {
  if (typeof globalThis.self === 'undefined') {
    // @ts-expect-error - Adding global polyfill for server compatibility
    globalThis.self = globalThis
  }
  
  if (typeof globalThis.window === 'undefined') {
    // @ts-expect-error - Adding global polyfill for server compatibility
    globalThis.window = undefined
  }
}

export {}
