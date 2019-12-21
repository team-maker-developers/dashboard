import { Context, Middleware } from '@nuxt/types'
import { loginStore } from '@/store'

const initializeFormData: Middleware = ({ env }: Context) => {
  loginStore.setClientData({
    id: env.apiClientId,
    secret: env.apiClientSecret
  })
}
export default initializeFormData
