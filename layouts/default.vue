<template>
  <v-app>
    <v-navigation-drawer app clipped>
      <v-list>
        <v-list-item-group v-model="model">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
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
  data() {
    return {
      items: [
        {
          icon: 'mdi-home',
          text: 'ホーム'
        },
        {
          icon: 'mdi-account',
          text: '応募者管理'
        },
        {
          icon: 'mdi-email',
          text: '求人募集'
        },
        {
          icon: 'mdi-account-box',
          text: '社員管理'
        }
      ],
      model: 0
    }
  }
}
</script>
