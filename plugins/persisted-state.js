import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    store: window.sessionStorage,
    path: [
      'login.accessToken',
      'login.refreshToken',
      'login.uniqueId',
      'login.expiredAt'
    ]
  })(store)
}
