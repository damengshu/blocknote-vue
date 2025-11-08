import { BlockNoteEditor } from "../../editor/BlockNoteEditor.js";
import { BlockNoteExtension } from "../../editor/BlockNoteExtension.js";
/**
 * Plugin that shows adds a decoration around the current selection
 * This can be used to highlight the current selection in the UI even when the
 * text editor is not focused.
 */
export declare class ShowSelectionPlugin extends BlockNoteExtension {
    private readonly editor;
    static key(): string;
    private enabled;
    constructor(editor: BlockNoteEditor<any, any, any>);
    setEnabled(enabled: boolean): void;
    getEnabled(): boolean;
}
