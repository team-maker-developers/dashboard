import gql from 'graphql-tag'
import { apolloMutate } from '@/plugins/apollo/get-apollo-client'

interface Page {
  id: string
  refered_url: string // eslint-disable-line camelcase
}

export interface Job {
  id: string
  page: Page
}

/* eslint-disable camelcase */
export interface ConversionInput {
  page_id: string
  conversion_category_id: string
  conversionable_type: string
  conversionable_id: string
}
/* eslint-enable camelcase */

// conversion_categoryのレコードを定数化
const conversionCategories = {
  applicantShowJob: 1,
  userShowJob: 2,
  userShareJob: 3
}

const createConversion = gql`
  mutation($input: ConversionInput!) {
    createConversion(input: $input) {
      id
    }
  }
`

const postCreateConversion = async (
  job: Job,
  categoryId: number,
  withLoading: boolean
) => {
  const input = getCreateJobConversionInput(job, categoryId)
  await apolloMutate(
    {
      mutation: createConversion,
      variables: { input }
    },
    withLoading
  )
}

const getCreateJobConversionInput = (
  job: Job,
  categoryId: number
): ConversionInput => {
  return {
    page_id: job.page.id,
    conversion_category_id: String(categoryId),
    conversionable_type: 'App\\Models\\Job',
    conversionable_id: job.id
  }
}

export const createUserShowJobConversion = async (
  job: Job,
  withLoading: boolean = true
) => {
  await postCreateConversion(job, conversionCategories.userShowJob, withLoading)
}

export const createUserShareJobConversion = async (
  job: Job,
  withLoading: boolean = true
) => {
  await postCreateConversion(
    job,
    conversionCategories.userShareJob,
    withLoading
  )
}
