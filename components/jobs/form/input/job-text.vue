<template>
  <v-row>
    <v-col cols="12">
      <v-textarea
        v-if="textarea"
        v-model="value"
        :label="label"
        :placeholder="placeholder"
        :required="required"
      ></v-textarea>
      <v-text-field
        v-else
        v-model="value"
        :label="label"
        :placeholder="placeholder"
        :required="required"
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
import jobInputMixin from './job-input-mixin'

export default {
  mixins: [jobInputMixin],
  props: {
    textarea: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    }
  }
}
</script>
