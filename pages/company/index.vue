<template>
  <v-container>
    <company-form v-if="companyValue" v-model="companyValue" />
    <v-footer padless fixed>
      <v-card flat tile width="100%" class="blue-grey lighten-5">
        <v-card-text class="d-flex justify-end pb-5">
          <v-btn color="primary" class="mx-2" x-large @click="doUpdate">
            保存する
          </v-btn>
          <v-btn x-large color="primary" outlined class="mx-2" to="/">
            キャンセル
          </v-btn>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-container>
</template>

<script>
import { getLoginCompany } from '@/constants/login/login-user'
import { updateCompany } from '@/constants/company/company'
import companyForm from '@/components/company/company-form'

export default {
  components: { companyForm },
  data: () => ({ companyValue: null }),
  methods: {
    async doUpdate() {
      await updateCompany(this.companyValue)
    }
  },
  apollo: {
    loginUser: {
      query: getLoginCompany,
      result({ data }) {
        this.companyValue = data.loginUser.company
      }
    }
  }
}
</script>
