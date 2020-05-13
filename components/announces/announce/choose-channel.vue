<template>
  <v-stepper-content step="1">
    <h3 class="py-3">広報先を選択してください。</h3>
    <h4 class="py-1">広報先を選ぶ</h4>
    <v-form ref="channelForm" v-model="isValid">
      <v-container class="ml-2">
        <v-row>
          <v-checkbox v-model="checkAll" label="すべてを選択する" />
        </v-row>
        <v-row v-for="channel in channels" :key="channel.id">
          <v-checkbox
            v-model="chooseChannels"
            :label="channel.name"
            :value="channel"
            :rules="[validateChooseChannels]"
            :disabled="job ? !channel.is_internal : false"
            :hint="
              job && !channel.is_internal
                ? '求人を広報する場合、社外広報は選択できません。'
                : ''
            "
            persistent-hint
          />
        </v-row>
        <div class="text-right">
          <v-btn
            color="primary"
            justify-end
            :disabled="!isValid"
            @click="changeStep"
          >
            次へ
          </v-btn>
        </div>
      </v-container>
    </v-form>
  </v-stepper-content>
</template>

<script>
import { mapState } from 'vuex'
import announceStepMixin from './announce-step-mixin.js'

export default {
  mixins: [announceStepMixin],
  props: {
    value: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    isValid: false
  }),
  computed: {
    checkAll: {
      get() {
        return this.chooseChannels.length === this.filteredChannel.length
      },
      set(checked) {
        if (checked) {
          this.chooseChannels = this.filteredChannel
        } else {
          this.chooseChannels = []
        }
      }
    },
    filteredChannel() {
      if (!this.job) {
        return this.channels
      }
      return this.channels.filter((channel) => channel.is_internal)
    },
    chooseChannels: {
      get() {
        return this.value
      },
      set(channels) {
        this.$emit('input', channels)
      }
    },
    ...mapState('announce', ['channels'])
  },
  methods: {
    validateChooseChannels() {
      if (this.chooseChannels.length === 0) {
        return '最低でも、一つの広報先を選択してください。'
      }

      return true
    }
  }
}
</script>
