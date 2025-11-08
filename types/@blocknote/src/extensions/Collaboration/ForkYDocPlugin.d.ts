import { BlockNoteEditor, BlockNoteEditorOptions } from "../../editor/BlockNoteEditor.js";
import { BlockNoteExtension } from "../../editor/BlockNoteExtension.js";
export declare class ForkYDocPlugin extends BlockNoteExtension<{
    forked: boolean;
}> {
    static key(): string;
    private editor;
    private collaboration;
    constructor({ editor, collaboration, }: {
        editor: BlockNoteEditor<any, any, any>;
        collaboration: BlockNoteEditorOptions<any, any, any>["collaboration"];
    });
    /**
     * To find a fragment in another ydoc, we need to search for it.
     */
    private findTypeInOtherYdoc;
    /**
     * Whether the editor is editing a forked document,
     * preserving a reference to the original document and the forked document.
     */
    get isForkedFromRemote(): boolean;
    /**
     * Stores whether the editor is editing a forked document,
     * preserving a reference to the original document and the forked document.
     */
    private forkedState;
    /**
     * Fork the Y.js document from syncing to the remote,
     * allowing modifications to the document without affecting the remote.
     * These changes can later be rolled back or applied to the remote.
     */
    fork(): void;
    /**
     * Resume syncing the Y.js document to the remote
     * If `keepChanges` is true, any changes that have been made to the forked document will be applied to the original document.
     * Otherwise, the original document will be restored and the changes will be discarded.
     */
    merge({ keepChanges }: {
        keepChanges: boolean;
    }): void;
}
