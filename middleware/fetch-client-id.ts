import { Context, Middleware } from '@nuxt/types'

const fetchCliendId: Middleware = ({ store, query }: Context) => {
  const clientId: string = query.client_id as string
  store.commit('login/setClientId', clientId)
}

export default fetchCliendId
