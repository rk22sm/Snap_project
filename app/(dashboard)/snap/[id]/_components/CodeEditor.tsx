"use client";

import { Editor, EditorProps } from "@monaco-editor/react";
import { useTheme } from "next-themes";
import { useRef } from "react";

import CodeEditorSkeleton from "@/app/(dashboard)/snap/[id]/_components/CodeEditorSkeleton";

export default function CodeEditor(props: EditorProps) {
    const { theme } = useTheme();
    const editorRef = useRef(null);

    function handleEditorDidMount(editor: any) {
        editorRef.current = editor;
        editor.focus();
    }

    return (
        <Editor
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
            onMount={handleEditorDidMount}
            {...props}
        />
    );
}
