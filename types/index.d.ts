declare interface TableHeader {
  text: string
  value: string
  align?: string
}

declare interface MenuItem {
  text: string
  icon?: string
  link?: string
  action: () => any
}
