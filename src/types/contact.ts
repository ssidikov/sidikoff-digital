

interface ContactChannel {
  name: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  href: string
  description: string
  color: string
}

interface ContactInfo {
  title: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  value: string
  link?: string
}

export interface ContactData {
  channels: ContactChannel[]
  info: ContactInfo[]
  socialLinks: {
    platform: string
    url: string
    icon: React.ComponentType<{ size?: number; className?: string }>
  }[]
}
