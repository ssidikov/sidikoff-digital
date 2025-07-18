// Type declarations for missing packages

declare module 'event-source-polyfill' {
  interface EventSourcePolyfillInit {
    headers?: { [key: string]: string }
    heartbeatTimeout?: number
    withCredentials?: boolean
  }

  class EventSourcePolyfill extends EventTarget {
    constructor(url: string, options?: EventSourcePolyfillInit)
    readonly url: string
    readonly readyState: number
    readonly withCredentials: boolean
    onopen: ((event: Event) => void) | null
    onmessage: ((event: MessageEvent) => void) | null
    onerror: ((event: Event) => void) | null
    close(): void

    static readonly CONNECTING: 0
    static readonly OPEN: 1
    static readonly CLOSED: 2
  }

  export = EventSourcePolyfill
}
