import { Context, Middleware } from '@nuxt/types'
import { loginStore } from '@/store'

const fetchCliendId: Middleware = (context: Context) => {
  const { app, query, route, redirect } = context
  // クライアントIDが存在しない場合は処理なし
  if (!('client_id' in query && typeof query.client_id === 'string')) {
    return
  }

  // 全く同一の場合は処理なし
  if ( loginStore.clientId === query.client_id) {
    return
  }

  // ログイン画面もしくは、空の場合のみ、セットする
  if (loginStore.clientId === '' ||　String(route.name).startsWith('login')) {
    loginStore.setClientId(query.client_id)
    return
  }

  // 異なるクライアントIDの場合は不正アクセスなので、ログイン画面に飛ばす
  loginStore.logout()
  redirect('/login')
}

export default fetchCliendId
