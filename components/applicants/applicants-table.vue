<template>
  <v-data-table
    :headers="ApplicantsHeaders"
    :items="applicants"
    class="elevation-1"
  >
    <template v-slot:item.changeStatus="{ item }">
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
    </template>
  </v-data-table>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import {
  ApplicantsHeaders, // eslint-disable-next-line no-unused-vars
  ApplicantsItem
} from '@/constants/list-tables/applicants'

@Component
export default class ApplicantsTableVue extends Vue {
  @Prop(Array) listitems: any
  @Prop(Array) applicants: ApplicantsItem[]

  ApplicantsHeaders: TableHeader[] = ApplicantsHeaders
}
</script>
