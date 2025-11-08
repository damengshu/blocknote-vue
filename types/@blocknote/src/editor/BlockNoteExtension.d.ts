import { Plugin } from "prosemirror-state";
import { EventEmitter } from "../util/EventEmitter.js";
import { AnyExtension } from "@tiptap/core";
import { BlockSchema, InlineContentSchema, PartialBlockNoDefaults, StyleSchema } from "../schema/index.js";
import { BlockNoteEditor } from "./BlockNoteEditor.js";
export declare abstract class BlockNoteExtension<TEvent extends Record<string, any> = any> extends EventEmitter<TEvent> {
    static key(): string;
    protected addProsemirrorPlugin(plugin: Plugin): void;
    readonly plugins: Plugin[];
    get priority(): number | undefined;
    constructor(..._args: any[]);
    /**
     * Input rules for the block
     */
    inputRules?: InputRule[];
    /**
     * A mapping of a keyboard shortcut to a function that will be called when the shortcut is pressed
     *
     * The keys are in the format:
     * - Key names may be strings like `Shift-Ctrl-Enter`—a key identifier prefixed with zero or more modifiers
     * - Key identifiers are based on the strings that can appear in KeyEvent.key
     * - Use lowercase letters to refer to letter keys (or uppercase letters if you want shift to be held)
     * - You may use `Space` as an alias for the " " name
     * - Modifiers can be given in any order: `Shift-` (or `s-`), `Alt-` (or `a-`), `Ctrl-` (or `c-` or `Control-`) and `Cmd-` (or `m-` or `Meta-`)
     * - For characters that are created by holding shift, the Shift- prefix is implied, and should not be added explicitly
     * - You can use Mod- as a shorthand for Cmd- on Mac and Ctrl- on other platforms
     *
     * @example
     * ```typescript
     * keyboardShortcuts: {
     *   "Mod-Enter": (ctx) => {  return true; },
     *   "Shift-Ctrl-Space": (ctx) => { return true; },
     *   "a": (ctx) => { return true; },
     *   "Space": (ctx) => { return true; }
     * }
     * ```
     */
    keyboardShortcuts?: Record<string, (ctx: {
        editor: BlockNoteEditor<BlockSchema, InlineContentSchema, StyleSchema>;
    }) => boolean>;
    tiptapExtensions?: AnyExtension[];
}
export type InputRule = {
    /**
     * The regex to match when to trigger the input rule
     */
    find: RegExp;
    /**
     * The function to call when the input rule is matched
     * @returns undefined if the input rule should not be triggered, or an object with the type and props to update the block
     */
    replace: (props: {
        /**
         * The result of the regex match
         */
        match: RegExpMatchArray;
        /**
         * The range of the text that was matched
         */
        range: {
            from: number;
            to: number;
        };
        /**
         * The editor instance
         */
        editor: BlockNoteEditor<any, any, any>;
    }) => undefined | PartialBlockNoDefaults<any, any, any>;
};
/**
 * This creates an instance of a BlockNoteExtension that can be used to add to a schema.
 * It is a bit of a hack, but it works.
 */
export declare function createBlockNoteExtension(options: Partial<Pick<BlockNoteExtension, "inputRules" | "keyboardShortcuts" | "plugins" | "tiptapExtensions">> & {
    key: string;
}): BlockNoteExtension;
