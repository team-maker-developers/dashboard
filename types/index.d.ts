declare interface TableHeader {
  text: string
  value: string
  align?: string
}

declare interface TableAction<model> {
  text: string
  alterText?: string
  action: (model: model) => void
}

declare interface MenuItem {
  text: string
  icon?: string
  link?: string
  action: () => void
}
