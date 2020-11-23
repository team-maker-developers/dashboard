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
            <template #[`item.image`]="{ item }">
              <v-img
                v-if="item.image"
                :src="item.image"
                aspect-ratio="2"
                contain
              />
              <p v-else>No Image</p>
            </template>
            <template #[`item.status`]="{ item }">
              {{ item.user.is_valid ? '有効' : '無効' }}
            </template>
            <template #[`item.changeValid`]="{ item }">
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
} from '@/constants/social-accounts/social-accounts'
import { apolloMutate } from '@/plugins/apollo/get-apollo-client'
import { TableHeader } from '@/types'

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
    await apolloMutate(updateUserMutation)
  }
}
</script>
