import gql from 'graphql-tag'

interface Page {
  id: string
  publishState: string
  isPublished: boolean
}

export interface ApplicantsItem {
  id: string
  name: string
  kana: string
  eMail: string
  status: string
  page: Page
}

export const ApplicantsHeaders: TableHeader[] = [
  {
    text: 'No',
    align: 'left',
    value: 'no'
  },
  { text: '応募求人', value: '' },
  { text: '名前', value: 'name' },
  { text: 'e-mail', value: 'email' },
  { text: '応募求人', value: 'job.name' },
  { text: 'ステータス', value: 'status' },
  { text: '', value: 'changeStatus' }
]

export const getApplies = gql`
  query getApplies {
    applies {
      id
      create_at
      appilicant {
        id
        name
        email
      }      
      job {
        id
        name
      }
      status {
        id
        name
      }
    }
  }
`
