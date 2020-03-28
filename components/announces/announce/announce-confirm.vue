<template>
  <v-stepper-content step="2">
    <h3 class="py-5">
      以下の広報文を社員に送信します。よろしいですか？
    </h3>
    <h4 class="py-1">広報文</h4>
    <v-row justify="center">
      <v-col :lg="9">
        <v-textarea
          v-model="sharedAnnounce"
          auto-grow
          rows="7"
          row-height="30"
          filled
          readonly
        >
        </v-textarea>
      </v-col>
    </v-row>
    <job-confirm />
    <div class="text-right">
      <v-btn text @click="changeBeforeStep">キャンセル</v-btn>
      <v-btn :disabled="loading" color="primary" @click="doAnnounce">
        {{ loading ? '送信中' : 'OK' }}
      </v-btn>
      <v-dialog v-model="dialog" width="500">
        <v-card class="py-8">
          <v-card-title class="headline py-8" primary-title>
            {{ announceResult }}
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="clearDialog">
              OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-stepper-content>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import jobConfirm from '../job-confirm.vue'

const postAnnounceError = `広報文の送信に失敗いたしました。
お手数ですが、管理部まで問い合わせてくださいませ。`

export default {
  components: { jobConfirm },
  model: {
    prop: 'announce'
  },
  props: {
    announce: {
      type: String,
      required: true
    }
  },
  data: () => ({
    announceResult: '',
    loading: false
  }),
  computed: {
    sharedAnnounce() {
      if (this.shareUrl) {
        return `${this.announce}\n${this.shareUrl}`
      }

      return this.announce
    },
    dialog() {
      return this.announceResult !== ''
    },
    ...mapGetters('announce', ['shareUrl'])
  },
  methods: {
    changeBeforeStep() {
      this.changeStep(1)
    },
    changeStep(step) {
      this.$emit('changeStep', step)
    },
    clearDialog() {
      this.announceResult = ''
    },
    async doAnnounce() {
      this.loading = true
      try {
        this.announceResult = await this.postAnnounce(this.sharedAnnounce)
      } catch (error) {
        this.announceResult = postAnnounceError
      } finally {
        this.loading = false
      }
    },
    ...mapActions('announce', ['postAnnounce'])
  }
}
</script>

<style lang="scss" scoped>
.lead-confirm {
  white-space: pre-wrap;
}
</style>
