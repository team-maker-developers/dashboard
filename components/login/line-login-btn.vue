<template>
  <v-btn :href="lineLoginUrl" tile color="green" width="100%">
    LINEでログイン
  </v-btn>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class lineLoginButton extends Vue {
  @Prop({ type: String, required: true })
  apiDomain: string

  get lineLoginUrl(): string {
    // TODO: LINEのログイン画面へのリダイレクトURLに変換する
    return this.apiDomain
  }
}
</script>
