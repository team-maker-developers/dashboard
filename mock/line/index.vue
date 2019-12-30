<template>
  <!-- eslint-disable -->
  <div>
    <v-container>
      <h2>LINE設定</h2>
      <v-row justify="center">
        <v-col cols="12" :lg="9">
          <v-card outlined>
            <v-card-title class="headline">LINE認証</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="unique_id"
                    label="チャネルID"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="client_secret"
                    label="チャネルシークレット"
                    required
                  ></v-text-field>
               </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="redirect"
                    label="コールバックURL"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" :lg="9">
          <v-card outlined>
            <v-card-title class="headline">社内通知</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="internal_channel_access_token"
                    label="チャネルアクセストークン"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="internal_channel_secret"
                    label="チャネルシークレット"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="internal_redirect"
                    label="コールバックURL"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" :lg="9">
          <v-card outlined>
            <v-card-title class="headline">社外通知</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="external_channel_access_token"
                    label="チャネルアクセストークン"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="external_channel_secret"
                    label="チャネルシークレット"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="external_redirect"
                    label="コールバックURL"
                    required
                  ></v-text-field>
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
          <v-btn large color="primary" class="mx-2" dark >反映する</v-btn>
        </div>
      </v-card-text>
    </v-card>
    <!-- 最上位に表示するフッターで求人情報が見えなくなるのを防ぐ -->
    <v-footer fixed padless>
      <v-card flat tile width="100%" class="blue-grey lighten-5">
        <v-card-text>
          <div class="d-flex justify-end pb-5">
            <v-btn large outlined color="primary" class="mx-2" dark >キャンセル</v-btn>
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
