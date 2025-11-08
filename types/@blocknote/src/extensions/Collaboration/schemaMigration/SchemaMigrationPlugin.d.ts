import * as Y from "yjs";
import { BlockNoteExtension } from "../../../editor/BlockNoteExtension.js";
export declare class SchemaMigrationPlugin extends BlockNoteExtension {
    private migrationDone;
    static key(): string;
    constructor(fragment: Y.XmlFragment);
}
