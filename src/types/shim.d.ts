declare module '*.html' {
  const content: string
  export = content
}

declare interface NetworkInformation extends EventTarget {
  downlink: number
  effectiveType: 'slow-2g' | '2g' | '3g' | '4g'
  onchange: EventListener | null
  rtt: number
  saveData: boolean
}

declare interface Navigator {
  connection: NetworkInformation
}
