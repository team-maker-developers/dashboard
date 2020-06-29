<template>
  <v-container v-if="job">
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
            <v-btn x-large class="mx-2" color="primary" @click="doShare">
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
import {
  createUserShowJobConversion,
  createUserShareJobConversion
} from '@/constants/conversions/conversion.ts'

export default {
  asyncData({ params, error }) {
    if (params.id === undefined) {
      error({ statusCode: 404 })
    }

    return { jobId: params.id }
  },
  data: () => ({
    lead: ''
  }),
  computed: {
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
  methods: {
    doShare() {
      createUserShareJobConversion(this.job, false)
      // コンバージョン登録が完了するように、別タブで開くようにする
      window.open(this.lineShareUrl, '_blank')
    }
  },
  apollo: {
    job: {
      query: getJob,
      variables() {
        return {
          id: this.jobId
        }
      },
      result({ data }) {
        createUserShowJobConversion(data.job, false)
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
