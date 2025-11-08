import { BlockNoteEditor } from "../../editor/BlockNoteEditor.js";
import { BlockNoteExtension } from "../../editor/BlockNoteExtension.js";
export declare class UndoPlugin extends BlockNoteExtension {
    static key(): string;
    constructor({ editor }: {
        editor: BlockNoteEditor<any, any, any>;
    });
    get priority(): number;
}
