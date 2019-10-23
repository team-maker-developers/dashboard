<template>
  <div>
    <v-alert type="info">
      10/21 山田 太郎 さんが 求人を拡散しました
    </v-alert>
    <v-alert type="info">
      10/19 布村 花子 さんが 求人を拡散しました
    </v-alert>
    <v-alert type="info">
      10/28 會田 朋也さんが 求人を拡散しました
    </v-alert>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-row
            align="center"
            justify="center"
            class="grey lighten-5"
            style="height: 200px;"
          >
            <v-card v-for="n in 3" :key="n" class="ma-3 pa-6" outlined tile>
              Column
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
            <v-card v-for="n in 3" :key="n" class="ma-3 pa-6" outlined tile>
              Column
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
