export declare const Comment: import("react").ForwardRefExoticComponent<{
    className?: string;
    children?: import("react").ReactNode;
    authorInfo: "loading" | import("@blocknote/core/types/src/comments").User;
    timeString: string;
    edited: boolean;
    actions?: import("react").ReactNode;
    showActions?: boolean | "hover";
} & import("react").RefAttributes<HTMLDivElement>>;
