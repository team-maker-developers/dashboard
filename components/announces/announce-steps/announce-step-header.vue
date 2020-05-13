<template>
  <v-stepper-header>
    <v-divider></v-divider>
    <v-stepper-step :complete="currentStep > 1" step="1">
      広報先を選択する
    </v-stepper-step>
    <v-divider></v-divider>
    <v-stepper-step :complete="currentStep > 2" step="2">
      広報文を入力する
    </v-stepper-step>
    <v-divider></v-divider>
    <v-stepper-step :complete="currentStep > 3" step="3">
      入力内容を確認して、LINEで広報する
    </v-stepper-step>
    <v-divider></v-divider>
  </v-stepper-header>
</template>

<script>
export default {
  props: {
    currentStep: {
      type: Number,
      required: true
    }
  }
}
</script>
