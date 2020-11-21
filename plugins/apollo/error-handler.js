import { loginStore } from '@/store'
import { handleGraphQLErrors } from './errors-handlers/graphql-errors-handler'

export default (errorContext, nuxtContext) => {
  if (nuxtContext.isDev) {
    globalLogging(errorContext)
  }

  if (errorContext.graphQLErrors) {
    handleGraphQLErrors(errorContext.graphQLErrors)
  }

  if (errorContext.networkError) {
    handleNetworkError(errorContext.networkError)
  }
}

/* eslint-disable no-console */
const globalLogging = ({ graphQLErrors, networkError, operation, forward }) => {
  console.log('Global error handler')
  console.log(graphQLErrors, networkError, operation, forward)
}
/* eslint-enable no-console */

const handleNetworkError = (networkError) => {
  if (networkError.statusCode === 401) {
    loginStore.logout(
      '認証の有効期限が切れてしまいました。\r\nお手数ですが、再度ログインしてください。'
    )
  }
}
