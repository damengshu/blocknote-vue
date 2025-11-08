import { Awareness } from "y-protocols/awareness.js";
import * as Y from "yjs";
import { BlockNoteExtension } from "../../editor/BlockNoteExtension.js";
export type CollaborationUser = {
    name: string;
    color: string;
    [key: string]: string;
};
export declare class CursorPlugin extends BlockNoteExtension {
    private collaboration;
    static key(): string;
    private provider;
    private recentlyUpdatedCursors;
    constructor(collaboration: {
        fragment: Y.XmlFragment;
        user: CollaborationUser;
        provider: {
            awareness: Awareness;
        };
        renderCursor?: (user: CollaborationUser) => HTMLElement;
        showCursorLabels?: "always" | "activity";
    });
    get priority(): number;
    private renderCursor;
    updateUser: (user: {
        name: string;
        color: string;
        [key: string]: string;
    }) => void;
    /**
     * Determine whether the foreground color should be white or black based on a provided background color
     * Inspired by: https://stackoverflow.com/a/3943023
     *
     */
    static isDarkColor(bgColor: string): boolean;
    static defaultCursorRender: (user: CollaborationUser) => HTMLSpanElement;
}
