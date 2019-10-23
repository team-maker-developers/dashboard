<template>
  <v-app>
    <v-navigation-drawer app clipped>
      <v-list-item to="/" nuxt>
        <v-list-item-content>
          <v-list-item-title>ホーム</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/" nuxt>
        <v-list-item-content>
          <v-list-item-title>応募者管理</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/" nuxt>
        <v-list-item-content>
          <v-list-item-title>求人募集</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/" nuxt>
        <v-list-item-content>
          <v-list-item-title>社員管理</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
    <v-app-bar color="primary" app clipped-left dark>
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

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'

@Component
export default class DefaultLayout extends Vue {
  @State('isLoggedIn') isLoggedIn: boolean
}
</script>
