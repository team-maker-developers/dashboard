<template>
  <!-- eslint-disable -->
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" :lg="9">
          <v-card outlined>
            <v-card-title class="headline">公開設定</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="4" :sm="2">
                  ステータス
                </v-col>
                <v-col cols="8" :sm="10">
                  作成中
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" :sm="2">
                  URL
                </v-col>
                <v-col cols="8" :sm="10">
                  https://team-maker/111/222
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" :sm="2">
                  掲載開始日
                </v-col>
                <v-col cols="8" :sm="10">
                  <v-menu
                    v-model="published_at"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="published_at_date"
                        label="掲載開始日"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="published_at_date"
                      @input="published_at = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" :sm="2">
                  有効期限
                </v-col>
                <v-col cols="8" :sm="10">
                  <v-menu
                    v-model="expired_at"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="expired_at_date"
                        label="有効期限"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      @input="expired_at_date = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" :lg="9">
          <v-card outlined>
            <v-card-title class="headline">求人情報</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="4" :sm="2">
                  求人のタイトル
                </v-col>
                <v-col cols="8" :sm="10">
                  <v-text-field
                    v-model="name"
                    label="求人のタイトル"
                    placeholder="【例】港区・渋谷区で働く訪問看護師"
                    :counter="255"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" :sm="2">
                  就業形態
                </v-col>
                <v-col cols="8" :sm="10">
                  <v-select
                    :items="employment_categories"
                    label="就業形態"
                  ></v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" :sm="2">
                  契約期間
                </v-col>
                <v-col cols="8" :sm="10">
                  <v-text-field
                    v-model="contract_period"
                    label="契約期間"
                    placeholder="【例】1年"
                    :counter="255"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" :sm="2">
                  業務内容
                </v-col>
                <v-col cols="8" :sm="10">
                  <!-- eslint-disable-next-line -->
                  <v-textarea
                    name="content"
                    label="業務内容"
                    placeholder="ご利用者様の自宅に訪問し、訪問看護業務を行っていただきます。
保険内、保険外のサービスを組み合わせて、ご利用者様の満足度の高いケアを提供します。
できるかどうか不安な方もまずはお気軽にご相談ください。（フリーダイヤル：0120-XXX-XXX）
＜保険内＞
・健康状態の観察
・⽇常⽣活の⽀援
・薬の管理と指導
・床ずれの予防、処置 ・介護相談
・医療器具の管理（⼈⼯呼吸器、胃瘻、⼈⼯肛⾨、在宅酸素など）
・⾝体の清潔（清拭、⼊浴等）
・終末期医療（ターミナルケア）の実施 等

＜保険外＞
・美容、マッサージ
・家族の精神的ケアやグリーフケア
・外出や旅行の同行 等 
●計画書や報告書の作成
●ご利用者様宅の担当者会議や地域会議参加"
                  ></v-textarea>
                </v-col>
              </v-row>
              <v-row>
                <!-- TODO : 階層構造にも対応するため、複数選択も可能にする。 -->
                <v-col cols="4" :sm="2">
                  業界、業種、職種
                </v-col>
                <v-col cols="8" :sm="10">
                  <v-text-field
                    v-model="industry"
                    label="業界、業種、職種"
                    placeholder="【例】訪問看護ステーション"
                    :counter="255"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" :sm="2">
                  給与
                </v-col>
                <v-col cols="8" :sm="10">
                  <!-- eslint-disable-next-line -->
                  <v-textarea
                    name="salary"
                    label="給与"
                    placeholder="年収 3,600,000円 ～ 7,200,000円（※想定月給 300,000円 ～600,000円）
※ 経験・能力を考慮の上、決定します。
週3日から常勤採用してます。"
                  ></v-textarea>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" :sm="2">
                  勤務地
                </v-col>
                <v-col cols="8" :sm="10">
                  <v-text-field
                    v-model="place"
                    label="勤務地"
                    placeholder="東京都●●区●●● X-XX-X XXビル2F（最寄駅：渋谷）"
                    :counter="255"
                    required
                  ></v-text-field>                  
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" :sm="2">
                  勤務時間や休日など
                </v-col>
                <v-col cols="8" :sm="10">
                  <!-- eslint-disable-next-line -->
                  <v-textarea
                    name="work_datetime"
                    label="勤務時間や休日など"
                    placeholder="9:00 ～ 18:00(フレックスタイム制)
※ライフスタイルに合わせて相談可能です。
最短30分からの依頼もあります。
夜間の依頼等もあるためお気軽にご相談下さい。

週休２日（月プラス1日休みです）、シフト制
特別休暇、有給休暇
※ 働き方は自由ですのでご相談ください。
◇ 年間休日120日以上"
                  ></v-textarea>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" :sm="2">
                  福利厚生
                </v-col>
                <v-col cols="8" :sm="10">
                  <!-- eslint-disable-next-line -->
                  <v-textarea
                    name="welfare"
                    label="福利厚生"
                    placeholder="◇ 労災保険
◇ 健康保険
◇ 厚生年金
◇ 雇用保険"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" :lg="9">
          <v-card outlined>
            <v-card-title class="headline">その他情報</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="4" :sm="2">
                  その他
                </v-col>
                <v-col cols="8" :sm="10">
                  <!-- eslint-disable-next-line -->
                  <v-textarea
                    name="welfare"
                    label="その他"
                    placeholder="その他"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- 最上位に表示するフッターで求人情報が見えなくなるのを防ぐ -->
    <v-card flat tile width="100%" class="blue-grey lighten-5">
      <v-card-text>
        <div class="d-flex justify-end pb-5">
          <v-btn x-large color="secondary mx-2" dark to="form"
            >キャンセル</v-btn
          >
          <v-btn x-large color="primary mx-2" dark to="form">保存する</v-btn>
        </div>
      </v-card-text>
    </v-card>
    <!-- 最上位に表示するフッターで求人情報が見えなくなるのを防ぐ -->
    <v-footer fixed="true" padless="true">
      <v-card flat tile width="100%" class="blue-grey lighten-5">
        <v-card-text>
          <div class="d-flex justify-end pb-5">
            <v-btn large color="secondary" outlined class="mx-2" dark to=".."
              >キャンセル</v-btn
            >
            <v-btn x-large color="primary" class="mx-2" dark to="draft">保存する</v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>
<script>
export default {
  data: () => ({
    published_at_date: null,
    published_at: false,
    expired_at: false,
    expired_at_date: null,
    name: '',
    employment_categories: [
      '中途採用（正社員）',
      '中途採用（契約社員）',
      '新卒採用（正社員）',
      '新卒採用（契約社員）',
      'アルバイト・パート採用',
      '業務委託（フリーランス）',
      'インターンシップ'
    ]
  })
}
</script>
