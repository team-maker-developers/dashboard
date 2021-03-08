<template>
  <v-row id="social_configs">
    <v-col>
      <v-card>
        <v-card-title class="headline">LINE連携</v-card-title>
        <authenticate-config v-model="lineAuthConfig" :unique-id="uniqueId" />
        <announce-config v-model="externalConfig" label="社外広報設定" />
        <announce-config v-model="internalConfig" label="社内広報設定" />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import announceConfig from './announce-config'
import authenticateConfig from './authenticate-config'

export default {
  components: { announceConfig, authenticateConfig },
  model: { prop: 'socialConfigs' },
  props: {
    socialConfigs: {
      type: Object,
      required: true
    },
    uniqueId: {
      type: String,
      required: true
    }
  },
  computed: {
    lineConfigs() {
      if ('line' in this.socialConfigs) {
        return this.socialConfigs.line
      }

      return {
        authenticate: {},
        internal_line: {},
        external_line: {}
      }
    },
    lineAuthConfig: {
      get() {
        return this.lineConfigs.authenticate
      },
      set(authConfig) {
        this.updateLineConfigs('authenticate', authConfig)
      }
    },
    internalConfig: {
      get() {
        return this.lineConfigs.internal_line
      },
      set(internalConfig) {
        this.updateLineConfigs('internal_line', internalConfig)
      }
    },
    externalConfig: {
      get() {
        return this.lineConfigs.external_line
      },
      set(externalConfig) {
        this.updateLineConfigs('external_line', externalConfig)
      }
    }
  },
  methods: {
    updateLineConfigs(key, value) {
      const config = { ...this.socialConfigs }
      config.line = this.lineConfigs
      config.line[key] = value
      this.$emit('input', config)
    }
  }
}
</script>
