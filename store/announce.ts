import { Action, Mutation, Module, VuexModule } from 'vuex-module-decorators'
import { apolloMutate } from '@/plugins/apollo/get-apollo-client'
import { createAnnounce } from '~/constants/announces/announce'
/* eslint-disable no-unused-vars */
import {
  Channel,
  Job,
  AnnounceInput,
  getCreateAnnounceInput
} from '~/constants/announces/models'
/* eslint-enable no-unused-vars */

interface AnnounceState {
  channels: Channel[]
}

@Module({ stateFactory: true, namespaced: true, name: 'announce' })
export default class Announce extends VuexModule implements AnnounceState {
  channels: Channel[] = []

  @Mutation
  setChannels(channels: Channel[]) {
    this.channels = channels
  }

  @Action({ rawError: true })
  async postAnnounce({ announce, channels, jobId }: AnnounceInput) {
    await apolloMutate({
      mutation: createAnnounce,
      variables: {
        input: getCreateAnnounceInput(announce, channels, jobId)
      }
    })
    return '広報文の送信に成功いたしました。'
  }
}
