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
      this.$emit('changeStep', this.step + 1)
    },
    changeBeforeStep() {
      this.$emit('changeStep', this.step - 1)
    }
  }
}
