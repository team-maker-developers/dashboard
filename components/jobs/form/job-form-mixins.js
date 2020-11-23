import jobText from './input/job-text.vue'
import jobJson from './input/job-json.vue'
import jobNestedSelect from './input/job-nested-select.vue'

export default {
  components: {
    jobText,
    jobJson,
    jobNestedSelect
  },
  model: {
    prop: 'jobValue'
  },
  props: {
    jobValue: {
      type: Object,
      required: true
    },
    employmentCategories: {
      type: Array,
      required: true
    },
    industries: {
      type: Array,
      required: true
    },
    occupations: {
      type: Array,
      required: true
    }
  },
  computed: {
    job: {
      get() {
        return this.jobValue
      },
      set(job) {
        this.$emit('input', job)
      }
    },
    employmentCategoryId: {
      get() {
        return this.job.employment_category_id
      },
      set(employmentCategoryId) {
        this.job = {
          ...this.job,
          employment_category_id: employmentCategoryId
        }
      }
    },
    industryId: {
      get() {
        return this.job.industry_id
      },
      set(industryId) {
        this.job = {
          ...this.job,
          industry_id: industryId
        }
      }
    },
    occupationId: {
      get() {
        return this.job.occupation_id
      },
      set(occupationId) {
        this.job = {
          ...this.job,
          occupation_id: occupationId
        }
      }
    }
  }
}
