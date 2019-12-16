import { Context, Middleware } from '@nuxt/types'

const initializeFormData: Middleware = ({ env, store }: Context) => {
  store.commit('login/setClientData', {
    apiClientId: env.apiClientId,
    apiClientSecret: env.apiClientSecret
  })
}
export default initializeFormData
