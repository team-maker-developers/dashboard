<template>
  <div>
    <job-form
      v-if="!$apollo.loading"
      v-model="jobValue"
      :employment-categories="employmentCategories"
    />
    <job-footer :job="jobValue" />
  </div>
</template>

<script>
import jobDetailMixins from '@/components/jobs/job-detail-mixins'

export default {
  mixins: [jobDetailMixins]
}
</script>
