<template>
  <v-app-bar color="primary" app clipped-left dark>
    <template v-if="isLoggedIn">
      <v-app-bar-nav-icon
        v-show="$vuetify.breakpoint.mdAndDown"
        @click.stop="drawer = !drawer"
      />
    </template>
    <v-icon>icon-favicon</v-icon>
    <v-icon>icon-title</v-icon>
    <!--<v-card color="primary" flat width="150">
      <v-row no-gutters>
        <v-col cols="12" align="center">
          <v-icon>icon-favicon</v-icon>
        </v-col>
        <v-col cols="12" align="center">
          <v-icon>icon-title</v-icon>
        </v-col>
      </v-row>
    </v-card>-->
    <v-spacer></v-spacer>
    <div v-if="isLoggedIn" class="d-flex align-center">
      <div class="text-center">
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
      <div class="text-center">
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
import { settingItems, accountItems } from '@/constants/global-menu-items'
import '@/static/webicon/style.css'

@Component
export default class LayoutHeader extends Vue {
  @Prop() isLoggedIn: Boolean
  @PropSync('propDrawer', { required: true })
  drawer!: Boolean

  settingItems: MenuItem[] = settingItems
  accountItems: MenuItem[] = accountItems
}
</script>
