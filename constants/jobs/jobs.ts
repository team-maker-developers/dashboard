import gql from 'graphql-tag'

interface Page {
  id: string
  publishState: string
  isPublished: boolean
}

export interface JobItem {
  id: string
  code: string
  name: string
  page: Page
}

export const jobHeaders: TableHeader[] = [
  {
    text: '求人コード',
    align: 'left',
    value: 'code'
  },
  { text: '求人', value: 'name' },
  { text: '', value: 'edit' },
  { text: '', value: 'others' }
]

export const getJobs = gql`
  query getJobs {
    jobs {
      id
      code
      name
      job_content
    }
  }
`

export const deleteJob = gql`
  mutation($id: ID!) {
    deleteJob(id: $id) {
      code
    }
  }
`
