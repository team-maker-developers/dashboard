<template>
  <v-stepper-content step="3">
    <h3 class="py-5">以下の広報文を社員に送信します。よろしいですか？</h3>
    <h4 class="py-1">広報先</h4>
    <v-row v-for="channel in channelOptions" :key="channel.id" justify="center">
      <v-col :lg="9">
        <v-checkbox
          v-model="channelOptions"
          :label="channel.name"
          :value="channel"
          disabled
        />
      </v-col>
    </v-row>
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
    <job-confirm :job="job" />
    <announce-actions
      :announce="sharedAnnounce"
      :channels="channels"
      :job="job"
      @change-before-step="changeBeforeStep"
    />
  </v-stepper-content>
</template>

<script>
import { getAnnounceUrl } from '@/constants/announces/models.ts'
import jobConfirm from '../job-confirm.vue'
import announceActions from './announce-actions.vue'
import announceStepMixin from './announce-step-mixin'

export default {
  components: { jobConfirm, announceActions },
  mixins: [announceStepMixin],
  props: {
    announce: {
      type: String,
      required: true
    },
    channels: {
      type: Array,
      required: true
    }
  },
  computed: {
    channelOptions() {
      return this.channels
    },
    sharedAnnounce() {
      if (this.job) {
        const announceUrl = getAnnounceUrl(this.job)
        return `${this.announce}\n${announceUrl}`
      }

      return this.announce
    }
  }
}
</script>

<style lang="scss" scoped>
.lead-confirm {
  white-space: pre-wrap;
}
</style>
