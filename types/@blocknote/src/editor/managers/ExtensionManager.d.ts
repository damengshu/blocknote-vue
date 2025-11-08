import { FilePanelProsemirrorPlugin } from "../../extensions/FilePanel/FilePanelPlugin.js";
import { FormattingToolbarProsemirrorPlugin } from "../../extensions/FormattingToolbar/FormattingToolbarPlugin.js";
import { LinkToolbarProsemirrorPlugin } from "../../extensions/LinkToolbar/LinkToolbarPlugin.js";
import { ShowSelectionPlugin } from "../../extensions/ShowSelection/ShowSelectionPlugin.js";
import { SideMenuProsemirrorPlugin } from "../../extensions/SideMenu/SideMenuPlugin.js";
import { SuggestionMenuProseMirrorPlugin } from "../../extensions/SuggestionMenu/SuggestionPlugin.js";
import { TableHandlesProsemirrorPlugin } from "../../extensions/TableHandles/TableHandlesPlugin.js";
import { BlockNoteExtension } from "../BlockNoteExtension.js";
import { BlockNoteEditor } from "../BlockNoteEditor.js";
export declare class ExtensionManager {
    private editor;
    constructor(editor: BlockNoteEditor);
    /**
     * Shorthand to get a typed extension from the editor, by
     * just passing in the extension class.
     *
     * @param ext - The extension class to get
     * @param key - optional, the key of the extension in the extensions object (defaults to the extension name)
     * @returns The extension instance
     */
    extension<T extends BlockNoteExtension>(ext: {
        new (...args: any[]): T;
    } & typeof BlockNoteExtension, key?: string): T;
    /**
     * Get all extensions
     */
    getExtensions(): Record<string, import("../BlockNoteEditor.js").SupportedExtension>;
    /**
     * Get a specific extension by key
     */
    getExtension(key: string): import("../BlockNoteEditor.js").SupportedExtension;
    /**
     * Check if an extension exists
     */
    hasExtension(key: string): boolean;
    /**
     * Get the formatting toolbar plugin
     */
    get formattingToolbar(): FormattingToolbarProsemirrorPlugin;
    /**
     * Get the link toolbar plugin
     */
    get linkToolbar(): LinkToolbarProsemirrorPlugin<any, any, any>;
    /**
     * Get the side menu plugin
     */
    get sideMenu(): SideMenuProsemirrorPlugin<any, any, any>;
    /**
     * Get the suggestion menus plugin
     */
    get suggestionMenus(): SuggestionMenuProseMirrorPlugin<any, any, any>;
    /**
     * Get the file panel plugin (if available)
     */
    get filePanel(): FilePanelProsemirrorPlugin<any, any> | undefined;
    /**
     * Get the table handles plugin (if available)
     */
    get tableHandles(): TableHandlesProsemirrorPlugin<any, any> | undefined;
    /**
     * Get the show selection plugin
     */
    get showSelectionPlugin(): ShowSelectionPlugin;
    /**
     * Check if collaboration is enabled (Yjs or Liveblocks)
     */
    get isCollaborationEnabled(): boolean;
}
