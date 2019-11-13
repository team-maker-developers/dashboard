<template>
  <div>
    <v-container>
      <h2>求人一覧</h2>
      <v-row justify="center">
        <v-col :lg="9">
          <v-data-table :headers="headers" :items="jobs" class="elevation-1">
            <template v-slot:item.edit="{ item }">
              <v-btn outlined small color="secondary">{{ item.edit }}</v-btn>
            </template>
            <template v-slot:item.ext="{ item }">
              <v-btn outlined small color="secondary">{{ item.ext }}</v-btn>
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
        { text: '', value: 'ext' }
      ],
      jobs: [
        {
          no: 1,
          job: '港区・渋谷区で働く訪問看護師',
          status: '公開中',
          share: '2019/11/13',
          edit: '編集',
          ext: '・・・'
        },
        {
          no: 2,
          job: '港区・渋谷区で働く訪問看護師',
          status: '下書き',
          share: '-',
          edit: '編集',
          ext: '・・・'
        },
        {
          no: 3,
          job: '港区・渋谷区で働く訪問看護師',
          status: '公開中',
          share: '2019/11/13',
          edit: '編集',
          ext: '・・・'
        },
        {
          no: 4,
          job: '港区・渋谷区で働く訪問看護師',
          status: '公開中',
          share: '2019/11/13',
          edit: '編集',
          ext: '・・・'
        },
        {
          no: 5,
          job: '港区・渋谷区で働く訪問看護師',
          status: '公開中',
          share: '2019/11/13',
          edit: '編集',
          ext: '・・・'
        }
      ]
    }
  }
}
</script>
