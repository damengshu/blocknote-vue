import type * as Y from "yjs";
import { BlockNoteExtension } from "../../editor/BlockNoteExtension.js";
export declare class SyncPlugin extends BlockNoteExtension {
    static key(): string;
    constructor(fragment: Y.XmlFragment);
    get priority(): number;
}
