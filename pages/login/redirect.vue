<template>
  <data-loading v-if="true" message="ログイン中" />
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types' // eslint-disable-line no-unused-vars
import { loginStore } from '@/store'
import { SocialLoginPost } from '@/constants/models/login/login-post'
import DataLoading from '@/components/data-loading.vue'

@Component({
  middleware: ['initialize-form-data'],
  components: { DataLoading }
})
export default class RedirectLoginVue extends Vue {
  asyncData({ env, query }: Context) {
    return {
      apiDomain: env.apiDomain,
      uniqueId: query.unique_id,
      provider: query.provider,
      code: query.code
    }
  }

  code: string
  uniqueId: string
  provider: string
  apiDomain: string

  get loginUrl(): string {
    return `${this.apiDomain}/api/login/${this.uniqueId}/${this.provider}`
  }

  async postLogin() {
    await loginStore.postSocialLogin(
      new SocialLoginPost(this.loginUrl, this.code)
    )
  }

  async mounted() {
    // mounted後でなければ、formDataが取得できないため、以下に実装
    try {
      await this.postLogin()
    } catch (error) {
      this.$nuxt.error({
        statusCode: error.response.status,
        message: error.response.message
      })
    }

    if (loginStore.isLoggedIn) {
      this.$router.push(loginStore.redirectToPath)
    }
  }
}
</script>
