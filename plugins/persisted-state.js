import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    store: window.sessionStorage,
    path: ['login.accessToken', 'login.uniqueId']
  })(store)
}
