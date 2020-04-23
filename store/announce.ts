import { Action, Mutation, Module, VuexModule } from 'vuex-module-decorators'
import { apolloMutate } from '@/plugins/apollo/get-apollo-client'
import { createAnnounce } from '@/constants/announce/announce'
import { loginStore } from '@/store'

interface Page {
  slug: string
  isPublished: boolean
  publishState: string
}

export interface Job {
  id: string
  code: string
  name: string
  last_announced_at: string
  page: Page
}

interface AnnounceState {
  jobId: string | null
  job: Job | null
}

const getCreateAnnounceInput = (announce: string, jobId: string) => ({
  content: announce,
  job_id: jobId,
  channelNotifications: {
    create: [{
      channel_id: 1
    }]
  }
})

@Module({ stateFactory: true, namespaced: true, name: 'announce' })
export default class Announce extends VuexModule implements AnnounceState {
  job: Job | null = null

  get jobId(): string {
    return this.job ? this.job.id : ''
  }

  get announceUrl(): string {
    if (this.job) {
      const domain: string = window.location.origin
      const unique_id: string = loginStore.uniqueId

      const reqirectTo: string = `/share/jobs/${this.job.id}`
      return `${domain}/login/?unique_id=${unique_id}&redirect_to=${encodeURIComponent(
        reqirectTo
      )}`
    }

    return ''
  }

  @Mutation
  setJob(job: Job) {
    this.job = job
  }

  @Mutation
  clearJob() {
    this.job = null
  }

  @Action({ rawError: true })
  async postAnnounce(announce: string) {
    await apolloMutate({
      mutation: createAnnounce,
      variables: {
        input: getCreateAnnounceInput(announce, this.jobId)
      }
    })
    return '広報文の送信に成功いたしました。'
  }
}