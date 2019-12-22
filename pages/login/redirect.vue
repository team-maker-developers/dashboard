<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      ログイン中
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'
import { loginStore } from '@/store'
import { SocialLoginPost } from '@/models/login-post'

@Component({ middleware: ['initialize-form-data'] })
export default class RedirectLoginVue extends Vue {
  asyncData({ env, query }: Context) {
    return {
      apiDomain: env.apiDomain,
      clientId: query.client_id,
      provider: query.provider,
      code: query.code
    }
  }

  code: string
  clientId: string
  provider: string
  apiDomain: string

  get loginUrl(): string {
    return `${this.apiDomain}/api/login/${this.clientId}/${this.provider}`
  }

  mounted() {
    loginStore.postSocialLogin(new SocialLoginPost(this.loginUrl, this.code))
  }
}
</script>
