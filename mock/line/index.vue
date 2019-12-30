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
                    v-if="status === 'edit'"
                  ></v-text-field>
                  <v-row v-if="status === 'save'">
                    <v-col cols="4">
                      チャネルID
                    </v-col>
                    <v-col cols="8">
                      {{unique_id}}
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="client_secret"
                    label="チャネルシークレット"
                    required
                    v-if="status === 'edit'"
                  ></v-text-field>
                  <v-row v-if="status === 'save'">
                    <v-col cols="4">
                      チャネルシークレット
                    </v-col>
                    <v-col cols="8">
                      {{client_secret}}
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="redirect"
                    label="コールバックURL"
                    required
                    v-if="status === 'edit'"
                  ></v-text-field>
                  <v-row v-if="status === 'save'">
                    <v-col cols="4">
                      コールバックURL
                    </v-col>
                    <v-col cols="8">
                      {{redirect}}
                    </v-col>
                  </v-row>
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
                    v-if="status === 'edit'"
                  ></v-text-field>
                  <v-row v-if="status === 'save'">
                    <v-col cols="4">
                      チャネルアクセストークン
                    </v-col>
                    <v-col cols="8">
                      {{internal_channel_access_token}}
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="internal_channel_secret"
                    label="チャネルシークレット"
                    required
                    v-if="status === 'edit'"
                  ></v-text-field>
                  <v-row v-if="status === 'save'">
                    <v-col cols="4">
                      チャネルシークレット
                    </v-col>
                    <v-col cols="8">
                      {{internal_channel_secret}}
                    </v-col>
                  </v-row>
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
                    v-if="status === 'edit'"
                  ></v-text-field>
                  <v-row v-if="status === 'save'">
                    <v-col cols="4">
                      チャネルアクセストークン
                    </v-col>
                    <v-col cols="8">
                      {{external_channel_access_token}}
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="external_channel_secret"
                    label="チャネルシークレット"
                    required
                    v-if="status === 'edit'"
                  ></v-text-field>
                  <v-row v-if="status === 'save'">
                    <v-col cols="4">
                      チャネルシークレット
                    </v-col>
                    <v-col cols="8">
                      {{external_channel_secret}}
                    </v-col>
                  </v-row>
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
    <v-footer fixed padless>
      <v-card flat tile width="100%" class="blue-grey lighten-5">
        <v-card-text>
          <div class="d-flex justify-end pb-5">
            <template v-if="status === 'edit'">
              <v-btn large color="secondary" outlined class="mx-2" dark @click="status = 'save'">キャンセル</v-btn>
              <v-btn large color="primary" class="mx-2" dark @click="status = 'save'">反映する</v-btn>
            </template>
            <template v-if="status === 'save'">
              <v-btn large color="primary" class="mx-2" dark @click="status = 'edit'">編集する</v-btn>
            </template>
          </div>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      status: 'save',
      unique_id: '未設定',
      client_secret: '未設定',
      redirect: '未設定',
      internal_channel_access_token: '未設定',
      internal_channel_secret: '未設定',
      external_channel_access_token: '未設定',
      external_channel_secret: '未設定'
    }
  }
}
</script>
