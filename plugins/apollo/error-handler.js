import { handleGraphQLErrors } from './graphql-errors-handler'

/* eslint-disable no-console */
export default (errorContext, nuxtContext) => {
  if (nuxtContext.isDev) {
    globalLogging(errorContext)
  }

  if (errorContext.graphQLErrors) {
    handleGraphQLErrors(errorContext.graphQLErrors)
  }
}

const globalLogging = ({ graphQLErrors, networkError, operation, forward }) => {
  console.log('Global error handler')
  console.log(graphQLErrors, networkError, operation, forward)
}
