<template>
  <v-app dark>
    <v-container>
      <v-alert type="error" class="text-center">
        <h1 v-if="isNotFound">
          {{ pageNotFound }}
        </h1>
        <h1 v-else>
          {{ otherError }}
        </h1>
      </v-alert>
      <v-container class="text-center">
        <p v-if="isNotFound">
          お手数ですが、やり直してください。
        </p>
        <p v-else>お手数ですが、システム窓口まで問い合わせてください。</p>
      </v-container>
      <v-row justify="center">
        <v-btn to="/" class="ma-5">
          トップページに戻る
        </v-btn>
        <v-btn class="ma-5" @click="$router.go(-1)">
          前の画面に戻る
        </v-btn>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title = this.isNotFound ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  computed: {
    pageNotFound: () => 'ページが見つまりませんでした。',
    otherError: () => 'エラーが発生しました。',
    isNotFound: () => this.error.statusCode === 404
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
