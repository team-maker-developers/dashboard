<template>
  <v-row>
    <v-col cols="12">
      <!-- スタイルは、@/assets/styles/post-editor.scssで編集する -->
      <editor-menu-bar v-slot="{ commands, isActive }" :editor="editor">
        <div id="post-editor-menu">
          <button
            :class="{ 'is-active': isActive.heading({ level: 1 }) }"
            @click="commands.heading({ level: 1 })"
          >
            H1
          </button>
          <button
            :class="{ 'is-active': isActive.heading({ level: 2 }) }"
            @click="commands.heading({ level: 2 })"
          >
            H2
          </button>
          <button
            :class="{ 'is-active': isActive.paragraph() }"
            @click="commands.paragraph()"
          >
            <v-icon>mdi-format-paragraph</v-icon>
          </button>
        </div>
      </editor-menu-bar>
      <editor-content id="post-editor" :editor="editor" />
    </v-col>
  </v-row>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import { Heading } from 'tiptap-extensions'

export default {
  components: { EditorContent, EditorMenuBar },
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data: () => ({ editor: null }),
  mounted() {
    this.editor = new Editor({
      content: this.value,
      onUpdate: this.updateContent,
      extensions: [new Heading({ lebel: [1, 2] })]
    })
  },
  beforeDestroy() {
    this.editor.destroy()
  },
  methods: {
    updateContent(content) {
      this.$emit('input', content.getHTML())
    }
  }
}
</script>
