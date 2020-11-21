export default {
  props: {
    step: {
      type: Number,
      required: true
    },
    job: {
      type: Object,
      default: null
    }
  },
  methods: {
    changeStep() {
      this.$emit('change-step', this.step + 1)
    },
    changeBeforeStep() {
      this.$emit('change-step', this.step - 1)
    }
  }
}
