<template>
  <div>
    <v-container>
      <h2>社員一覧</h2>
      <v-row justify="center">
        <v-col>
          <v-data-table :headers="headers" :items="users" class="elevation-1">
            <template v-slot:item.toggleValid="{ item }">
              <v-btn outlined small :color="getColor(item.is_valid)">{{
                item.toggleValid
              }}</v-btn>
            </template>
            <template v-slot:item.image="{ item }">
              <v-img :src="item.image" aspect-ratio="2" contain></v-img>
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

@Component
export default class IndexVue extends Vue {
  static roleName: { [key: string]: string } = {
    ADMINISTRATOR: '管理者',
    PERSONNEL_OFFICER: '人事担当者',
    EMPLOYEE: '従業員'
  }
  static statusName: { [key: string]: string } = {
    true: '有効',
    false: '無効'
  }
  static toggleValidName: { [key: string]: string } = {
    true: '無効化',
    false: '有効化'
  }
  static toggleValidColor: { [key: string]: string } = {
    true: 'secoundary',
    false: 'primary'
  }

  headers = [
    {
      text: 'ID',
      align: 'left',
      value: 'id'
    },
    { text: '名前', value: 'name' },
    { text: 'アイコン', value: 'image' },
    { text: 'メッセージ', value: 'message' },
    { text: 'ユーザーID', value: 'unique_id' },
    { text: '権限', value: 'role' },
    { text: 'ステータス', value: 'status' },
    { text: '', value: 'toggleValid' }
  ]
  users = []

  async created() {
    // TODO : TyepScriptのエラーを解除する Property '$apollo' does not exist on type 'IndexVue'.
    const { data } = await this.$apollo.query({
      query: gql`
        {
          users {
            id
            name
            is_valid
            role {
              name
            }
            socialAccounts {
              unique_id
              info
            }
          }
        }
      `
    })

    // 無名関数なのでanyを許す
    data.users.forEach(function(item: any) {
      item.role = IndexVue.roleName[item.role.name]
      item.status = IndexVue.statusName[item.is_valid]
      item.toggleValid = IndexVue.toggleValidName[item.is_valid]
      // LINEアカウントが存在する場合
      // TODO : LINEアカウント情報のみ取得するようGraphQLを修正する
      if (item.socialAccounts.length !== 0) {
        item.unique_id = item.socialAccounts[0].unique_id
        const info = JSON.parse(item.socialAccounts[0].info)
        item.image = info.pictureUrl
        item.message = info.statusMessage
        item.name = info.displayName
      }
    })
    this.users = data.users
  }
  getColor(status: string): string {
    return IndexVue.toggleValidColor[status]
  }
}
</script>
