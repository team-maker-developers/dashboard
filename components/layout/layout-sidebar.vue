<template>
  <v-navigation-drawer v-model="drawer" app clipped>
    <v-list>
      <v-list-item-group>
        <v-list-item
          v-for="(item, menuIndex) in menuItens"
          :key="menuIndex"
          :to="item.link"
        >
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
</template>

<script lang="ts">
import { Component, Vue, PropSync } from 'vue-property-decorator'
import { menuItems } from '@/constants/global-menu-items'
import { MenuItem } from '@/types'

@Component
export default class LayoutSidebar extends Vue {
  @PropSync('propDrawer', { required: true })
  drawer!: Boolean

  menuItens: MenuItem[] = menuItems
}
</script>
