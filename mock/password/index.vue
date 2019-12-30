<template>
  <!-- eslint-disable -->
  <div>
    <v-container>
      <h2>パスワード変更</h2>
      <v-row justify="center">
        <v-col cols="12" :lg="9">
          <v-card outlined>
            <v-card-title class="headline"></v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="password"
                    label="新しいパスワード"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="confirm_password"
                    label="新しいパスワードを確認"
                    required
                  ></v-text-field>
               </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-footer fixed padless>
      <v-card flat tile width="100%" class="blue-grey lighten-5">
        <v-card-text>
          <div class="d-flex justify-end pb-5">
            <v-btn large outlined color="primary" class="mx-2" dark to="..">キャンセル</v-btn>
            <v-btn large color="primary" class="mx-2" dark >反映する</v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
