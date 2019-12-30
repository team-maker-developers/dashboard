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
            <template v-slot:item.chaneValid="{ item }">
              <v-btn
                outlined
                small
                color="primary"
                @click="
                  updateUserIsValid(
                    item.user.id,
                    // 変更するため、boolを反転させる
                    !item.user.id_valid
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
import gql from 'graphql-tag'
import {
  SocialAccountHeader, // eslint-disable-line no-unused-vars
  socialAccountHeaders
} from '@/components/constants/social-accounts-headers'

const getSocialAccountsQuery = gql`
  query getSocialAccounts {
    socialAccounts {
      id
      image
      name
      profile
      unique_id
      user {
        id
        is_valid
      }
      service {
        name
      }
    }
  }
`

@Component({
  apollo: {
    socialAccounts: {
      query: getSocialAccountsQuery
    }
  }
} as any)
export default class IndexVue extends Vue {
  headers: SocialAccountHeader[] = socialAccountHeaders

  async updateUserIsValid(userId: string, changedIsValid: boolean) {
    // TODO: #39 エラー処理の方法を検討する
    await this.$apollo.mutate({
      mutation: gql`
        mutation($id: ID!, $isValid: Boolean) {
          updateUser(id: $id, is_valid: $isValid) {
            id
            is_valid
          }
        }
      `,
      variables: {
        id: userId,
        isValid: changedIsValid
      },
      refetchQueries: [{ query: getSocialAccountsQuery }]
    })
  }
}
</script>
