<template>
  <v-form>
    <v-text-field v-model="email" label="メールアドレス" />
    <v-text-field v-model="password" label="パスワード" type="password" />
    <v-btn width="100%" @click="login">ログイン</v-btn>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide } from 'nuxt-property-decorator'
import { loginStore } from '@/store'
import { EmailLoginPost } from '@/constants/login/login-post'

@Component
export default class EmailLoginForm extends Vue {
  @Prop(String) loginUrl: string
  @Provide() email: string = ''
  @Provide() password: string = ''

  async login() {
    this.$emit('login-error', '')

    try {
      await this.postLogin()
    } catch (error) {
      this.errorHandler(error)
    }

    if (loginStore.isLoggedIn) {
      this.$router.push(loginStore.redirectToPath)
    }
  }

  async postLogin() {
    await loginStore.postEmailLogin(
      new EmailLoginPost(this.loginUrl, this.email, this.password)
    )
  }

  errorHandler(error: any) {
    if (error.response.status === 400) {
      this.$emit(
        'login-error',
        'メールアドレス、またはパスワードが正しくありません。'
      )
      return
    }

    this.$nuxt.error({
      statusCode: error.response.status,
      message: error.response.message
    })
  }
}
</script>
