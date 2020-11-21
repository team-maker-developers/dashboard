<template>
  <div>
    <v-container>
      <h2>LINEで広報する</h2>
      <v-stepper v-model="currentStep">
        <announce-step-header :current-step="currentStep" />
        <v-stepper-items>
          <choose-channel
            v-model="channels"
            :job="job"
            :step="1"
            @change-step="changeStep"
          />
          <announce-input
            v-model="announce"
            :channels="channels"
            :step="2"
            :job="job"
            @change-step="changeStep"
          />
          <announce-confirm
            :channels="channels"
            :announce="announce"
            :job="job"
            :step="3"
            @change-step="changeStep"
          />
        </v-stepper-items>
      </v-stepper>
    </v-container>
  </div>
</template>

<script>
import announceConfirm from './announce/announce-confirm.vue'
import announceInput from './announce/announce-input.vue'
import announceStepHeader from './announce-steps/announce-step-header.vue'
import chooseChannel from './announce/choose-channel.vue'

export default {
  components: {
    announceConfirm,
    announceInput,
    announceStepHeader,
    chooseChannel
  },
  props: {
    job: {
      type: Object,
      default: null
    }
  },
  data: () => ({
    announce: '',
    channels: [],
    currentStep: 1,
    dialog: false
  }),
  methods: {
    changeStep(nextStep) {
      this.currentStep = nextStep
    }
  }
}
</script>
