<template>
  <v-container v-if="job">
    <v-row>
      <h4 class="py-1">広報する求人</h4>
      <v-row justify="center">
        <v-col :lg="9">
          <v-data-table
            :headers="headers"
            :items="jobs"
            hide-default-footer
          ></v-data-table>
        </v-col>
      </v-row>
    </v-row>
    <v-row>
      <h4 class="py-1">広報用の求人URL</h4>
      <v-row justify="center">
        <v-col :lg="9">
          <p>{{ announceUrl }}</p>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
import { jobHeaders } from '@/constants/jobs/jobs'
import { getAnnounceUrl } from '@/constants/announces/models.ts'

export default {
  props: {
    job: {
      type: Object,
      default: null
    }
  },
  computed: {
    headers() {
      return jobHeaders
    },
    // 現状、テーブルで表示するには、配列が必要なため、上記の様に実装
    jobs() {
      return [this.job]
    },
    announceUrl() {
      return getAnnounceUrl(this.job)
    }
  }
}
</script>
