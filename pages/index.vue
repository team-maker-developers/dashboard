<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      ログイン完了
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

// 以下、テスト用。クエリ内容的に、gql関数を使った方がよさそう
//  詳細は、ライブラリgraphql-tagを確認すること
const getUsers = require('@/apollo/queries/GetUsers.gql')

@Component({
  apollo: {
    users: {
      query: getUsers
    }
  }
} as any)
export default class IndexVue extends Vue {}
</script>
