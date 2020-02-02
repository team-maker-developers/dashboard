<template>
  <!-- eslint-disable -->
  <div>
    <v-container>
      <h2>求人一覧</h2>
      <v-row justify="center">
        <v-col :lg="9">
          <div class="text-right">
            <v-btn outlined small color="primary" to="jobs/detail/" >新規作成</v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col :lg="9">
          <job-table :jobs="jobs" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { getJobs } from '@/constants/list-tables/jobs'
import jobTable from '@/components/jobs/job-table.vue'

@Component({
  components: { jobTable },
  apollo: {
    jobs: getJobs
  }
} as any)
export default class JobsIndexVue extends Vue {}
</script>
