import { Context, Middleware } from '@nuxt/types'

const initialFromData: Middleware = ({ env, store }: Context) => {
  store.commit('login/setClientData', {
    apiClientId: env.apiClinetId,
    apiClinetSecret: env.apiClinetSecret
  })
}
export default initialFromData
