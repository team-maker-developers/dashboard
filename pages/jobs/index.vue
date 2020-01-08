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
            <template v-slot:item.edit="{ item }">
              <v-btn outlined small color="primary" to="jobs/detail/" >{{ item.edit }}</v-btn>
            </template>
            <template v-slot:item.others="{ item }">
              <v-menu top offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" small outlined v-on="on">
                    {{ item.others }}
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(listitem, index) in jobActions"
                    :key="index"
                    :to="listitem.link"
                  >
                    <v-list-item-title>{{ listitem.title }}</v-list-item-title>
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
import { jobActions, jobHeaders } from '@/constants/list-tables/jobs'

@Component
export default class JobsIndexVue extends Vue {
  jobActions: any[] = jobActions
  jobHeaders: TableHeader[] = jobHeaders
  jobs: any[] = [
    {
      no: 1,
      job: '港区・渋谷区で働く訪問看護師',
      status: '公開中',
      share: '2019/11/13',
      edit: '編集',
      others: '・・・'
    },
    {
      no: 2,
      job: '港区・渋谷区で働く訪問看護師',
      status: '下書き',
      share: '-',
      edit: '編集',
      others: '・・・'
    },
    {
      no: 3,
      job: '港区・渋谷区で働く訪問看護師',
      status: '公開中',
      share: '2019/11/13',
      edit: '編集',
      others: '・・・'
    },
    {
      no: 4,
      job: '港区・渋谷区で働く訪問看護師',
      status: '公開中',
      share: '2019/11/13',
      edit: '編集',
      others: '・・・'
    },
    {
      no: 5,
      job: '港区・渋谷区で働く訪問看護師',
      status: '公開中',
      share: '2019/11/13',
      edit: '編集',
      others: '・・・'
    }
  ]
}
</script>
