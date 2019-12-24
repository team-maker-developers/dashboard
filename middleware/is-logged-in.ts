import { Context, Middleware } from '@nuxt/types'
import { loginStore } from '@/store'

const isLoggedIn: Middleware = (context: Context) => {
  const { app, redirect, route, env } = context
  
  // 本来はアクセストークンを設定せず、モックの時だけisLoggedInの戻り値をTRUEにしたい。
  // しかし、envがisLoggedIn内で参照できないので、暫定的にアクセストークンを設定している
  if (env.isMock) {
    loginStore.setAccessToken({ 
      access_token: 'dummy_token',
      refresh_token: 'dummy_token'
    });
    return
  }

  // ログインしているかどうかで、apolloにtokenを投入する
  //  ※ $apolloHelpersでも、sessionを使っているため、以下のようにチェックする
  if (loginStore.isLoggedIn) {
    app.$apolloHelpers.onLogin(loginStore.accessToken)
  } else {
    app.$apolloHelpers.onLogout()
  }

  // 無限ループを防止するため、フラグを使っている
  const isLoginPage = String(route.name).startsWith('login')
  if (loginStore.isLoggedIn && isLoginPage) {
    redirect('/')
  }

  if (!loginStore.isLoggedIn && !isLoginPage) {
    redirect('/login')
  }
}

export default isLoggedIn
