<template>
  <v-container>
    <v-container>
      <v-text-field v-model="cliendId" label="会社番号" />
    </v-container>
    <v-divider />
    <v-container>
      <v-row>
        <v-col>
          <email-login-form />
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
import { Context } from '@nuxt/types'
import { LoginStore } from '@/store'
import EmailLoginForm from '@/components/login/email-login-form.vue'
import LineLoginBtn from '@/components/login/line-login-btn.vue'

@Component({
  components: { EmailLoginForm, LineLoginBtn },
  middleware: ['fetch-client-id']
})
export default class loginVue extends Vue {
  asyncData({ env }: Context) {
    const apiDomain: string = env.apiDomain
    return { apiDomain }
  }

  apiDomain: string

  get cliendId(): string {
    return LoginStore.clientId
  }

  get loginUrl(): string {
    return `${this.apiDomain}/login/${this.cliendId}`
  }
}
</script>
