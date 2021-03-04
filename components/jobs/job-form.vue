<template>
  <!-- eslint-disable -->
  <v-container class="job-from">
    <v-row justify="center">
      <job-publish v-if="'id' in job" v-model="job" />
      <v-col cols="12" :lg="9">
        <v-card outlined>
          <v-card-title class="headline">リード記事</v-card-title>
          <v-card-subtitle>
            求人情報の前に表示されるリード記事の文章を編集できます
          </v-card-subtitle>
          <v-card-text>
            <div class="post-input-wrapper">
              <div class="post-input-label">
                <label>メイン画像</label>
                <v-icon v-if="doEditImage" color="primary" @click="doEditImage = false">
                  mdi-close
                </v-icon>
                <v-icon v-else-if="headerImageUrl" color="primary" @click="doEditImage = true">
                  mdi-pencil
                </v-icon>
              </div>
                <v-img v-if="headerImageUrl && !doEditImage" :src="headerImageUrl" height="184px" width="335px" />
                <v-file-input
                  v-else
                  v-model="headerImage"
                  :loading="uploading"
                  :disabled="uploading"
                />
            </div>
            

            <div class="post-input-wrapper">
              <label>記事本文</label>
              <post-editor v-model="pageBody" />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" :lg="9">
        <v-card outlined>
          <v-card-title class="headline">求人内容</v-card-title>
          <v-card-text>
            <job-text
              v-model="job"
              label="求人コード"
              property="code"
              placeholder="【例】111111"
            />
            <job-text
              v-model="job"
              label="記事タイトル"
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
import postEditor from './form/input/post-editor'
import jobFormMixins from './form/job-form-mixins'
import uploadImageMixins from './form/upload-image-mixins'

export default {
  components: { postEditor },
  mixins: [jobFormMixins, uploadImageMixins],
  data: () => ({ doEditImage: false, headerImage: null }),
  computed: {
    pageContent: {
      get() {
        return JSON.parse(this.job.page.content)
      },
      set(pageContent) {
        const job = { ...this.job }
        job.page.content = JSON.stringify(pageContent)
        this.job = job
      }
    },
    headerImageUrl: {
      get() {
        return this.pageContent?.header_image_url ?? null
      },
      set(headerImageUrl) {
        this.pageContent = {
          ...this.pageContent,
          header_image_url: headerImageUrl
        }
      }
    },
    pageBody: {
      get() {
        return this.pageContent?.body ?? ''
      },
      set(pageBody) {
        this.pageContent = {
          ...this.pageContent,
          body: pageBody
        }
      }
    }
  },
  watch: {
    async headerImage() {
      if (!this.headerImage) {
        return
      }

      const imageUrl = await this.uploadImage(this.headerImage)
      this.headerImageUrl = imageUrl
      this.doEditImage = false
    }
  }
}
</script>

<style lang="scss" scoped>
.job-from {
  margin-bottom: 100px;

  .post-input-wrapper {
    margin: 2rem 0;

    .post-input-label {
      margin-bottom: 1rem;

      .v-icon {
        margin-left: 0.2rem;
        font-size: 1.5rem;
        vertical-align: bottom;
      }
    }
  }
}
</style>
