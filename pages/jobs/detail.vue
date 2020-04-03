<template>
  <div>
    <job-form
      v-if="!loading"
      v-model="jobValue"
      :employment-categories="employmentCategories"
    />
    <!-- eslint-disable -->
    <!-- TODO: #43 CSSで対応するよう、変更する -->
    <v-card v-if="!loading" flat tile width="100%" class="blue-grey lighten-5">
      <v-card-text>
        <div class="d-flex justify-end pb-5">
            <v-btn x-large color="primary" outlined class="mx-2" to="..">キャンセル</v-btn>
            <v-btn x-large color="primary" outlined class="mx-2" to="..">保存する</v-btn>
            <v-btn v-if="doUpdate" x-large color="primary" class="mx-2">公開する</v-btn>
        </div>
      </v-card-text>
    </v-card>
    <!-- TODO: #43 上記、footerをmargin-topする代わりに対している -->
    <v-footer fixed padless>
      <v-card flat tile width="100%" class="blue-grey lighten-5">
        <v-card-text>
          <div class="d-flex justify-end pb-5">
            <v-btn
              x-large
              color="primary"
              outlined
              class="mx-2"
              to="/jobs"
            >キャンセル</v-btn>
            <v-btn
              x-large
              color="primary"
              outlined
              class="mx-2"
              @click="doUpsertJob(upsertJobInput)"
            >保存する</v-btn>
            <v-btn
              v-if="doUpdate"
              x-large
              color="primary"
              class="mx-2"
              @click="changePublish(upsertJobInput)"
            >{{ isPublished ? '下書きに戻す' : '公開する' }}</v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-footer>
    <!-- eslint-enable -->
  </div>
</template>

<script>
// TODO: #44 TSに置き換える
import { mapActions } from 'vuex'
import { getEmploymentCategories, getJob } from '@/constants/job/job'
import { sanitizer } from '@/constants/job/purify'
import jobForm from '@/components/jobs/job-form.vue'

export default {
  components: {
    jobForm
  },
  data: () => ({
    jobValue: {}
  }),
  computed: {
    loading() {
      const queries = this.$apollo.queries
      return queries.job.loading || queries.employmentCategories.loading
    },
    doUpdate() {
      return this.jobId !== null
    },
    upsertJobInput() {
      return sanitizer(this.jobValue)
    },
    page() {
      if ('page' in this.jobValue) {
        return this.jobValue.page
      }
      return {}
    },
    isPublished() {
      if ('isPublished' in this.page) {
        return this.page.isPublished
      }

      return false
    }
  },
  asyncData({ query }) {
    const jobId = 'jobId' in query ? query.jobId : null
    return { jobId }
  },
  methods: {
    async changePublish() {
      if (this.isPublished) {
        await this.unpublishJob(this.upsertJobInput)
      } else {
        await this.publishJob(this.upsertJobInput)
      }
      this.$apollo.queries.job.refetch()
    },
    async doUpsertJob() {
      const { data } = await this.upsertJob(this.upsertJobInput)
      this.jobId = data.upsertJob.id
      this.$router.push({ name: 'jobs-detail', query: { jobId: this.jobId } })
    },
    ...mapActions('job', ['upsertJob', 'publishJob', 'unpublishJob'])
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
        return !this.doUpdate
      },
      result({ data }) {
        this.jobValue = data.job
      }
    },
    employmentCategories: {
      query: getEmploymentCategories
    }
  }
}
</script>
