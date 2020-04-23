import { ApolloProvider } from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { rootState } from '@/store'

const getApolloClient = (): ApolloClient<any> => {
  const apolloProvider = rootState.app.apolloProvider
  if (!(apolloProvider instanceof ApolloProvider)) {
    throw new Error('Apolloの設定が未実装です。')
  }

  return apolloProvider.defaultClient
}

export const apolloMutate: any = async (mutate: any) => {
  // $nuxtを利用するために、windowをanyで宣言している
  const globalWindow = window as any
  globalWindow.$nuxt.$loading.start('保存中')
  const result = await getApolloClient().mutate(mutate)
  globalWindow.$nuxt.$loading.finish()
  return result
}
