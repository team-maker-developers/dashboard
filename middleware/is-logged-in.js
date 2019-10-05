export default function({ store, redirect, route }) {
  if (store.state.isLoggedIn) {
    return
  }

  // ログイン画面では、リダイレクトさせない
  if (route.name !== 'login') {
    redirect('/login')
  }
}
