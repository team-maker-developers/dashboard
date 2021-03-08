import gql from 'graphql-tag'

// companyはログインユーザーから取得するようにする
//  ※ 万が一でも、他社の情報を取得できないようにするため
export const getLoginCompany = gql`
  query {
    loginUser {
      id
      company {
        id
        name
        unique_id
        social_configs
      }
    }
  }
`
