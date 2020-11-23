<template>
  <v-row>
    <v-col cols="12">
      <label>{{ label }}</label>
      <tree-select
        v-model="selectedItem"
        :options="selectableItems"
        :normalizer="normalizer"
        search-nested
        placeholder="選択してください"
        no-children-text="データがありません"
      />
    </v-col>
  </v-row>
</template>

<script>
import TreeSelect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

export default {
  components: { TreeSelect },
  props: {
    value: {
      type: null, // 未選択の場合は、nullになるため
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  computed: {
    selectableItems() {
      return this.items[0].children
    },
    selectedItem: {
      get() {
        return this.value
      },
      set(selectedItem) {
        this.$emit('input', selectedItem)
      }
    }
  },
  methods: {
    normalizer(node) {
      return {
        id: node.id,
        label: node.name,
        children: node.children
      }
    }
  }
}
</script>
