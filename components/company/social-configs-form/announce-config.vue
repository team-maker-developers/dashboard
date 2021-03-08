<template>
  <v-card-text>
    <v-row>
      <v-card-title>{{ label }}</v-card-title>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field v-model="secret" label="Channel secret" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field v-model="token" label="Channel access token" />
      </v-col>
    </v-row>
  </v-card-text>
</template>

<script>
export default {
  model: { prop: 'configs' },
  props: {
    label: {
      type: String,
      required: true
    },
    configs: {
      type: Object,
      required: true
    }
  },
  computed: {
    secret: {
      get() {
        return this.configs.channel_secret
      },
      set(secret) {
        const configs = { ...this.configs }
        configs.channel_secret = secret
        this.$emit('input', configs)
      }
    },
    token: {
      get() {
        return this.configs.channel_access_token
      },
      set(token) {
        const configs = { ...this.configs }
        configs.channel_access_token = token
        this.$emit('input', configs)
      }
    }
  }
}
</script>
