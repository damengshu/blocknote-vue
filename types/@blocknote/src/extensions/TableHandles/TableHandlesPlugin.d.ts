import { PluginKey, PluginView } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { RelativeCellIndices } from "../../api/blockManipulation/tables/tables.js";
import { DefaultBlockSchema } from "../../blocks/defaultBlocks.js";
import type { BlockNoteEditor } from "../../editor/BlockNoteEditor.js";
import { BlockNoteExtension } from "../../editor/BlockNoteExtension.js";
import { BlockFromConfigNoChildren, BlockSchemaWithBlock, InlineContentSchema, StyleSchema } from "../../schema/index.js";
export type TableHandlesState<I extends InlineContentSchema, S extends StyleSchema> = {
    show: boolean;
    showAddOrRemoveRowsButton: boolean;
    showAddOrRemoveColumnsButton: boolean;
    referencePosCell: DOMRect | undefined;
    referencePosTable: DOMRect;
    block: BlockFromConfigNoChildren<DefaultBlockSchema["table"], I, S>;
    colIndex: number | undefined;
    rowIndex: number | undefined;
    draggingState: {
        draggedCellOrientation: "row" | "col";
        originalIndex: number;
        mousePos: number;
    } | undefined;
    widgetContainer: HTMLElement | undefined;
};
export declare class TableHandlesView<I extends InlineContentSchema, S extends StyleSchema> implements PluginView {
    private readonly editor;
    private readonly pmView;
    state?: TableHandlesState<I, S>;
    emitUpdate: () => void;
    tableId: string | undefined;
    tablePos: number | undefined;
    tableElement: HTMLElement | undefined;
    menuFrozen: boolean;
    mouseState: "up" | "down" | "selecting";
    prevWasEditable: boolean | null;
    constructor(editor: BlockNoteEditor<BlockSchemaWithBlock<"table", DefaultBlockSchema["table"]>, I, S>, pmView: EditorView, emitUpdate: (state: TableHandlesState<I, S>) => void);
    viewMousedownHandler: () => void;
    mouseUpHandler: (event: MouseEvent) => void;
    mouseMoveHandler: (event: MouseEvent) => false | undefined;
    dragOverHandler: (event: DragEvent) => void;
    dropHandler: (event: DragEvent) => boolean;
    update(): void;
    destroy(): void;
}
export declare const tableHandlesPluginKey: PluginKey<any>;
export declare class TableHandlesProsemirrorPlugin<I extends InlineContentSchema, S extends StyleSchema> extends BlockNoteExtension {
    private readonly editor;
    static key(): string;
    private view;
    constructor(editor: BlockNoteEditor<BlockSchemaWithBlock<"table", DefaultBlockSchema["table"]>, I, S>);
    onUpdate(callback: (state: TableHandlesState<I, S>) => void): () => void;
    /**
     * Callback that should be set on the `dragStart` event for whichever element
     * is used as the column drag handle.
     */
    colDragStart: (event: {
        dataTransfer: DataTransfer | null;
        clientX: number;
    }) => void;
    /**
     * Callback that should be set on the `dragStart` event for whichever element
     * is used as the row drag handle.
     */
    rowDragStart: (event: {
        dataTransfer: DataTransfer | null;
        clientY: number;
    }) => void;
    /**
     * Callback that should be set on the `dragEnd` event for both the element
     * used as the row drag handle, and the one used as the column drag handle.
     */
    dragEnd: () => void;
    /**
     * Freezes the drag handles. When frozen, they will stay attached to the same
     * cell regardless of which cell is hovered by the mouse cursor.
     */
    freezeHandles: () => void;
    /**
     * Unfreezes the drag handles. When frozen, they will stay attached to the
     * same cell regardless of which cell is hovered by the mouse cursor.
     */
    unfreezeHandles: () => void;
    getCellsAtRowHandle: (block: BlockFromConfigNoChildren<DefaultBlockSchema["table"], any, any>, relativeRowIndex: RelativeCellIndices["row"]) => (RelativeCellIndices & {
        cell: import("../../index.js").TableCell<any, any>;
    })[];
    /**
     * Get all the cells in a column of the table block.
     */
    getCellsAtColumnHandle: (block: BlockFromConfigNoChildren<DefaultBlockSchema["table"], any, any>, relativeColumnIndex: RelativeCellIndices["col"]) => (RelativeCellIndices & {
        cell: import("../../index.js").TableCell<any, any>;
    })[];
    /**
     * Sets the selection to the given cell or a range of cells.
     * @returns The new state after the selection has been set.
     */
    private setCellSelection;
    /**
     * Adds a row or column to the table using prosemirror-table commands
     */
    addRowOrColumn: (index: RelativeCellIndices["row"] | RelativeCellIndices["col"], direction: {
        orientation: "row";
        side: "above" | "below";
    } | {
        orientation: "column";
        side: "left" | "right";
    }) => void;
    /**
     * Removes a row or column from the table using prosemirror-table commands
     */
    removeRowOrColumn: (index: RelativeCellIndices["row"] | RelativeCellIndices["col"], direction: "row" | "column") => boolean;
    /**
     * Merges the cells in the table block.
     */
    mergeCells: (cellsToMerge?: {
        relativeStartCell: RelativeCellIndices;
        relativeEndCell: RelativeCellIndices;
    }) => boolean;
    /**
     * Splits the cell in the table block.
     * If no cell is provided, the current cell selected will be split.
     */
    splitCell: (relativeCellToSplit?: RelativeCellIndices) => boolean;
    /**
     * Gets the start and end cells of the current cell selection.
     * @returns The start and end cells of the current cell selection.
     */
    getCellSelection: () => undefined | {
        from: RelativeCellIndices;
        to: RelativeCellIndices;
        /**
         * All of the cells that are within the selected range.
         */
        cells: RelativeCellIndices[];
    };
    /**
     * Gets the direction of the merge based on the current cell selection.
     *
     * Returns undefined when there is no cell selection, or the selection is not within a table.
     */
    getMergeDirection: (block: BlockFromConfigNoChildren<DefaultBlockSchema["table"], any, any> | undefined) => "vertical" | "horizontal" | undefined;
    cropEmptyRowsOrColumns: (block: BlockFromConfigNoChildren<DefaultBlockSchema["table"], any, any>, removeEmpty: "columns" | "rows") => {
        cells: (import("../../index.js").StyledText<any> | import("../../index.js").Link<any> | import("../../index.js").CustomInlineContentFromConfig<any, any>)[][] | import("../../index.js").TableCell<any, any>[];
    }[];
    addRowsOrColumns: (block: BlockFromConfigNoChildren<DefaultBlockSchema["table"], any, any>, addType: "columns" | "rows", numToAdd: number) => {
        cells: (import("../../index.js").StyledText<any> | import("../../index.js").Link<any> | import("../../index.js").CustomInlineContentFromConfig<any, any>)[][] | import("../../index.js").TableCell<any, any>[];
    }[];
}
