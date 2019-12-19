import { Context, Middleware } from '@nuxt/types'
import { LoginStore } from '@/store'
const isLoggedIn: Middleware = (context: Context) => {
  const { redirect, route, env } = context
  
  // 本来はアクセストークンを設定せず、モックの時だけisLoggedInの戻り値をTRUEにしたい。
  // しかし、envがisLoggedIn内で参照できないので、暫定的にアクセストークンを設定している
  if (env.isMock) {
    LoginStore.setAccessToken('dummy_token');
    return
  }

  if (LoginStore.isLoggedIn) {
    return
  }

  // ログイン画面では、リダイレクトさせない
  if (!String(route.name).startsWith('login')) {
    redirect('/login')
  }
}

export default isLoggedIn
