/* eslint-disable @typescript-eslint/no-explicit-any */
// Global polyfills for server-side rendering
if (typeof global !== 'undefined' && typeof window === 'undefined') {
  // Define self for server-side compatibility
  if (typeof (global as any).self === 'undefined') {
    (global as any).self = global
  }
  
  // Define window for server-side compatibility
  if (typeof (global as any).window === 'undefined') {
    (global as any).window = {}
  }
  
  // Define document for server-side compatibility
  if (typeof (global as any).document === 'undefined') {
    (global as any).document = {}
  }
}

export {}
