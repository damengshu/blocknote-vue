import type { CommentBody, ThreadStore, User } from "../../comments/index.js";
import { BlockNoteEditor } from "../../editor/BlockNoteEditor.js";
import { BlockNoteExtension } from "../../editor/BlockNoteExtension.js";
import { CustomBlockNoteSchema } from "../../schema/schema.js";
import { UserStore } from "./userstore/UserStore.js";
export declare class CommentsPlugin extends BlockNoteExtension {
    private readonly editor;
    readonly threadStore: ThreadStore;
    private readonly markType;
    readonly resolveUsers: undefined | ((userIds: string[]) => Promise<User[]>);
    readonly commentEditorSchema?: CustomBlockNoteSchema<any, any, any> | undefined;
    static key(): string;
    readonly userStore: UserStore<User>;
    /**
     * Whether a comment is currently being composed
     */
    private pendingComment;
    /**
     * The currently selected thread id
     */
    private selectedThreadId;
    /**
     * Store the positions of all threads in the document.
     * this can be used later to implement a floating sidebar
     */
    private threadPositions;
    private emitStateUpdate;
    /**
     * when a thread is resolved or deleted, we need to update the marks to reflect the new state
     */
    private updateMarksFromThreads;
    constructor(editor: BlockNoteEditor<any, any, any>, threadStore: ThreadStore, markType: string, resolveUsers: undefined | ((userIds: string[]) => Promise<User[]>), commentEditorSchema?: CustomBlockNoteSchema<any, any, any> | undefined);
    /**
     * Subscribe to state updates
     */
    onUpdate(callback: (state: {
        pendingComment: boolean;
        selectedThreadId: string | undefined;
        threadPositions: Map<string, {
            from: number;
            to: number;
        }>;
    }) => void): () => void;
    /**
     * Set the selected thread
     */
    selectThread(threadId: string | undefined, scrollToThread?: boolean): void;
    /**
     * Start a pending comment (e.g.: when clicking the "Add comment" button)
     */
    startPendingComment(): void;
    /**
     * Stop a pending comment (e.g.: user closes the comment composer)
     */
    stopPendingComment(): void;
    /**
     * Create a thread at the current selection
     */
    createThread(options: {
        initialComment: {
            body: CommentBody;
            metadata?: any;
        };
        metadata?: any;
    }): Promise<void>;
}
