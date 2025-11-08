import { BlockNoteEditor } from "@blocknote/core"
import type { DefineComponent, ShallowRef } from "vue"

declare module 'blocknote-vue' {
  interface BlockNoteVueProps {
    editorProps?: any
    theme?: 'light' | 'dark'
    uploadFile?: (file: File) => Promise<string>
  }

  type BlockNoteVueEmits = {
    (e: 'change', document: any, changes: any, markdown: string): void
  }

  const BlockNoteVue: DefineComponent<
    BlockNoteVueProps,
    {},
    {},
    {},
    {},
    {},
    {},
    BlockNoteVueEmits,
    {},
    Exposed
  >
  export default BlockNoteVue;

  export interface Exposed {
    editor: ShallowRef<BlockNoteEditor | null>
  }
}
