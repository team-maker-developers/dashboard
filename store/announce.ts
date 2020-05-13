import { Action, Mutation, Module, VuexModule } from 'vuex-module-decorators'
import { apolloMutate } from '@/plugins/apollo/get-apollo-client'
import { createAnnounce } from '~/constants/announces/announce'
import { Channel, Job, AnnounceInput, getCreateAnnounceInput } from '~/constants/announces/models'

interface AnnounceState {
  jobId: string | null
  job: Job | null
  channels: Channel[]
}

@Module({ stateFactory: true, namespaced: true, name: 'announce' })
export default class Announce extends VuexModule implements AnnounceState {
  job: Job | null = null
  channels: Channel[] = []

  get jobId(): string {
    return this.job ? this.job.id : ''
  }

  @Mutation
  setChannels(channels: Channel[]) {
    this.channels = channels
  }

  @Action({ rawError: true })
  async postAnnounce({ announce, channels }: AnnounceInput) {
    await apolloMutate({
      mutation: createAnnounce,
      variables: {
        input: getCreateAnnounceInput(
          announce,
          channels,
          this.jobId
        )
      }
    })
    return '広報文の送信に成功いたしました。'
  }
}