import { Context, Middleware } from '@nuxt/types'

const initializeFormData: Middleware = ({ env, store }: Context) => {
  store.commit('login/setClientData', {
    apiClientId: env.apiClinetId,
    apiClinetSecret: env.apiClinetSecret
  })
}
export default initializeFormData
