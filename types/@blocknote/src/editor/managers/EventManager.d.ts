import type { BlockNoteEditor } from "../BlockNoteEditor.js";
import { type BlocksChanged } from "../../api/getBlocksChangedByTransaction.js";
import { Transaction } from "prosemirror-state";
import { EventEmitter } from "../../util/EventEmitter.js";
/**
 * A function that can be used to unsubscribe from an event.
 */
export type Unsubscribe = () => void;
/**
 * EventManager is a class which manages the events of the editor
 */
export declare class EventManager<Editor extends BlockNoteEditor> extends EventEmitter<{
    onChange: [
        editor: Editor,
        ctx: {
            getChanges(): BlocksChanged<Editor["schema"]["blockSchema"], Editor["schema"]["inlineContentSchema"], Editor["schema"]["styleSchema"]>;
        }
    ];
    onSelectionChange: [ctx: {
        editor: Editor;
        transaction: Transaction;
    }];
    onMount: [ctx: {
        editor: Editor;
    }];
    onUnmount: [ctx: {
        editor: Editor;
    }];
}> {
    private editor;
    constructor(editor: Editor);
    /**
     * Register a callback that will be called when the editor changes.
     */
    onChange(callback: (editor: Editor, ctx: {
        getChanges(): BlocksChanged<Editor["schema"]["blockSchema"], Editor["schema"]["inlineContentSchema"], Editor["schema"]["styleSchema"]>;
    }) => void): Unsubscribe;
    /**
     * Register a callback that will be called when the selection changes.
     */
    onSelectionChange(callback: (editor: Editor) => void, 
    /**
     * If true, the callback will be triggered when the selection changes due to a yjs sync (i.e.: other user was typing)
     */
    includeSelectionChangedByRemote?: boolean): Unsubscribe;
    /**
     * Register a callback that will be called when the editor is mounted.
     */
    onMount(callback: (ctx: {
        editor: Editor;
    }) => void): Unsubscribe;
    /**
     * Register a callback that will be called when the editor is unmounted.
     */
    onUnmount(callback: (ctx: {
        editor: Editor;
    }) => void): Unsubscribe;
}
