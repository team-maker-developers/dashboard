export const menuItems: MenuItem[] = [
  {
      icon: 'mdi-home',
      text: 'ホーム',
      link: '/'
  },
  {
      icon: 'mdi-account-search',
      text: '求人管理',
      link: '/jobs'
  },
  {
      icon: 'mdi-account-badge-horizontal',
      text: '応募者管理',
      link: '/applicants'
  },
  {
      icon: 'mdi-share-circle',
      text: 'その他公報',
      link: '/gazettes'
  }
]

export const settingItems: MenuItem[]  = [
  { text: 'ログイン申請', link: '/social-accounts' },
  { text: 'LINE設定', link: '/line' },
  { text: 'パスワード変更', link: '/password' }
]


export const accountItems: MenuItem[] = [
  { text: 'ログアウト', method: 'logout' },
  { text: 'パスワード変更', link: '/password' }
]

export interface MenuItem {
  icon?: string
  text: string
  link?: string
  method?: string
}