import gql from 'graphql-tag'

export const socialAccountHeaders: TableHeader[] = [
  {
    text: 'ID',
    align: 'left',
    value: 'id'
  },
  { text: 'SNS', value: 'service.name' },
  { text: 'アイコン', value: 'image' },
  { text: '名前', value: 'name' },
  { text: 'プロフィール', value: 'profile' },
  { text: 'ユーザーID', value: 'unique_id' },
  { text: 'ステータス', value: 'status' },
  { text: 'アクション', value: 'changeValid' }
]

export const getSocialAccountsQuery = gql`
  query getSocialAccounts {
    socialAccounts {
      id
      image
      name
      profile
      unique_id
      user {
        id
        is_valid
      }
      service {
        name
      }
    }
  }
`

export const getUpdateUserMutation = (
  userId: string,
  changedIsValid: boolean
) => {
  return {
    mutation: gql`
      mutation($id: ID!, $isValid: Boolean) {
        updateUser(id: $id, is_valid: $isValid) {
          id
          is_valid
        }
      }
    `,
    variables: {
      id: userId,
      isValid: changedIsValid
    },
    refetchQueries: [{ query: getSocialAccountsQuery }]
  }
}
