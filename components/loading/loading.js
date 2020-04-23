const defaultLoadingText = '読み込み中'

export default {
  render: () => {},
  data: () => ({
    loading: false,
    loadingText: defaultLoadingText
  }),
  methods: {
    start(loadingText = defaultLoadingText) {
      this.loading = true
      this.loadingText = loadingText
    },
    finish() {
      this.loading = false
      this.loadingText = defaultLoadingText
    }
  }
}
