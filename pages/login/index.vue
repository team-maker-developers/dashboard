<template>
  <v-container>
    <v-container v-if="message">
      <v-alert type="error">{{ message }}</v-alert>
    </v-container>
    <v-container>
      <v-text-field v-model="uniqueId" label="会社番号" />
    </v-container>
    <v-divider />
    <v-container>
      <v-row>
        <v-col>
          <email-login-form :login-url="emailLoginUrl" @loginError="setError" />
        </v-col>
      </v-row>
    </v-container>
    <v-divider />
    <v-container>
      <v-row>
        <v-col>
          <line-login-btn :login-url="loginUrl" />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types' // eslint-disable-line no-unused-vars
import { loginStore } from '@/store'
import EmailLoginForm from '@/components/login/email-login-form.vue'
import LineLoginBtn from '@/components/login/line-login-btn.vue'

@Component({
  components: { EmailLoginForm, LineLoginBtn }
})
export default class LoginVue extends Vue {
  asyncData({ env, query }: Context) {
    const apiDomain: string = env.apiDomain

    if ('redirect_to' in query && typeof query.redirect_to === 'string') {
      loginStore.setRedirectTo(query.redirect_to)
    }

    return { apiDomain }
  }

  apiDomain: string = ''
  message: string = ''

  get uniqueId(): string {
    return loginStore.uniqueId
  }

  set uniqueId(uniqueId) {
    loginStore.setUniqueId(uniqueId)
  }

  get emailLoginUrl(): string {
    return `${this.apiDomain}/api/login/${this.uniqueId}/email`
  }

  get loginUrl(): string {
    return `${this.apiDomain}/login/${this.uniqueId}`
  }

  setError(message: string) {
    this.message = message
  }

  created() {
    if (!loginStore.isExpired) {
      return
    }

    // トークンの期限切れの場合は、フラッシュメッセージのように使用する
    this.message =
      '認証の有効期限が切れてしまいました。\nお手数ですが、再度ログインしてください。'
    loginStore.clearExpireAt()
  }
}
</script>
