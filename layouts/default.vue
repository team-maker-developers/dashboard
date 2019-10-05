<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon v-if="isLoggedIn" />
      <v-toolbar-title>Team Maker</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-toolbar-items v-if="isLoggedIn">
        <v-btn text>Link 1</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['isLoggedIn'])
  }
}
</script>
