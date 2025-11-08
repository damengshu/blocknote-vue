import { EditorState, PluginKey, PluginView } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import type { BlockNoteEditor } from "../../editor/BlockNoteEditor.js";
import { BlockNoteExtension } from "../../editor/BlockNoteExtension.js";
import { UiElementPosition } from "../../extensions-shared/UiElementPosition.js";
import type { BlockFromConfig, InlineContentSchema, StyleSchema } from "../../schema/index.js";
export type FilePanelState<I extends InlineContentSchema, S extends StyleSchema> = UiElementPosition & {
    block: BlockFromConfig<any, I, S>;
};
export declare class FilePanelView<I extends InlineContentSchema, S extends StyleSchema> implements PluginView {
    private readonly editor;
    private readonly pluginKey;
    private readonly pmView;
    state?: FilePanelState<I, S>;
    emitUpdate: () => void;
    constructor(editor: BlockNoteEditor<Record<string, any>, I, S>, pluginKey: PluginKey<FilePanelState<I, S>>, pmView: EditorView, emitUpdate: (state: FilePanelState<I, S>) => void);
    mouseDownHandler: () => void;
    dragstartHandler: () => void;
    scrollHandler: () => void;
    update(view: EditorView, prevState: EditorState): void;
    closeMenu: () => void;
    destroy(): void;
}
export declare class FilePanelProsemirrorPlugin<I extends InlineContentSchema, S extends StyleSchema> extends BlockNoteExtension {
    static key(): string;
    private view;
    constructor(editor: BlockNoteEditor<Record<string, any>, I, S>);
    get shown(): boolean;
    onUpdate(callback: (state: FilePanelState<I, S>) => void): () => void;
    closeMenu: () => void | undefined;
}
