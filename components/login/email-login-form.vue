<template>
  <v-form>
    <v-text-field v-model="email" label="メールアドレス" />
    <v-text-field v-model="password" label="パスワード" type="password" />
    <v-btn width="100%" @click="postLogin">ログイン</v-btn>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide } from 'nuxt-property-decorator'

@Component
export default class EmailLoginForm extends Vue {
  @Prop(String) loginUrl: string
  @Provide() email = null
  @Provide() password = null

  async postLogin() {
    await this.$store.dispatch('login/postEmailLogin', {
      url: this.loginUrl,
      email: this.email,
      password: this.password
    })
  }
}
</script>
