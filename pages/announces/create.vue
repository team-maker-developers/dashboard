<template>
  <announce-form :job="jobValue" />
</template>

<script>
import { mapMutations } from 'vuex'
import { getChannels, getJob } from '@/constants/announces/announce.ts'
import announceForm from '@/components/announces/announce-form.vue'

export default {
  components: { announceForm },
  asyncData({ query }) {
    const jobId = 'jobId' in query ? query.jobId : null
    return { jobId }
  },
  data: () => ({ jobValue: null }),
  watchQuery: ['jobId'],
  methods: {
    ...mapMutations('announce', ['setChannels'])
  },
  apollo: {
    channels: {
      query: getChannels,
      result({ data }) {
        this.setChannels(data.channels)
      }
    },
    job: {
      query: getJob,
      variables() {
        return {
          id: this.jobId
        }
      },
      skip() {
        return this.jobId === null
      },
      result({ data }) {
        this.jobValue = data.job
      }
    }
  }
}
</script>
