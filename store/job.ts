import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { getApolloClient } from '@/libs/get-apollo-client'
import { getJobs, deleteJob } from '@/constants/list-tables/jobs'

interface JobState {}

@Module({ stateFactory: true, namespaced: true, name: 'job' })
export default class Job extends VuexModule implements JobState {
  @Action
  async deleteJob(id: number) {
    await getApolloClient().mutate({
      mutation: deleteJob,
      variables: { id },
      refetchQueries: [{
        query: getJobs
      }],
    })
  }
}
