import { ApolloProvider } from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { rootState } from '@/store'

export const getApolloClient = (): ApolloClient<any> => {
  const apolloProvider = rootState.app.apolloProvider
  if (!(apolloProvider instanceof ApolloProvider)) {
    throw new Error('Apolloの設定が未実装です。')
  }

  return apolloProvider.defaultClient
}