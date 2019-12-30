<template>
  <v-form>
    <v-text-field v-model="email" label="メールアドレス" />
    <v-text-field v-model="password" label="パスワード" type="password" />
    <v-btn width="100%" @click="postLogin">ログイン</v-btn>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide } from 'nuxt-property-decorator'
import { loginStore } from '@/store'
import { EmailLoginPost } from '@/models/login-post.ts'

@Component
export default class EmailLoginForm extends Vue {
  @Prop(String) loginUrl: string
  @Provide() email: string = ''
  @Provide() password: string = ''

  async postLogin() {
    await loginStore.postEmailLogin(
      new EmailLoginPost(this.loginUrl, this.email, this.password)
    )

    if (loginStore.isLoggedIn) {
      this.$router.push('/')
    }
  }
}
</script>
