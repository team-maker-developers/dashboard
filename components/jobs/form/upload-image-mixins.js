import axios from 'axios'

export default {
  data: () => ({ uploading: false }),
  methods: {
    async uploadImage(image) {
      const formData = new FormData()
      formData.append('image', image)

      const context = this.$root.context

      const apiDomain = context.env.apiDomain
      const uploadUrl = `${apiDomain}/api/jobs/images`

      const token = context.store.state.login.accessToken

      this.uploading = true
      const response = await axios.post(uploadUrl, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      this.uploading = false

      return response.data.file_url
    }
  }
}
