import { EditorState, PluginKey, PluginView } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import type { BlockNoteEditor } from "../../editor/BlockNoteEditor.js";
import { BlockNoteExtension } from "../../editor/BlockNoteExtension.js";
import { UiElementPosition } from "../../extensions-shared/UiElementPosition.js";
import { BlockSchema, InlineContentSchema, StyleSchema } from "../../schema/index.js";
export type FormattingToolbarState = UiElementPosition;
export declare class FormattingToolbarView implements PluginView {
    private readonly editor;
    private readonly pmView;
    state?: FormattingToolbarState;
    emitUpdate: () => void;
    preventHide: boolean;
    preventShow: boolean;
    shouldShow: (props: {
        view: EditorView;
        state: EditorState;
        from: number;
        to: number;
    }) => boolean;
    constructor(editor: BlockNoteEditor<BlockSchema, InlineContentSchema, StyleSchema>, pmView: EditorView, emitUpdate: (state: FormattingToolbarState) => void);
    blurHandler: (event: FocusEvent) => void;
    isElementWithinEditorWrapper: (element: Node | null) => boolean;
    viewMousedownHandler: (e: MouseEvent) => void;
    mouseupHandler: () => void;
    dragHandler: () => void;
    scrollHandler: () => void;
    update(view: EditorView, oldState?: EditorState): void;
    destroy(): void;
    closeMenu: () => void;
    getSelectionBoundingBox(): DOMRect;
}
export declare const formattingToolbarPluginKey: PluginKey<any>;
export declare class FormattingToolbarProsemirrorPlugin extends BlockNoteExtension {
    static key(): string;
    private view;
    constructor(editor: BlockNoteEditor<any, any, any>);
    get shown(): boolean;
    onUpdate(callback: (state: FormattingToolbarState) => void): () => void;
    closeMenu: () => void;
}
