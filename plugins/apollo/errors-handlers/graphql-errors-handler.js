import { loginStore } from '@/store'

export const handleGraphQLErrors = (graphQLErrors) => {
  graphQLErrors.forEach((graphQLError) => {
    handleGraphQlError(graphQLError)
  })
}

const handleGraphQlError = (graphQLError) => {
  if ('extensions' in graphQLError) {
    handleExtensionError(graphQLError.extensions)
  }
}

const handleExtensionError = (extensions) => {
  if ('category' in extensions && extensions.category === 'authentication') {
    loginStore.logout(
      '認証の有効期限が切れてしまいました。\r\nお手数ですが、再度ログインしてください。'
    )
  }
}
