<template>
  <!-- eslint-disable -->
  <div>
    <v-container>
      <h2>求人一覧</h2>
      <v-row justify="center">
        <v-col :lg="9">
          <div class="text-right">
            <v-btn outlined small color="primary" to="jobs/detail/" >新規作成</v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col :lg="9">
          <v-data-table :headers="jobHeaders" :items="jobs" class="elevation-1">
            <template v-slot:item.sharedAt="{}">
              -
            </template>
            <template v-slot:item.edit="{ item }">
              <v-btn outlined small color="primary" :to="`jobs/detail?id=${item.id}`" >編集</v-btn>
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
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { getJobs, jobActions, jobHeaders } from '@/constants/list-tables/jobs'

@Component({
  apollo: {
    jobs: getJobs
  }
} as any)
export default class JobsIndexVue extends Vue {
  jobActions: TableAction[] = jobActions
  jobHeaders: TableHeader[] = jobHeaders
}
</script>
