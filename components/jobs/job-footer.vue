<template>
  <v-footer fixed padless height="100">
    <v-card flat tile width="100%" class="blue-grey lighten-5">
      <v-card-text>
        <div class="d-flex justify-end pb-5">
          <v-btn
            color="primary"
            class="mx-2"
            x-large
            @click="doUpsertJob(upsertJobInput)"
          >
            保存する
          </v-btn>
          <v-btn
            v-if="canUpdate"
            color="primary"
            class="mx-2"
            outlined
            x-large
            @click="changePublish(upsertJobInput)"
          >
            {{ isPublished ? '下書きに戻す' : '公開する' }}
          </v-btn>
          <v-btn x-large color="primary" outlined class="mx-2" to="/jobs">
            キャンセル
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import { mapActions } from 'vuex'
import { sanitizer } from '@/constants/jobs/purify'

export default {
  props: {
    job: {
      type: Object,
      required: true
    }
  },
  computed: {
    canUpdate() {
      return 'id' in this.job
    },
    upsertJobInput() {
      return sanitizer(this.job)
    },
    page() {
      if ('page' in this.job) {
        return this.job.page
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
  methods: {
    async changePublish() {
      if (this.isPublished) {
        await this.unpublishJob(this.upsertJobInput)
      } else {
        await this.publishJob(this.upsertJobInput)
      }
      this.$emit('update')
    },
    async doUpsertJob() {
      const { data } = await this.upsertJob(this.upsertJobInput)
      this.$router.push({
        name: 'jobs-id',
        params: { id: data.upsertJob.id }
      })
    },
    ...mapActions('job', ['upsertJob', 'publishJob', 'unpublishJob'])
  }
}
</script>
