<script lang="tsx">
  import { applyPureReactInVue } from 'veaury'
  import { setVeauryOptions } from 'veaury'

  import { BlockNoteEditor } from "@blocknote/core"
  import { createRoot } from 'react-dom/client'
  import { BlockNoteView } from "@blocknote/mantine"
  import { defineComponent, onBeforeUnmount, onMounted, shallowRef, type ShallowRef } from 'vue'
  import { zh } from "@blocknote/core/locales";
  import { type BlockNoteEditorOption } from "./props";

  setVeauryOptions({
    react: {
      createRoot
    }
  })

  // expose types: https://github.com/vuejs/core/issues/10873
  export interface Exposed {
    editor: ShallowRef<BlockNoteEditor | null>
  }

  export default defineComponent({
    props: {
      editorProps: {
        type: Object as () => BlockNoteEditorOption,
        required: false
      },
      theme: {
        type: String as () => 'light' | 'dark',
        required: false,
        default: 'light'
      },
      uploadFile: {
        type: Function as unknown as () => (file: File) => Promise<string>,
        required: false
      }
    },
    emits: ['change'],
    setup(props, { emit, slots, expose }) {
      const NoteView = applyPureReactInVue(BlockNoteView)
      const editor = shallowRef<BlockNoteEditor | null>(null)

      onMounted(() => {
        editor.value = BlockNoteEditor.create({
          dictionary: zh,
          ...props.editorProps,
          uploadFile: props.uploadFile
        }) as BlockNoteEditor
        // onChange(editor)
      })

      onBeforeUnmount(() => {
        editor.value = null
      })

      const onChange = (editor: any, { getChanges }: any) => {
        const changes = getChanges();

        const markdown = editor.blocksToMarkdownLossy() ?? ''
        emit('change', editor.document, changes, markdown)
      }

      expose({ editor } as Exposed)

      return () => (
        <div class="note-view-container">
          {editor.value
            ? <NoteView theme={props.theme} editor={editor.value} onChange={onChange} />
            : <div class="loading">
              {slots.loading ? (slots.loading() as unknown as any) : 'Loading…'}
            </div>}
        </div>
      )
    }
  })
</script>

<style>
  @import "@blocknote/core/style.css";
  @import "@blocknote/mantine/style.css";

  .note-view-container {
    min-height: 300px;
  }

  .loading {
    padding: 16px;
    color: #888;
  }

  .bn-container {
    height: 100%;
  }
</style>
