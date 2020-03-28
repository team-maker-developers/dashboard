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
import { mapGetters, mapState } from 'vuex'
import { jobHeaders } from '@/constants/list-tables/jobs'

export default {
  computed: {
    headers() {
      return jobHeaders
    },
    // 現状、テーブルで表示するには、配列が必要なため、上記の様に実装
    jobs() {
      return [this.job]
    },
    ...mapGetters('announce', ['announceUrl']),
    ...mapState('announce', ['job'])
  }
}
</script>
