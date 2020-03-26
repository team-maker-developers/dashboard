import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import moment from 'moment'
import { getApolloClient } from '@/libs/get-apollo-client'
import { getJobs, deleteJob } from '@/constants/list-tables/jobs'
import { getJob, upsertJob, updateJobPublishAt } from '~/constants/models/job/job';

interface JobState {}

@Module({ stateFactory: true, namespaced: true, name: 'job' })
export default class Job extends VuexModule implements JobState {
  @Action
  async deleteJob(id: string) {
    await getApolloClient().mutate({
      mutation: deleteJob,
      variables: { id },
      refetchQueries: [{
        query: getJobs
      }],
    })
  }

  @Action({ rawError: true })
  async upsertJob(job: any) {
    return await getApolloClient().mutate({
      mutation: upsertJob,
      variables: {
        input: job
      },
      refetchQueries: ({ data }: any) => [{
        query: getJob,
        variables: {
          id: data.upsertJob.id
        }
      }],
    })
  }

  @Action
  async updateJobPublishAt(page: any) {
    await getApolloClient().mutate({
      mutation: updateJobPublishAt,
      variables: {
        id: page.id,
        published_at: page.published_at,
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
