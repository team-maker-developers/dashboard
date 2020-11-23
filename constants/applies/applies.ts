import gql from 'graphql-tag'
import { TableHeader } from '@/types'

interface Page {
  id: string
  publishState: string
  isPublished: boolean
}

export interface AppliesItem {
  id: string
  name: string
  kana: string
  eMail: string
  status: string
  page: Page
}

export const AppliesHeaders: TableHeader[] = [
  {
    text: 'ID',
    align: 'left',
    value: 'id'
  },
  { text: '応募日時', value: 'created_at' },
  { text: '応募求人', value: 'job.name' },
  { text: '応募者名前', value: 'applicant.name' },
  { text: 'メールアドレス', value: 'applicant.email' }
  // { text: '', value: 'changeStatus' }
]

export const getApplies = gql`
  query getApplies {
    applies {
      id
      created_at
      job {
        id
        name
      }
      applicant {
        id
        name
        email
      }
      status {
        id
        name
      }
    }
  }
`
