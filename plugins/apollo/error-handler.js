/* eslint-disable no-console */
// TODO: apolloのエラー処理方法を検討する
export default (
  { graphQLErrors, networkError, operation, forward },
  nuxtContext
) => {
  console.log('Global error handler')
  console.log(graphQLErrors, networkError, operation, forward)
}
