<template>
  <v-form>
    <v-text-field v-model="email" label="メールアドレス" />
    <v-text-field v-model="password" label="パスワード" type="password" />
    <nuxt-link to="/"><v-btn width="100%">ログイン</v-btn></nuxt-link>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'nuxt-property-decorator'

@Component
export default class EmailLoginForm extends Vue {
  @Provide() email = null
  @Provide() password = null
}
</script>
