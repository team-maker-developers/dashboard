<template>
  <!-- eslint-disable -->
  <div>
    <v-container>
      <h2>応募者一覧</h2>
      <v-row justify="center">
        <v-col>
          <div class="text-right">
            <v-btn color="primary">LINEで連絡する</v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col>
          <v-data-table
            :headers="headers"
            :items="applicants"
            class="elevation-1"
          >
            <template v-slot:item.changeStatus="{ item }">
              <v-menu top offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn color="secondary" small outlined v-on="on">
                    {{ item.changeStatus }}
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(listitem, index) in listitems"
                    :key="index"
                    :to="listitem.link"
                  >
                    <v-list-item-title>{{ listitem.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listitems: [
        { title: '応募中' },
        { title: '選考中' },
        { title: '見送り' },
        { title: '内定' },
        { title: '入社' }
      ],
      headers: [
        {
          text: 'No',
          align: 'left',
          value: 'no'
        },
        { text: '名前', value: 'name' },
        { text: 'フリガナ', value: 'kana' },
        { text: 'e-mail', value: 'eMail' },
        { text: 'ステータス', value: 'status' },
        { text: '', value: 'changeStatus' }
      ],
      applicants: [
        {
          no: 1,
          name: '會田 朋也',
          kana: 'アイダトモヤ',
          eMail: 'aida@xxx.xxx',
          status: '応募中',
          changeStatus: 'ステータス変更'
        },
        {
          no: 2,
          name: '布村',
          kana: 'ヌノムラ',
          eMail: 'nunomura@xxx.xxx',
          status: '選考中',
          changeStatus: 'ステータス変更'
        },
        {
          no: 3,
          name: '齊藤 大介',
          kana: 'サイトウダイスケ',
          eMail: 'daisuke@xxx.xxx',
          status: '見送り',
          changeStatus: 'ステータス変更'
        },
        {
          no: 4,
          name: '後藤',
          kana: 'ゴトウ',
          eMail: 'gotou@xxx.xxx',
          status: '内定',
          changeStatus: 'ステータス変更'
        },
        {
          no: 5,
          name: '佐藤',
          kana: 'サトウ',
          eMail: 'satou@xxx.xxx',
          status: '入社',
          changeStatus: 'ステータス変更'
        },
        {
          no: 6,
          name: '伊藤',
          kana: 'イトウ',
          eMail: 'itou@xxx.xxx',
          status: '見送り',
          changeStatus: 'ステータス変更'
        }
      ]
    }
  }
}
</script>
