<template>
  <v-container v-if="!loading">
    <h2>求人をシェアする</h2>
    <v-row justify="center">
      <p class="ma-3 job-share-description" v-text="description" />
      <v-col cols="12" :lg="9">
        <v-card>
          <v-card-title class="headline">求人名</v-card-title>
          <v-card-text>{{ job.name }}</v-card-text>
          <v-card-title class="headline">リード文</v-card-title>
          <v-card-text>
            <v-textarea v-model="lead" auto-grow autofocus />
          </v-card-text>
          <v-card-title class="headline">求人URL</v-card-title>
          <v-card-text>{{ job.page.refered_url }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-footer padless fixed>
      <v-card flat tile width="100%">
        <v-card-text>
          <v-row :justify="$vuetify.breakpoint.mdAndDown ? 'center' : 'end'">
            <v-btn :href="lineShareUrl" x-large class="mx-2" color="primary">
              LINEでシェアする
            </v-btn>
          </v-row>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-container>
</template>

<script>
import { getJob, description, lineShareUrl } from '@/constants/share/job.js'

export default {
  data: () => ({
    lead: ''
  }),
  computed: {
    loading() {
      return this.$apollo.queries.job.loading
    },
    description() {
      return description
    },
    lineShareUrl() {
      const referedUrl = this.job.page.refered_url

      // %0AはURLエンコードされた改行コードになる
      return `${lineShareUrl}?${encodeURIComponent(
        this.lead
      )}%0A${encodeURIComponent(referedUrl)}`
    }
  },
  asyncData({ params, error }) {
    if (params.id === undefined) {
      error({ statusCode: 404 })
    }

    return { jobId: params.id }
  },
  apollo: {
    job: {
      query: getJob,
      variables() {
        return {
          id: this.jobId
        }
      }
    }
  }
}
</script>

<style scoped>
.job-share-description {
  white-space: pre-wrap;
}
</style>
