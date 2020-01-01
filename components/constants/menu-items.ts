import { loginStore } from '@/store'

export const menuItems: MenuItem[] = [
  {
      icon: 'mdi-home',
      text: 'ホーム',
      link: '/',
      action: (): void => {}
  },
  {
      icon: 'mdi-account-search',
      text: '求人管理',
      link: '/jobs',
      action: (): void => {}
  },
  {
      icon: 'mdi-account-badge-horizontal',
      text: '応募者管理',
      link: '/applicants',
      action: (): void => {}
  },
  {
      icon: 'mdi-share-circle',
      text: 'その他公報',
      link: '/gazettes',
      action: (): void => {}
  }
]

export const settingItems: MenuItem[]  = [
  {
    text: 'ログイン申請',
    link: '/social-accounts',
    action: (): void => {}
  },
  {
    text: 'LINE設定',
    link: '/line',
    action: (): void => {}
  },
  {
    text: 'パスワード変更',
    link: '/password',
    action: (): void => {}
  }
]

export const accountItems: MenuItem[] = [
  {
    text: 'ログアウト',
    action: (): void => {
      loginStore.logout()

      // ログイン画面に遷移させる
      // 　苦肉の策のため、より良い方法があれば、修正する
      const windowObject: any = window
      windowObject.$nuxt.$router.push('/login')
    }
  },
  {
    text: 'パスワード変更',
    link: '/password',
    action: (): void => {}
  }
]

export interface MenuItem {
  text: string
  icon?: string
  link?: string
  action: () => any
}
