import gql from 'graphql-tag'

// TODO: constatnts/pages配下に移動する
export const updateJobPublishAt = gql`
  mutation($id: ID!, $published_at: DateTime) {
    updatePagePublishAt(id: $id, published_at: $published_at) {
      id
      isPublished
      publishState
      published_at
    }
  }
`

export const getJob = gql`
  query($id: ID!) {
    job(id: $id) {
      id
      code
      name
      expired_at
      job_content
      employment_category_id
      contract_period
      place
      work_datetime
      salary
      welfare
    }
  }
`

export const upsertJob = gql`
  mutation($input: UpsertJobInput!) {
    upsertJob(input: $input) {
      id
      code
      name
      expired_at
      job_content
      employment_category_id
      contract_period
      place
      work_datetime
      salary
      welfare
      industry
      info
    }
  }
`
