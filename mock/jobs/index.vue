<template>
  <!-- eslint-disable -->
  <div>
    <v-container>
      <h2>求人一覧</h2>
      <v-row justify="center">
        <v-col :lg="9">
          <div class="text-right">
            <v-btn outlined small color="secondary" to="jobs/detail/edit" >新規作成</v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col :lg="9">
          <v-data-table :headers="headers" :items="jobs" class="elevation-1">
            <template v-slot:item.edit="{ item }">
              <v-btn outlined small color="secondary" to="jobs/detail/edit" >{{ item.edit }}</v-btn>
            </template>
            <template v-slot:item.others="{ item }">
              <v-menu top offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn color="secondary" small outlined v-on="on">
                    {{ item.others }}
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
        {
          title: 'LINEでシェア',
          link: '/jobs/shares/create'
        },
        { title: '下書きに戻す' },
        { title: '削除' }
      ],
      dialog: false,
      headers: [
        {
          text: 'No',
          align: 'left',
          value: 'no'
        },
        { text: '求人', value: 'job' },
        { text: '公開ステータス', value: 'status' },
        { text: '前回シェア日', value: 'share' },
        { text: '', value: 'edit' },
        { text: '', value: 'others' }
      ],
      jobs: [
        {
          no: 1,
          job: '港区・渋谷区で働く訪問看護師',
          status: '公開中',
          share: '2019/11/13',
          edit: '編集',
          others: '・・・'
        },
        {
          no: 2,
          job: '港区・渋谷区で働く訪問看護師',
          status: '下書き',
          share: '-',
          edit: '編集',
          others: '・・・'
        },
        {
          no: 3,
          job: '港区・渋谷区で働く訪問看護師',
          status: '公開中',
          share: '2019/11/13',
          edit: '編集',
          others: '・・・'
        },
        {
          no: 4,
          job: '港区・渋谷区で働く訪問看護師',
          status: '公開中',
          share: '2019/11/13',
          edit: '編集',
          others: '・・・'
        },
        {
          no: 5,
          job: '港区・渋谷区で働く訪問看護師',
          status: '公開中',
          share: '2019/11/13',
          edit: '編集',
          others: '・・・'
        }
      ]
    }
  }
}
</script>
