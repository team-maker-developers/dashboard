export default {
  model: {
    prop: 'model'
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    property: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    jsonPropertyName: {
      type: String,
      required: false,
      default: 'value'
    }
  },
  computed: {
    value: {
      get() {
        if (this.property in this.model) {
          return this.model[this.property]
        }

        return null
      },
      set(inputValue) {
        const model = { ...this.model }

        model[this.property] = inputValue
        this.$emit('input', model)
      }
    }
  }
}
