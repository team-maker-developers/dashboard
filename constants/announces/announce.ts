import gql from 'graphql-tag'

export const postAnnounceError = `広報文の送信に失敗いたしました。
お手数ですが、管理部まで問い合わせてくださいませ。`

export const createAnnounce = gql`
  mutation($input: CreateAnnounceInput!) {
    createAnnounce(input: $input) {
      id
      sent_at
      channelNotifications {
        id
        channel_id
        channel {
          id
          name
        }
        suceeded
        error
      }
    }
  }
`

export const getJob = gql`
  query($id: ID!) {
    job(id: $id) {
      id
      code
      name
      last_announced_at
      page {
        id
        slug
        isPublished
        publishState
      }
    }
  }
`

export const getChannels = gql`
  query {
    channels {
      id
      name
      is_internal
    }
  }
`
