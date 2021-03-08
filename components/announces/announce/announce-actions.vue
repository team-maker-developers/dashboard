<template>
  <div class="text-right">
    <v-btn :disabled="loading" color="primary" @click="doAnnounce">
      送信する
    </v-btn>
    <v-btn text @click="changeBeforeStep">戻る</v-btn>
    <v-dialog v-model="dialog" width="500">
      <v-card class="py-8">
        <v-card-title class="headline py-8" primary-title>
          広報の送信結果
        </v-card-title>
        <v-card-text class="announce_results">
          <ul>
            <li v-for="result in announceResults" :key="result.id" class="mb-2">
              <div>
                {{ result.channel.name }}:
                {{ result.suceeded ? '成功しました' : '失敗しました' }}
              </div>
              <!-- eslint-disable prettier/prettier -->
              <div v-if="!result.suceeded" class="error_message ml-2">{{
                JSON.parse(result.error).message
              }}</div>
              <!-- eslint-enable prettier/prettier -->
            </li>
          </ul>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="clearDialog">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    announce: {
      type: String,
      required: true
    },
    channels: {
      type: Array,
      required: true
    },
    job: {
      type: Object,
      default: null
    }
  },
  data: () => ({
    announceResults: null,
    loading: false
  }),
  computed: {
    dialog() {
      return this.announceResults !== null
    }
  },
  methods: {
    clearDialog() {
      this.announceResults = null
    },
    changeBeforeStep() {
      this.$emit('change-before-step')
    },
    async doAnnounce() {
      this.loading = true
      const jobId = this.job ? this.job.id : null

      try {
        this.announceResults = await this.postAnnounce({
          announce: this.announce,
          channels: this.channels,
          jobId
        })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
        this.$nuxt.error({
          statusCode: error.response.status,
          message: error.response.message
        })
      } finally {
        this.loading = false
      }
    },
    ...mapActions('announce', ['postAnnounce'])
  }
}
</script>

<style lang="scss" scoped>
.announce_results {
  font-size: 1.2rem;

  .error_message {
    color: red;
    white-space: pre-wrap;
    font-size: 1rem;
  }
}
</style>
