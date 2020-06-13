<template>
  <v-data-table :headers="jobHeaders" :items="jobs" class="elevation-1">
    <template v-slot:item.sharedAt="{}">
      -
    </template>
    <template v-slot:item.edit="{ item }">
      <v-btn outlined small color="primary" :to="`/jobs/${item.id}`">
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
          <template v-for="(listitem, index) in jobActions">
            <v-list-item
              v-if="!('visible' in listitem) || listitem.visible(item)"
              :key="index"
              @click="listitem.action(item)"
            >
              <v-list-item-title v-if="!('alterText' in listitem)">
                {{ listitem.text }}
              </v-list-item-title>
              <v-list-item-title v-else>
                {{ item.page.isPublished ? listitem.text : listitem.alterText }}
              </v-list-item-title>
            </v-list-item>
          </template>
        </v-list>
      </v-menu>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
// eslint-disable-next-line no-unused-vars
import { jobHeaders, JobItem } from '@/constants/jobs/jobs'

@Component
export default class JobTableVue extends Vue {
  @Prop(Array) jobs: JobItem[]
  @Prop(Array) jobActions: TableAction<JobItem>[]

  jobHeaders: TableHeader[] = jobHeaders
}
</script>
