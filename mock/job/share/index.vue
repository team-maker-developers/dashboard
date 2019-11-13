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
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>
            <div class="text-right">
              <v-btn text justify-end>キャンセル</v-btn>
              <v-btn color="primary" justify-end @click="e1 = 2">
                次へ
              </v-btn>
            </div>
          </v-stepper-content>
          <v-stepper-content step="2">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>
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
      e1: 0
    }
  }
}
</script>
