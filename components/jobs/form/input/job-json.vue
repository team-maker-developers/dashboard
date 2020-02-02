<template>
  <job-text v-model="jsonValue" property="value" :label="label" textarea />
</template>

<script>
import jobInputMixin from './job-input-mixin'
import jobText from './job-text.vue'

// TODO: 必要になれば、json型を展開できるようにする
export default {
  components: {
    jobText
  },
  mixins: [jobInputMixin],
  computed: {
    jsonValue: {
      get() {
        if (this.value) {
          return JSON.parse(this.value)
        }

        return {}
      },
      set(jsonValue) {
        this.value = JSON.stringify(jsonValue)
      }
    }
  }
}
</script>
