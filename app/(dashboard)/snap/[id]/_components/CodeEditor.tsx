"use client";

import { Editor, EditorProps } from "@monaco-editor/react";
import { useTheme } from "next-themes";

import CodeEditorSkeleton from "@/app/(dashboard)/snap/[id]/_components/CodeEditorSkeleton";

export default function CodeEditor(props: EditorProps) {
    const { theme } = useTheme();

    return (
        <Editor
            defaultLanguage="javascript"
            defaultValue="// some comment"
            loading={<CodeEditorSkeleton />}
            options={{
                fontSize: 18,
                minimap: {
                    enabled: false,
                },
                padding: {
                    top: 20,
                },
                wordWrap: "on",
            }}
            theme={theme === "dark" ? "vs-dark" : "light"}
            {...props}
        />
    );
}
