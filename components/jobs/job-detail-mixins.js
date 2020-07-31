import jobForm from './job-form.vue'
import jobFooter from './job-footer.vue'
import {
  getEmploymentCategories,
  getIndustries,
  getOccupations
} from '@/constants/jobs/master'

export default {
  components: { jobForm, jobFooter },
  data: () => ({
    jobValue: {}
  }),
  apollo: {
    employmentCategories: {
      query: getEmploymentCategories
    },
    industries: {
      query: getIndustries,
      variables: {
        parent_id: null
      }
    },
    occupations: {
      query: getOccupations,
      variables: {
        parent_id: null
      }
    }
  }
}
