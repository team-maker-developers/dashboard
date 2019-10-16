import { Context, Middleware } from '@nuxt/types'
import { LoginStore } from '@/store'

const fetchCliendId: Middleware = (context: Context) => {
  const { query } = context
  const clientId: string = query.client_id as string
  LoginStore.setClientId(clientId)
}

export default fetchCliendId
