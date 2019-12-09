<template>
  <div>
    <v-container>
      <h2>社員一覧</h2>
      <v-row justify="center">
        <v-col>
          <v-data-table
            :headers="headers"
            :items="employees"
            class="elevation-1"
          >
            <template v-slot:item.toggleValid="{ item }">
              <v-btn outlined small :color="getColor(item.status)">{{
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
        { text: '名前', value: 'name' },
        { text: 'アイコン', value: 'image' },
        { text: 'メッセージ', value: 'message' },
        { text: 'ユーザーID', value: 'userId' },
        { text: '権限', value: 'role' },
        { text: 'ステータス', value: 'status' },
        { text: '', value: 'toggleValid' }
      ],
      employees: [
        {
          no: 1,
          name: '會田 朋也',
          image: 'https://picsum.photos/510/300?random',
          message: 'こんにちは',
          userId: '123456789',
          status: '有効',
          role: '人事担当者',
          toggleValid: '-'
        },
        {
          no: 2,
          name: '布村',
          image: 'https://picsum.photos/510/300?random',
          message: 'こんにちは',
          userId: '123456789',
          status: '有効',
          role: '社員',
          toggleValid: '無効にする'
        },
        {
          no: 3,
          name: 'だいすけ',
          image: 'https://picsum.photos/510/300?random',
          message: 'こんにちは',
          userId: '123456789',
          status: '無効',
          role: '社員',
          toggleValid: '有効にする'
        },
        {
          no: 4,
          name: 'ごとう',
          image: 'https://picsum.photos/510/300?random',
          message: 'こんにちは',
          userId: '123456789',
          status: '無効',
          role: '社員',
          toggleValid: '有効にする'
        },
        {
          no: 5,
          name: 'さとう',
          image: 'https://picsum.photos/510/300?random',
          message: 'こんにちは',
          userId: '123456789',
          status: '無効',
          role: '社員',
          toggleValid: '有効にする'
        },
        {
          no: 6,
          name: 'ふじわら',
          image: 'https://picsum.photos/510/300?random',
          message: 'こんにちは',
          userId: '123456789',
          status: '無効',
          role: '社員',
          toggleValid: '有効にする'
        }
      ]
    }
  },
  methods: {
    getColor(status) {
      if (status === '有効') return 'secoundary'
      else return 'primary'
    }
  }
}
</script>
