<template>
  <v-btn :href="lineLoginRedirectUrl" tile color="green" width="100%">
    LINEでログイン
  </v-btn>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class lineLoginButton extends Vue {
  @Prop({ type: String, required: true })
  loginUrl: string

  get lineLoginRedirectUrl(): string {
    return `${this.loginUrl}/line/redirect`
  }
}
</script>
