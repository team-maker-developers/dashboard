import jobForm from './job-form.vue'
import jobFooter from './job-footer.vue'
import { getEmploymentCategories } from '@/constants/jobs/job'

export default {
  components: { jobForm, jobFooter },
  data: () => ({
    jobValue: {}
  }),
  apollo: {
    employmentCategories: {
      query: getEmploymentCategories
    }
  }
}
