import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'tm-app',
    storage: window.sessionStorage,
    paths: [
      'login.accessToken',
      'login.refreshToken',
      'login.uniqueId',
      'login.expiredAt'
    ]
  })(store)
}
