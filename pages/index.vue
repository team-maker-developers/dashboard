<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>ログイン完了</v-flex>
  </v-layout>
</template>

<script>
export default {
  middleware: ['redirect-jobs']
}
</script>
