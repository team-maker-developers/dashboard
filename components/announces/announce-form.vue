<template>
  <div>
    <v-container>
      <h2>LINEで広報する</h2>
      <v-stepper v-model="currentStep">
        <v-stepper-header>
          <v-divider></v-divider>
          <v-stepper-step :complete="currentStep > 1" step="1">
            広報文を入力する
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="currentStep > 2" step="2">
            入力内容を確認して、LINEで広報する
          </v-stepper-step>
          <v-divider></v-divider>
        </v-stepper-header>
        <v-stepper-items>
          <announce-input v-model="announce" @changeStep="changeStep" />
          <announce-confirm v-model="announce" @changeStep="changeStep" />
        </v-stepper-items>
      </v-stepper>
    </v-container>
  </div>
</template>

<script>
import announceInput from '@/components/announces/announce/announce-input.vue'
import announceConfirm from '@/components/announces/announce/announce-confirm.vue'

export default {
  components: { announceConfirm, announceInput },
  data: () => ({
    announce: '',
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
