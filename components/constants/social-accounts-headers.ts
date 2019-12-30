export const socialAccountHeaders: SocialAccountHeader[] = [
  {
    text: 'ID',
    align: 'left',
    value: 'id'
  },
  { text: 'SNS', value: 'service.name' },
  { text: 'アイコン', value: 'image' },
  { text: '名前', value: 'name' },
  { text: 'プロフィール', value: 'profile' },
  { text: 'ユーザーID', value: 'unique_id' },
  { text: 'ステータス', value: 'status' },
  { text: 'アクション', value: 'chaneValid' }
]

export interface SocialAccountHeader {
  text: string
  value: string
  align?: string
}
