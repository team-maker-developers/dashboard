import gql from 'graphql-tag'
import { apolloMutate } from '@/plugins/apollo/get-apollo-client'
import { getLoginCompany } from '@/constants/login/login-user'

// 会社情報の登録は、コマンドで実行するため、updateのみ実行可能
const updateCompanyMutation = gql`
  mutation($id: ID!, $input: updateCompanyInput!) {
    updateCompany(id: $id, input: $input) {
      id
      name
      social_configs
    }
  }
`

export const updateCompany = async (companyValue) => {
  const input = {
    name: companyValue.name,
    social_configs: companyValue.social_configs
  }

  return await apolloMutate({
    mutation: updateCompanyMutation,
    variables: { id: companyValue.id, input },
    refetchQueries: getLoginCompany
  })
}
