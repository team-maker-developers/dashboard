<template>
  <v-data-table :headers="appliesHeaders" :items="applies" class="elevation-1">
    <!-- <template v-slot:item.changeStatus="{ item }">
      <v-menu top offset-y>
        <template v-slot:activator="{ on }">
          <v-btn color="secondary" small outlined v-on="on">
            {{ item.changeStatus }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(listitem, index) in listitems"
            :key="index"
            :to="listitem.link"
          >
            <v-list-item-title>{{ listitem.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template> -->
  </v-data-table>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
// eslint-disable-next-line no-unused-vars
import { AppliesHeaders, AppliesItem } from '@/constants/applies/applies.ts'

@Component
export default class ApplicantsTableVue extends Vue {
  @Prop(Array) applies: AppliesItem[]

  appliesHeaders: TableHeader[] = AppliesHeaders
}
</script>
