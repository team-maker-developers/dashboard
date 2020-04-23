<template>
  <announce-form />
</template>

<script>
import { mapMutations } from 'vuex'
import { getJob } from '@/constants/announce/announce'
import announceForm from '@/components/announces/announce-form.vue'

export default {
  watchQuery: ['jobId'],
  components: { announceForm },
  asyncData({ query, store }) {
    const jobId = 'jobId' in query ? query.jobId : null
    store.commit('announce/clearJob')

    return { jobId }
  },
  methods: {
    ...mapMutations('announce', ['setJob'])
  },
  apollo: {
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
        this.setJob(data.job)
      }
    }
  }
}
</script>
