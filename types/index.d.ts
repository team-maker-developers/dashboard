declare interface TableHeader {
  text: string
  value: string
  align?: string
}

declare interface TableAction {
  text: string
  alterText?: string
  action: (id: number) => void
}

declare interface MenuItem {
  text: string
  icon?: string
  link?: string
  action: () => void
}
