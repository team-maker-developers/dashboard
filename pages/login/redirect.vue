<template>
  <v-layout column justify-center align-center>
    <v-flex ma-5 xs12 sm8 md6>
      <v-progress-circular indeterminate size="200">
        ログイン中
      </v-progress-circular>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types' // eslint-disable-line no-unused-vars
import { loginStore } from '@/store'
import { SocialLoginPost } from '@/models/login-post'

@Component({ middleware: ['initialize-form-data'] })
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
      this.$router.push('/')
    }
  }
}
</script>
