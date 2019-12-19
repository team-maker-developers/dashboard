<template>
  <v-form>
    <v-text-field v-model="email" label="メールアドレス" />
    <v-text-field v-model="password" label="パスワード" type="password" />
    <v-btn width="100%" @click="postLogin">ログイン</v-btn>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide } from 'nuxt-property-decorator'
import { EmailLoginPost } from '~/store/login'
@Component
export default class EmailLoginForm extends Vue {
  @Prop(String) loginUrl: string
  @Provide() email: string
  @Provide() password: string

  async postLogin() {
    const emailLoginPost = new EmailLoginPost()
    emailLoginPost.email = this.email
    emailLoginPost.password = this.password
    emailLoginPost.url = this.loginUrl

    await this.$store.dispatch('login/postEmailLogin', emailLoginPost)
  }
}
</script>
