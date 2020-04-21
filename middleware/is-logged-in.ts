import { Context, Middleware } from '@nuxt/types'
import { loginStore } from '@/store'

const isLoggedIn: Middleware = (context: Context) => {
  const { redirect, route, env } = context
  
  // 本来はアクセストークンを設定せず、モックの時だけisLoggedInの戻り値をTRUEにしたい。
  // しかし、envがisLoggedIn内で参照できないので、暫定的にアクセストークンを設定している
  if (env.isMock) {
    loginStore.setAccessToken({ 
      access_token: 'dummy_token',
      refresh_token: 'dummy_token',
      expires_in: '999999999'
    });
    return
  }

  // 無限ループを防止するためのフラグ
  const isLoginPage = String(route.name).startsWith('login')
  if (loginStore.isLoggedIn && isLoginPage) {
    redirect('/')
  }

  if (!loginStore.isLoggedIn && !isLoginPage) {
    redirect('/login')
  }

  // 期限切れの場合はログアウトする
  if (loginStore.isExpired) {
    loginStore.logout(
      '認証の有効期限が切れてしまいました。\r\nお手数ですが、再度ログインしてください。'
    )
  }

  // ログイン後は、redirectToをクリアする
  if (loginStore.isLoggedIn) {
    loginStore.clearRedirectTo()
  }
}

export default isLoggedIn
