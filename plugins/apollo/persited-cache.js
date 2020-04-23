import { persistCache } from 'apollo-cache-persist'

export default async ({ app }) => {
  // graphQlの取得結果をキャッシュする
  await persistCache({
    key: 'tm-apollo',
    cache: app.apolloProvider.defaultClient.cache,
    storage: window.sessionStorage
  })
}
