<template>
  <data-loading v-if="loading" message="ログイン中" />
  <v-container v-else>
    <v-col>
      <v-row justify="center" class="ma-2 red--text text-center">
        <h1>ログインに失敗しました。</h1>
      </v-row>
      <v-container>
        <p class="error_message text-center">{{ message }}</p>
      </v-container>
      <v-row justify="center">
        <v-btn to="/">ログイン画面に戻る</v-btn>
      </v-row>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types' // eslint-disable-line no-unused-vars
import { loginStore } from '@/store'
import { SocialLoginPost } from '@/constants/login/login-post'
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

  message: string
  loading: boolean = true

  get loginUrl(): string {
    return `${this.apiDomain}/api/login/${this.uniqueId}/${this.provider}`
  }

  async postLogin() {
    await loginStore.postSocialLogin(
      new SocialLoginPost(this.loginUrl, this.code)
    )
  }

  catchError(error: any) {
    if (error.response.status !== 401) {
      this.$nuxt.error({
        statusCode: error.response.status,
        message: error.response.message
      })
      return
    }

    const errorData = error.response.data
    const message =
      'hint' in errorData ? errorData.hint : errorData.error_description
    this.message = message
  }

  async mounted() {
    // mounted後でなければ、formDataが取得できないため、以下に実装
    try {
      await this.postLogin()
    } catch (error) {
      this.catchError(error)
      this.loading = false
    }

    if (loginStore.isLoggedIn) {
      this.$router.push(loginStore.redirectToPath)
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
.error_message {
  white-space: pre-wrap;
}
</style>
