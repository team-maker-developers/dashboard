<template>
  <v-container>
    <v-container>
      <v-text-field v-model="account" label="会社番号" />
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
          <line-login-btn />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Vue, Component } from 'nuxt-property-decorator'
import EmailLoginForm from '@/components/login/email-login-form.vue'
import LineLoginBtn from '@/components/login/line-login-btn.vue'

@Component({
  components: { EmailLoginForm, LineLoginBtn }
})
export default class loginVue extends Vue {
  asyncData(context: Context): Object {
    const { query } = context
    return { account: 'account' in query ? query.account : null }
  }
}
</script>
