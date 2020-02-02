<template>
  <v-row>
    <v-col cols="12">
      <v-menu
        v-model="isShownDatePicker"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            :label="label"
            prepend-icon="mdi-calendar"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          @input="isShownDatePicker = false"
        ></v-date-picker>
      </v-menu>
    </v-col>
  </v-row>
</template>

<script>
import moment from 'moment'

export default {
  model: {
    prop: 'jobDate'
  },
  props: {
    jobDate: {
      type: String,
      default: null,
      reduired: true
    },
    label: {
      type: String,
      required: true
    }
  },
  data: () => ({
    isShownDatePicker: false
  }),
  computed: {
    date: {
      get() {
        if (this.jobDate) {
          return moment(this.jobDate).format('YYYY-MM-DD')
        }
        return null
      },
      set(date) {
        const dateTime = moment(date).format('YYYY-MM-DD 00:00:00')
        this.$emit('input', dateTime)
      }
    }
  }
}
</script>
