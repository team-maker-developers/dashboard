<template>
  <v-layout v-if="loading" ma-5 column justify-center align-center>
    <v-progress-circular indeterminate size="200">
      読み込み中
    </v-progress-circular>
  </v-layout>
  <announce-form v-else />
</template>

<script>
import { mapMutations } from 'vuex'
import { getJob } from '@/constants/models/announce/announce'
import announceForm from '@/components/announces/announce-form.vue'

export default {
  watchQuery: ['jobId'],
  components: { announceForm },
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
