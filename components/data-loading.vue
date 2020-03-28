<template>
  <v-layout ma-5 column justify-center align-center>
    <v-progress-circular indeterminate size="200">
      {{ message }}
    </v-progress-circular>
  </v-layout>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: '読み込み中'
    }
  }
}
</script>
