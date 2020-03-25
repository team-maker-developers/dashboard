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
    text: 'No',
    align: 'left',
    value: 'code'
  },
  { text: '求人', value: 'name' },
  { text: '公開ステータス', value: 'page.publishState' },
  { text: '前回シェア日', value: 'sharedAt' },
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
      page {
        id
        published_at
        publishState
        isPublished
      }
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
