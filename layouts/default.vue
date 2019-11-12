<template>
  <v-app>
    <v-navigation-drawer v-if="isLoggedIn" v-model="drawer" app clipped>
      <v-list>
        <v-list-item-group>
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
      <v-app-bar-nav-icon v-if="isLoggedIn" @click.stop="drawer = !drawer" />
      <v-toolbar-title>Team Maker</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <div v-if="isLoggedIn" class="d-flex align-center">
        <v-btn icon>
          <v-icon>mdi-settings</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-bell</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </div>
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
      drawer: true,
      items: [
        {
          icon: 'mdi-home',
          text: 'ホーム'
        },
        {
          icon: 'mdi-account-search',
          text: '求人管理'
        },
        {
          icon: 'mdi-account-badge-horizontal',
          text: '応募者管理'
        },
        {
          icon: 'mdi-share-circle',
          text: 'その他公報'
        }
      ]
    }
  }
}
</script>
