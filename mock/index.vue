<template>
  <div>
    <v-container fluid>
      <v-alert type="info" dense class="mb-1">
        10/21 山田 太郎 さんが 求人を拡散しました
      </v-alert>
      <v-alert type="info" dense class="mb-1">
        10/19 布村 花子 さんが 求人を拡散しました
      </v-alert>
      <v-alert type="info" dense class="mb-1">
        10/28 會田 朋也さんが 求人を拡散しました
      </v-alert>
    </v-container>
    <v-container fluid class="d-flex flex-row-reverse">
      <v-btn class="ma-2" color="indigo" dark right>
        CSVファイル出力
      </v-btn>
    </v-container>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-row
            align="center"
            justify="center"
            class="grey lighten-5"
            style="height: 200px;"
          >
            <v-card
              class="ma-3 pa-6"
              style="height: 200px; width: 200px;"
              outlined
              tile
            >
              <p class="text-center font-weight-black headline">
                <span class="font-weight-black display-3">50</span>人
              </p>
              <p class="text-center title">応募者用<br />LINE登録数</p>
            </v-card>
            <v-card
              class="ma-3 pa-6"
              style="height: 200px; width: 200px;"
              outlined
              tile
            >
              <p class="text-center font-weight-black headline">
                <span class="font-weight-black display-3">10</span>人
              </p>
              <p class="text-center title">応募数</p>
            </v-card>
            <v-card
              class="ma-3 pa-6"
              style="height: 200px; width: 200px;"
              outlined
              tile
            >
              <p class="text-center font-weight-black headline">
                <span class="font-weight-black display-3">5</span>人
              </p>
              <p class="text-center title">内定数</p>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-row
            align="center"
            justify="center"
            class="grey lighten-5"
            style="height: 200px;"
          >
            <v-card
              class="ma-3 pa-6"
              style="height: 200px; width: 200px;"
              outlined
              tile
            >
              <p class="text-center font-weight-black headline">
                <span class="font-weight-black display-3">30</span>人
              </p>
              <p class="text-center title">社内公報<br />LINE登録数</p>
            </v-card>

            <v-card
              class="ma-3 pa-6"
              style="height: 200px; width: 200px;"
              outlined
              tile
            >
              <p class="text-center font-weight-black headline">
                <span class="font-weight-black display-3">100</span>PV
              </p>
              <p class="text-center title">求人ページ<br />PV数</p>
            </v-card>
            <v-card
              class="ma-3 pa-6"
              style="height: 200px; width: 200px;"
              outlined
              tile
            >
              <v-card-title></v-card-title>
              <v-card-subtitle></v-card-subtitle>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
