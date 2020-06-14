import { Context, Middleware } from '@nuxt/types' // eslint-disable-line no-unused-vars
import { loginStore } from '@/store'

const initializeFormData: Middleware = ({ env }: Context) => {
  loginStore.setClientData({
    id: env.apiClientId,
    secret: env.apiClientSecret
  })
}
export default initializeFormData
