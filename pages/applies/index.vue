<template>
  <div>
    <v-container>
      <h2>応募一覧</h2>
      <!-- <v-row justify="center">
        <v-col>
          <div class="text-right">
            <v-btn color="primary">LINEで連絡する</v-btn>
          </div>
        </v-col>
      </v-row> -->
      <v-row justify="center">
        <v-col>
          <applies-table :applies="applies" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import appliesTable from '@/components/applies/applies-table.vue'
import { getApplies } from '@/constants/applies/applies.ts'

export default {
  apollo: {
    applies: {
      query: getApplies
    }
  },
  components: { appliesTable }
}
</script>
