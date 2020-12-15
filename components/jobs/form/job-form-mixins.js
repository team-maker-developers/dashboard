import jobPublish from './job-publish.vue'
import jobText from './input/job-text.vue'
import jobJson from './input/job-json.vue'

export default {
  components: {
    jobPublish,
    jobText,
    jobJson
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
    }
  }
}
