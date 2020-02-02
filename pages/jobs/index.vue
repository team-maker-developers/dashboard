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
          <job-table :jobs="jobs" :job-actions="jobActions" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { jobStore } from '@/store'
// eslint-disable-next-line no-unused-vars
import { getJobs, JobItem } from '@/constants/list-tables/jobs'
import jobTable from '@/components/jobs/job-table.vue'

@Component({
  components: { jobTable },
  apollo: {
    jobs: {
      query: getJobs
    }
  }
} as any)
export default class JobsIndexVue extends Vue {
  jobActions: TableAction<JobItem>[] = [
    {
      text: 'LINEでシェア',
      action: (id: JobItem) => {}
    },
    {
      text: '下書きに戻す',
      alterText: '公開する',
      action: async (job: JobItem) => {
        if (job.isPublished) {
          await jobStore.unpublishJob(job)
        } else {
          await jobStore.publishJob(job)
        }
        this.refetchJobs()
      }
    },
    {
      text: '削除',
      action: ({ id }: JobItem) => {
        jobStore.deleteJob(id)
      }
    }
  ]

  refetchJobs() {
    this.$apollo.queries.jobs.refetch()
  }
}
</script>
