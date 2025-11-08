import * as Y from "yjs";
import { CommentsPlugin } from "../../extensions/Comments/CommentsPlugin.js";
import { ForkYDocPlugin } from "../../extensions/Collaboration/ForkYDocPlugin.js";
import { SyncPlugin } from "../../extensions/Collaboration/SyncPlugin.js";
import { UndoPlugin } from "../../extensions/Collaboration/UndoPlugin.js";
import { CursorPlugin } from "../../extensions/Collaboration/CursorPlugin.js";
import type { ThreadStore, User } from "../../comments/index.js";
import type { BlockNoteEditor } from "../BlockNoteEditor.js";
import { CustomBlockNoteSchema } from "../../schema/schema.js";
export interface CollaborationOptions {
    /**
     * The Yjs XML fragment that's used for collaboration.
     */
    fragment: Y.XmlFragment;
    /**
     * The user info for the current user that's shown to other collaborators.
     */
    user: {
        name: string;
        color: string;
    };
    /**
     * A Yjs provider (used for awareness / cursor information)
     * Can be null for comments-only mode
     */
    provider: any;
    /**
     * Optional function to customize how cursors of users are rendered
     */
    renderCursor?: (user: any) => HTMLElement;
    /**
     * Optional flag to set when the user label should be shown with the default
     * collaboration cursor. Setting to "always" will always show the label,
     * while "activity" will only show the label when the user moves the cursor
     * or types. Defaults to "activity".
     */
    showCursorLabels?: "always" | "activity";
    /**
     * Comments configuration - can be used with or without collaboration
     */
    comments?: {
        schema?: CustomBlockNoteSchema<any, any, any>;
        threadStore: ThreadStore;
    };
    /**
     * Function to resolve user IDs to user objects - required for comments
     */
    resolveUsers?: (userIds: string[]) => Promise<User[]>;
}
/**
 * CollaborationManager handles all collaboration-related functionality
 * This manager is completely optional and can be tree-shaken if not used
 */
export declare class CollaborationManager {
    private editor;
    private options;
    private _commentsPlugin?;
    private _forkYDocPlugin?;
    private _syncPlugin?;
    private _undoPlugin?;
    private _cursorPlugin?;
    constructor(editor: BlockNoteEditor, options: CollaborationOptions);
    /**
     * Get the sync plugin instance
     */
    get syncPlugin(): SyncPlugin | undefined;
    /**
     * Get the undo plugin instance
     */
    get undoPlugin(): UndoPlugin | undefined;
    /**
     * Get the cursor plugin instance
     */
    get cursorPlugin(): CursorPlugin | undefined;
    /**
     * Get the fork YDoc plugin instance
     */
    get forkYDocPlugin(): ForkYDocPlugin | undefined;
    initExtensions(): Record<string, unknown>;
    /**
     * Update the user info for the current user that's shown to other collaborators
     */
    updateUserInfo(user: {
        name: string;
        color: string;
    }): void;
    /**
     * Get the collaboration undo command
     */
    getUndoCommand(): import("prosemirror-state").Command;
    /**
     * Get the collaboration redo command
     */
    getRedoCommand(): import("prosemirror-state").Command;
    /**
     * Check if initial content should be avoided due to collaboration
     */
    shouldAvoidInitialContent(): boolean;
    /**
     * Get the collaboration options
     */
    getOptions(): CollaborationOptions;
    /**
     * Get the comments plugin if available
     */
    get comments(): CommentsPlugin | undefined;
    /**
     * Check if comments are enabled
     */
    get hasComments(): boolean;
    /**
     * Get the resolveUsers function
     */
    get resolveUsers(): ((userIds: string[]) => Promise<User[]>) | undefined;
}
