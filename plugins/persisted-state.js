import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  window.onNuxtReady(() => {
    const createPersistedStateFunction = createPersistedState({
      storage: window.sessionStorage,
      path: ['login.accessToken', 'login.clientId']
    })
    createPersistedStateFunction(store)
  })
}
