import gql from 'graphql-tag'
import { jobStore } from '@/store'

export const jobHeaders: TableHeader[] = [
  {
    text: 'No',
    align: 'left',
    value: 'code'
  },
  { text: '求人', value: 'name' },
  { text: '公開ステータス', value: 'publishState' },
  { text: '前回シェア日', value: 'sharedAt' },
  { text: '', value: 'edit' },
  { text: '', value: 'others' }
]

export const jobActions: TableAction[] = [
  {
    text: 'LINEでシェア',
    action: (id: number) => {}
  },
  {
    text: '下書きに戻す',
    alterText: '公開する',
    action: (id: number) => {}
  },
  {
    text: '削除',
    action: (id: number) => {
      jobStore.deleteJob(id)
    }
 }
]

export const getJobs = gql`
  query getJobs {
    jobs {
      id
      code
      name
      publishState
      isPublished
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
