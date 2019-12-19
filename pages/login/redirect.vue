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
import { SocialLoginPost } from '~/store/login'

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
    const postSocialLogin = new SocialLoginPost()
    postSocialLogin.code = this.code
    postSocialLogin.url = this.loginUrl

    this.$store.dispatch('login/postSocialLogin', postSocialLogin)
  }
}
</script>
