import { Context, Middleware } from '@nuxt/types'
import { LoginStore } from '@/store'
const isLoggedIn: Middleware = (context: Context) => {
  const { redirect, route, env } = context
  
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
