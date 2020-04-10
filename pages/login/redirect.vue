<template>
  <data-loading v-if="loading" message="ログイン中" />
  <v-container v-else>
    <v-col>
      <v-alert type="warning" color="orange" class="text-center">
        ログインに失敗しました。
      </v-alert>
      <v-container>
        <p class="text-center">
          承認されていないアカウントのため、ログインできません。
          <br />お手数ですが、人事担当者の方が承認するまで、お待ちくださいませ。
        </p>
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
    if (error.response.status === 401) {
      return
    }

    this.$nuxt.error({
      statusCode: error.response.status,
      message: error.response.message
    })
  }

  async mounted() {
    // mounted後でなければ、formDataが取得できないため、以下に実装
    try {
      await this.postLogin()
    } catch (error) {
      this.catchError(error)
    } finally {
      this.loading = false
    }

    if (loginStore.isLoggedIn) {
      this.$router.push(loginStore.redirectToPath)
    }
  }
}
</script>
