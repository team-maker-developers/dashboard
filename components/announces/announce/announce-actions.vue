<template>
  <div class="text-right">
    <v-btn :disabled="loading" color="primary" @click="doAnnounce">
      送信する
    </v-btn>
    <v-btn text @click="changeBeforeStep">戻る</v-btn>
    <v-dialog v-model="dialog" width="500">
      <v-card class="py-8">
        <v-card-title class="headline py-8" primary-title>
          {{ announceResult }}
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="clearDialog">
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { postAnnounceError } from '@/constants/announces/announce.ts'

export default {
  props: {
    announce: {
      type: String,
      required: true
    },
    channels: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    announceResult: '',
    loading: false
  }),
  computed: {
    dialog() {
      return this.announceResult !== ''
    }
  },
  methods: {
    clearDialog() {
      this.announceResult = ''
    },
    changeBeforeStep() {
      this.$emit('changeBeforeStep')
    },
    async doAnnounce() {
      this.loading = true
      try {
        this.announceResult = await this.postAnnounce({
          announce: this.announce,
          channels: this.channels
        })
      } catch (error) {
        this.announceResult = postAnnounceError
      } finally {
        this.loading = false
      }
    },
    ...mapActions('announce', ['postAnnounce'])
  }
}
</script>
