import { getEmploymentCategories } from '@/constants/jobs/master'
import jobForm from './job-form.vue'
import jobFooter from './job-footer.vue'

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
