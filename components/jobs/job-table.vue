<template>
  <v-data-table :headers="jobHeaders" :items="jobs" class="elevation-1">
    <template v-slot:item.sharedAt="{}">
      -
    </template>
    <template v-slot:item.edit="{ item }">
      <v-btn outlined small color="primary" :to="`jobs/detail?id=${item.id}`">
        編集
      </v-btn>
    </template>
    <template v-slot:item.others="{ item }">
      <v-menu top offset-y>
        <template v-slot:activator="{ on }">
          <v-btn color="primary" small outlined v-on="on">
            ・・・
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(listitem, index) in jobActions"
            :key="index"
            @click="listitem.action(item.id)"
          >
            <v-list-item-title v-if="!('alterText' in listitem)">
              {{ listitem.text }}
            </v-list-item-title>
            <v-list-item-title v-else>
              {{ item.isPublished ? listitem.text : listitem.alterText }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { jobActions, jobHeaders } from '@/constants/list-tables/jobs'

interface JobItem {
  id: String
  code: String
  name: String
  publishState: String
  isPublished: Boolean
}

@Component
export default class JobTableVue extends Vue {
  @Prop(Array) jobs: JobItem[]
  jobActions: TableAction[] = jobActions
  jobHeaders: TableHeader[] = jobHeaders
}
</script>
