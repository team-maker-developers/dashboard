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
            <applicants-table :listitems="listitems" :applicants="applicants"></applicants-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import applicantsTable from '@/components/applicants/applicants-table.vue'
// @Component({
//   components: { applicantsTable },
// //   apollo: {
// //     jobs: {
// //       query: getJobs
// //     }
// //   }
// // } as any
// })

export default {
  components: { applicantsTable },
  data() {
    return {
      listitems: [
        { title: '応募中' },
        { title: '選考中' },
        { title: '見送り' },
        { title: '内定' },
        { title: '入社' }
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

  //   asyncData({ $axios, env, params, query, store, error }) {
  //     try {
  //       //   const data = await $axios.$get(`/api/jobs/${params.id}${referCode}`)
  //       const data = await $axios.$get(
  //         'https://jsondata.okiba.me/v1/json/73oOU200329140853'
  //       )
  //       console.log('gggg')
  //       //   const records = data.content.pageable_content.record
  //       console.log(data)
  //     } catch (err) {
  //       //   error({
  //       //     statusCode: err.response.status,
  //       //     message: err.response.data.message
  //       //   })
  //     }
  //   }
}
</script>
