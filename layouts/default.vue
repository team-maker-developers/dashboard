<template>
  <v-app>
    <layout-sidebar v-if="isLoggedIn" :prop-drawer.sync="drawer" />
    <layout-header :is-logged-in="isLoggedIn" :prop-drawer.sync="drawer" />
    <!-- nuxtタグにv-showをすると、描画できなくなるため、v-contentを二重にしている -->
    <v-content v-if="loading">
      <data-loading :message="loadingText" />
    </v-content>
    <v-content v-show="!loading">
      <nuxt />
    </v-content>
  </v-app>
</template>

<script lang="ts">
// eslint-disable-next-line no-unused-vars
import { NuxtLoading } from '@nuxt/types/app'
import { Component, Vue } from 'vue-property-decorator'
import { loginStore } from '@/store'
import layoutSidebar from '@/components/layout/layout-sidebar.vue'
import layoutHeader from '@/components/layout/layout-header.vue'
import DataLoading from '@/components/data-loading.vue'

interface Loading {
  loading: boolean
  loadingText: string
}

function typeOfLoading(loading: any): loading is Loading {
  return (
    loading !== null &&
    typeof loading === 'object' &&
    typeof loading.loading === 'boolean' &&
    typeof loading.loadingText === 'string'
  )
}

@Component({
  middleware: ['fetch-client-id'],
  components: { layoutSidebar, layoutHeader, DataLoading }
})
export default class DefaultLayout extends Vue {
  // SPの場合、メニューを非表示にする
  drawer: Boolean | null = null
  nuxtLoading: NuxtLoading | null = null

  get isLoggedIn(): boolean {
    return loginStore.isLoggedIn
  }

  // loading中の文言を変更可能にする
  get loadingText(): string {
    if (this.loading && typeOfLoading(this.nuxtLoading)) {
      return this.nuxtLoading.loadingText
    }

    return '読み込み中'
  }

  // nuxtのプロパティを見て、自動でloadingの判定をする
  get loading(): boolean {
    if (typeOfLoading(this.nuxtLoading)) {
      return this.nuxtLoading.loading
    }

    if (typeof this.nuxtLoading === 'boolean') {
      return this.nuxtLoading
    }

    return false
  }

  // moutendのタイミングでは、nuxt自体はマウントしていないため、nextTickを使用
  mounted() {
    this.$nextTick(() => {
      this.nuxtLoading = this.$nuxt.$loading
    })
  }
}
</script>
