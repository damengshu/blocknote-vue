import type { BlockNoteEditor } from "../../editor/BlockNoteEditor.js";
import { BlockNoteExtension } from "../../editor/BlockNoteExtension.js";
export declare class PlaceholderPlugin extends BlockNoteExtension {
    static key(): string;
    constructor(editor: BlockNoteEditor<any, any, any>, placeholders: Record<string | "default" | "emptyDocument", string | undefined>);
}
