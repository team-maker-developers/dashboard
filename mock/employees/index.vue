<template>
  <div>
    <v-container>
      <h2>社員一覧</h2>
      <v-row justify="center">
        <v-col :lg="9">
          <v-data-table
            :headers="headers"
            :items="employees"
            class="elevation-1"
          >
            <template v-slot:item.edit="{ item }">
              <v-btn outlined small color="secondary">{{ item.edit }}</v-btn>
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
        { text: '名前', value: 'name' },
        { text: 'ステータス', value: 'status' },
        { text: '権限', value: 'role' },
        { text: '登録日', value: 'created_at' },
        { text: '更新日', value: 'updated_at' },
        { text: '', value: 'edit' },
        { text: '', value: 'others' }
      ],
      employees: [
        {
          no: 1,
          name: '會田 朋也',
          status: '有効',
          role: '人事担当者',
          created_at: '2019/12/05 12:00:00',
          updated_at: '2019/12/05 12:00:00',
          edit: '編集',
          others: '・・・'
        }
      ]
    }
  }
}
</script>
