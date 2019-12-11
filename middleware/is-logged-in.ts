import { Context, Middleware } from '@nuxt/types'
import { LoginStore } from '@/store'
const isLoggedIn: Middleware = (context: Context) => {
  const { store, redirect, route, env } = context
  
  if (env.isMock) {
    store.commit('login/setLoggedIn', 'dummy_token')
    return
  }

  console.log(LoginStore.isLoggedIn)
  if (LoginStore.isLoggedIn) {
    return
  }

  // ログイン画面では、リダイレクトさせない
  if (!String(route.name).startsWith('login')) {
    redirect('/login')
  }
}

export default isLoggedIn
