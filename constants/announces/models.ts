import { loginStore } from '@/store'
import { scopes } from '@/constants/scopes'

export interface Channel {
  id: string
  name: string
}

interface Page {
  slug: string
  isPublished: boolean
  publishState: string
}

export interface AnnounceInput {
  announce: string
  channels: Channel[]
  jobId: number
}

export interface Job {
  id: string
  code: string
  name: string
  last_announced_at: string // eslint-disable-line camelcase
  page: Page
}

export const getCreateAnnounceInput = (
  announce: string,
  channels: Channel[],
  jobId: number
) => {
  const channelCreates = channels.map((channel) => ({ channel_id: channel.id }))
  return {
    content: announce,
    job_id: jobId,
    channelNotifications: {
      create: channelCreates
    }
  }
}

export const getAnnounceUrl = (job: Job) => {
  if (job) {
    const domain = window.location.origin

    const reqirectTo = `/share/jobs/${job.id}`
    return `${domain}/login/?unique_id=${
      loginStore.uniqueId
    }&redirect_to=${encodeURIComponent(reqirectTo)}&scope=${scopes.shareJob}`
  }

  return ''
}
