import { Context, Middleware } from '@nuxt/types'

const isLoggedIn: Middleware = (context: Context) => {
  const { store, redirect, route } = context
  
  if (store.state.login.isLoggedIn) {
    return
  }

  // ログイン画面では、リダイレクトさせない
  if (route.name !== 'login') {
    redirect('/login')
  }
}

export default isLoggedIn
