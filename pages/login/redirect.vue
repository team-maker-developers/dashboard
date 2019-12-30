<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      ログイン中
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

  async mounted() {
    // mounted後でなければ、formDataが取得できないため、以下に実装
    await loginStore.postSocialLogin(
      new SocialLoginPost(this.loginUrl, this.code)
    )

    if (loginStore.isLoggedIn) {
      this.$router.push('/')
    }
  }
}
</script>
