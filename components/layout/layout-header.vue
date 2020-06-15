<template>
  <v-app-bar color="primary" app clipped-left dark>
    <template v-if="canAccessAdmin">
      <v-app-bar-nav-icon
        v-show="$vuetify.breakpoint.mdAndDown"
        @click.stop="drawer = !drawer"
      />
    </template>
    <v-toolbar-title>Team Maker</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <div class="d-flex align-center">
      <div v-if="canAccessAdmin" class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-cog-outline</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, settingIndex) in settingItems"
              :key="settingIndex"
              :to="item.link"
            >
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <!-- <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn> -->
      <div v-if="isLoggedIn" class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, accountIndex) in accountItems"
              :key="accountIndex"
              :to="item.link"
              @click="item.action"
            >
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue, Prop, PropSync } from 'vue-property-decorator'
import { loginStore } from '@/store'
import { settingItems, accountItems } from '@/constants/global-menu-items'

@Component
export default class LayoutHeader extends Vue {
  @Prop() canAccessAdmin: Boolean
  @PropSync('propDrawer', { required: true })
  drawer!: Boolean

  get isLoggedIn(): boolean {
    return loginStore.isLoggedIn
  }

  settingItems: MenuItem[] = settingItems
  accountItems: MenuItem[] = accountItems
}
</script>
