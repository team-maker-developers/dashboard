<template>
  <v-container>
    <v-row>
      <v-col>
        <email-login-form />
      </v-col>
    </v-row>
    <v-divider />
    <v-row>
      <v-col>
        <line-login-btn />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EmailLoginForm from '@/components/login/email-login-form.vue'
import LineLoginBtn from '@/components/login/line-login-btn.vue'

export default {
  components: {
    EmailLoginForm,
    LineLoginBtn
  }
}
</script>
