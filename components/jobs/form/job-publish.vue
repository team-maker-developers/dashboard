<template>
  <v-col cols="12" :lg="9">
    <v-card outlined>
      <v-card-title class="headline">公開設定</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="4" :sm="2">
            ステータス
          </v-col>
          <v-col cols="8" :sm="10">
            {{ job.publishState }}
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4" :sm="2">
            URL
          </v-col>
          <v-col cols="8" :sm="10">
            {{ publishUrl }}
          </v-col>
        </v-row>
        <job-date-input v-model="publishedAt" label="掲載開始日" />
        <job-date-input v-model="expiredAt" label="有効期限" />
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import jobDateInput from './publish/job-date.vue'

export default {
  components: { jobDateInput },
  model: { prop: 'job' },
  props: {
    job: {
      type: Object,
      required: true
    }
  },
  computed: {
    expiredAt: {
      get() {
        if ('expired_at' in this.job) {
          return this.job.expired_at
        }
        return null
      },
      set(expiredAt) {
        const job = { ...this.job }
        job.expired_at = expiredAt

        this.$emit('input', job)
      }
    },
    publishedAt: {
      get() {
        if ('page' in this.job && 'published_at' in this.job.page) {
          return this.job.page.published_at
        }
        return null
      },
      set(publishedAt) {
        const job = { ...this.job }
        job.page.published_at = publishedAt

        this.$emit('input', job)
      }
    },
    publishUrl() {
      return `${this.$root.context.env.jobBoard}/${this.job.page.slug}`
    }
  }
}
</script>
