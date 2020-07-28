import { Action, Module, VuexModule } from 'vuex-module-decorators'
import moment from 'moment'
import { apolloMutate } from '@/plugins/apollo/get-apollo-client'
import { getJobs, deleteJob } from '~/constants/jobs/jobs'
import { getJob, upsertJob, updateJobPublishAt } from '@/constants/jobs/job'

@Module({ stateFactory: true, namespaced: true, name: 'job' })
export default class Job extends VuexModule {
  @Action
  async deleteJob(id: string) {
    await apolloMutate({
      mutation: deleteJob,
      variables: { id },
      refetchQueries: [
        {
          query: getJobs
        }
      ]
    })
  }

  @Action({ rawError: true })
  async upsertJob(job: any) {
    return await apolloMutate({
      mutation: upsertJob,
      variables: {
        input: job
      },
      refetchQueries: ({ data }: any) => [
        {
          query: getJob,
          variables: {
            id: data.upsertJob.id
          }
        }
      ]
    })
  }

  // TODO: published_at周りを、別のstoreに移す
  @Action
  async updateJobPublishAt(page: any) {
    await apolloMutate({
      mutation: updateJobPublishAt,
      variables: {
        id: page.id,
        published_at: page.published_at
      }
    })
  }

  @Action
  async publishJob(page: any) {
    page.published_at = moment().format('YYYY-MM-DD 00:00:00')
    await this.updateJobPublishAt(page)
  }

  @Action
  async unpublishJob(page: any) {
    page.published_at = null
    await this.updateJobPublishAt(page)
  }
}
