import { Plugin } from "prosemirror-state";
import * as Y from "yjs";
import type { ThreadStore, User } from "../comments/index.js";
import { BlockNoteDOMAttributes, BlockSchema, BlockSpecs, InlineContentSchema, InlineContentSpecs, StyleSchema, StyleSpecs } from "../schema/index.js";
import type { BlockNoteEditor, BlockNoteEditorOptions, SupportedExtension } from "./BlockNoteEditor.js";
import { BlockNoteSchema } from "../blocks/BlockNoteSchema.js";
type ExtensionOptions<BSchema extends BlockSchema, I extends InlineContentSchema, S extends StyleSchema> = {
    editor: BlockNoteEditor<BSchema, I, S>;
    domAttributes: Partial<BlockNoteDOMAttributes>;
    blockSpecs: BlockSpecs;
    inlineContentSpecs: InlineContentSpecs;
    styleSpecs: StyleSpecs;
    trailingBlock: boolean | undefined;
    collaboration?: {
        fragment: Y.XmlFragment;
        user: {
            name: string;
            color: string;
            [key: string]: string;
        };
        provider: any;
        renderCursor?: (user: any) => HTMLElement;
        showCursorLabels?: "always" | "activity";
    };
    disableExtensions: string[] | undefined;
    setIdAttribute?: boolean;
    animations: boolean;
    tableHandles: boolean;
    dropCursor: (opts: any) => Plugin;
    placeholders: Record<string | "default" | "emptyDocument", string | undefined>;
    tabBehavior?: "prefer-navigate-ui" | "prefer-indent";
    comments?: {
        schema?: BlockNoteSchema<any, any, any>;
        threadStore: ThreadStore;
        resolveUsers?: (userIds: string[]) => Promise<User[]>;
    };
    pasteHandler: BlockNoteEditorOptions<any, any, any>["pasteHandler"];
};
/**
 * Get all the Tiptap extensions BlockNote is configured with by default
 */
export declare const getBlockNoteExtensions: <BSchema extends BlockSchema, I extends InlineContentSchema, S extends StyleSchema>(opts: ExtensionOptions<BSchema, I, S>) => Record<string, SupportedExtension>;
export {};
