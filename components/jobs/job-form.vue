<template>
  <!-- eslint-disable -->
  <v-container class="job-from">
    <v-row justify="center">
      <job-publish v-if="'id' in job" v-model="job" />
      <v-col cols="12" :lg="9">
        <v-card outlined>
          <v-card-title class="headline">求人情報</v-card-title>
          <v-card-text>
            <job-text
              v-model="job"
              label="求人コード"
              property="code"
              placeholder="【例】111111"
            />
            <job-text
              v-model="job"
              label="求人のタイトル"
              property="name"
              placeholder="【例】港区・渋谷区で働く訪問看護師"
            />
            <v-row>
              <v-col cols="12">
                <v-select
                  v-model="employmentCategoryId"
                  :items="employmentCategories"
                  label="就業形態"
                  item-text="name"
                  item-value="id"
                ></v-select>
              </v-col>
            </v-row>
            <job-text
              v-model="job"
              property="job_content"
              label="業務内容"
              placeholder="【例】ステーション近隣地域のご家庭や集合住宅等への訪問看護サービスの提供"
              textarea
              required
            />
            <job-json
              v-model="job"
              property="salary"
              label="給与"
            />
            <job-json
              v-model="job"
              property="place"
              label="勤務地"
            />
            <job-json
              v-model="job"
              property="work_datetime"
              label="勤務時間や休日など"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import jobFormMixins from './form/job-form-mixins'

export default {
  mixins: [jobFormMixins]
}
</script>

<style scoped>
.job-from {
  margin-bottom: 100px;
}
</style>
