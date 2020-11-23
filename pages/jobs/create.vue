<template>
  <div>
    <job-form
      v-if="!loading"
      v-model="jobValue"
      :employment-categories="employmentCategories"
      :industries="industries"
      :occupations="occupations"
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
