import { loginStore } from '@/store'
import { MenuItem } from '@/types'

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
    text: '応募管理',
    link: '/applies',
    action: (): void => {}
  }
]

export const settingItems: MenuItem[] = [
  {
    text: '会社情報',
    link: '/company',
    action: (): void => {}
  },
  {
    text: 'ログイン申請',
    link: '/social-accounts',
    action: (): void => {}
  },
  {
    text: 'LINE連携',
    link: '/company#social-configs',
    action: (): void => {}
  }
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
