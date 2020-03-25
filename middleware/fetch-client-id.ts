import { Context, Middleware } from '@nuxt/types'
import { loginStore } from '@/store'

const fetchUniqueId: Middleware = (context: Context) => {
  const { app, query, route, redirect } = context
  // クライアントIDが存在しない場合は処理なし
  if (!('unique_id' in query && typeof query.unique_id === 'string')) {
    return
  }

  // 全く同一の場合は処理なし
  if (loginStore.uniqueId === query.unique_id) {
    return
  }

  // ログイン画面もしくは、空の場合のみ、クライアントIDをセットする
  if (loginStore.uniqueId === '' ||　String(route.name).startsWith('login')) {
    loginStore.setUniqueId(query.unique_id)
    return
  }

  // 異なるクライアントIDの場合は不正アクセスなので、ログイン画面に飛ばす
  loginStore.logout()
  redirect('/login')
}

export default fetchUniqueId
