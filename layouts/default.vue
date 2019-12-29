<template>
  <v-app>
    <v-navigation-drawer v-if="isLoggedIn" v-model="drawer" app clipped>
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.link">
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
      <template v-if="isLoggedIn">
        <v-app-bar-nav-icon
          v-show="$vuetify.breakpoint.mdAndDown"
          @click.stop="drawer = !drawer"
        />
      </template>
      <v-toolbar-title>Team Maker</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <div v-if="isLoggedIn" class="d-flex align-center">
        <div class="text-center">
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon>mdi-settings</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in settings"
                :key="index"
                :to="item.link"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
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
import { loginStore } from '@/store'

@Component
export default class DefaultLayout extends Vue {
  get isLoggedIn(): boolean {
    return loginStore.isLoggedIn
  }

  data() {
    return {
      drawer: null,
      items: [
        {
          icon: 'mdi-home',
          text: 'ホーム',
          link: '/'
        },
        {
          icon: 'mdi-account-search',
          text: '求人管理',
          link: '/jobs'
        },
        {
          icon: 'mdi-account-badge-horizontal',
          text: '応募者管理',
          link: '/applicants'
        },
        {
          icon: 'mdi-share-circle',
          text: 'その他公報',
          link: '/gazettes'
        }
      ],
      settings: [
        { title: '社員管理', link: '/employees' },
        { title: 'LINE設定', link: '/line' },
        { title: 'パスワード変更', link: '/password' }
      ]
    }
  }
}
</script>
