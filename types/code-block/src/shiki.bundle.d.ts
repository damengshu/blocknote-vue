import type { HighlighterGeneric } from "@shikijs/types";
type BundledLanguage = "typescript" | "ts" | "javascript" | "js" | "vue";
type BundledTheme = "github-light" | "github-dark";
type Highlighter = HighlighterGeneric<BundledLanguage, BundledTheme>;
declare const createHighlighter: import("@shikijs/core").CreateHighlighterFactory<BundledLanguage, BundledTheme>;
export { createHighlighter };
export type { BundledLanguage, BundledTheme, Highlighter };
