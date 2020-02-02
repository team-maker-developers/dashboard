<template>
  <div>
    <v-container>
      <h2>ログイン申請一覧</h2>
      <v-row justify="center">
        <v-col>
          <v-data-table
            :headers="headers"
            :items="socialAccounts"
            class="elevation-1"
          >
            <template v-slot:item.image="{ item }">
              <v-img :src="item.image" aspect-ratio="2" contain></v-img>
            </template>
            <template v-slot:item.status="{ item }">
              {{ item.user.is_valid ? '有効' : '無効' }}
            </template>
            <template v-slot:item.changeValid="{ item }">
              <v-btn
                outlined
                small
                color="primary"
                @click="
                  updateUserIsValid(
                    item.user.id,
                    // 変更するため、boolを反転させる
                    !item.user.is_valid
                  )
                "
                >{{ item.user.is_valid ? '無効にする' : '有効にする' }}
              </v-btn>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import {
  socialAccountHeaders,
  getSocialAccountsQuery,
  getUpdateUserMutation
} from '@/constants/list-tables/social-accounts'

@Component({
  apollo: {
    socialAccounts: {
      query: getSocialAccountsQuery
    }
  }
} as any)
export default class ScialAccountsIndexVue extends Vue {
  headers: TableHeader[] = socialAccountHeaders

  async updateUserIsValid(userId: string, changedIsValid: boolean) {
    const updateUserMutation = getUpdateUserMutation(userId, changedIsValid)
    // TODO: #39 エラー処理の方法を検討する
    await this.$apollo.mutate(updateUserMutation)
  }
}
</script>
