# Vue3 中使用 **[BlockNote](https://www.blocknotejs.org/docs#introduction-to-blocknote)**

#### use [veaury](https://github.com/gloriasoft/veaury/) support react component in vue3

## 安装

```bash
npm install blocknote-vue
```

## 快速开始

```vue
<template>
  <div>
    <BlockNoteView
      ref="blockNoteViewRef"
      :editor-props="editorProps"
      @change="handleChange"
    />

    <button @click="handleUpdate">update</button>
  </div>
</template>

<script lang="ts" setup>
  import { BlockNoteView } from 'blocknote-vue'
  import { Exposed } from 'blocknote-vue/es/BlockNoteView.vue'

  const blockNoteViewRef = ref<Exposed | null>(null)

  const editorProps: any = ref({
    initialContent: [
      {
        id: '685bd685-4e26-4c77-a97a-16fc6db68dde',
        type: 'paragraph',
        props: {
          backgroundColor: 'default',
          textColor: 'default',
          textAlignment: 'left'
        },
        content: [
          {
            type: 'text',
            text: 'Welcome to this demo!',
            styles: {}
          }
        ],
        children: []
      },
      {
        id: '0a3bb640-f66c-4c58-9466-f19de032b841',
        type: 'heading',
        props: {
          backgroundColor: 'default',
          textColor: 'default',
          textAlignment: 'left',
          level: 1,
          isToggleable: false
        },
        content: [
          {
            type: 'text',
            text: 'This is a heading block',
            styles: {}
          }
        ],
        children: []
      },
      {
        id: '07bc4a38-fe90-4538-8b3a-af11412e7988',
        type: 'paragraph',
        props: {
          backgroundColor: 'default',
          textColor: 'default',
          textAlignment: 'left'
        },
        content: [
          {
            type: 'text',
            text: 'This is a paragraph block',
            styles: {}
          }
        ],
        children: []
      },
      {
        id: '7bab9d7d-b63b-4aad-acfc-3c68bdbbe332',
        type: 'paragraph',
        props: {
          backgroundColor: 'default',
          textColor: 'default',
          textAlignment: 'left'
        },
        content: [],
        children: []
      }
    ]
  })

  const handleChange = (document: any, changes: any, markdown: string) => {
    console.log('Markdown content:', markdown)
    console.log('Document content:', document)
    console.log('Changes:', changes)
  }

  const handleUpdate = () => {
    const editor = blockNoteViewRef.value?.editor
    if (!editor) {
      console.warn('Editor 未初始化')
      return
    }

    const newBlocks = [
      {
        id: 'new-block-1',
        type: 'paragraph',
        props: {
          backgroundColor: 'default',
          textColor: 'default',
          textAlignment: 'left'
        },
        content: [
          {
            type: 'text',
            text: 'This is a new paragraph block added programmatically.',
            styles: {}
          }
        ],
        children: []
      }
    ]

    editor.replaceBlocks(editor.document, newBlocks)
  }
</script>

<style lang="scss">
  @import 'blocknote-vue/es/blocknote-vue.css';
</style>
```
