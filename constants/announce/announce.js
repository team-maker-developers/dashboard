import gql from 'graphql-tag'

export const createAnnounce = gql`
  mutation($input: CreateAnnounceInput!) {
    createAnnounce(input: $input) {
      id
      sent_at
      channelNotifications {
        id
        channel_id
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
