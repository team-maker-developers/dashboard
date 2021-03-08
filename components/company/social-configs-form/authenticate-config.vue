<template>
  <v-card-text>
    <v-row>
      <v-card-title>ログイン設定</v-card-title>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-text-field v-model="clientId" label="Channel ID" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-text-field v-model="clientSecret" label="Channel secret" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="redirect"
          label="Callback URL"
          hint="Lineのログイン設定画面にこちらのURLを入力してください"
          persistent-hint
          readonly
        />
      </v-col>
    </v-row>
  </v-card-text>
</template>

<script>
export default {
  model: {
    prop: 'authConfig'
  },
  props: {
    authConfig: {
      type: Object,
      required: true
    },
    uniqueId: {
      type: String,
      required: true
    }
  },
  computed: {
    clientId: {
      get() {
        return this.authConfig.client_id
      },
      set(clientId) {
        const authConfig = { ...this.authConfig }
        authConfig.client_id = clientId
        this.$emit('input', authConfig)
      }
    },
    clientSecret: {
      get() {
        return this.authConfig.client_secret
      },
      set(clientSecret) {
        const authConfig = { ...this.authConfig }
        authConfig.client_secret = clientSecret
        this.$emit('input', authConfig)
      }
    },
    redirect() {
      const apiDomain = this.$nuxt.context.env.apiDomain

      return `${apiDomain}/login/${this.uniqueId}/line`
    }
  }
}
</script>
