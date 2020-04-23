import gql from 'graphql-tag'

export const getJob = gql`
  query($id: ID!) {
    job(id: $id) {
      id
      name
      page {
        id
        refered_url
      }
    }
  }
`

export const description = `新しい求人が登録されました。
興味がありそうな知人へLINEでシェアしてみませんか？`

export const lineShareUrl = 'https://line.me/R/msg/text/'
