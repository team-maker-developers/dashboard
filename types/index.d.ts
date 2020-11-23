export interface TableHeader {
  text: string
  value: string
  align?: string
}

export interface TableAction<model> {
  text: string
  alterText?: string
  action: (model: model) => void
  visible?: (model: model) => boolean
}

export interface MenuItem {
  text: string
  icon?: string
  link?: string
  action: () => void
}
