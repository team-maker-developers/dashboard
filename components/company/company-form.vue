<template>
  <div class="company-form">
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="headline">会社情報</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="会社コード"
                  :value="company.unique_id"
                  readonly
                  hint="会社コードは編集できません"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="companyName" label="会社名" />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <social-configs-form
      v-model="socialConfigs"
      :unique-id="company.unique_id"
    />
  </div>
</template>

<script>
import socialConfigsForm from './social-configs-form/index'

export default {
  components: { socialConfigsForm },
  model: { prop: 'company' },
  props: {
    company: {
      type: Object,
      required: true
    }
  },
  computed: {
    companyName: {
      get() {
        return this.company.name
      },
      set(companyName) {
        this.updateCompany('name', companyName)
      }
    },
    socialConfigs: {
      get() {
        if (!this.company.social_configs) {
          return {}
        }
        return JSON.parse(this.company.social_configs)
      },
      set(socialConfigs) {
        const configs = JSON.stringify(socialConfigs)
        this.updateCompany('social_configs', configs)
      }
    }
  },
  methods: {
    updateCompany(propertyKey, propertyValue) {
      const company = { ...this.company }
      company[propertyKey] = propertyValue
      this.$emit('input', company)
    }
  }
}
</script>

<style lang="scss" scoped>
.company-form {
  margin-bottom: 88px;
}
</style>
