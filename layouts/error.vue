<template>
  <v-app dark>
    <v-container>
      <v-row justify="center" class="ma-2 red--text text-center">
        <h1 v-if="isNotFound">
          ページが見つかりませんでした。
        </h1>
        <h1 v-else-if="isForbidden">
          アクセスできないページです。
        </h1>
        <h1 v-else>
          エラーが発生しました。
        </h1>
      </v-row>
      <v-container class="my-10 text-center">
        <p v-if="isNotFound || isForbidden">
          お手数ですが、やり直してください。
        </p>
        <p v-else>
          お手数ですが、システム窓口まで問い合わせてください。
          <br />support@teammaker.info
        </p>
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
  computed: {
    isNotFound() {
      return this.error && this.error.statusCode === 404
    },
    isForbidden() {
      return this.error && this.error.statusCode === 403
    }
  },
  head() {
    const title = this.isNotFound ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
