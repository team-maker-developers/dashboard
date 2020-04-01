import { loginStore } from '@/store'

export const menuItems: MenuItem[] = [
  // {
  //     icon: 'mdi-home',
  //     text: 'ホーム',
  //     link: '/',
  //     action: (): void => {}
  // },
  {
      icon: 'mdi-account-search',
      text: '求人管理',
      link: '/jobs',
      action: (): void => {}
  },
  {
      icon: 'mdi-share-circle',
      text: 'LINE広報',
      link: '/announces/create',
      action: (): void => {}
  },
  {
      icon: 'mdi-account-details',
      text: '応募者管理',
      link: '/applicants',
      action: (): void => {}
  }
]

export const settingItems: MenuItem[]  = [
  {
    text: 'ログイン申請',
    link: '/social-accounts',
    action: (): void => {}
  }
  // {
  //   text: 'LINE設定',
  //   link: '/line',
  //   action: (): void => {}
  // },
  // {
  //   text: 'パスワード変更',
  //   link: '/password',
  //   action: (): void => {}
  // }
]

export const accountItems: MenuItem[] = [
  {
    text: 'ログアウト',
    action: (): void => {
      loginStore.logout()
    }
  }
  // {
  //   text: 'パスワード変更',
  //   link: '/password',
  //   action: (): void => {}
  // }
]
