<template>
  <data-loading v-if="loading" />
  <announce-form v-else />
</template>

<script>
import { mapMutations } from 'vuex'
import { getJob } from '@/constants/announce/announce'
import DataLoading from '@/components/data-loading.vue'
import announceForm from '@/components/announces/announce-form.vue'

export default {
  watchQuery: ['jobId'],
  components: { announceForm, DataLoading },
  computed: {
    loading() {
      return this.$apollo.queries.job.loading
    }
  },
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
