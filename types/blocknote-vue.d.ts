import { BlockNoteEditor } from "@blocknote/core"
import type { DefineComponent, ShallowRef } from "vue"

declare module 'blocknote-vue' {
  type Optional<T> = {
    [K in keyof T]?: T[K]
  }

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
    Optional<Exposed>
  >
  export default BlockNoteVue;
  export const BlockNoteView: typeof BlockNoteVue;

  export interface Exposed {
    editor: ShallowRef<BlockNoteEditor | null>
  }
}
