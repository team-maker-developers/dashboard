<template>
  <v-form>
    <v-text-field v-model="email" label="email" />
    <v-text-field v-model="password" label="password" type="password" />
    <v-btn width="100%">ログイン</v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null
    }
  }
}
</script>
