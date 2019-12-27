<template>
  <!-- eslint-disable -->
  <div>
    <v-container>
      <v-row justify="center">
        <v-col :lg="9">
          <v-card outlined>
            <v-card-title class="headline">公開設定</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="2">
                  ステータス
                </v-col>
                <v-col cols="10">
                  下書き
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="2">
                  URL
                </v-col>
                <v-col cols="10">
                  https://team-maker/111/222
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="2">
                  掲載開始日
                </v-col>
                <v-col cols="10">
                  2019/12/27
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="2">
                  有効期限
                </v-col>
                <v-col cols="10">
                  2020/3/27
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col :lg="9">
          <v-card outlined>
            <v-card-title class="headline">求人情報</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="2">
                  求人のタイトル
                </v-col>
                <v-col cols="10">
                  港区・渋谷区で働く訪問看護師
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="2">
                  就業形態
                </v-col>
                <v-col cols="10">
                  正社員
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="2">
                  契約期間
                </v-col>
                <v-col cols="10">
                  1年
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="2">
                  業務内容
                </v-col>
                <v-col cols="10">
                  ご利用者様の自宅に訪問し、訪問看護業務を行っていただきます。<br />
                  保険内、保険外のサービスを組み合わせて、ご利用者様の満足度の高いケアを提供します。<br />
                  できるかどうか不安な方もまずはお気軽にご相談ください。（フリーダイヤル：0120-XXX-XXX）<br />
                  <br />
                  ＜保険内＞<br />
                  ・健康状態の観察<br />
                  ・⽇常⽣活の⽀援<br />
                  ・薬の管理と指導<br />
                  ・床ずれの予防、処置 ・介護相談<br />
                  ・医療器具の管理（⼈⼯呼吸器、胃瘻、⼈⼯肛⾨、在宅酸素など）<br />
                  ・⾝体の清潔（清拭、⼊浴等）<br />
                  ・終末期医療（ターミナルケア）の実施 等<br />
                  <br />
                  ＜保険外＞<br />
                  ・美容、マッサージ<br />
                  ・家族の精神的ケアやグリーフケア<br />
                  ・外出や旅行の同行 等 <br />
                  ●計画書や報告書の作成<br />
                  ●ご利用者様宅の担当者会議や地域会議参加<br />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="2">
                  業界、業種、職種
                </v-col>
                <v-col cols="10">
                  訪問看護ステーション
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="2">
                  給与
                </v-col>
                <v-col cols="10">
                  年収 3,600,000円 ～ 7,200,000円（※想定月給 300,000円 ～
                  600,000円）<br />
                  ※ 経験・能力を考慮の上、決定します。<br />
                  週3日から常勤採用してます。<br />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="2">
                  勤務地
                </v-col>
                <v-col cols="10">
                  東京都●●区●●● X-XX-X XXビル2F（最寄駅：渋谷）
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="2">
                  勤務時間や休日など
                </v-col>
                <v-col cols="10">
                  9:00 ～ 18:00(フレックスタイム制)<br />
                  ※ライフスタイルに合わせて相談可能です。<br />
                  最短30分からの依頼もあります。<br />
                  夜間の依頼等もあるためお気軽にご相談下さい。<br />
                  <br />
                  週休２日（月プラス1日休みです）、シフト制<br />
                  特別休暇、有給休暇<br />
                  ※ 働き方は自由ですのでご相談ください。<br />
                  ◇ 年間休日120日以上<br />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="2">
                  福利厚生
                </v-col>
                <v-col cols="10">
                  ◇ 労災保険 <br />
                  ◇ 健康保険 <br />
                  ◇ 厚生年金 <br />
                  ◇ 雇用保険 <br />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col :lg="9">
          <v-card outlined>
            <v-card-title class="headline">その他情報</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="2">
                  その他
                </v-col>
                <v-col cols="10">
                  その他
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
          <v-btn x-large color="secondary mx-2" dark to="delete">削除する</v-btn>
          <v-btn x-large color="secondary mx-2" dark to="edit">編集する</v-btn>
          <v-btn x-large color="primary mx-2" dark to="publish"
            >公開する</v-btn
          >
        </div>
      </v-card-text>
    </v-card>
    <!-- 最上位に表示するフッターで求人情報が見えなくなるのを防ぐ -->
    <v-footer fixed="true" padless="true">
      <v-card flat tile width="100%" class="blue-grey lighten-5">
        <v-card-text>
          <div class="d-flex justify-end pb-5">
            <v-btn large outlined color="secondary" class="mx-2" dark to="delete"
              >削除する</v-btn
            >
            <v-btn large outlined color="secondary" class="mx-2" dark to="edit"
              >編集する</v-btn
            >
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on }">
                <v-btn x-large color="primary mx-2" dark v-on="on">
                  公開する
                </v-btn>
              </template>
              <v-card class="py-8">
                <v-card-title class="headline py-8" primary-title>
                  求人ページを公開しました
                </v-card-title>
                <v-card-text>
                  社員にお知らせして、拡散してもらいましょう
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="secondary" outlined @click="dialog = false" to="..">
                    今はしない
                  </v-btn>
                  <v-btn x-large color="primary" @click="dialog = false" to="../shares/create">
                    LINEでシェアする
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>
<script>
export default {}
</script>
