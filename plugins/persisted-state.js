import injectPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  // sessionStorageに格納したい値を設定する
  injectPersistedState({
    key: 'tm-app',
    storage: window.sessionStorage,
    paths: [
      'login.accessToken',
      'login.refreshToken',
      'login.uniqueId',
      'login.expiredAt',
      'login.loginScope'
    ]
  })(store)

  // localStorageに格納したい値を設定する
  // セキュリティの都合上、重要な情報は格納しない
  injectPersistedState({
    key: 'tm-app-local',
    paths: ['login.redirectTo']
  })(store)
}
