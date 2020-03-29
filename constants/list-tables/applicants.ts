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
  { text: '名前', value: 'name' },
  { text: 'フリガナ', value: 'kana' },
  { text: 'e-mail', value: 'eMail' },
  { text: 'ステータス', value: 'status' },
  { text: '', value: 'changeStatus' }
]

export const getApplicants = gql`
  query getApplicants {
    applicants {
        id
      name
      kana
      eMail
      status
      page {
        id
        slug
        published_at
        publishState
        isPublished
      }
    }
  }
`
