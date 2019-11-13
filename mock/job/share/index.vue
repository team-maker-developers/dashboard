<template>
  <div>
    <v-container>
      <h2>LINEで求人をシェア</h2>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-divider></v-divider>
          <v-stepper-step :complete="e1 > 1" step="1"
            >リード文を入力する</v-stepper-step
          >
          <v-divider></v-divider>
          <v-stepper-step :complete="e1 > 2" step="2"
            >LINEでシェアする</v-stepper-step
          >
          <v-divider></v-divider>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <h3 class="py-3">社員へ送信するリード文を入力しましょう。</h3>
            <v-row justify="center">
              <v-col :lg="9">
                <p>
                  社員が拡散したくなるようなリード文を入力しましょう。
                </p>
                <p
                  class="
                  text-right
                  caption
                  font-weight-thin
                  mb-1"
                  style="text-decoration-line: underline;"
                >
                  デフォルト文を編集する
                </p>
                <v-textarea
                  filled
                  auto-grow
                  label="リード文"
                  rows="7"
                  row-height="30"
                  value="〇〇を探しているご友人はいませんか？
あなたの紹介でご友人が入社された場合、紹介料の報酬をいたします。
一緒に働きたいと思える友人が居ましたら、ぜひシェアをお願いします。"
                >
                </v-textarea>
              </v-col>
            </v-row>
            <h4 class="py-1">シェアする求人</h4>
            <v-row justify="center">
              <v-col :lg="9">
                <v-data-table
                  :headers="headers"
                  :items="jobs"
                  hide-default-footer
                ></v-data-table>
              </v-col>
            </v-row>

            <div class="text-right">
              <v-btn text justify-end>キャンセル</v-btn>
              <v-btn color="primary" justify-end @click="e1 = 2">
                次へ
              </v-btn>
            </div>
          </v-stepper-content>
          <v-stepper-content step="2">
            <h3 class="py-5">
              以下の内容をLINEでシェアします。よろしいですか？
            </h3>
            <h4 class="py-1">リード文</h4>
            <v-row justify="center">
              <v-col :lg="9">
                <p>
                  〇〇を探しているご友人はいませんか？<br />
                  あなたの紹介でご友人が入社された場合、紹介料の報酬をいたします。<br />
                  一緒に働きたいと思える友人が居ましたら、ぜひシェアをお願いします。<br />
                  https://team-maker.com/8555/3333
                </p>
              </v-col>
            </v-row>
            <h4 class="py-1">求人サイト</h4>
            <v-row justify="center">
              <v-col :lg="9">
                <p>https://team-maker.com/3455/1222</p>
              </v-col>
            </v-row>
            <h4 class="py-1">シェアする求人</h4>
            <v-row justify="center">
              <v-col :lg="9">
                <v-data-table
                  :headers="headers"
                  :items="jobs"
                  hide-default-footer
                ></v-data-table>
              </v-col>
            </v-row>
            <div class="text-right">
              <v-btn text @click="e1 = 1">キャンセル</v-btn>
              <v-btn color="primary" @click="e1 = 2">
                LINEでシェア
              </v-btn>
            </div>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      e1: 0,
      headers: [
        {
          text: 'No',
          align: 'left',
          value: 'no'
        },
        { text: '求人', value: 'job' },
        { text: '公開ステータス', value: 'status' },
        { text: '前回シェア日', value: 'share' }
      ],
      jobs: [
        {
          no: 1,
          job: '港区・渋谷区で働く訪問看護師',
          status: '公開中',
          share: '2019/11/13'
        }
      ]
    }
  }
}
</script>
