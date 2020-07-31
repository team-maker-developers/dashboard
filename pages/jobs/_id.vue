<template>
  <div>
    <job-form
      v-if="!$apolloData.loading"
      v-model="jobValue"
      :employment-categories="employmentCategories"
      :industries="industries"
      :occupations="occupations"
    />
    <job-footer :job="jobValue" @update="refetch" />
  </div>
</template>

<script>
// TODO: #44 TSに置き換える
import jobDetailMixins from '@/components/jobs/job-detail-mixins'
import { getJob } from '@/constants/jobs/job'

export default {
  mixins: [jobDetailMixins],
  asyncData({ params }) {
    return { jobId: params.id }
  },
  methods: {
    refetch() {
      this.$apollo.queries.job.refetch()
    }
  },
  apollo: {
    job: {
      query: getJob,
      variables() {
        return {
          id: this.jobId
        }
      },
      result({ data }) {
        this.jobValue = data.job
      }
    }
  }
}
</script>
