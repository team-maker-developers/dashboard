import { Context, Middleware } from '@nuxt/types'

const isLoggedIn: Middleware = (context: Context) => {
  const { store, redirect, route, env } = context
  
  if (env.isMock) {
    return
  }

  if (store.state.login.isLoggedIn) {
    return
  }

  // ログイン画面では、リダイレクトさせない
  if (!String(route.name).startsWith('login')) {
    redirect('/login')
  }
}

export default isLoggedIn
