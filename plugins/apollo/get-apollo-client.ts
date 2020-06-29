import { ApolloProvider } from 'vue-apollo'
import { ApolloClient } from 'apollo-client' // eslint-disable-line no-unused-vars
import { rootState } from '@/store'

const getApolloClient = (): ApolloClient<any> => {
  const apolloProvider = rootState.app.apolloProvider
  if (!(apolloProvider instanceof ApolloProvider)) {
    throw new TypeError('Apolloの設定が未実装です。')
  }

  return apolloProvider.defaultClient
}

const loadingExecute = async (mutation: any) => {
  // $nuxtを利用するために、windowをanyで宣言している
  const globalWindow = window as any
  globalWindow.$nuxt.$loading.start('保存中')
  const result = await mutation()
  globalWindow.$nuxt.$loading.finish()

  return result
}

export const apolloMutate: any = async (
  mutate: any,
  withLoading: boolean = true
) => {
  const mutation = async () => {
    return await getApolloClient().mutate(mutate)
  }

  if (withLoading) {
    return await loadingExecute(mutation)
  }

  return await mutation()
}
